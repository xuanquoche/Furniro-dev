import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LuLoaderCircle } from 'react-icons/lu';
import { JSX } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-button-background text-filter-background shadow hover:bg-button-background/90 rounded-xl',
                destructive:
                    'bg-error text-error-foreground shadow-sm hover:bg-error/90',
                outline:
                    'border border-input bg-white shadow-sm hover:bg-white/80 hover:text-buton-background text-buton-background rounded-xl',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline'
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-10 px-8',
                icon: 'h-9 w-9'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    leftSection?: JSX.Element;
    rightSection?: JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            children,
            disabled,
            loading = false,
            leftSection,
            rightSection,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button';
        const isDisabled = loading || disabled;
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }), {
                    'hover:opacity-90': !isDisabled
                })}
                disabled={loading || disabled}
                ref={ref}
                {...props}
            >
                {((leftSection && loading) ||
                    (!leftSection && !rightSection && loading)) && (
                    <LuLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                )}
                {!loading && leftSection && (
                    <div className="mr-2">{leftSection}</div>
                )}
                {children}
                {!loading && rightSection && (
                    <div className="ml-2">{rightSection}</div>
                )}
                {rightSection && loading && (
                    <LuLoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                )}
            </Comp>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
