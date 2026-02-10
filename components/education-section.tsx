"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "Master 1 MIAGE",
    school: "Universite de Haute-Alsace",
    location: "Mulhouse, France",
    period: "Sep 2025 — Present",
    description: "Methods in Computer Science Applied to Business Management",
  },
  {
    degree: "Licence MIAGE",
    school: "Universite de Haute-Alsace",
    location: "Mulhouse, France",
    period: "Sep 2023 — Jul 2025",
    description: "Methods in Computer Science Applied to Business Management",
  },
  {
    degree: "Preparatory Classes",
    school: "Ecole Nationale Superieure d'Informatique",
    location: "Algeria",
    period: "Sep 2021 — Jul 2023",
    description: "Mathematics & Computer Science",
  },
]

const certifications = [
  {
    name: "Professional Scrum Product Owner I (PSPO I)",
    issuer: "Scrum.org",
    date: "Dec 2025",
  },
  {
    name: "Exploratory Data Analysis in Python",
    issuer: "DataCamp",
    date: "Nov 2025",
  },
  {
    name: "Querying Databases with SQL",
    issuer: "Coursera",
    date: "Jul 2024",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function EducationSection() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Background
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <GraduationCap className="h-5 w-5 text-violet-400" />
              Education
            </h3>
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:border-violet-500/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-sm text-violet-300">{edu.school}</p>
                    <p className="text-xs text-slate-500">{edu.location}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10"
                  >
                    {edu.period}
                  </Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <Award className="h-5 w-5 text-violet-400" />
              Certifications
            </h3>
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:border-violet-500/30 hover:bg-white/[0.06]"
              >
                <h4 className="font-semibold text-white">{cert.name}</h4>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-violet-300">{cert.issuer}</span>
                  <span className="text-slate-600">{"/"}</span>
                  <span className="text-xs text-slate-500">{cert.date}</span>
                </div>
              </motion.div>
            ))}

            {/* Languages card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
            >
              <h4 className="mb-3 font-semibold text-white">Languages</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">French</span>
                    <span className="text-xs text-slate-500">Fluent</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">English</span>
                    <span className="text-xs text-slate-500">Fluent</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">German</span>
                    <span className="text-xs text-slate-500">Intermediate</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
