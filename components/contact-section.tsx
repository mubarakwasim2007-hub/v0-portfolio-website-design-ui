"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Personal Email",
    value: "mubarakwasim2007@gmail.com",
    href: "mailto:mubarakwasim2007@gmail.com",
  },
  {
    icon: Mail,
    label: "College Email",
    value: "mw2011@srmist.edu.in",
    href: "mailto:mw2011@srmist.edu.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80726 12222",
    href: "tel:+918072612222",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thanjavur, Tamil Nadu, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mubarakwasim2007-hub",
    username: "@mubarakwasim2007-hub",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m-mohammed-wasim-837bb9378",
    username: "m-mohammed-wasim",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Send className="h-3 w-3 mr-1" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <CardContent className="p-6 space-y-6 relative">
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Contact Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for opportunities
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="group">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                        >
                          <div className="p-2 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                            <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-3 rounded-lg">
                          <div className="p-2 rounded-lg bg-secondary text-primary">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                            <p className="text-sm text-foreground">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                          {social.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <Card className="border-border/50 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full relative space-y-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-12 w-12" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  Open for Opportunities
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Currently pursuing B.Tech in Biomedical Engineering while actively seeking
                  internships and collaborative projects in tech and healthcare innovation.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a href="mailto:mubarakwasim2007@gmail.com">
                  <Button
                    size="lg"
                    className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    Send Email
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/m-mohammed-wasim-837bb9378"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
