import React from 'react'
import { Icons } from "@/components";
import { cn } from "@/utils";

interface Props {
    variant?: "icon" | "text" | "full";
    className?: string;
}

const Logo = ({ variant = "icon", className }: Props) => {
    return (
        <>
            {variant === "icon" ? (
                <Icons.logo className={cn("w-8 h-8 transition-all", className)} />
            ) : variant === "text" ? (
                <Icons.wordmark className={cn("w-auto h-5 transition-all", className)} />
            ) : (
                <Icons.wordmark className={cn("w-auto h-8 transition-all", className)} />
            )}
        </>
    )
};

export default Logo
