import { forwardRef, type HTMLAttributes, type ElementType } from 'react';

type CardVariant = 'default' | 'interactive' | 'elevated' | 'flat';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  interactive?: boolean;
  padding?: CardPadding;
  as?: ElementType;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = '',
      variant = 'default',
      _interactive = false,
      padding = 'md',
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    const variantClasses: Record<CardVariant, string> = {
      default: 'card',
      interactive: 'card card-interactive',
      elevated: 'card',
      flat: ''
    };

    const paddingClasses: Record<CardPadding, string> = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    return (
      <Component
        ref={ref}
        className={`${variantClasses[variant] || variantClasses.default} ${paddingClasses[padding]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;