import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, AlertCircle, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rajwadi Homes — Schedule a Site Visit in Jaipur" },
      { name: "description", content: "Get in touch to schedule a property visit or talk to a Jaipur real estate expert. Plots and pre-built homes across the city." },
      { property: "og:title", content: "Contact Rajwadi Homes" },
      { property: "og:description", content: "Schedule a site visit or talk to a Jaipur real estate expert." },
    ],
  }),
  component: Contact,
});

async function submitToSheety(data: {
  fullName: string;
  phone: string;
  lookingFor: string;
  message: string;
}) {
  const url = import.meta.env.VITE_SHEETY_API_URL || "https://api.sheety.co/b867d64fe479d2ff97e4c5d201fd3171/eStateSpreadsheet/sheet1";
  
  const body = {
    sheet1: {
      fullName: data.fullName,
      phone: data.phone,
      lookingFor: data.lookingFor,
      message: data.message,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    },
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to submit inquiry: ${response.statusText}`);
  }

  return response.json();
}

function Contact() {
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    lookingFor: "Pre-built Home",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitToSheety(formState);
      setSent(true);
      setFormState({ fullName: "", phone: "", lookingFor: "Pre-built Home", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-primary">Let's Talk</span>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Find your forever <br /><span className="italic text-primary">address in Jaipur.</span>
          </h1>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Share what you're looking for and our team will respond within a few hours — usually the same day.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                <a href="tel:+919999999999" className="font-medium text-foreground">+91 99999 99999</a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <a href="mailto:hello@rajwadihomes.in" className="font-medium text-foreground">hello@rajwadihomes.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-medium text-foreground">C-Scheme, Jaipur, Rajasthan 302001</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9"
        >
          <h2 className="font-display text-2xl font-semibold">Request a callback</h2>
          <div className="mt-6 space-y-4">
            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {error}
              </div>
            )}
            {sent && (
              <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                <Check className="h-4 w-4 flex-shrink-0" />
                Thank you! Your inquiry has been received. We'll be in touch soon.
              </div>
            )}
            <Field label="Full name">
              <input
                required
                name="fullName"
                value={formState.fullName}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="Rohan Sharma"
              />
            </Field>
            <Field label="Phone">
              <input
                required
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="+91 98xxx xxxxx"
              />
            </Field>
            <Field label="Looking for">
              <select
                name="lookingFor"
                value={formState.lookingFor}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              >
                <option>Pre-built Home</option>
                <option>Plot</option>
                <option>Not sure yet</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea
                rows={4}
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="Preferred location, budget, timeline…"
              />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-royal px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-royal disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  Send enquiry <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-xl border border-border bg-background px-4 py-2.5 focus-within:border-primary">
      <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1 text-sm text-foreground">{children}</div>
    </label>
  );
}
