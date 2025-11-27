"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowRight, Download, Atom, Zap, FileCode2, Server, Database, Wind, Layers, GitBranch, Cpu, Globe } from "lucide-react";

const techStack = [
  { name: "React", icon: Atom, color: "text-cyan-400" },
  { name: "Next.js", icon: Zap, color: "text-white" },
  { name: "TypeScript", icon: FileCode2, color: "text-blue-400" },
  { name: "Node.js", icon: Server, color: "text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
  { name: "Tailwind", icon: Wind, color: "text-cyan-300" },
  { name: "Framer", icon: Layers, color: "text-purple-400" },
  { name: "Git", icon: GitBranch, color: "text-orange-400" },
];

export function Hero() {
  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-cyan-400 text-sm font-medium"
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
              className="text-lg text-muted max-w-xl leading-relaxed"
            >
              I’m a full-stack developer focused on building clean, efficient, and user-centered applications. I enjoy solving problems, learning new technologies, and continuously improving my skills to deliver better products.
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

        {/* Right Content - Cyber Reactor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center h-[600px]"
        >
          <div className="relative w-[500px] h-[500px] perspective-1000">
            
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-80" />
                    <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] z-20 overflow-hidden">
                        {/* Avatar Placeholder */}
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                           <span className="text-4xl">👨‍💻</span>
                        </div>
                    </div>
                    {/* Core Rings */}
                    <div className="absolute -inset-4 border border-cyan-500/30 rounded-full animate-[spin_3s_linear_infinite]" />
                    <div className="absolute -inset-8 border border-purple-500/30 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
                </div>
            </div>

            {/* Orbital System */}
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                {/* Ring 1 - Horizontal Tilted */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-[spin_20s_linear_infinite]" style={{ transform: "rotateX(70deg)" }}>
                    {techStack.slice(0, 4).map((tech, i) => (
                        <div 
                            key={tech.name}
                            className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12"
                            style={{ transform: `rotate(${i * 90}deg) translateY(-250px) rotate(-${i * 90}deg)` }}
                        >
                            <div className="w-12 h-12 bg-black/80 border border-cyan-500/50 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.3)] animate-[spin_20s_linear_infinite_reverse]">
                                <tech.icon className={`w-6 h-6 ${tech.color}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ring 2 - Vertical Tilted */}
                <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-[spin_25s_linear_infinite_reverse]" style={{ transform: "rotateY(70deg)" }}>
                    {techStack.slice(4, 8).map((tech, i) => (
                        <div 
                            key={tech.name}
                            className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12"
                            style={{ transform: `rotate(${i * 90}deg) translateY(-250px) rotate(-${i * 90}deg)` }}
                        >
                            <div className="w-12 h-12 bg-black/80 border border-purple-500/50 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-[spin_25s_linear_infinite]">
                                <tech.icon className={`w-6 h-6 ${tech.color}`} />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Ring 3 - Diagonal */}
                <div className="absolute inset-12 rounded-full border border-white/5 border-dashed animate-[spin_40s_linear_infinite]" style={{ transform: "rotateX(45deg) rotateY(45deg)" }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${i * 18}deg) translateY(${100 + (i * 13 % 150)}px)`,
                            opacity: 0.2 + (i * 7 % 50) / 100,
                        }}
                    />
                ))}
            </div>

            {/* Holographic Base */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-cyan-500/10 blur-3xl rounded-[100%]" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
