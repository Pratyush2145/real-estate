import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Rajwadi Homes" className="h-12 w-12 rounded-full ring-1 ring-border" />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-foreground">Rajwadi Homes</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Jaipur · Since 2014</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-royal transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> Talk to us
          </a>
        </nav>

        <button
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919999999999" className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-royal py-3 text-sm text-primary-foreground">
              <Phone className="h-4 w-4" /> +91 99999 99999
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
