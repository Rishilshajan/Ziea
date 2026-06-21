"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AuthToggle() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <div className="flex bg-surface-container-high rounded-full p-1 mt-6 w-64 mx-auto border border-sage-grove/10">
      <Link
        href="/login"
        className={cn(
          "flex-1 text-center py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300",
          isLogin
            ? "bg-sage-grove text-white shadow-md"
            : "text-body-text hover:text-deep-forest"
        )}
      >
        Login
      </Link>
      <Link
        href="/signup"
        className={cn(
          "flex-1 text-center py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300",
          !isLogin
            ? "bg-sage-grove text-white shadow-md"
            : "text-body-text hover:text-deep-forest"
        )}
      >
        Join
      </Link>
    </div>
  );
}
