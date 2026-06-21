"use server";

import { LoginSchema, SignupSchema } from "@/lib/validations/auth";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validated = LoginSchema.safeParse(data);

  if (!validated.success) {
    return { error: "Invalid credentials", inputs: data };
  }

  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error || !user) {
    return { error: error?.message || "Invalid email or password", inputs: data };
  }

  // Fetch the user's role from the public.users table
  const { data: profile } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = profile?.role || "Customer";

  if (role === "Admin") {
    redirect("/admin");
  }

  redirect("/");
}

export async function signupAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validated = SignupSchema.safeParse(data);

  if (!validated.success) {
    return { error: validated.error.issues[0].message, inputs: data };
  }

  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        first_name: validated.data.firstName,
        last_name: validated.data.lastName,
        phone: validated.data.phone,
        role: "Customer", // Default role
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  });

  if (error || !user) {
    return { error: error?.message || "Signup failed", inputs: data };
  }

  // Insert user into public.users table using Service Role to bypass RLS
  const { createClient: createSupabaseClient } = await import("@supabase/supabase-js");
  const supabaseAdmin = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error: insertError } = await supabaseAdmin.from("users").insert({
    id: user.id,
    first_name: validated.data.firstName,
    last_name: validated.data.lastName,
    email: validated.data.email,
    phone: validated.data.phone,
    password: validated.data.password, // Schema requires it, though ideally handled by Auth
    role: "Customer",
  });

  if (insertError) {
    console.error("Error inserting into public.users:", insertError);
    // Even if it fails, the user is signed up in auth.users, but we log the error.
  }

  return { success: "Verification email sent. Please check your inbox to activate your account.", inputs: data };
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
