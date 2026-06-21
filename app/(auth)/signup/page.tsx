import SignupForm from "@/components/auth/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join ZIEA | Digital Atelier",
  description: "Begin your journey with ZIEA. Create an account for a curated experience.",
};

export default function SignupPage() {
  return (
    <>
      <header className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-serif text-on-surface mb-4">Create Account</h1>
        <p className="text-body-text text-base font-light tracking-wide font-serif italic opacity-90 text-center md:text-left max-w-sm">
          Join our digital atelier for a curated experience in intentional living.
        </p>
      </header>
      <SignupForm />
    </>
  );
}
