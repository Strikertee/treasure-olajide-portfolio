import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'border-border bg-surface text-muted hover:text-accent',
        primary:
          'border-accent/60 bg-accent/20 text-accent-light hover:bg-accent/30',
        secondary:
          'border-cyan/60 bg-cyan/15 text-cyan hover:bg-cyan/25',
        blue: 'border-accent/60 bg-accent/15 text-accent-light',
        cyan: 'border-cyan/60 bg-cyan/15 text-cyan',
        devions:
          'border-devions/60 bg-devions/20 text-devions-light hover:bg-devions/30',
        success:
          'border-emerald-500/60 bg-emerald-500/15 text-emerald-400',
        warning: 'border-amber-500/60 bg-amber-500/15 text-amber-400',
        active:
          'border-emerald-500/60 bg-emerald-500/15 text-emerald-400',
        evolving: 'border-amber-500/60 bg-amber-500/15 text-amber-400',
        exploring: 'border-cyan/60 bg-cyan/15 text-cyan',
        outline: 'text-foreground border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
