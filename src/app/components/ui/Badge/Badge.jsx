import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../../lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "h-5 w-fit px-2 py-0.5 gap-1",
    "rounded-full text-xs font-medium whitespace-nowrap",
    "border border-transparent",
    "transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/40",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",

        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",

        outline:
          "border-border text-foreground hover:bg-muted hover:text-muted-foreground",

        ghost: "hover:bg-muted hover:text-muted-foreground",

        link: "text-primary underline-offset-4 hover:underline",

        gold: "bg-gold/10 text-gold border-gold/30 hover:bg-gold/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, asChild = false, ...props }) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };