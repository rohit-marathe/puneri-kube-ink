import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "./ui";
import p1 from "@/assets/community/photo-1.jpg.asset.json";
import p2 from "@/assets/community/photo-2.jpg.asset.json";
import p3 from "@/assets/community/photo-3.jpg.asset.json";
import p4 from "@/assets/community/photo-4.jpg.asset.json";
import p5 from "@/assets/community/photo-5.jpg.asset.json";
import p6 from "@/assets/community/photo-6.jpg.asset.json";
import p7 from "@/assets/community/photo-7.jpg.asset.json";
import p8 from "@/assets/community/photo-8.jpg.asset.json";

const photos = [
  { src: p1.url, cap: "KCD Pune 2024 · Main stage", w: "w-[34rem]" },
  { src: p2.url, cap: "Cloud Native Pune meetup", w: "w-[34rem]" },
  { src: p3.url, cap: "#KCDPUNE24 photo frame", w: "w-[26rem]" },
  { src: p4.url, cap: "Meetup sessions", w: "w-[34rem]" },
  { src: p5.url, cap: "KCD Pune 2024 · Attendee badge", w: "w-[22rem]" },
  { src: p6.url, cap: "Community volunteers", w: "w-[34rem]" },
  { src: p7.url, cap: "Packed room at a meetup", w: "w-[22rem]" },
  { src: p8.url, cap: "Community speaker", w: "w-[22rem]" },
];

function Photo({ src, cap, w, i }: (typeof photos)[number] & { i: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
      whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      className={`group relative h-[22rem] shrink-0 overflow-hidden rounded-sm border-4 border-foreground bg-card md:h-[26rem] ${w}`}
    >
      <img src={src} alt={cap} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
      <figcaption className="absolute bottom-3 left-3 bg-patya px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">{cap}</figcaption>
    </motion.figure>
  );
}

export function Community() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], ["2%", "-72%"]);
  const bar = useTransform(smooth, [0, 1], ["0%", "100%"]);

  if (reduce) {
    return (
      <section id="community" className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead num="02" title="The Community Behind KCD" sub="From big-stage moments to local community meetups, these are the people, experiences, and connections that keep Pune's cloud-native community growing." />
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 pb-4">{photos.map((p, i) => <Photo key={i} {...p} i={i} />)}</div>
      </section>
    );
  }

  return (
    <section id="community" ref={ref} className="relative h-[320vh] border-b border-border">
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHead num="02" title="The Community Behind KCD" sub="From big-stage moments to local community meetups, these are the people, experiences, and connections that keep Pune's cloud-native community growing." />
        </div>
        <motion.div style={{ x }} className="flex gap-6 pl-6">
          {photos.map((p, i) => <Photo key={i} {...p} i={i} />)}
        </motion.div>
        <div className="mx-auto mt-8 h-1 w-full max-w-6xl bg-border px-0">
          <motion.div style={{ width: bar }} className="h-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
