import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ElementType, forwardRef } from "react";
import {cn} from "~/utils";

export const buttonVariants = cva('inline-flex items-center justify-center h-8 px-3.5 rounded-md font-medium transition-colors duration-65 focus-visible:outline-2', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active border-1 border-white/40 hover:border-white/60',
    },
    size: {
      md: ''
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((
  {
    children,
    className = '',
    variant = 'default',
    asChild = false,
    ...props
  }, ref
) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp ref={ref} className={cn(buttonVariants({variant}), className)} {...props}>
    {children}
  </Comp>
})

Button.displayName = "Button"
