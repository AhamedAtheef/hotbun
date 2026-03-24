import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  const variants = {
    default: "bg-orange-600 text-white hover:bg-orange-700 glow-btn",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-orange-600 bg-transparent hover:bg-orange-600 hover:text-white text-orange-500",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    ghost: "hover:bg-neutral-800 hover:text-white",
    link: "text-orange-500 underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-md px-8 text-lg font-semibold",
    icon: "h-10 w-10",
  }

  if (asChild) {
    return React.cloneElement(props.children, {
      className: cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
        props.children.props.className
      ),
      ref
    })
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
