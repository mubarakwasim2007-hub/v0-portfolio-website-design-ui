"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, User, FolderOpen, Mail } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderOpen },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
              <img
                src="/images/profile.jpeg"
                alt="Mohammed Wasim M"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-semibold text-foreground hidden sm:block">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
            <a href="#" className="ml-4">
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </a>
            ))}
            <a href="#" className="mt-2">
              <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
