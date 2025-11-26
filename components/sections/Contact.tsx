"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle } from "lucide-react";
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
    <SectionWrapper id="contact" className="bg-black/20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Info</h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@example.com
                </a>
                
                <a href="#" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Github className="w-5 h-5" />
                  </div>
                  github.com/username
                </a>
                
                <a href="#" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  linkedin.com/in/username
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {isSuccess ? (
              <Card className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
