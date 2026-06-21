import { createClient } from "./supabase/server";

export async function getSession() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return null;
  return user;
}

export async function getUserWithRole() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return null;

  // Fetch the user's role from the public.users table
  const { data: profile } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  return {
    ...user,
    role: profile?.role || "Customer",
  };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
