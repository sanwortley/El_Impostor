import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth,
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary text-black hover:brightness-110 shadow-primary/20',
        secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
        danger: 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/20',
        ghost: 'bg-transparent text-white hover:bg-white/5',
    };

    return (
        <button
            className={cn(
                'relative overflow-hidden font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2',
                variants[variant],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
