"use client";

import { BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Lock, AlertTriangle } from "lucide-react";

interface StealthCardProps {
    className?: string;
    type: "social" | "game";
    title: string;
    subtitle: string;
    description: string;
    status: string;
}

export const StealthCard = ({
    className,
    type,
    title,
    subtitle,
    description,
    status,
}: StealthCardProps) => {
    const isSocial = type === "social";

    const Header = () => (
        <div className="relative w-full h-40 overflow-hidden rounded-xl mt-2 bg-black/40 border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                {isSocial ? (
                    // Radar Grid
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />
                ) : (
                    // TV Static / Noise
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
                )}
            </div>

            {/* Main Animation */}
            {isSocial ? (
                <div className="relative w-32 h-32">
                    {/* Radar Circles */}
                    <div className="absolute inset-0 border border-emerald-500/30 rounded-full" />
                    <div className="absolute inset-4 border border-emerald-500/20 rounded-full" />
                    <div className="absolute inset-8 border border-emerald-500/10 rounded-full" />

                    {/* Rotating Scanner */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)" }} // Half circle scan look
                    />

                    {/* Blip */}
                    <motion.div
                        className="absolute top-8 right-8 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 1] }}
                    />
                </div>
            ) : (
                <div className="relative w-full px-8 flex flex-col items-center gap-2">
                    {/* Glitch Text Effect Placeholder */}
                    <div className="text-2xl font-mono font-bold text-indigo-500 tracking-widest animate-pulse">
                        LOADING...
                    </div>

                    {/* Retro Loading Bar */}
                    <div className="w-full h-2 bg-indigo-900/50 rounded-full overflow-hidden border border-indigo-500/30">
                        <motion.div
                            className="h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>
            )}

            {/* Overlay Gradient */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
                isSocial ? "from-emerald-950/50" : "from-indigo-950/50"
            )} />
        </div>
    );

    return (
        <BentoGridItem
            className={cn(
                "row-span-1 flex flex-col justify-between group",
                isSocial ? "hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]" : "hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]",
                className
            )}
            title={
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        {isSocial ? <Lock className="w-4 h-4 text-emerald-500" /> : <AlertTriangle className="w-4 h-4 text-indigo-500" />}
                        <span className={cn(
                            "font-mono tracking-wider",
                            isSocial ? "text-emerald-400" : "text-indigo-400"
                        )}>
                            {title}
                        </span>
                    </div>
                    <span className="text-xs font-normal text-neutral-400 uppercase tracking-widest opacity-70">
                        {subtitle}
                    </span>
                </div>
            }
            description={
                <div className="flex flex-col gap-3">
                    <p className="text-neutral-300 text-sm leading-relaxed">
                        {description}
                    </p>
                    <div className={cn(
                        "self-start px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border",
                        isSocial
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                    )}>
                        {status}
                    </div>
                </div>
            }
            header={<Header />}
        />
    );
};
