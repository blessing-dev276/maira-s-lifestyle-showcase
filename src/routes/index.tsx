import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import beauty from "@/assets/work-beauty.jpg";
import home from "@/assets/work-home.jpg";
import drink from "@/assets/work-drink.jpg";
import pet from "@/assets/work-pet.jpg";
import food from "@/assets/work-food.jpg";
import lifestyle from "@/assets/work-lifestyle.jpg";
import portraitAsset from "@/assets/maira-portrait.jpg.asset.json";
const portrait = portraitAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maira | UGC Lifestyle Creator — Portfolio Concept" },
      {
        name: "description",
        content:
          "Bilingual lifestyle UGC creator making relatable, product-led short-form content with a natural on-camera presence.",
      },
      { property: "og:title", content: "Maira | UGC Lifestyle Creator" },
      {
        property: "og:description",
        content:
          "Bilingual lifestyle UGC creator making relatable, product-led short-form content.",
      },
      { property: "og:url", content: "/" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const EMAIL = "mgsanchezugc@gmail.com";

const CATEGORIES = [
  "All",
  "Lifestyle",
  "Beauty",
  "Product",
  "Home",
  "Pet",
  "Food & Beverage",
] as const;

const WORK = [
  {
    src: beauty,
    title: "Foaming face wash demo",
    note: "Close-up product demo with on-camera hands",
    tags: ["Beauty", "Product"],
  },
  {
    src: home,
    title: "Laundry pods routine",
    note: "Household product walkthrough",
    tags: ["Home", "Product"],
  },
  {
    src: drink,
    title: "Cold soda styling",
    note: "Beverage b-roll with natural light",
    tags: ["Food & Beverage", "Product"],
  },
  {
    src: pet,
    title: "Dog-mom content",
    note: "Pet-led storytelling with product placement",
    tags: ["Pet", "Lifestyle"],
  },
  {
    src: food,
    title: "At-home drink build",
    note: "Step-by-step recipe format",
    tags: ["Food & Beverage", "Lifestyle"],
  },
  {
    src: lifestyle,
    title: "Everyday lifestyle scenes",
    note: "Outfit and home moments, creator POV",
    tags: ["Lifestyle", "Home"],
  },
];

const SERVICES = [
  ["Product Demonstrations", "Clear, hands-on demos that show how a product actually works."],
  ["Lifestyle UGC", "Real-home, real-day content that fits naturally into a feed."],
  ["Talking-Head Content", "Direct-to-camera delivery with a warm, conversational tone."],
  ["Voiceover", "Narrated cuts layered over demo and b-roll footage."],
  ["Product Reviews", "Honest first-impression and review-style formats."],
  ["Beauty & Skincare", "Routine-led beauty content shot in natural light."],
  ["Pet & Lifestyle", "Dog-mom content built around everyday pet moments."],
  ["Short-Form Brand Content", "Vertical 9:16 videos ready for TikTok, Reels and Shorts."],
];

function Index() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const items = useMemo(
    () => (filter === "All" ? WORK : WORK.filter((w) => w.tags.includes(filter))),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
          <a href="#top" className="min-w-0 truncate font-display text-base font-semibold">
            Maira <span className="text-muted-foreground">| UGC Lifestyle Creator</span>
          </a>
          <nav className="flex shrink-0 items-center gap-5 text-sm">
            <a href="#work" className="hidden hover:text-primary sm:inline">
              Work
            </a>
            <a href="#create" className="hidden hover:text-primary sm:inline">
              Services
            </a>
            <a href="#about" className="hidden hover:text-primary sm:inline">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Work with me
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium tracking-wide text-accent-foreground uppercase">
              Bilingual · English & Español
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold sm:text-6xl">
              Maira — Lifestyle UGC
              <br />
              with <em className="text-primary">personality.</em>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Bilingual lifestyle creator producing relatable, product-led content with a natural
              on-camera presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Work with me
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li>Vertical 9:16</li>
              <li>Shot at home, natural light</li>
              <li>Dog mom</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary/15 blur-2xl" />
            <img
              src={portrait}
              alt="Maira laughing with a macaw perched on her shoulder"
              width={1080}
              height={1080}
              className="aspect-square w-full rounded-[2rem] border border-border/60 object-cover shadow-xl"
            />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Lifestyle, on-camera — and yes, that's her bird.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="border-t border-border/60 bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Selected work</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Content examples from my TikTok. Shown as portfolio work, not as paid collaborations.
          </p>

          <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {items.map((w) => (
              <figure key={w.title} className="group">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={w.src}
                    alt={w.title}
                    width={720}
                    height={1280}
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="text-sm font-medium">{w.title}</p>
                  <p className="text-xs text-muted-foreground">{w.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I CREATE */}
      <section id="create" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">What I create</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(([title, desc]) => (
            <div key={title} className="grain-card rounded-3xl border border-border p-5">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET MAIRA */}
      <section id="about" className="border-y border-border/60 bg-card/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:items-center">
          <img
            src={lifestyle}
            alt="Warm, eclectic home corner with gallery wall and plants"
            width={720}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Meet Maira</h2>
            <p className="mt-4 text-lg leading-relaxed">
              I'm a bilingual UGC creator making lifestyle content from my own home — skincare,
              household finds, drinks, and plenty of dog-mom moments.
            </p>
            <p className="mt-4 text-muted-foreground">
              My content is unscripted-feeling and easy to watch: talking to camera like I'm talking
              to a friend, in English or Spanish, with the product actually in my hands.
            </p>
            <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
              {[
                "Bilingual — English & Español",
                "Natural on-camera presence",
                "Dog-mom & pet content angle",
                "Everyday lifestyle settings",
              ].map((x) => (
                <li key={x} className="rounded-2xl bg-secondary px-4 py-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WORK WITH ME */}
      <ContactSection />

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maira | UGC Lifestyle Creator</p>
          <p>
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">
              {EMAIL}
            </a>
          </p>
          <p className="text-xs">Portfolio concept prepared by HQ360.</p>
        </div>
      </footer>
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim().slice(0, 2000);
    const body = [
      `Name: ${get("name")}`,
      `Brand: ${get("brand")}`,
      `Email: ${get("email")}`,
      `Website / Social: ${get("site")}`,
      `Content needed: ${get("content")}`,
      `Deliverables: ${get("deliverables")}`,
      `Timeline: ${get("timeline")}`,
      "",
      "Project brief:",
      get("brief"),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `UGC inquiry — ${get("brand") || get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";
  const label = "block text-sm font-medium mb-1.5";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Work with me</h2>
          <p className="mt-3 text-muted-foreground">
            Tell me about the product and what you need. I'll reply from my business inbox.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 inline-block rounded-full border border-ink/20 px-5 py-3 text-sm font-medium hover:bg-secondary"
          >
            {EMAIL}
          </a>
        </div>

        <form onSubmit={onSubmit} className="grain-card rounded-3xl border border-border p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required maxLength={100} className={field} />
            </div>
            <div>
              <label className={label} htmlFor="brand">
                Brand
              </label>
              <input id="brand" name="brand" required maxLength={100} className={field} />
            </div>
            <div>
              <label className={label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="site">
                Website / Social
              </label>
              <input id="site" name="site" maxLength={255} className={field} />
            </div>
            <div>
              <label className={label} htmlFor="content">
                Content needed
              </label>
              <input
                id="content"
                name="content"
                maxLength={200}
                placeholder="e.g. product demo + voiceover"
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="deliverables">
                Number of deliverables
              </label>
              <input
                id="deliverables"
                name="deliverables"
                inputMode="numeric"
                maxLength={10}
                className={field}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="timeline">
                Timeline
              </label>
              <input
                id="timeline"
                name="timeline"
                maxLength={100}
                placeholder="e.g. delivery in 2 weeks"
                className={field}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="brief">
                Project brief
              </label>
              <textarea id="brief" name="brief" rows={5} maxLength={2000} className={field} />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Send inquiry
          </button>
          {sent && (
            <p className="mt-3 text-sm text-muted-foreground" role="status">
              Your email app should open with the details filled in.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
