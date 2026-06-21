"use server";

import { NewsletterSchema } from "@/lib/validations/newsletter";

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email");
  
  const validatedFields = NewsletterSchema.safeParse({ email });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email",
    };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(`Subscribed: ${validatedFields.data.email}`);

  return {
    success: true,
    message: "Thank you for joining the Ziea circle.",
  };
}
