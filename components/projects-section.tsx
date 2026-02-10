"use client"

import { motion } from "framer-motion"
import { ExternalLink, BarChart3, Brain, Database, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Supply Chain Optimization via Predictive Analysis",
    description:
      "Built a Machine Learning app with Python (Prophet) to predict 30-day demand and automate safety stock calculations. Designed an interactive dashboard and PDF reporting system transforming raw CSV data into actionable KPIs.",
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Facebook Prophet"],
    icon: TrendingUp,
    span: "md:col-span-2",
    link: "https://github.com/younes-ferhat/supply-chain-predictor",
  },
  {
    title: "World Swimming Records Analysis (Data Pipeline & GenAI)",
    description:
      "Designed interactive Power BI dashboards to visualize swimmer performance across eras. Integrated GenAI (LLM) to auto-generate textual summaries of observed trends.",
    tags: ["Python", "Pandas", "OpenAI API", "Power BI", "Jupyter"],
    icon: Brain,
    span: "md:col-span-1",
    link: "https://github.com/younes-ferhat",
  },
  {
    title: "SQL Data Audit & Performance Analysis",
    description:
      "Developed complex SQL scripts for data extraction and exploration focused on data quality, using advanced joins, window functions, and aggregations.",
    tags: ["SQL", "Window Functions", "Data Quality"],
    icon: Database,
    span: "md:col-span-1",
    link: "https://github.com/younes-ferhat/sql-data-analytics-project",
  },
  {
    title: "Administrative Performance Management",
    description:
      "Created performance dashboards in Power BI to track key indicators (hours, mission status). Reduced administrative follow-up time by 40%.",
    tags: ["Power BI", "SQL", "VBA"],
    icon: BarChart3,
    span: "md:col-span-2",
    link: "https://github.com/younes-ferhat",
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

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Featured Work
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 md:grid-cols-3"
        >
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors hover:border-violet-500/30 hover:bg-white/[0.06] ${project.span}`}
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
