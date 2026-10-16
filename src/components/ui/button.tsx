import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-[#080B12] shadow-[0_0_20px_-5px_rgb(255_102_0/0.4)] hover:shadow-[0_0_40px_-10px_rgb(255_102_0/0.6)] hover:-translate-y-0.5',
        primary:
          'bg-accent text-[#080B12] shadow-[0_0_20px_-5px_rgb(255_102_0/0.4)] hover:shadow-[0_0_40px_-10px_rgb(255_102_0/0.6)] hover:-translate-y-0.5',
        secondary:
          'bg-transparent border border-border text-foreground hover:bg-surface-hover hover:border-accent hover:text-accent',
        ghost: 'text-muted hover:text-accent hover:bg-accent/10 px-4 py-2',
        link: 'text-muted underline-offset-4 hover:underline hover:text-accent hover:gap-3 p-0 h-auto',
        outline:
          'border border-border bg-transparent hover:bg-surface-hover hover:text-accent',
        devions:
          'bg-devions text-[#080B12] shadow-[0_0_20px_-5px_rgb(255_102_0/0.5)] hover:shadow-[0_0_40px_-10px_rgb(255_102_0/0.6)] hover:-translate-y-0.5',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-6 py-2',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <svg
            className="size-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon && <span aria-hidden="true">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!loading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
