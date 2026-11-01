import { createFileRoute } from "@tanstack/react-router";
import { Community, Footer, Hero, Nav, Organizers, Speakers, Sponsors, Tickets, Venue } from "@/components/kcd/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KCD Pune — Kubernetes Community Days Pune" },
      { name: "description", content: "Kubernetes Community Days Pune: practical cloud-native insights, open-source conversations and community-driven learning." },
      { property: "og:title", content: "KCD Pune — Kubernetes Community Days Pune" },
      { property: "og:description", content: "KCD चा कट्टा, Cloud Native च्या गप्पा! Join Pune's Kubernetes community." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Community />
      <Tickets />
      <Speakers />
      <Organizers />
      <Sponsors />
      <Venue />
      <Footer />
    </main>
  );
}
