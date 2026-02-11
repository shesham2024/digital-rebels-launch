import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "gradient" | "strong";
    glow?: "none" | "primary" | "secondary" | "accent";
}

export function GlassCard({
    children,
    className,
    variant = "default",
    glow = "none",
    ...props
}: GlassCardProps) {
    const variants = {
        default: "glass",
        gradient: "glass border-gradient",
        strong: "glass-strong",
    };

    const glowStyles = {
        none: "",
        primary: "glow-primary",
        secondary: "glow-secondary",
        accent: "glow-accent",
    };

    return (
        <motion.div
            className={cn(
                "rounded-2xl p-6",
                variants[variant],
                glowStyles[glow],
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
