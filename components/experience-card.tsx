"use client";

import { BentoGridItem } from "./ui/bento-grid";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Mobile Developer Intern",
        company: "Virtus AR-GE Yazılım A.Ş.",
        date: "July 2025 – Aug 2025",
        description: "Developed 'i_cardApp' frontend with Flutter & BLoC architecture. Contributed to UI/UX and API integration."
    },
    {
        role: "Software Developer (Part-Time)",
        company: "MSKU Digital Transformation Office",
        date: "Feb 2025 – June 2025",
        description: "Collaborated on university-wide web systems using modern web technologies."
    }
];

export const ExperienceCard = () => {
    return (
        <BentoGridItem
            className="md:col-span-6 lg:col-span-8 row-span-1"
            title="Experience Log"
            description="Professional journey and key roles."
            icon={<Briefcase className="h-4 w-4 text-neon-green" />}
        >
            <div className="mt-4 relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-neon-green/50 to-transparent" />

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-6 group">
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neon-green shadow-[0_0_10px_rgba(57,255,20,0.5)] group-hover:scale-125 transition-transform" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="text-xs font-mono text-neutral-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                                    {exp.date}
                                </span>
                            </div>

                            <div className="text-sm font-medium text-neutral-300 mb-2">
                                @ {exp.company}
                            </div>

                            <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </BentoGridItem>
    );
};
