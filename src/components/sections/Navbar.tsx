"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, personalInfo, resumePath } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            href="/"
            className="font-semibold text-2xl text-foreground hover:text-primary transition-colors font-fungela uppercase tracking-wide"
          >
            {personalInfo.nickname}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            {/* View Resume (Primary) */}
            <Button asChild size="sm" variant="default" className="ml-2 gap-1.5">
              <a href={resumePath} target="_blank" rel="noopener noreferrer">
                <Eye size={16} />
                Resume
              </a>
            </Button>
            {/* Download Resume (Secondary) */}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="gap-1.5"
            >
              <a href={resumePath} download="KennethBulaga_FullStackDev_Jan2026.pdf" rel="noopener noreferrer">
                <Download size={16} />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Resume Buttons */}
              <div className="flex gap-2 mt-2">
                <Button asChild size="sm" variant="default" className="flex-1 gap-1.5">
                  <a href={resumePath} target="_blank" rel="noopener noreferrer">
                    <Eye size={16} />
                    View Resume
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-1.5">
                  <a href={resumePath} download="KennethBulaga_FullStackDev_Jan2026.pdf" rel="noopener noreferrer">
                    <Download size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
