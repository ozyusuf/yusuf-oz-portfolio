"use client";

import { BentoGridItem } from "./ui/bento-grid";
import { SiFlutter, SiDart, SiPython, SiPostgresql, SiFirebase, SiSupabase, SiDocker, SiGit, SiHtml5, SiCss3, SiJavascript, SiGooglecloud, SiReact, SiVite, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code2 } from "lucide-react";

const skills = [
    // Frontend & Mobile
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },

    // Backend, Data & Languages
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "C", icon: <Code2 className="text-[#A8B9CC]" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },

    // DevOps & Tools
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
];

export const TechStack = () => {
    return (
        <BentoGridItem
            className="md:col-span-6 lg:col-span-8 row-span-1 flex flex-col justify-center overflow-hidden"
            title="Tech Stack"
            description="My arsenal of tools and technologies."
            header={<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-electric-purple/5 to-transparent opacity-20" />}
        >
            <div className="relative flex flex-wrap justify-center gap-4 mt-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                ))}
            </div>
        </BentoGridItem>
    );
};
