import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Landmark, Search } from "lucide-react";
import hero from "@/assets/hero-jaipur.jpg";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajwadi Homes — Luxury Plots & Pre-Built Homes in Jaipur" },
      { name: "description", content: "Hand-picked plots and ready-to-move homes in Jaipur. RERA approved, palace-inspired architecture, modern comfort." },
      { property: "og:title", content: "Rajwadi Homes — Jaipur Real Estate" },
      { property: "og:description", content: "Hand-picked plots and ready-to-move homes in Jaipur." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = properties.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Jaipur skyline" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-28 pt-24 md:px-8 md:pb-40 md:pt-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-ivory/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-ivory backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> The Pink City, Reimagined
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-ivory md:text-7xl text-balance">
              A home as royal <br />
              <span className="italic text-accent">as Jaipur itself.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
              Rajwadi Homes curates the finest plots and palace-inspired pre-built villas across Jaipur — built with Rajasthani soul and contemporary comfort.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-royal transition-transform hover:-translate-y-0.5"
              >
                Explore Properties <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/40 bg-ivory/5 px-7 py-3.5 text-sm font-medium text-ivory backdrop-blur hover:bg-ivory/15"
              >
                Schedule a Site Visit
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-14 rounded-2xl border border-ivory/20 bg-background/95 p-3 shadow-royal backdrop-blur md:p-4">
            <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto]">
              <label className="flex flex-col rounded-xl bg-secondary/60 px-4 py-2.5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</span>
                <input className="bg-transparent text-sm outline-none" placeholder="Jagatpura, Mansarovar…" />
              </label>
              <label className="flex flex-col rounded-xl bg-secondary/60 px-4 py-2.5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Type</span>
                <select className="bg-transparent text-sm outline-none">
                  <option>All</option><option>Plot</option><option>Pre-built Home</option>
                </select>
              </label>
              <label className="flex flex-col rounded-xl bg-secondary/60 px-4 py-2.5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Budget</span>
                <select className="bg-transparent text-sm outline-none">
                  <option>Any</option><option>₹ 30 - 75 Lac</option><option>₹ 1 - 3 Cr</option><option>₹ 3 Cr+</option>
                </select>
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-royal px-6 py-3 text-sm font-medium text-primary-foreground">
                <Search className="h-4 w-4" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 border-y border-border py-10 md:grid-cols-4">
          {[
            ["12+", "Years in Jaipur"],
            ["480+", "Families settled"],
            ["35", "Active townships"],
            ["100%", "RERA compliant"],
          ].map(([num, label]) => (
            <div key={label} className="text-center md:text-left">
              <div className="font-display text-4xl font-semibold text-primary">{num}</div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary">Signature Collection</span>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Featured Properties</h2>
          </div>
          <Link to="/properties" className="hidden text-sm font-medium text-primary hover:underline md:inline-flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 rounded-3xl bg-royal p-10 text-primary-foreground shadow-royal md:grid-cols-3 md:p-14">
          {[
            { icon: ShieldCheck, title: "Verified & RERA approved", body: "Every plot and home goes through a 32-point legal and structural audit before listing." },
            { icon: Landmark, title: "Rajasthani craftsmanship", body: "Jharokhas, arches and pink sandstone — heritage detailing in every modern build." },
            { icon: Sparkles, title: "End-to-end concierge", body: "From site visits and home loans to interiors and possession — we handle it all." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/85">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-card md:p-16">
          <h2 className="font-display text-4xl font-semibold md:text-5xl text-balance">
            Your next address deserves a story.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us what you're looking for. We'll shortlist properties matched to your budget, locality and lifestyle — within 24 hours.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-royal hover:-translate-y-0.5 transition-transform">
            Start your search <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
