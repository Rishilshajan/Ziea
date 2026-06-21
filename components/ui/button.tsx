import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sage-grove/20 disabled:pointer-events-none disabled:opacity-50",
          "bg-sage-grove text-white shadow-lg shadow-sage-grove/20 hover:bg-deep-forest hover:shadow-xl active:scale-[0.98] h-12 px-8 py-2 w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
