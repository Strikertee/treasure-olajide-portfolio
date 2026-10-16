import { forwardRef, type HTMLAttributes, type ElementType } from 'react';
import { Card as UICard } from './ui/card';
import { cn } from '@/lib/utils';

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

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

// Legacy wrapper — delegates to shadcn/ui Card.
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = '',
      variant = 'default',
      interactive = false,
      padding = 'md',
      as: _as,
      ...props
    },
    ref
  ) => {
    const resolvedVariant =
      variant === 'interactive' || interactive ? 'interactive' : variant;

    return (
      <UICard
        ref={ref}
        variant={resolvedVariant}
        className={cn(paddingClasses[padding], className)}
        {...props}
      >
        {children}
      </UICard>
    );
  }
);

Card.displayName = 'Card';

export default Card;
