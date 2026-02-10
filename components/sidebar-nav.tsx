"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Briefcase,
  FolderKanban,
  GraduationCap,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Resume", href: "#resume", icon: FileText },
]

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

export function SidebarNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="fixed left-0 top-0 z-50 hidden h-screen w-[72px] flex-col items-center justify-between border-r border-white/10 bg-[#0f172a]/80 py-6 backdrop-blur-xl lg:flex"
        aria-label="Main navigation"
      >
        {/* Avatar */}
        <a href="#about" className="group relative mb-2">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-violet-500/60 transition-all group-hover:border-violet-400">
            <Image
              src="/images/younes-profile.png"
              alt="Younes Ferhat"
              width={40}
              height={40}
              className="object-cover object-top"
            />
          </div>
        </a>

        {/* Nav links */}
        <div className="flex flex-col items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
                aria-label={item.label}
              >
                <Icon className="h-[18px] w-[18px]" />
                {/* Tooltip */}
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg border border-white/10 bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-1">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:text-violet-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0f172a]/90 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a href="#about" className="flex items-center gap-3">
          <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-violet-500/60">
            <Image
              src="/images/younes-profile.png"
              alt="Younes Ferhat"
              width={32}
              height={32}
              className="object-cover object-top"
            />
          </div>
          <span className="text-sm font-semibold text-white">
            Younes Ferhat
          </span>
        </a>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 border-b border-white/10 bg-[#0f172a]/95 px-4 py-4 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-violet-400" />
                    {item.label}
                  </a>
                )
              })}
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:text-violet-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
