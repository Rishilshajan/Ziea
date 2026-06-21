"use client";

import { useActionState, useState, useEffect } from "react";
import Link from "next/link";
import { signupAction } from "@/actions/auth";
import { useToast } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signupAction, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast(state.error, "error");
    } else if (state?.success) {
      toast(state.success, "success");
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="w-full space-y-3">
      {/* Google Button Top */}
      <div className="pt-2 pb-2 space-y-3">
        <Button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-sage-grove/30 text-deep-forest hover:bg-sage-grove/10 shadow-sm font-semibold tracking-widest text-xs uppercase"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </Button>

        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-sage-grove/20 flex-1"></div>
          <span className="text-[10px] uppercase tracking-widest text-body-text/50">OR</span>
          <div className="h-px bg-sage-grove/20 flex-1"></div>
        </div>
      </div>
      {/* First Name */}
      <div className="group relative space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-body-text font-medium" htmlFor="firstName">
          First Name
        </label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Jane"
          type="text"
          defaultValue={state?.inputs?.firstName as string || ""}
          required
        />
      </div>

      {/* Last Name */}
      <div className="group relative space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-body-text font-medium" htmlFor="lastName">
          Last Name
        </label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Doe"
          type="text"
          defaultValue={state?.inputs?.lastName as string || ""}
          required
        />
      </div>

      {/* Email Field */}
      <div className="group relative space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-body-text font-medium" htmlFor="email">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          placeholder="your@email.com"
          type="email"
          defaultValue={state?.inputs?.email as string || ""}
          required
        />
      </div>

      {/* Phone Field */}
      <div className="group relative space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-body-text font-medium" htmlFor="phone">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          placeholder="+91 00000 00000"
          type="tel"
          defaultValue={state?.inputs?.phone as string || ""}
          required
        />
      </div>

      {/* Password */}
      <div className="group relative space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-body-text font-medium" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <Input
            className="pr-10"
            id="password"
            name="password"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            defaultValue={state?.inputs?.password as string || ""}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sage-grove/60 hover:text-sage-grove transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="group relative space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-body-text font-medium" htmlFor="confirmPassword">
          Retype Password
        </label>
        <div className="relative">
          <Input
            className="pr-10"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="••••••••"
            type={showConfirmPassword ? "text" : "password"}
            defaultValue={state?.inputs?.confirmPassword as string || ""}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sage-grove/60 hover:text-sage-grove transition-colors"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Creating Account..." : "Create Account"}
        </Button>
      </div>
    </form>
  );
}
