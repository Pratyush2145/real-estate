import { createFileRoute } from "@tanstack/react-router";
import villa1 from "@/assets/villa1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rajwadi Homes — Jaipur's Trusted Real Estate Curator" },
      { name: "description", content: "We've helped 480+ families find their forever home in Jaipur. Learn about our story, values and process." },
      { property: "og:title", content: "About Rajwadi Homes" },
      { property: "og:description", content: "Jaipur's trusted curator of plots and pre-built homes since 2014." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary">Our Story</span>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              Built on trust. <br /> <span className="italic text-primary">Rooted in Rajasthan.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Rajwadi Homes began in 2014 with a simple idea — Jaipur deserves real estate that honours its royal heritage while embracing modern living. A decade on, we've curated homes and plots for 480+ families across the Pink City.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every property we list is hand-walked by our team, legally verified, and matched to the families who'll love it most. No spam calls. No bait listings. Just honest, considered real estate.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img src={villa1} alt="Rajwadi Homes villa" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { n: "01", t: "Discover", d: "Tell us your budget, locality and lifestyle. We shortlist within 24 hours." },
            { n: "02", t: "Visit", d: "Walk the property with our local expert. We'll show paperwork, neighbours, everything." },
            { n: "03", t: "Move in", d: "From home loans to interiors to possession — we stay with you until the keys are yours." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="font-display text-5xl font-semibold text-primary/30">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
