"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Check, Copy } from "lucide-react";
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

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

        {/* External Profiles - GitHub & LinkedIn only */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks
            .filter((link) => link.platform !== "Email")
            .map((link) => {
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

        {/* Email CTA - Copy to Clipboard */}
        <div className="text-center mb-12">
          <Button
            size="lg"
            variant="default"
            onClick={handleCopyEmail}
            className="gap-2 transition-all"
          >
            {copied ? (
              <>
                <Check size={18} className="text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} className="group-hover:opacity-70 transition-opacity" />
                {personalInfo.email}
              </>
            )}
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            <span>© {currentYear} {personalInfo.name}.</span>
            <a
              href="https://github.com/kennethbulaga/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              <Github size={14} />
              Built with Next.js & Tailwind CSS
            </a>
            <span>.</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
