"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

export function Experience() {
  return (
    <motion.section
      id="work-experience"
      className="py-12 sm:py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="space-y-2 mb-8 sm:mb-12" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Work Experience
          </h2>
          <p className="text-muted-foreground">
            Professional roles and internships.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Briefcase size={20} className="text-primary" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <ul className="space-y-6">
                {experience.map((exp, index) => (
                  <li key={index} className="relative pl-12">
                    {/* Timeline logo */}
                    <div className="absolute left-0 w-10 h-10 flex items-center justify-center">
                      {exp.logo ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-background border-2 border-border z-10">
                          <Image
                            src={exp.logo}
                            alt={exp.organization}
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-3 h-3 rounded-full z-10 ${
                            exp.isCurrent
                              ? "bg-primary ring-4 ring-primary/20"
                              : "bg-muted-foreground"
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          {/* Organization: Responsive - OWWA on mobile, full name on desktop */}
                          <h4 className="font-semibold text-foreground text-sm">
                            <span className="md:hidden">OWWA</span>
                            <span className="hidden md:inline">
                              {exp.organization}
                            </span>
                          </h4>
                          {/* Role */}
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {exp.role}
                          </p>
                        </div>
                        {/* Period: Always visible, no badge */}
                        <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
