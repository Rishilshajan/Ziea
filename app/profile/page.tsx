import { getUserWithRole } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logoutAction } from "@/actions/auth";

export default async function ProfilePage() {
  const user = await getUserWithRole();

  if (!user || user.role !== "Customer") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col items-center justify-center p-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif italic text-sage-grove">Your Profile</h1>
        <p className="text-body-text max-w-md mx-auto">
          Welcome to your personal atelier. Here you can view your curated wishlist, favorites, and recent orders.
        </p>
      </div>

      <div className="flex gap-6">
        <Link 
          href="/" 
          className="bg-white border border-sage-grove/20 text-sage-grove px-10 py-4 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-sage-grove/5 transition-all"
        >
          View Collection
        </Link>
        <form action={logoutAction}>
          <button 
            type="submit"
            className="bg-sage-grove text-white px-10 py-4 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-deep-forest transition-all"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
