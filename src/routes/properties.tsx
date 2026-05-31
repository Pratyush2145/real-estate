import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties in Jaipur — Plots & Pre-Built Homes | Rajwadi Homes" },
      { name: "description", content: "Browse curated plots and ready-to-move homes across Jagatpura, Mansarovar, Vaishali Nagar, Ajmer Road and more." },
      { property: "og:title", content: "Properties in Jaipur — Rajwadi Homes" },
      { property: "og:description", content: "Browse curated plots and ready-to-move homes across Jaipur." },
    ],
  }),
  component: Properties,
});

const filters = ["All", "Home", "Plot"] as const;

function Properties() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = active === "All" ? properties : properties.filter((p) => p.type === active);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">Our Listings</span>
          <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">Properties in Jaipur</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From premium townships on Ajmer Road to palace-inspired villas in Jagatpura — every listing is verified, RERA-approved and ready for a visit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/60"
              }`}
            >
              {f === "All" ? "All Properties" : f === "Home" ? "Pre-Built Homes" : "Plots"}
            </button>
          ))}
          <div className="ml-auto text-sm text-muted-foreground">{list.length} listings</div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
