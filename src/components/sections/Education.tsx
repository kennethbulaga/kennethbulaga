"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, leadership } from "@/data/portfolio";
import { fadeInUp } from "@/components/motion";

export function Education() {
  return (
    <motion.section
      id="experience"
      className="py-12 sm:py-16 md:py-24 bg-muted/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="space-y-2 mb-8 sm:mb-12" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground">
            Education and leadership roles.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column - Timeline */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <GraduationCap size={20} className="text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
                
                <ul className="space-y-6">
                  {education.map((edu, index) => (
                    <li key={index} className="relative pl-12">
                      {/* Timeline dot/logo */}
                      <div className="absolute left-0 w-10 h-10 flex items-center justify-center">
                        {edu.logo ? (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-background border-2 border-border z-10">
                            <Image
                              src={edu.logo}
                              alt={edu.institution}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className={`w-3 h-3 rounded-full z-10 ${edu.isCurrent ? 'bg-primary ring-4 ring-primary/20' : 'bg-muted-foreground'}`} />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-medium uppercase tracking-wide ${edu.isCurrent ? 'text-primary' : 'text-muted-foreground'}`}>
                            {edu.level}
                          </span>
                          {edu.isCurrent && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="font-medium text-foreground text-sm">
                          {edu.institution}
                        </h4>
                        {edu.program && (
                          <p className="text-sm text-muted-foreground">
                            {edu.program}
                          </p>
                        )}
                        {edu.status && (
                          <p className="text-xs text-muted-foreground">
                            {edu.status}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Column - Timeline */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award size={20} className="text-primary" />
                Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
                
                <ul className="space-y-6">
                  {leadership.map((position, index) => {
                    const content = (
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                            {position.organization}
                          </h4>
                          {position.isCurrent && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {position.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {position.period}
                        </p>
                      </div>
                    );

                    return (
                      <li key={index} className="relative pl-12">
                        {/* Timeline dot/logo */}
                        <div className="absolute left-0 w-10 h-10 flex items-center justify-center">
                          {position.logo ? (
                            <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-background border-2 z-10 ${position.isCurrent ? 'border-primary' : 'border-border'}`}>
                              <Image
                                src={position.logo}
                                alt={position.organization}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className={`w-3 h-3 rounded-full z-10 ${position.isCurrent ? 'bg-primary ring-4 ring-primary/20' : 'bg-muted-foreground'}`} />
                          )}
                        </div>
                        
                        {/* Content */}
                        {position.link ? (
                          <a
                            href={position.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </motion.section>
  );
}
