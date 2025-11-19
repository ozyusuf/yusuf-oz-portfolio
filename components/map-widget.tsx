"use client";

import { BentoGridItem } from "./ui/bento-grid";
import { MapPin, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export const MapWidget = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Turkey is UTC+3
            const turkeyTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Istanbul" }));
            setTime(turkeyTime.toLocaleTimeString("en-GB", { hour12: false }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <BentoGridItem
            className="md:col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden group z-20 p-0"
            title=""
            description=""
        >
            {/* Full Card Background Grid */}
            <div className="absolute inset-0 bg-[#09090b] h-full w-full">
                <div className="absolute inset-0 h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                        opacity: 0.2
                    }}
                />
                {/* Radar Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/5 to-transparent w-[200%] animate-scan pointer-events-none h-full" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 z-10">

                {/* Top Right: Status & Clock */}
                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 px-3 py-1 rounded-full backdrop-blur-md">
                        <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-neon-green uppercase tracking-wider">Open to Work</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-white tracking-widest">
                        {time}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                        UTC+3 • TR
                    </div>
                </div>

                {/* Center: Pulse Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative">
                        <div className="w-4 h-4 bg-neon-green rounded-full shadow-[0_0_30px_rgba(57,255,20,1)] z-10 relative" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-neon-green/20 rounded-full animate-ping duration-[3000ms]" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-neon-green/10 rounded-full animate-pulse duration-[4000ms]" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-neon-green/5 rounded-full animate-pulse duration-[5000ms] delay-75" />
                    </div>
                </div>

                {/* Bottom Left: Location & Coords */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-neutral-400 mb-1">
                        <Globe className="w-3 h-3" />
                        <span className="text-[10px] font-mono uppercase tracking-widest">Mission Control</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-none">
                        Based in Muğla
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-3 h-3 text-neon-green" />
                        <span className="text-xs font-mono text-neutral-400">
                            37.21° N, 28.36° E
                        </span>
                    </div>
                </div>
            </div>
        </BentoGridItem>
    );
};
