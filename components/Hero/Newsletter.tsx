"use client";

import { useActionState } from "react";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [state, action, isPending] = useActionState(subscribeToNewsletter, null);

  return (
    <section className="px-6 md:px-12 pb-16">
      <div className="relative h-[650px] w-full rounded-3xl overflow-hidden bg-deep-forest flex items-center justify-center text-center px-6">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxx_WSsN_cqIhKbpIJ4yPjrE9101D_UqeJ_ZpzSOiI8_vP8ogIRMkFVaOUv7XWbOc9wjI8dGYGfe4tS6Tp_6CyUIfIk-9WYrcMskb7ily3Pqif79Uc_TCNXubjlzmBdBjfFMTEM138iN_oZZKd_LD7jC5twMrgKFAsBSxAnFZpTIdCcUUhzfAcAsQvc0GM54c01gLEjExJZ7Fw6lHYGViWX6AKqyHAjkaPUBW-IHNagTc_MYQFqTCdDnwLZpfpkc1atSKzBWscoq0n" 
            alt="Atmospheric Botanical"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="space-y-6">
            <span className="text-surface opacity-60 label-md tracking-[0.4em]">Join the Circle</span>
            <h2 className="text-surface display-md">Receive Musings from the Atelier</h2>
            <p className="text-surface/70 font-serif text-xl md:text-2xl italic max-w-2xl mx-auto leading-relaxed">
              Curated updates on new silhouettes, stories of craft, and invitations to private viewings.
            </p>
          </div>

          <form action={action} className="flex flex-col md:flex-row gap-8 max-w-xl mx-auto items-end">
            <div className="relative flex-grow w-full group">
              <input 
                name="email"
                type="email"
                required
                placeholder="YOUR EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-surface/20 py-4 px-0 text-surface label-md placeholder:text-surface/30 focus:outline-none focus:border-surface transition-all duration-500"
              />
              {state?.error && (
                <p className="absolute -bottom-6 left-0 text-terracotta text-[10px] label-md lowercase tracking-tight">
                  {state.error}
                </p>
              )}
            </div>
            
            <button 
              disabled={isPending}
              className="bg-surface text-deep-forest px-12 py-5 rounded-full label-md hover:bg-sage-light transition-all duration-500 disabled:opacity-50 whitespace-nowrap"
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {state?.success && (
            <p className="text-sage-light label-md lowercase italic text-lg">
              {state.message}
            </p>
          )}

          <p className="text-surface/30 text-[10px] label-md tracking-[0.2em]">
            Unsubscribe at any time. Respect for your inbox, always.
          </p>
        </div>
      </div>
    </section>
  );
}
