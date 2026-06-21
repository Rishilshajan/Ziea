"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = React.useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const contextValue = React.useMemo(() => ({ toast: addToast }), [addToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 z-50 flex flex-col gap-2 w-full max-w-sm px-4 md:px-0">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`min-w-[300px] px-6 py-4 rounded-xl shadow-xl flex items-center justify-between text-sm font-medium tracking-wide transition-all animate-in slide-in-from-bottom-5 fade-in ${
              t.type === "error"
                ? "bg-white text-red-600 border border-red-100"
                : t.type === "success"
                ? "bg-white text-sage-grove border border-sage-grove/20"
                : "bg-white text-deep-forest border border-sage-grove/20"
            }`}
          >
            <span>{t.message}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
