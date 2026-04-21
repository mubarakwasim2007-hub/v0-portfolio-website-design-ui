"use client";

import { TypingEffect } from "@/components/typing-effect";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  FolderKanban,
  Award,
  Languages,
  ArrowDown,
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "Biomedical Engineer",
  "Data Analyst",
  "Project Manager",
];

const stats = [
  { icon: Code2, label: "Languages", value: 6, suffix: "+" },
  { icon: FolderKanban, label: "Projects", value: 2, suffix: "+" },
  { icon: Award, label: "Certifications", value: 4, suffix: "" },
  { icon: Languages, label: "Languages Spoken", value: 4, suffix: "" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mohammed{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Wasim M
                </span>
              </h1>
              <div className="text-xl sm:text-2xl text-muted-foreground font-mono h-8">
                <TypingEffect texts={roles} speed={80} deleteSpeed={40} pauseDuration={1500} />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-xl">
              First-year B.Tech Biomedical Engineering student at SRM Trichy, passionate about
              merging healthcare innovation with cutting-edge technology. Experienced in full-stack
              development, data analytics, and project management.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary flex items-center gap-1"
              >
                <MapPin className="h-3 w-3" />
                Thanjavur, Tamil Nadu
              </Badge>
              <Badge variant="outline" className="border-border text-muted-foreground">
                SRM Trichy
              </Badge>
              <Badge variant="outline" className="border-border text-muted-foreground">
                B.Tech BME
              </Badge>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/mubarakwasim2007-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/m-mohammed-wasim-837bb9378"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:mubarakwasim2007@gmail.com">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Stats Dashboard */}
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-3xl opacity-30" />

            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
