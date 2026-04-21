"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillProgress } from "@/components/skill-progress";
import {
  GraduationCap,
  BookOpen,
  Globe,
  Code,
  TrendingUp,
  Database,
  Layout,
  Server,
} from "lucide-react";

const education = [
  {
    period: "2024 - Present",
    institution: "SRM Institute of Science and Technology, Trichy",
    degree: "B.Tech Biomedical Engineering",
    current: true,
  },
  {
    period: "2022 - 2024",
    institution: "Best Matric Higher Secondary School",
    degree: "Higher Secondary (11th & 12th)",
    current: false,
  },
  {
    period: "2014 - 2022",
    institution: "Morning Star Matriculation School",
    degree: "Primary & Secondary Education (1st - 10th)",
    current: false,
  },
];

const certifications = [
  { name: "Full Stack Developer", icon: Server },
  { name: "Web Developer", icon: Layout },
  { name: "Project Management by Google", icon: TrendingUp },
  { name: "Data Analytics by Google", icon: Database },
  { name: "Stock Market Trading", icon: TrendingUp },
];

const codingSkills = [
  { skill: "HTML / CSS", percentage: 90 },
  { skill: "JavaScript", percentage: 85 },
  { skill: "React", percentage: 80 },
  { skill: "Python", percentage: 75 },
  { skill: "Java", percentage: 70 },
];

const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "Intermediate" },
  { name: "Arabic", level: "Basic" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">
            <GraduationCap className="h-3 w-3 mr-1" />
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Education & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey combined with professional certifications in technology and
            analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                Education Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 pb-6 last:pb-0">
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-[7px] top-3 w-0.5 h-full bg-border" />
                  )}
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                      edu.current
                        ? "bg-primary border-primary animate-pulse"
                        : "bg-background border-border"
                    }`}
                  />
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-primary">{edu.period}</span>
                    <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills Progress */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Code className="h-5 w-5 text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {codingSkills.map((skill, index) => (
                <SkillProgress key={skill.skill} {...skill} delay={index * 150} />
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                Certifications & Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <cert.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Globe className="h-5 w-5 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {lang.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{lang.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
