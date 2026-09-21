type TagVariant = 'default' | 'primary' | 'blue' | 'cyan' | 'devions' | 'active' | 'evolving' | 'exploring';
type TagSize = 'sm' | 'md' | 'lg';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
}

const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: TagProps) => {
  const variantClasses: Record<TagVariant, string> = {
    default: '',
    primary: 'tag-primary',
    blue: 'tag-blue',
    cyan: 'tag-cyan',
    devions: 'tag-devions',
    active: 'tag-active',
    evolving: 'tag-evolving',
    exploring: 'tag-exploring'
  };

  const sizeClasses: Record<TagSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm'
  };

  return (
    <span
      className={`tag ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;