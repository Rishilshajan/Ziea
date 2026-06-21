import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ZIEA Digital Atelier",
  description: "Access your curated space and explore handcrafted silhouettes.",
};

export default function LoginPage() {
  return (
    <>
      <header className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-serif text-on-surface mb-4">Welcome Back</h1>
        <p className="text-body-text text-base font-light tracking-wide font-serif italic opacity-90 text-center md:text-left max-w-sm">
          Enter your details to access your curated space.
        </p>
      </header>
      <LoginForm />
    </>
  );
}
