"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "Authentication", "Serverless"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Vercel", "Figma", "Postman"]
  }
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:border-cyan-500/30 transition-colors group">
                <div className="p-6 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white text-center group-hover:text-cyan-400 transition-colors">{category.title}</h3>
                </div>
                <div className="p-6 flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
