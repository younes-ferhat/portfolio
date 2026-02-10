"use client"

import { motion } from "framer-motion"

const technologies = [
  "Python",
  "SQL",
  "Power BI",
  "Pandas",
  "R",
  "Excel",
  "Machine Learning",
  "Streamlit",
  "Plotly",
  "Data Visualization",
  "Docker",
  "Kubernetes",
  "MySQL",
  "Oracle",
  "Power Query",
  "OCaml",
  "CI/CD",
  "API Integration",
]

export function TechStack() {
  const doubled = [...technologies, ...technologies]

  return (
    <section className="relative overflow-hidden py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
          Tech Stack
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0f172a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0f172a] to-transparent" />

        <div
          className="flex w-max gap-6"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-slate-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
