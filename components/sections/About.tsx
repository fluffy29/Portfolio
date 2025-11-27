"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Code2, Rocket, Brain, Globe, ScanFace, Terminal, Cpu, Fingerprint } from "lucide-react";
import React from "react";

const stats = [
  { label: "Personal Projects", value: "+15", icon: Rocket, color: "text-cyan-400" },
  { label: "Modern Frameworks", value: "5+", icon: Code2, color: "text-purple-400" },
  { label: "Learning Hours", value: "1000+", icon: Brain, color: "text-pink-400" },
  { label: "Real-world APIs", value: "Hands-on", icon: Globe, color: "text-blue-400" },
];

const education = [
  {
    degree: "Computer Science",
    school: "EPITA School of Engineering",
    year: "2023 – 2026",
    description: "Specializing in Software Engineering and Computer Science fundamentals."
  },
  {
    degree: "High School Diploma",
    school: "ACS Doha International School",
    year: "2019 – 2022",
    description: "Graduated with strong academic performance and involvement in technology related activities."
  }
];

function HolographicCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);
  const sheenGradient = useTransform(
    mouseX,
    [-200, 200],
    ["linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%)", "linear-gradient(105deg, transparent 50%, rgba(255,255,255,0.1) 70%, transparent 90%)"]
  );

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-xl bg-card/40 border border-border backdrop-blur-md overflow-hidden group perspective-1000 cursor-none"
    >
      {/* Holographic Sheen */}
      <motion.div 
        style={{ background: sheenGradient }}
        className="absolute inset-0 z-20 pointer-events-none opacity-50"
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10" style={{ transform: "translateZ(20px)" }}>
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest">IDENTITY_VERIFIED</span>
            <span className="text-xs font-bold text-foreground/80">HASSAN MAJZOUB</span>
          </div>
          <ScanFace className="w-6 h-6 text-cyan-400 animate-pulse" />
        </div>

        {/* Profile Image Area */}
        <div className="relative flex-1 my-4 rounded-lg overflow-hidden border border-cyan-500/30 bg-cyan-900/10 group-hover:border-cyan-400/60 transition-colors">
            {/* Scan Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-[scan_3s_ease-in-out_infinite]" />
            
            {/* Image Placeholder - Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
                 {/* Placeholder Visuals */}
                 <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-md opacity-60 animate-pulse" />
                    <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center border border-white/10">
                        <Fingerprint className="w-16 h-16 text-cyan-400/80" />
                    </div>
                 </div>
            </div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-500" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-500" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-500" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-500" />
        </div>

        {/* Footer Stats */}
        <div className="space-y-2 font-mono text-[10px] text-muted">
          <div className="flex justify-between border-b border-border pb-1">
            <span>ROLE</span>
            <span className="text-foreground">FULL_STACK_DEV</span>
          </div>
          <div className="flex justify-between border-b border-border pb-1">
            <span>LEVEL</span>
            <span className="text-foreground">JUNIOR_ARCHITECT</span>
          </div>
          <div className="flex justify-between">
            <span>STATUS</span>
            <span className="text-green-400 animate-pulse">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted/5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About <span className="text-cyan-400">Me</span>
                </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>

          <div className="space-y-6 text-muted leading-relaxed relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-full" />
            <p className="text-lg text-foreground font-medium pl-4">
              I build clean, scalable, and user-focused web applications by combining solid backend engineering with modern frontend design. My focus is on creating fast, intuitive interfaces that solve real problems and feel effortless to use.
            </p>
            <p className="pl-4">
              I’ve gained a strong understanding of the full web stack from <span className="text-cyan-400">React</span> ecosystems and component architecture to <span className="text-purple-400">Node.js</span>, APIs, and cloud deployment.
            </p>
            <p className="pl-4">
              Right now, I’m expanding into advanced frontend performance, WebGL/3D interfaces, and cloud-native solutions to deliver even more dynamic and high impact digital experiences.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
             <div className="px-4 py-2 rounded-lg bg-card border border-border flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-muted">System Architect</span>
             </div>
             <div className="px-4 py-2 rounded-lg bg-card border border-border flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-muted">Global Mindset</span>
             </div>
          </div>

          {/* Education Section */}
          <div className="pt-8 space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-border hover:border-cyan-500/50 transition-colors">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-cyan-500" />
                  <h4 className="text-foreground font-medium">{edu.degree}</h4>
                  <div className="flex justify-between text-sm text-muted mt-1">
                    <span>{edu.school}</span>
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-sm text-muted/80 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Holographic Card */}
        <div className="relative flex justify-center">
            <HolographicCard />
        </div>
      </div>
      
      {/* Stats Grid - Moved below for better layout flow */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative h-full p-6 bg-card border border-border rounded-xl backdrop-blur-md overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center text-center">
                
                {/* Top Right Corner Accent */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-cyan-500" />
                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                </div>

                {/* Icon Container */}
                <div className={`mb-4 p-4 rounded-2xl bg-muted/10 ${stat.color} ring-1 ring-border group-hover:ring-cyan-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}>
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                  <stat.icon className="w-8 h-8" />
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold text-foreground mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-xs font-mono text-muted uppercase tracking-widest group-hover:text-cyan-500 transition-colors">
                  {stat.label}
                </p>
                
                {/* Bottom Active Line */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
    </SectionWrapper>
  );
}
