import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "The Atelier",
    links: [
      { label: "Sustainability", href: "#" },
      { label: "Atelier Services", href: "#" },
      { label: "Gift Cards", href: "#" },
      { label: "Shipping & Returns", href: "#", active: true },
    ]
  },
  {
    title: "Privacy & Terms",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Cookie Preferences", href: "#" },
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "#" },
      { label: "Wholesale", href: "#" },
      { label: "Instagram", href: "#" },
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-deep-forest text-warm-cream py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          {/* Brand Info */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="text-4xl font-serif italic tracking-tighter block">
              ZIEA
            </Link>
            <p className="text-warm-cream/60 text-base leading-relaxed max-w-xs font-serif italic">
              Crafting a legacy of gentle living through curated silhouettes and ethical craftsmanship.
            </p>
            <div className="flex gap-4">
              {["language", "share"].map((icon) => (
                <button 
                  key={icon}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-warm-cream/20 hover:bg-warm-cream hover:text-deep-forest transition-all duration-500"
                >
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-8">
              <h5 className="label-md opacity-40">{section.title}</h5>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className={`label-md tracking-widest hover:text-white transition-colors duration-300 ${
                        link.active ? "text-white underline underline-offset-8" : "text-warm-cream/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-warm-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="label-md opacity-40 text-[10px] text-center md:text-left">
            © 2024 ZIEA DIGITAL ATELIER. CRAFTED FOR GENTLE LIVING.
          </span>
          <div className="flex gap-8 opacity-30">
            <span className="material-symbols-outlined text-2xl">payments</span>
            <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
