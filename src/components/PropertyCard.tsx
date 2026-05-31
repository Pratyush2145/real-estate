import { MapPin, Maximize2, BedDouble } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-royal">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            {p.type}
          </span>
          {p.tag && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {p.tag}
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {p.location}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div className="text-lg font-semibold text-primary">{p.price}</div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Maximize2 className="h-3.5 w-3.5" />{p.size}</span>
            {p.beds && <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" />{p.beds} BR</span>}
          </div>
        </div>
      </div>
    </article>
  );
}
