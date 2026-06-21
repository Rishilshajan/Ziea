import React from "react";
import Link from "next/link";
import AuthSlider from "@/components/auth/AuthSlider";
import AuthToggle from "@/components/auth/AuthToggle";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow flex flex-col md:flex-row min-h-screen overflow-hidden bg-surface">
      {/* Left Column: Login Form */}
      <section className="w-full md:w-1/2 flex flex-col px-8 md:px-16 lg:px-24 pt-8 md:pt-12 pb-8 relative z-10 min-h-screen">
        {/* Brand Logo & Nav */}
        <div className="mb-auto w-full flex flex-col justify-center items-center">
          <Link href="/">
            <h2 className="text-3xl font-serif italic text-deep-forest leading-tight hover:opacity-80 transition-opacity">Ziea</h2>
          </Link>
          <AuthToggle />
        </div>

        {/* Content */}
        <div className="max-w-md w-full mx-auto my-auto py-12">
          {children}
        </div>

        {/* Footer spacer */}
        <div className="mt-auto pt-8 flex justify-center items-end">
          <div className="text-[10px] uppercase tracking-widest text-body-text/50 text-center w-full">
            © {new Date().getFullYear()} Ziea Digital Atelier
          </div>
        </div>
      </section>

      {/* Right Column: Image Gallery Slider */}
      <AuthSlider />
    </main>
  );
}
