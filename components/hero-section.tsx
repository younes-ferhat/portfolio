"use client"

import { motion } from "framer-motion"
import { Github, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Looking for a Data Analyst internship — May 2026
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Building Systems{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {"&"}
            </span>{" "}
            Decoding Data.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            {"Hi, I'm "}
            <span className="text-white font-medium">Younes Ferhat</span>
            {" — Master MIAGE student passionate about Data Analytics, BI, and Data Engineering. I turn raw data into actionable insights with Python, SQL, Power BI & GenAI."}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-white hover:from-violet-500 hover:to-indigo-500"
            >
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8"
            >
              <a
                href="https://github.com/younes-ferhat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          {/* Glow behind photo */}
          <div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-600/30 blur-[60px]" />

          {/* Gradient ring */}
          <div className="relative rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 p-[3px]">
            <div className="rounded-full bg-[#0f172a] p-[3px]">
              <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/images/younes-profile.png"
                  alt="Younes Ferhat"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Floating accent badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-4 top-8 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md sm:-left-6"
          >
            <span className="text-xs font-medium text-violet-300">Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-4 bottom-12 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md sm:-right-6"
          >
            <span className="text-xs font-medium text-indigo-300">Data Analyst</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-600/15 blur-[100px]" />
    </section>
  )
}
