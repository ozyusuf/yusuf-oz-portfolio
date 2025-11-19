"use client";

import { BentoGridItem } from "./ui/bento-grid";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    className?: string;
    title: string;
    description: string;
    tags: string[];
    color?: string;
    image?: string;
    href?: string;
    imageClassName?: string;
}

const getTagColor = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes("flutter")) return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    if (lowerTag.includes("dart")) return "bg-blue-400/20 text-blue-200 border-blue-400/30";
    if (lowerTag.includes("python")) return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    if (lowerTag.includes("next")) return "bg-white/10 text-white border-white/20";
    if (lowerTag.includes("react")) return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
    if (lowerTag.includes("supabase")) return "bg-green-500/20 text-green-300 border-green-500/30";
    if (lowerTag.includes("firebase")) return "bg-yellow-600/20 text-yellow-400 border-yellow-600/30";
    if (lowerTag.includes("docker")) return "bg-blue-600/20 text-blue-400 border-blue-600/30";
    return "bg-white/5 text-gray-300 border-white/10";
};

export const ProjectCard = ({
    className,
    title,
    description,
    tags,
    color = "bg-blue-500",
    image,
    href,
    imageClassName
}: ProjectCardProps) => {
    const Content = () => (
        <>
            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={cn(
                            "px-3 py-1.5 text-xs font-medium rounded-md border backdrop-blur-sm transition-colors",
                            getTagColor(tag)
                        )}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </>
    );

    const Header = () => (
        <div className="relative w-full h-48 overflow-hidden rounded-xl mt-2">
            {image ? (
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-500 group-hover:scale-105",
                        imageClassName
                    )}
                />
            ) : (
                <div className={cn("w-full h-full opacity-50", color)} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {href && (
                <div className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cn("contents")}>
                <BentoGridItem
                    className={cn("row-span-1 flex flex-col justify-between group cursor-pointer", className)}
                    title={title}
                    description={description}
                    header={<Header />}
                >
                    <Content />
                </BentoGridItem>
            </a>
        );
    }

    return (
        <BentoGridItem
            className={cn("row-span-1 flex flex-col justify-between group", className)}
            title={title}
            description={description}
            header={<Header />}
        >
            <Content />
        </BentoGridItem>
    );
};
