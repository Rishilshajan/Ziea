"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Collections", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Atelier", href: "#" },
  { label: "Our Story", href: "#" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    // Simple check for demo purposes. In a full app, this would use a proper auth hook.
    const hasSession = document.cookie.includes("session");
    if (hasSession) {
      router.push("/admin"); // Or profile page if implemented
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configuration for Mobile View
  const mobileHeader = isScrolled
    ? "glass-header shadow-ambient py-3"
    : "bg-transparent border-t-[1px] border-surface pt-0 ";

  // Configuration for Desktop View
  const desktopHeader = isScrolled
    ? "md:glass-header md:shadow-ambient md:border-t-0 md:py-6"
    : "md:bg-transparent md:border-t-[10px] md:border-surface md:pt-6 md:pb-10";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-in-out",
        mobileHeader,
        desktopHeader
      )}
    >
      <div className="w-full px-6 md:px-12">

        {/* Desktop Header Content */}
        <div className="hidden md:flex justify-between items-center relative h-full">
          {/* Nav (Left) */}
          <nav className="flex gap-8 items-center">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "label-md text-body-text hover:text-sage-grove transition-colors duration-500",
                  i === 0 && "text-sage-grove border-b border-sage-grove/30 pb-0.5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <Link href="/">
              <Image
                src="/ZieaLogo.png"
                alt="ZIEA Logo"
                width={600}
                height={600}
                className="h-48 w-auto object-contain transition-all duration-700"
                style={{ maxHeight: "200px" }}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sage-grove">
            {["search", "favorite", "shopping_bag"].map((icon) => (
              <button
                key={icon}
                className="material-symbols-outlined text-[22px] hover:scale-90 transition-transform duration-300 opacity-80 hover:opacity-100 cursor-pointer"
              >
                {icon}
              </button>
            ))}
            <button
              onClick={handleProfileClick}
              className="material-symbols-outlined text-[22px] hover:scale-90 transition-transform duration-300 opacity-80 hover:opacity-100 cursor-pointer"
            >
              person
            </button>
          </div>
        </div>

        {/* Mobile Header Content */}
        <div className="flex md:hidden justify-between items-start w-full px-2">
          {/* Logo (Left) */}
          <Link href="/" className="flex-shrink-0 -mt-6 -ml-8">
            <Image
              src="/ZieaLogo.png"
              alt="ZIEA Logo"
              width={600}
              height={600}
              className="h-36 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-6 text-sage-grove pt-8">
            {["search", "favorite", "shopping_bag"].map((icon) => (
              <button
                key={icon}
                className="material-symbols-outlined text-[21px] opacity-80 active:scale-90 transition-transform"
              >
                {icon}
              </button>
            ))}
            <button
              onClick={handleProfileClick}
              className="material-symbols-outlined text-[21px] opacity-80 active:scale-90 transition-transform"
            >
              person
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
