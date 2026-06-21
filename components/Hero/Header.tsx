"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

const NAV_LINKS = [
  { label: "Collections", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Atelier", href: "#" },
  { label: "Our Story", href: "#" },
];

const AVATAR_COLORS = [
  "bg-[#798C7C] text-white",       // sage-grove
  "bg-[#2C3C30] text-white",       // deep-forest
  "bg-[#D4A373] text-white",       // warm terracotta
  "bg-[#A3B18A] text-deep-forest", // soft olive
  "bg-[#DDA15E] text-white",       // golden honey
  "bg-[#6D6875] text-white",       // muted plum
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<{ first: string; last: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsAuthenticated(true);
        const { data: profile } = await supabase
          .from("users")
          .select("role, first_name, last_name")
          .eq("id", user.id)
          .single();
          
        if (profile) {
          setUserRole(profile.role);
        }

        // Try to get name from profile, then user_metadata, then email
        const metaFirst = user.user_metadata?.first_name || user.user_metadata?.full_name?.split(" ")[0];
        const metaLast = user.user_metadata?.last_name || user.user_metadata?.full_name?.split(" ").slice(1).join(" ");
        
        let first = profile?.first_name || metaFirst || "";
        let last = profile?.last_name || metaLast || "";

        // If no name found at all, use the first letter of their email
        if (!first && !last && user.email) {
          first = user.email.split("@")[0];
        }

        setUserName({ first, last });
      }
    };
    fetchUser();
  }, [supabase]);

  const handleProfileClick = () => {
    if (isAuthenticated) {
      if (userRole === "Admin") {
        router.push("/admin");
      } else {
        router.push("/profile");
      }
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

  // Helper to get consistent color based on name
  const getAvatarColor = () => {
    if (!userName) return AVATAR_COLORS[0];
    const charCodeSum = (userName.first.charCodeAt(0) || 0) + (userName.last.charCodeAt(0) || 0);
    return AVATAR_COLORS[charCodeSum % AVATAR_COLORS.length];
  };

  const renderProfileIcon = (mobile: boolean = false) => {
    if (isAuthenticated && userName && (userName.first || userName.last)) {
      const initials = `${userName.first.charAt(0)}${userName.last.charAt(0)}`.toUpperCase();
      return (
        <button
          onClick={handleProfileClick}
          className={cn(
            "flex items-center justify-center rounded-full text-[14px] font-semibold tracking-wider transition-transform hover:scale-95",
            mobile ? "h-7 w-7" : "h-8 w-8",
            getAvatarColor()
          )}
        >
          {initials}
        </button>
      );
    }
    return (
      <button
        onClick={handleProfileClick}
        className={cn(
          "material-symbols-outlined opacity-80 hover:opacity-100 transition-transform cursor-pointer",
          mobile ? "text-[21px] active:scale-90" : "text-[22px] hover:scale-90"
        )}
      >
        person
      </button>
    );
  };

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
            {renderProfileIcon()}
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
            {renderProfileIcon(true)}
          </div>
        </div>
      </div>
    </header>
  );
}
