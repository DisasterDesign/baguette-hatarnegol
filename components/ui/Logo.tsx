import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <span
      className={cn(
        'font-playfair font-bold text-accent tracking-wide',
        sizeClasses[size],
        className
      )}
    >
      Baguette HaTarnegol
    </span>
  );
}
