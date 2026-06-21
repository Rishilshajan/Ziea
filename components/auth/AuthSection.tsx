import React from "react";
import Link from "next/link";
import AuthSlider from "./AuthSlider";

interface AuthSectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthSection({ children, title, subtitle }: AuthSectionProps) {
  return (
    <main className="flex-grow flex flex-col md:flex-row min-h-screen overflow-hidden bg-surface">
      {/* Left Column: Login Form */}
      <section className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 relative z-10 min-h-screen">
        {/* Brand Logo & Nav */}
        <div className="mb-auto flex justify-between items-start md:block">
          <Link href="/">
            <h2 className="text-3xl font-serif italic text-deep-forest leading-tight hover:opacity-80 transition-opacity">Ziea</h2>
          </Link>
          <nav className="flex gap-6 mt-2 md:mt-0 md:absolute md:top-8 md:right-8 items-center">
            <Link href="/login" className="label-md text-deep-forest font-semibold border-b border-transparent hover:border-sage-grove transition-colors">
              Login
            </Link>
            <Link href="/signup" className="label-md text-body-text hover:text-deep-forest transition-colors duration-300 border-b border-transparent hover:border-sage-grove">
              Join
            </Link>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-md w-full mx-auto my-auto py-12">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-serif text-on-surface mb-4">{title}</h1>
            <p className="text-body-text text-base font-light tracking-wide font-serif italic opacity-90">{subtitle}</p>
          </header>

          {children}
        </div>

        {/* Footer spacer */}
        <div className="mt-auto pt-8 flex justify-between items-end">
          <div className="text-[10px] uppercase tracking-widest text-body-text/50">
            © {new Date().getFullYear()} Ziea Digital Atelier
          </div>
        </div>
      </section>

      {/* Right Column: Image Gallery Slider */}
      <AuthSlider />
    </main>
  );
}
