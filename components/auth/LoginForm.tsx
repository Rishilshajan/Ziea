"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction } from "@/actions/auth";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="w-full space-y-4">
      {state?.error && (
        <div className="text-red-500 text-xs text-center bg-red-50 py-2 rounded">
          {state.error}
        </div>
      )}

      {/* Google Button Top */}
      <div className="pt-2 pb-4 space-y-4">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-transparent border border-sage-grove/30 text-deep-forest py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase hover:bg-sage-grove/10 transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-sage-grove/20 flex-1"></div>
          <span className="text-[10px] uppercase tracking-widest text-body-text/50">OR CONTINUE WITH EMAIL</span>
          <div className="h-px bg-sage-grove/20 flex-1"></div>
        </div>
      </div>
      {/* Email Field */}
      <div className="group relative">
        <label
          className="block text-[11px] uppercase tracking-[0.2em] text-body-text font-medium mb-1"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="w-full bg-transparent border-b border-sage-grove/20 py-3 px-0 focus:ring-0 focus:border-sage-grove transition-colors duration-300 placeholder:text-sage-grove/30 text-lg text-deep-forest outline-none"
          id="email"
          name="email"
          placeholder="your@email.com"
          type="email"
          required
        />
      </div>

      {/* Password Field */}
      <div className="group relative">
        <div className="flex justify-between items-end mb-1">
          <label
            className="block text-[11px] uppercase tracking-[0.2em] text-body-text font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <Link
            className="text-[11px] uppercase tracking-[0.1em] text-sage-grove hover:text-deep-forest transition-colors duration-300"
            href="#"
          >
            Forgot?
          </Link>
        </div>
        <input
          className="w-full bg-transparent border-b border-sage-grove/20 py-3 px-0 focus:ring-0 focus:border-sage-grove transition-colors duration-300 placeholder:text-sage-grove/30 text-lg text-deep-forest outline-none tracking-widest"
          id="password"
          name="password"
          placeholder="••••••••"
          type="password"
          required
        />
      </div>

      {/* CTA */}
      <div className="pt-6">
        <button
          className="w-full bg-sage-grove text-white py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase hover:bg-deep-forest transition-all duration-500 shadow-lg shadow-sage-grove/10 active:scale-[0.98]"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}
