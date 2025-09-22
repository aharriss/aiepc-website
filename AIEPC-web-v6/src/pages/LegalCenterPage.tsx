import React from "react";
import { ShieldCheck, FileText, ScrollText, HandCoins, Megaphone } from "lucide-react";
import QuickLink from "@/components/QuickLink";
import PolicyCard from "@/components/PolicyCard";

/**
 * AIEPC – Legal Center Page
 * Single-file React component your team can drop into your app.
 * - Tailwind CSS for styling
 * - Framer Motion for gentle animations
 * - Lucide icons for visuals
 *
 * Links to wire up:
 *   /privacy-policy, /terms-of-use, /refund-policy, /organizing-disclaimer, /refund-form
 *
 * Brand color: #00308F (set as --brand in a local CSS var for convenience)
 */

const nav = [
  { name: "Privacy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms-of-use" },
  { name: "Refunds", href: "/refund-policy" },
  { name: "Organizing Disclaimer", href: "/organizing-disclaimer" },
];

// AI Union Logo using provided image
function AIUnionLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src="https://d64gsuwffb70l.cloudfront.net/685ae5e3b337a227e19d0c6a_1756796803128_76b1e4ee.png"
      alt="AI Union"
      className={className}
    />
  );
}

export default function LegalCenterPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ ['--brand' as any]: '#00308F' }}>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <AIUnionLogo />
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.name} href={n.href} className="text-sm font-semibold text-slate-700 hover:text-[color:var(--brand)]">
                {n.name}
              </a>
            ))}
          </nav>
          <a
            href="/"
            className="inline-flex md:hidden text-sm font-semibold text-[color:var(--brand)] border border-[color:var(--brand)] rounded-xl px-3 py-1.5"
          >
            Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Legal Center
            </h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Transparency, accountability, and confidentiality – everything you need to know about how AIEPC protects your
              rights, your data, and your pledge.
            </p>
          </div>

          {/* Quick Links Row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickLink icon={<ShieldCheck className="h-5 w-5" />} title="Privacy Policy" href="/privacy-policy" />
            <QuickLink icon={<FileText className="h-5 w-5" />} title="Terms of Use" href="/terms-of-use" />
            <QuickLink icon={<HandCoins className="h-5 w-5" />} title="Refund Policy" href="/refund-policy" />
            <QuickLink icon={<Megaphone className="h-5 w-5" />} title="Organizing Disclaimer" href="/organizing-disclaimer" />
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PolicyCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Privacy Policy"
            description="Learn how we protect your personal information and maintain your privacy."
            href="/privacy-policy"
            highlights={["Data encryption", "No third-party sharing", "GDPR compliant"]}
          />
          <PolicyCard
            icon={<FileText className="h-6 w-6" />}
            title="Terms of Use"
            description="Understand your rights and responsibilities as an AIEPC member."
            href="/terms-of-use"
            highlights={["Member obligations", "Service usage", "Account management"]}
          />
          <PolicyCard
            icon={<HandCoins className="h-6 w-6" />}
            title="Refund Policy"
            description="Clear guidelines on refunds and cancellations for your membership."
            href="/refund-policy"
            highlights={["30-day guarantee", "Easy cancellation", "Prorated refunds"]}
          />
          <PolicyCard
            icon={<Megaphone className="h-6 w-6" />}
            title="Organizing Disclaimer"
            description="Important information about AIEPC's organizing activities and legal status."
            href="/organizing-disclaimer"
            highlights={["Legal compliance", "Organizing rights", "Transparency"]}
          />
        </div>
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-white text-[color:var(--brand)]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <AIUnionLogo className="h-10 w-auto mb-4" />
              <p className="text-black max-w-md">
                Building a better future for AI workers through transparency, and mutual support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[color:var(--brand)]">Legal</h3>
              <ul className="space-y-2 text-sm text-blue-600">
                <li><a href="/privacy-policy" className="hover:text-[color:var(--brand)]">Privacy Policy</a></li>
                <li><a href="/terms-of-use" className="hover:text-[color:var(--brand)]">Terms of Use</a></li>
                <li><a href="/refund-policy" className="hover:text-[color:var(--brand)]">Refund Policy</a></li>
                <li><a href="/organizing-disclaimer" className="hover:text-[color:var(--brand)]">Organizing Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[color:var(--brand)]">Contact</h3>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>support@aiunion.org</li>
                <li>1-800-AI-UNION</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-200 text-center text-sm text-blue-600">
            <p>&copy; 2024 AIEPC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
