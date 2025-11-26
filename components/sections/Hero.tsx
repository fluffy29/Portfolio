"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowRight, Download } from "lucide-react";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Framer Motion", "Git"
];

export function Hero() {
  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Full-Stack Developer
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            >
              I craft modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">
                web experiences.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              I’m a junior full-stack developer focused on building clean, efficient, and user-centered applications. I love solving problems and learning new technologies as I continue growing in the industry.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Tech Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[500px] h-[500px] flex items-center justify-center perspective-1000">
            {/* Core */}
            <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.3)]" />

            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite] border-t-transparent border-l-transparent" />
            <div className="absolute inset-12 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-b-transparent border-r-transparent" />
            <div className="absolute inset-24 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
            
            {/* 3D Tilted Ring */}
            <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-[spin_8s_linear_infinite]" style={{ transform: "rotateX(60deg) rotateY(10deg)" }} />

            {/* Floating Tags */}
            {techStack.map((tech, index) => {
              const angle = (index / techStack.length) * 2 * Math.PI;
              const radius = 200; // Increased radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech}
                  className="absolute px-4 py-2 bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:scale-110 hover:border-cyan-400 transition-all cursor-default z-10"
                  animate={{
                    x: [x, x + Math.random() * 20 - 10],
                    y: [y, y + Math.random() * 20 - 10],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{ left: "50%", top: "50%", marginLeft: -40, marginTop: -15 }}
                >
                  {tech}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
