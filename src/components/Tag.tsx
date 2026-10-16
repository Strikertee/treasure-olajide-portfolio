import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

type TagVariant =
  | 'default'
  | 'primary'
  | 'blue'
  | 'cyan'
  | 'devions'
  | 'active'
  | 'evolving'
  | 'exploring';
type TagSize = 'sm' | 'md' | 'lg';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
}

const variantMap: Record<TagVariant, string> = {
  default: 'default',
  primary: 'primary',
  blue: 'blue',
  cyan: 'cyan',
  devions: 'devions',
  active: 'active',
  evolving: 'evolving',
  exploring: 'exploring',
};

const sizeClasses: Record<TagSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

// Legacy wrapper — delegates to shadcn/ui Badge so existing
// `variant` API keeps working during gradual migration.
const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: TagProps) => {
  return (
    <Badge
      variant={variantMap[variant] as never}
      className={cn(sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Badge>
  );
};

export default Tag;
