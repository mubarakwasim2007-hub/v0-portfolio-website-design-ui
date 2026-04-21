"use client";

import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { Cpu } from "lucide-react";

const projects = [
  {
    title: "Sign Convention Gloves with AI",
    description:
      "Innovative gloves equipped with sensors and AI technology to translate sign language gestures into text or speech in real-time, making communication accessible for hearing-impaired individuals.",
    tags: ["AI/ML", "IoT", "Python", "Sensors", "Healthcare"],
  },
  {
    title: "Solar Panel Automation",
    description:
      "An automated solar panel tracking system that adjusts panel orientation based on sun position to maximize energy efficiency. Includes real-time monitoring and analytics dashboard.",
    tags: ["IoT", "Automation", "Renewable Energy", "Arduino", "React"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Cpu className="h-3 w-3 mr-1" />
            Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions at the intersection of biomedical engineering and software
            development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">
              More projects in development...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
