"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MOBILE_LINKS = [
  { label: "Collections", href: "#", icon: "grid_view" },
  { label: "Journal", href: "#", icon: "menu_book" },
  { label: "Atelier", href: "#", icon: "palette" },
  { label: "Our Story", href: "#", icon: "history_edu" },
];

export function MobileNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="bg-warm-cream/90 backdrop-blur-xl border border-sage-pale/30 rounded-full px-8 py-5 flex items-center gap-10 shadow-ambient">
        {MOBILE_LINKS.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            className="relative group flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(i)}
            onFocus={() => setHoveredIndex(i)}
            onBlur={() => setHoveredIndex(null)}
          >
            {/* Tooltip Label */}
            <div className={cn(
              "absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-deep-forest text-warm-cream rounded-xl text-[11px] label-md transition-all duration-500 pointer-events-none whitespace-nowrap shadow-lg",
              hoveredIndex === i ? "opacity-100 -translate-y-2 visible" : "opacity-0 translate-y-2 invisible"
            )}>
              {link.label}
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-deep-forest rotate-45" />
            </div>

            <span className={cn(
              "material-symbols-outlined text-[32px] transition-all duration-500 cursor-pointer",
              hoveredIndex === i ? "text-sage-grove scale-125" : "text-on-surface/60"
            )}>
              {link.icon}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
