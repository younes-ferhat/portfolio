"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Software Developer Intern",
    company: "FEMTO-ST (Research Laboratory)",
    location: "Besancon, France",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Designed and developed an interactive educational application following a precise specification document.",
      "Modeled and implemented mathematical rules in OCaml, ensuring 100% precision in integrated calculations.",
    ],
    tags: ["OCaml", "Software Design", "Mathematics"],
  },
  {
    role: "Data Analyst Intern",
    company: "Societe Generale",
    location: "Algiers, Algeria",
    period: "Jun 2023 — Sep 2023",
    bullets: [
      "Designed and deployed 5 Power BI dashboards for different departments (sales, marketing, support).",
      "Cleaned, prepared, and transformed large datasets with Python (Pandas) and SQL.",
    ],
    tags: ["Power BI", "Python", "Pandas", "SQL"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className={`relative mb-12 flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12 md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[12px] top-1 h-[15px] w-[15px] rounded-full border-[3px] border-violet-500 bg-[#0f172a] md:left-auto ${
                  index % 2 === 0
                    ? "md:-right-[7.5px]"
                    : "md:-left-[7.5px]"
                }`}
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors hover:border-violet-500/30 hover:bg-white/[0.06]">
                <div
                  className={`mb-3 flex items-center gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Briefcase className="h-4 w-4 text-violet-400" />
                  <span className="text-xs font-medium text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="mt-1 text-sm font-medium text-violet-300">
                  {exp.company}
                </p>
                <p className="text-xs text-slate-500">{exp.location}</p>
                <ul
                  className={`mt-4 space-y-2 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-slate-400"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
