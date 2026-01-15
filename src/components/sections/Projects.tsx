"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { flagshipProjects, clientProjects } from "@/data/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/motion";

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-12 sm:py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="space-y-2 mb-8 sm:mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="text-muted-foreground">
            Scalable systems and client solutions that demonstrate technical architecture and institutional impact.
          </p>
        </motion.div>

        {/* Flagship Projects */}
        <div className="mb-16">
          <motion.div
            className="grid gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {flagshipProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative aspect-video bg-muted overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                    )}
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {project.logo && (
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <Image
                              src={project.logo}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="space-y-0.5 sm:space-y-1">
                          <CardTitle className="flex items-center gap-2 text-base sm:text-xl group-hover:text-primary transition-colors">
                            {project.title}
                            <ArrowUpRight
                              size={16}
                              className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                            />
                          </CardTitle>
                          <p className="text-xs sm:text-sm text-primary font-medium">
                            {project.focus}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 pt-0 sm:p-6 sm:pt-0">
                      <CardDescription className="text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Client Projects */}
        <div>
          <motion.div
            className="grid gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clientProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Card className="hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {project.logo && (
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={project.logo}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="space-y-0.5 sm:space-y-1">
                        <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-3 p-4 pt-0 sm:p-6 sm:pt-0">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {project.objective}
                    </CardDescription>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-[10px] sm:text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
