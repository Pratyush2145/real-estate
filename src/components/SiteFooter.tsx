import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Rajwadi Homes" className="h-12 w-12 rounded-full ring-1 ring-border" />
            <div className="font-display text-2xl font-semibold">Rajwadi Homes</div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Curated plots and palatial pre-built homes across Jaipur — built with Rajasthani soul and modern comfort.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/properties" className="hover:text-primary">Plots in Jaipur</Link></li>
            <li><Link to="/properties" className="hover:text-primary">Pre-built Homes</Link></li>
            <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Schedule a Visit</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> C-Scheme, Jaipur, Rajasthan</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@rajwadihomes.in</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rajwadi Homes · Crafted in the Pink City
      </div>
    </footer>
  );
}
