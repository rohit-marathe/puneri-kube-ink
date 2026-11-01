# KCD Pune website, first version

Build the home page with all seven sections in the order you gave, plus a footer. Every heading, subheading, button label and Puneri Patya line is copied word for word from your brief.

## Look and feel (from your answers)
- Colours: black ink, warm paper background, Puneri Patya yellow, and Kubernetes blue used only as a small accent.
- Fonts: Space Grotesk for headings, DM Sans for body text, and a bold Devanagari font (Mukta or Baloo 2) for the Marathi lines.
- Style: a premium magazine feel with lots of whitespace, a few small cloud-native details (thin grid lines, small hexagon marks), and bold Puneri Patya boards as the playful highlight.
- Motion: gentle fade and slide-in as you scroll, a slow drifting hero, and hover lift on cards, all done with Framer Motion. Motion is reduced for visitors who turn it off on their device.

## Sections
1. **Hero**: the big Marathi heading, the subheading, a tilted patya board ("उगाच नाही, Community भारी आहे!"), and the buttons "Get Your Ticket" and "Become a Sponsor". Date and place show "To be announced".
2. **Community**: a sideways-scrolling photo strip with clearly labelled "Photo coming soon" frames.
3. **Tickets**: a large ticket-stub card with the heading and both buttons. Pricing shows "Announcing soon".
4. **Speakers**: 4 "Speaker to be announced" cards plus the "Explore Sessions" button.
5. **Organizers**: warm "Team member coming soon" cards plus "Meet the Team".
6. **Sponsors & Partners**: empty logo slots grouped as Gold, Silver and Community, plus "Become a Sponsor".
7. **Venue**: the featured patya on pale yellow with bold black Devanagari text and a dark border, a "Venue to be announced" panel, and "Get Directions".
8. **Footer**: KCD Pune name and links to each section.

## Placeholders
Until you send real links, buttons scroll to the matching section instead of going to a fake page. No made-up names, dates, prices, venues or photos anywhere.

## Technical notes
- Everything is on `/` (one scrolling page, as the brief requires), with each section in its own component under `src/components/kcd/`.
- Add `framer-motion`. Load fonts with link tags in the root page head. Colours are set as theme tokens in styles.css.
- Page title and description set for KCD Pune.
- Save your design choices and the "copy must stay exact" rule to project memory.
- Skip the Antigravity-only setup (docs folder, skills): it doesn't apply here.
