"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
  "/Demo1.jpg",
  "/Demo2.jpg",
  "/Demo3.jpg"
];

export default function AuthSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hidden md:block flex-1 min-h-screen relative overflow-hidden bg-surface-container-high">
      <div className="absolute inset-0">
        {IMAGES.map((src, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1500ms] ease-in-out",
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              alt="Editorial presentation" 
              className="w-full h-full object-cover" 
              src={src} 
            />
          </div>
        ))}
      </div>
      {/* Subtle Overlay for depth */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none z-20"></div>
    </section>
  );
}
