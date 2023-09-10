import React from "react";
import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    className ?: string;
    variant ?: 'outlined' | 'contained';
    color ?: 'primary' | 'accent';
}

const Button = (props : ButtonProps) => {
    const {
        children,
        className,
        variant = 'contained',
        color = 'accent'
    } = props;

    return <button 
    className={clsx('btn', className)}
    data-type={color}
    data-variant={variant}
    >
        {children}
    </button>
}

export default Button;