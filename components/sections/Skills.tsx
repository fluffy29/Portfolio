"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { 
  Atom, Zap, FileCode2, Wind, Layers, Layout, 
  Server, Database, Globe, Lock, Cloud, 
  GitBranch, Terminal, Box, Cpu, Workflow,
  Monitor, HardDrive
} from "lucide-react";

const techStack = [
  {
    id: "frontend",
    category: "Frontend Ecosystem",
    icon: Monitor,
    description: "Building responsive, interactive user interfaces.",
    skills: [
      { name: "React", icon: Atom, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
      { name: "Next.js", icon: Zap, color: "text-white", bg: "bg-white/10", border: "border-white/20" },
      { name: "TypeScript", icon: FileCode2, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
      { name: "Tailwind CSS", icon: Wind, color: "text-cyan-300", bg: "bg-cyan-300/10", border: "border-cyan-300/20" },
      { name: "Framer Motion", icon: Layers, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    ]
  },
  {
    id: "backend",
    category: "Backend Infrastructure",
    icon: HardDrive,
    description: "Scalable server-side solutions and database management.",
    skills: [
      { name: "Node.js", icon: Server, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
      { name: "PostgreSQL", icon: Database, color: "text-blue-300", bg: "bg-blue-300/10", border: "border-blue-300/20" },
      { name: "REST APIs", icon: Globe, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
      { name: "Auth & Security", icon: Lock, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
      { name: "Serverless", icon: Cloud, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
    ]
  },
  {
    id: "devops",
    category: "DevOps & Tools",
    icon: Workflow,
    description: "Streamlining development and deployment workflows.",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
      { name: "Docker", icon: Box, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
      { name: "VS Code", icon: Terminal, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
      { name: "Figma", icon: Layout, color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" },
    ]
  }
];

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="skills" className="py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"
          >
            <Cpu className="w-4 h-4" />
            <span>Technological Arsenal</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tech Stack</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            A curated selection of modern technologies I use to build scalable, performant, and beautiful web applications.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeTab === index 
                  ? "bg-muted/20 text-foreground ring-1 ring-border" 
                  : "bg-transparent text-muted hover:text-foreground hover:bg-muted/10"
              }`}
            >
              <category.icon className={`w-4 h-4 ${activeTab === index ? "text-cyan-400" : ""}`} />
              <span className="font-medium">{category.category}</span>
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-muted/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{techStack[activeTab].category}</h3>
                <p className="text-muted">{techStack[activeTab].description}</p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {techStack[activeTab].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative group p-4 rounded-xl border ${skill.border} bg-card backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
                  >
                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg} blur-xl`} />
                    
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <div className={`p-3 rounded-lg ${skill.bg} ${skill.color} ring-1 ring-border group-hover:ring-foreground/30 transition-all`}>
                        <skill.icon className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
