"use client";

import { Shield, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-foreground">
              Karan<span className="text-primary">.</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {currentYear} Karan Singh Asoliya. Built with
            <Heart className="w-4 h-4 text-primary" />
            using Next.js
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
