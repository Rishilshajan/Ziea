"use server";

import { LoginSchema, SignupSchema } from "@/lib/validations/auth";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validated = LoginSchema.safeParse(data);

  if (!validated.success) {
    return { error: "Invalid credentials" };
  }

  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error || !user) {
    return { error: error?.message || "Invalid email or password" };
  }

  // Check role and redirect accordingly
  const role = user.user_metadata?.role || "Customer";
  if (role === "Admin") {
    redirect("/admin");
  }

  redirect("/");
}

export async function signupAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validated = SignupSchema.safeParse(data);

  if (!validated.success) {
    return { error: validated.error.issues[0].message };
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
    return { error: error?.message || "Signup failed" };
  }

  // Auto sign-in immediately to establish the session and set cookies
  await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  // After signup, we stay on the same flow or go to home depends on email confirmation settings
  // For demo purposes, we redirected to home
  redirect("/");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
