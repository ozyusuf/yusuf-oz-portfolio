"use client";

import { motion } from "framer-motion";
import { BentoGridItem } from "./ui/bento-grid";
import { Download } from "lucide-react";
import React from "react";

export const HeroCard = () => {
    return (
        <BentoGridItem
            className="md:col-span-4 lg:col-span-6 row-span-2 min-h-[300px] relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                {/* Abstract Background Gradient */}
                <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] rounded-full bg-electric-purple/20 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-neon-green/10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Hi, I'm <span className="text-neon-green">Yusuf Oz</span>
                    </h1>
                </motion.div>

                <div className="text-xl md:text-2xl text-gray-300 font-mono h-8">
                    <Typewriter text={["Software Engineering Student", "Mobile Developer"]} />
                </div>

                <div className="mt-6 text-gray-400 max-w-2xl leading-relaxed space-y-4">
                    <p>
                        I'm a passionate developer transitioning from mobile apps to building immersive digital experiences.
                    </p>
                    <p>
                        Currently expanding my horizons into Game Development and AI, driven by a curiosity to create smarter and more interactive worlds.
                    </p>
                </div>

                <div className="mt-8">
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green hover:bg-neon-green/20 transition-colors font-medium"
                    >
                        <Download className="h-4 w-4" />
                        Download CV
                    </a>
                </div>
            </div>
        </BentoGridItem>
    );
};

// Simple Typewriter Component
const Typewriter = ({ text }: { text: string[] }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);
    const [blink, setBlink] = React.useState(true);

    // Blinking cursor
    React.useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    React.useEffect(() => {
        if (index === text.length) {
            setIndex(0);
            return;
        }

        if (subIndex === text[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === text[index].length ? 1000 : 150, Math.random() * 350));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, text]);

    return (
        <span>
            {text[index % text.length].substring(0, subIndex)}
            <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
        </span>
    );
};
