"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeSection() {
  return (
    <section id="resume" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-md sm:p-14"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
              <FileText className="h-8 w-8 text-violet-400" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Want to know more?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-slate-400 leading-relaxed">
              Download my resume to see my full experience, education, and
              skills in detail.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-white hover:from-violet-500 hover:to-indigo-500"
            >
             <a href="/resume/younes-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
