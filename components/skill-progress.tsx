"use client";

import { useEffect, useState } from "react";

interface SkillProgressProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export function SkillProgress({ skill, percentage, delay = 0 }: SkillProgressProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{skill}</span>
        <span
          className="text-primary font-mono transition-all duration-1000"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {isVisible ? percentage : 0}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
