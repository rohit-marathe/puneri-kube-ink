import { motion, useReducedMotion } from "framer-motion";
import { CTA, Reveal, SectionHead, Soon } from "./ui";

const wrap = "mx-auto max-w-6xl px-6";

export function Nav() {
  const links = [["Community", "#community"], ["Tickets", "#tickets"], ["Speakers", "#speakers"], ["Team", "#organizers"], ["Sponsors", "#sponsors"], ["Venue", "#venue"]];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#top" className="font-display text-lg font-bold">KCD<span className="text-accent">·</span>Pune</a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-accent">{l}</a>)}
        </nav>
        <a href="#tickets" className="rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-accent">Get Your Ticket</a>
      </div>
    </header>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="grid-lines relative overflow-hidden border-b border-border">
      <div className={`${wrap} relative py-24 md:py-36`}>
        <Reveal>
          <p className="mb-8 font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Kubernetes Community Days · Pune · Date to be announced</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-4xl font-marathi text-5xl font-extrabold leading-[1.1] md:text-8xl">KCD चा कट्टा, Cloud Native च्या गप्पा!</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">Where Kubernetes enthusiasts meet for practical insights, open-source conversations, and community-driven learning.</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
          <CTA href="#tickets">Get Your Ticket</CTA>
          <CTA href="#sponsors" variant="outline">Become a Sponsor</CTA>
        </Reveal>
        <motion.div
          className="patya-board mt-16 inline-block rotate-[-3deg] px-6 py-4 text-2xl md:absolute md:right-6 md:bottom-24 md:mt-0 md:text-3xl"
          initial={reduce ? false : { opacity: 0, rotate: -12, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
        >
          उगाच नाही, Community भारी आहे!
        </motion.div>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section id="community" className="border-b border-border py-24">
      <div className={wrap}>
        <SectionHead num="02" title="The Community Behind KCD" sub="From big-stage moments to local community meetups, these are the people, experiences, and connections that keep Pune's cloud-native community growing." />
      </div>
      <div className="flex snap-x gap-5 overflow-x-auto px-6 pb-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="snap-start shrink-0">
            <Soon label="Community photo coming soon" className={`${i % 2 ? "h-72 w-64" : "h-72 w-96"} rounded-sm`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Tickets() {
  return (
    <section id="tickets" className="border-b border-border bg-primary py-24 text-primary-foreground">
      <div className={wrap}>
        <Reveal className="grid overflow-hidden rounded-sm bg-background text-foreground md:grid-cols-[1fr_260px]">
          <div className="p-10 md:p-14">
            <p className="font-display text-sm font-bold text-accent">⬡ 03 · Admit one</p>
            <h2 className="mt-4 font-marathi text-4xl font-extrabold leading-tight md:text-6xl">तुमचं KCD Ticket, काढलं का अजून?</h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">One day, countless cloud-native insights, and a community worth meeting. Grab your ticket and join Pune's Kubernetes community for a day of learning, sharing, and connecting.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTA href="#tickets">Get Your Ticket</CTA>
              <CTA href="#community" variant="outline">Explore the Experience</CTA>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 border-t-2 border-dashed border-foreground bg-patya p-10 md:border-t-0 md:border-l-2">
            <div className="font-display text-xs font-bold uppercase tracking-widest">Pricing</div>
            <div className="font-display text-2xl font-bold">Announcing soon</div>
            <div className="font-display text-xs font-bold uppercase tracking-widest">Date</div>
            <div className="font-display text-2xl font-bold">To be announced</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PeopleGrid({ label, count }: { label: string; count: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <motion.div whileHover={{ y: -6 }} className="rounded-sm border border-border bg-card p-4">
            <Soon label="Photo" className="aspect-square rounded-sm" />
            <p className="mt-4 font-display font-bold">{label}</p>
            <p className="text-sm text-muted-foreground">Details coming soon</p>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="border-b border-border py-24">
      <div className={wrap}>
        <SectionHead num="04" title="Meet Our Speakers" sub="Learn from the people building, scaling, and shaping the cloud-native ecosystem. Discover practical insights, real-world experiences, and ideas worth taking back to your team." />
        <PeopleGrid label="Speaker to be announced" count={4} />
        <div className="mt-12"><CTA href="#speakers" variant="outline">Explore Sessions</CTA></div>
      </div>
    </section>
  );
}

export function Organizers() {
  return (
    <section id="organizers" className="border-b border-border bg-muted py-24">
      <div className={wrap}>
        <SectionHead num="05" title="The People Behind KCD Pune" sub="Great communities don't happen on their own. Meet the people bringing KCD Pune together and creating a space for the cloud-native community to learn, share, and grow." />
        <PeopleGrid label="Team member coming soon" count={4} />
        <div className="mt-12"><CTA href="#organizers" variant="outline">Meet the Team</CTA></div>
      </div>
    </section>
  );
}

export function Sponsors() {
  const tiers: [string, number, string][] = [["Gold", 2, "h-32"], ["Silver", 3, "h-24"], ["Community", 4, "h-20"]];
  return (
    <section id="sponsors" className="border-b border-border py-24">
      <div className={wrap}>
        <SectionHead num="06" title="Powered by Our Community Partners" sub="KCD Pune is made possible by the organizations that support open-source technology, knowledge sharing, and the people building the cloud-native future." />
        <div className="space-y-10">
          {tiers.map(([t, n, h]) => (
            <Reveal key={t}>
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">{t}</p>
              <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
                {Array.from({ length: n }).map((_, i) => <Soon key={i} label="Logo" className={`${h} rounded-sm`} />)}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12"><CTA href="#sponsors">Become a Sponsor</CTA></div>
      </div>
    </section>
  );
}

export function Venue() {
  return (
    <section id="venue" className="grid-lines py-24">
      <div className={wrap}>
        <SectionHead num="07" title="Pune, Here We Come!" sub="One community, one exciting day of cloud-native learning. Find the venue details, plan your journey, and get ready to meet the Pune cloud-native community in person." />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="patya-board rotate-[-2deg] px-8 py-10 text-center text-3xl leading-snug md:text-4xl">
              पुण्यात आल्यावर,<br />कट्टा तर जमणारच!<br />KCD Pune ला भेटूया!
            </div>
          </Reveal>
          <Reveal delay={0.15} className="space-y-4">
            <Soon label="Venue photo coming soon" className="h-56 rounded-sm" />
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="font-display text-xl font-bold">Venue to be announced</p>
              <p className="mt-1 text-sm text-muted-foreground">Address, map, travel and check-in details will appear here once confirmed.</p>
            </div>
            <CTA href="#venue" variant="yellow">Get Directions</CTA>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-6`}>
        <div className="font-display text-xl font-bold">KCD Pune</div>
        <div className="flex flex-wrap gap-5 text-sm opacity-80">
          {["community", "tickets", "speakers", "organizers", "sponsors", "venue"].map((s) => <a key={s} href={`#${s}`} className="capitalize hover:opacity-100">{s}</a>)}
        </div>
        <p className="w-full text-xs opacity-60">Kubernetes Community Days Pune · A community-run event</p>
      </div>
    </footer>
  );
}
