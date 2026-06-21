"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SILHOUETTES = [
  {
    label: "Cordsets",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0mpEh4qsKoQNf2Ao4eccxkOUDWNcFjFY8p5GJSHbVAL592UbSQKsR8BswLhiEioph60GFHbUJhcWfMPAGZUs7v-Q7rOzm6_hF4EFwOIsFGMQr1Lo_KfKJYxs9AXzh3Q4LHQPq5TImoN4YdmLwMpHma0jsc6TiqTC1i7i-UEygxKYXHpKtUVX_Pqb8i02COT3UuZ3d-zL6VZfkt0uoGt2iLYnZC8Yngsja-7zOHHKIlfRX9a5wuj9GtTHo8pHO1Qdb8dnflytw1zXC"
  },
  {
    label: "Sarees",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCUh07BjRTDAnj9Y_Q3jbB0YbMuSctaOrLOMZjeHRXDE9twNtuvk-xPiPm-V0wp_DG3s0_6nHv9SYxFb8vqE_opaYajgzObrgRvVNxQGK1ZlIYTPT0cMIvbwSrgMPARxtLkajViI_0x7l5lIUtwWgi3lg8A1tWyQdzSyAqYCT7co0mrc39j-7dMi_ge7uDEOp-yavTrKuDfbmiIXImM2Vp6_BAm3c7P4pM5THv-Cg8CMNJTmRue_jSdxKRHEDN2w-4YMKKCF3MlKa2"
  },
  {
    label: "Kurties",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi994V-E1BERMjsIelkNh4kmoFhdxY2lqx6l1t9F4oeq8vXxG_O7NRpcGt0tOAZJwq5aSODeKa8H1TQXcsveMYwa4BAlyY8gDCYzWxIsLJkrLhIo6UHkYkrNE4aAoc8YBVtthyRqduldj1S65wrHUPkyYfaivYjTZzbtHLikSu878eTNTa4XGsei8xvzIsFzhx9n0-JlevB3rL9vaD5YCrAXrHefYvJzMdcgXZ5txk0wu_ZOhFWES-_Wcoc668VWlbHNvajC8xf5FL"
  },
  {
    label: "Loungewear",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm-05AdoEtcGfLAaAKa83k6MSikOzLNaFEc2xXsjEzEE5mX3K3pRTUlLXzQrxO9L-g07f9x8e46TJQhAt9ybTKDC4ofh9PAtBcYju7XmtogLZW7GlUIxQ7dyE-dp1-aHS6xXVQPBGmTQ5Z_SIHTSYi3PPmwQl6w-vKTcBkG9Ym3iZyH-aoMsLOV4kiw2RdO3kFIFgb6yO8_IjH2fqvViPvdrynJqw-y8Odtgw8oIYbAq74xoPay5YNwBopqn4dbEB90JndwG0yxpVI"
  },
];

const HERO_SETS = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

export function HeroSection() {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-[120px] md:pt-[100px] pb-4 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto mb-10 md:mb-16">
        {/* Main Hero Banner */}
        <div className="relative h-[600px] md:h-[850px] w-full rounded-2xl overflow-hidden shadow-ambient">
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-2 bg-surface">
            {[0, 1, 2, 3].map((posIndex) => (
              <div key={posIndex} className="relative overflow-hidden">
                {HERO_SETS.map((set, setIndex) => (
                  <div
                    key={setIndex}
                    className={cn(
                      "absolute inset-0 transition-all duration-[2000ms] ease-in-out",
                      currentSet === setIndex
                        ? "opacity-100 blur-0 scale-100 z-10"
                        : "opacity-0 blur-3xl scale-110 z-0"
                    )}
                  >
                    <img
                      src={`/hero/hero_${set[posIndex]}.png`}
                      alt={`Hero Set ${setIndex} Image ${posIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-black/5 z-20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curated Silhouettes - Background Shift for Sectioning */}
      <div className="full-bleed-bg bg-surface-container-low -mx-4 md:-mx-6 px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-screen-2xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-forest">Curated Silhouettes</h2>
            <p className="text-body-text italic font-serif text-lg tracking-wide">Hand-picked textiles for the discerning eye.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 max-w-5xl mx-auto">
            {SILHOUETTES.map((cat) => (
              <div key={cat.label} className="group cursor-pointer flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-1 border border-sage-pale/40 group-hover:border-sage-grove transition-colors duration-700 bg-surface">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="mt-8 label-md text-on-surface group-hover:text-sage-grove transition-colors">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
