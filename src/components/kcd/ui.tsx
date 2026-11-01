import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CTA({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: "solid" | "outline" | "yellow" }) {
  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-accent",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
    yellow: "bg-patya text-foreground border-2 border-foreground hover:bg-background",
  }[variant];
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 font-display text-sm font-bold uppercase tracking-wider transition-colors ${styles}`}>
      {children} <span aria-hidden>→</span>
    </a>
  );
}

export function SectionHead({ num, title, sub, marathi }: { num: string; title: string; sub: string; marathi?: boolean }) {
  return (
    <Reveal className="mb-12 grid gap-6 md:grid-cols-[120px_1fr]">
      <div className="font-display text-sm font-bold text-accent">⬡ {num}</div>
      <div>
        <h2 className={`${marathi ? "font-marathi font-extrabold" : "font-display font-bold"} text-4xl leading-tight tracking-tight md:text-6xl`}>{title}</h2>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{sub}</p>
      </div>
    </Reveal>
  );
}

export function Soon({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`placeholder-box flex items-center justify-center text-center text-xs font-bold uppercase tracking-widest text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}
