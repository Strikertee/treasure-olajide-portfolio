import { forwardRef, type ButtonHTMLAttributes, type ElementType } from 'react';
import { Button as UIButton } from './ui/button';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  as?: ElementType;
  href?: string;
}

const variantMap: Record<ButtonVariant, 'primary' | 'secondary' | 'ghost' | 'link'> = {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
  link: 'link',
};

const sizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

// Legacy wrapper — delegates to shadcn/ui Button so existing
// `variant` / `size` / `loading` / `leftIcon` API keeps working.
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      as,
      href,
      ...props
    },
    ref
  ) => {
    if (as && as !== 'button' && href) {
      const Component = as as ElementType;
      return (
        <Component ref={ref} href={href} className={className} {...props}>
          {children}
        </Component>
      );
    }

    return (
      <UIButton
        ref={ref}
        variant={variantMap[variant]}
        size={sizeMap[size]}
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        className={cn(fullWidth && 'w-full', className)}
        {...props}
      >
        {children}
      </UIButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
