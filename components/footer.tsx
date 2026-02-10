"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/younes-ferhat",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/younes-ferhat",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:younes.ferhat@uha.fr",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500">
          {"\u00A9"} {new Date().getFullYear()} Younes Ferhat. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-400 transition-colors hover:border-violet-500/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
