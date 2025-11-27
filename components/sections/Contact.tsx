"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle, Terminal, Signal, Wifi, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-muted/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

        <div className="text-center space-y-4 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SYSTEM_READY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Transmission</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto font-mono text-sm">
            <span className="text-cyan-500">{">"}</span> ESTABLISHING SECURE UPLINK...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Left Panel: Comm Hub */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative p-6 rounded-2xl bg-card border border-border backdrop-blur-md overflow-hidden group">
               {/* Decorative Scanner Line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-[scan_4s_ease-in-out_infinite]" />
               
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                   <Signal className="w-5 h-5 text-cyan-400" />
                   Comm_Channels
                 </h3>
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30" />
                 </div>
               </div>

               <div className="space-y-4">
                 {[
                   { icon: Mail, label: "Encrypted Mail", value: "hmajzoub12@gmail.com", href: "mailto:hmajzoub12@gmail.com", color: "text-purple-400" },
                   { icon: Github, label: "Code Repository", value: "github.com/fluffy29", href: "https://github.com/fluffy29", color: "text-foreground" },
                   { icon: Linkedin, label: "Professional Network", value: "https://www.linkedin.com/in/hassan-majzoub/", href: "https://www.linkedin.com/in/hassan-majzoub/", color: "text-blue-400" }
                 ].map((item, i) => (
                   <a 
                    key={i} 
                    href={item.href}
                    className="flex items-center p-4 rounded-xl bg-muted/10 border border-border hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group/item"
                   >
                     <div className={`p-3 rounded-lg bg-muted/20 ${item.color} mr-4 group-hover/item:scale-110 transition-transform`}>
                       <item.icon className="w-5 h-5" />
                     </div>
                     <div className="flex-1">
                       <div className="text-xs text-muted font-mono mb-1">{item.label}</div>
                       <div className="text-sm text-muted-foreground font-medium group-hover/item:text-cyan-400 transition-colors">{item.value}</div>
                     </div>
                     <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                     </div>
                   </a>
                 ))}
               </div>

               {/* Location Status */}
               <div className="mt-8 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <div className="w-full h-full border-t-2 border-cyan-500 rounded-full" />
                    </div>
                    <Globe className="absolute inset-0 m-auto w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-cyan-500 font-mono">CURRENT_LOCATION</div>
                    <div className="text-sm text-foreground font-medium">Paris, France</div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Panel: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/10 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-muted">bash --secure-mode</div>
              </div>

              <div className="p-6 flex-1">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                      <CheckCircle className="w-16 h-16 text-green-400 relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">TRANSMISSION_SENT</h3>
                      <p className="text-muted font-mono text-sm">Message successfully encrypted and delivered.</p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)}
                      className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                    >
                      Initialize New Sequence
                    </Button>
                  </div>
                ) : (
                  <form action={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-cyan-500 ml-1">var NAME =</label>
                      <input 
                        name="name"
                        required
                        className="w-full bg-muted/10 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono text-sm"
                        placeholder='"Enter your name"'
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-purple-500 ml-1">var EMAIL =</label>
                      <input 
                        name="email"
                        type="email"
                        required
                        className="w-full bg-muted/10 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-mono text-sm"
                        placeholder='"Enter your email"'
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-green-500 ml-1">const MESSAGE =</label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-muted/10 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all font-mono text-sm resize-none"
                        placeholder='`Type your message here...`'
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-mono tracking-widest py-6"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          UPLOADING...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          EXECUTE_TRANSMISSION
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
