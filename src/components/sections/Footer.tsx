"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { socialLinks, personalInfo } from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

const iconMap: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="contact"
      className="py-12 sm:py-16 md:py-24 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <motion.div
          className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Open for opportunities, collaborations, and conversations about
            building institutional systems.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.platform] || Mail;
            return (
              <Button key={link.platform} variant="outline" size="icon" asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </a>
              </Button>
            );
          })}
        </div>

        {/* Email CTA */}
        <div className="text-center mb-12">
          <Button asChild size="lg" variant="default">
            <a href={`mailto:${personalInfo.email}`} className="gap-2">
              <Mail size={18} />
              {personalInfo.email}
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {personalInfo.name}. Built with Next.js & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
