"use client";

import { BentoGridItem } from "./ui/bento-grid";
import { Github, Linkedin, Gamepad2, Mail, BrainCircuit } from "lucide-react";

// Custom Medium Icon (SVG)
const MediumIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

export const SocialsCard = () => {
    return (
        <BentoGridItem
            className="md:col-span-2 lg:col-span-2 row-span-1 flex flex-col justify-center"
            title="Connect"
            description="Find me on these platforms."
        >
            <div className="flex gap-4 mt-2">
                <a href="https://github.com/ozyusuf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <Github className="h-5 w-5 text-white group-hover:text-neon-green transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/yusuf-%C3%B6z-601025309" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <Linkedin className="h-5 w-5 text-white group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://medium.com/@yusufoz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <MediumIcon className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                </a>
                <a href="mailto:ysfoz123@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                    <Mail className="h-5 w-5 text-white group-hover:text-red-400 transition-colors" />
                </a>
            </div>
        </BentoGridItem>
    );
};

export const GameDevCard = () => {
    return (
        <BentoGridItem
            className="md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-purple-900/20 to-black border-electric-purple/30"
            title="Game Development Journey"
            description="Building worlds from scratch."
            icon={<Gamepad2 className="h-5 w-5 text-electric-purple" />}
        >
            <div className="w-full bg-gray-800 rounded-full h-2.5 mt-2 overflow-hidden">
                <div className="bg-electric-purple h-2.5 rounded-full w-[10%] animate-pulse shadow-[0_0_10px_rgba(191,0,255,0.5)]"></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Learning 3D Modeling & Blender</p>
        </BentoGridItem>
    );
};

export const AiJourneyCard = () => {
    return (
        <BentoGridItem
            className="md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-blue-900/20 to-black border-blue-500/30"
            title="AI & ML Journey"
            description="Deep dive into Computer Vision."
            icon={<BrainCircuit className="h-5 w-5 text-blue-400" />}
        >
            <div className="w-full bg-gray-800 rounded-full h-2.5 mt-2 overflow-hidden">
                <div className="bg-blue-400 h-2.5 rounded-full w-[5%] animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Upcoming: Image Processing</p>
        </BentoGridItem>
    );
};
