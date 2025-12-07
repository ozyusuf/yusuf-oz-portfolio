"use client";

import { HeroCard } from "@/components/hero-card";
import { MapWidget } from "@/components/map-widget";
import { TechStack } from "@/components/tech-stack";
import { ProjectCard } from "@/components/project-card";
import { SocialsCard, GameDevCard, AiJourneyCard } from "@/components/socials-card";
import { StealthCard } from "@/components/stealth-card";
import { ExperienceCard } from "@/components/experience-card";
import { Footer } from "@/components/footer";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-dark text-white p-4 md:p-8 pt-12">
      <div className="max-w-7xl mx-auto">
        <BentoGrid className="max-w-7xl mx-auto">
          {/* Row 1 */}
          <HeroCard />
          <MapWidget />

          {/* Row 2 */}
          <TechStack />
          <ExperienceCard />

          {/* Row 3 - Projects */}
          <ProjectCard
            className="md:col-span-3 lg:col-span-4"
            title="MenuKYK"
            description="A serverless SaaS platform automating dormitory menu tracking across Turkey. Features crowdsourced uploads, AI-powered image processing (Gemini), and admin verification."
            tags={["React", "Vite", "Supabase", "Tailwind CSS", "PWA"]}
            color="bg-indigo-600"
            image="/images/menukyk_new.png"
            imageClassName="object-contain bg-black/50"
            href="https://menukyk.com.tr"
          />
          <ProjectCard
            className="md:col-span-3 lg:col-span-4"
            title="Greenhouse Management"
            description="A comprehensive digital solution for farmers to manage greenhouse records, track harvests, and monitor fertilization. Built for efficiency and ease of use in the field."
            tags={["Flutter", "BLoC", "Supabase", "Firebase"]}
            color="bg-green-500"
            image="/images/greenhouse_new.png"
            imageClassName="object-contain bg-black/50"
            href="https://play.google.com/store/apps/details?id=com.devyusufoz.serayonetimi"
          />
          <ProjectCard
            className="md:col-span-3 lg:col-span-4"
            title="Caffeverse"
            description="Social coffee exploration app allowing users to find nearby cafes, compare prices (Starbucks, Coffy, etc.), and share reviews. Features real-time location services."
            tags={["Flutter", "Firebase", "Google Maps API"]}
            color="bg-orange-500"
            image="/images/caffeverse_landscape.png"
          />

          {/* Row 4 - More Projects */}
          <ProjectCard
            className="md:col-span-3 lg:col-span-4 opacity-70 hover:opacity-100 transition-opacity"
            title="Wine Quality Prediction (School Project)"
            description="Machine Learning model to predict wine quality based on physicochemical tests. Analyzing dataset features to determine key quality indicators."
            tags={["Python", "Scikit-learn", "Pandas", "Data Science"]}
            color="bg-red-800"
            image="/images/wine_new.png"
          />
          <ProjectCard
            className="md:col-span-3 lg:col-span-4"
            title="i_cardApp (Internship Project)"
            description="Developed during my internship, this digital business card app facilitates professional networking. Engineered responsive UI components and integrated BLoC for robust state management."
            tags={["Flutter", "BLoC", "Docker"]}
            color="bg-blue-600"
            image="/images/internship_new.png"
          />

          {/* Row 5 - Stealth Projects */}
          <StealthCard
            className="md:col-span-3 lg:col-span-4"
            type="social"
            title="Project: *****"
            subtitle="Gamified Social Protocol"
            description="A next-gen social experience for meetups."
            status="Alpha / Classified"
          />
          <StealthCard
            className="md:col-span-3 lg:col-span-4"
            type="game"
            title="Game: *****"
            subtitle="Status: Compiling..."
            description="A lightweight mobile interaction project. Assets are being polished. Stand by for download link."
            status="Pre-Release | Loading..."
          />

          {/* Row 6 - Journey & Socials */}
          <GameDevCard />
          <AiJourneyCard />
          <SocialsCard />

        </BentoGrid>
      </div>
      <Footer />
    </main>
  );
}
