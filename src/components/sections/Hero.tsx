"use client";

import Image from "next/image";
import { MapPin, Mail, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, resumePath } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/motion";

export function Hero() {
  return (
    <section id="about" className="relative pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-12 overflow-hidden">
      {/* Dot Pattern Background - Desktop only */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle,#9ca3af_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(circle,#6b7280_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-4 sm:space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Availability Badge */}
          <motion.div variants={staggerItem}>
            <Badge 
              variant="outline" 
              className="gap-1.5 px-3 py-1 text-xs font-medium border-green-500/50 text-green-600 dark:text-green-400 bg-green-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {personalInfo.availability.message}
            </Badge>
          </motion.div>

          {/* Headline with Gradient */}
          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Kenneth Bulaga
            </span>
            <span className="text-foreground">.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium"
          >
            {personalInfo.subHeadline}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location & Contact */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={16} className="text-primary" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-foreground transition-colors"
              >
                {personalInfo.email}
              </a>
            </span>
          </motion.div>

          {/* CTA Buttons - View & Download */}
          <motion.div variants={staggerItem} className="pt-4 flex flex-wrap gap-3">
            {/* Primary: View Resume */}
            <Button asChild size="lg">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Eye size={18} />
                View Resume
              </a>
            </Button>
            {/* Secondary: Download */}
            <Button asChild size="lg" variant="outline">
              <a
                href={resumePath}
                download="KennethBulaga_FullStackDev_Jan2026.pdf"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Download size={18} />
                Download
              </a>
            </Button>
          </motion.div>

          {/* Trusted By */}
          <motion.div variants={staggerItem} className="pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              Trusted by
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/sjp2cdofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-background border border-border">
                  <Image
                    src="/logos/school-logo-nobg.png"
                    alt="St. John Paul II College of Davao"
                    fill
                    sizes="36px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  St. John Paul II College of Davao
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
