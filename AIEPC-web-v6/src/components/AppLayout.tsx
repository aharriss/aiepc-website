import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import CalendlyWidget from "./CalendlyWidget";

export default function AIEPCHomePage() {
  const [email, setEmail] = useState("");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleScheduleConsultation = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center">
      <Navigation />
      {/* Hero with background image + blue overlay */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1800&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#00308f]/85" />
        <div className="relative text-white pt-32 pb-20 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">AI Employee Protection Coalition (AIEPC)</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
              Practical, non-adversarial safeguards for workers—and smoother, lower-risk AI adoption for employers.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#get-started"><Button className="bg-white text-[#00308f] hover:bg-[#5D8AA8] hover:text-white px-6 py-3 rounded-2xl">Get Started →</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="get-started" className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-[#00308f] text-center mb-10">Why AIEPC</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-[#A9A9A9]"><CardContent className="p-6">
            <h3 className="text-xl font-semibold text-[#00308f] mb-2">Balanced by Design</h3>
            <p className="text-gray-800">We safeguard employees' privacy and dignity <em>and</em> help employers deploy AI confidently—with clear policies, transparent metrics, and predictable outcomes.</p>
          </CardContent></Card>
          <Card className="border-[#A9A9A9]"><CardContent className="p-6">
            <h3 className="text-xl font-semibold text-[#00308f] mb-2">Privacy & Transparency</h3>
            <p className="text-gray-800">Data boundaries, purpose limitation, and understandable performance metrics so people know what's tracked and why.</p>
          </CardContent></Card>
          <Card className="border-[#A9A9A9]"><CardContent className="p-6">
            <h3 className="text-xl font-semibold text-[#00308f] mb-2">Skills for the Future</h3>
            <p className="text-gray-800">Reskilling and transition support to move teams from anxiety to adoption—and to higher-value work.</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Problems We Solve (neutral tone) */}
      <section className="w-full max-w-6xl px-6 pb-6">
        <div className="bg-[#B0B7BC] bg-opacity-20 border border-[#A9A9A9] rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-[#00308f] mb-4">Problems we help organizations address</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-900">
            <ul className="list-disc list-inside space-y-2">
              <li>Role changes and job insecurity driven by automation.</li>
              <li>Opaque, data-driven decisions that feel arbitrary to employees.</li>
              <li>Monitoring that risks overreach and erodes trust.</li>
              <li>Dynamic scheduling that harms predictability and morale.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Bias and fairness in talent decisions and productivity metrics.</li>
              <li>Blurry work–life boundaries and burnout from 24/7 tools.</li>
              <li>Skills gaps as AI accelerates new ways of working.</li>
              <li>Unclear accountability when automated systems err.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold text-[#00308f] text-center mb-10">What we offer</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-900">
          <Card className="border-[#A9A9A9]"><CardContent className="p-6">
            <h3 className="font-semibold text-[#00308f] mb-2">AI Governance & Transparency Kit</h3>
            <p className="text-sm">Templates for clear AI policies, metric transparency, and explanation access for employees.</p>
          </CardContent></Card>
          <Card className="border-[#A9A9A9]"><CardContent className="p-6">
            <h3 className="font-semibold text-[#00308f] mb-2">Privacy & Monitoring Guidelines</h3>
            <p className="text-sm">Balanced frameworks that protect worker dignity while meeting business needs.</p>
          </CardContent></Card>
          <Card className="border-[#A9A9A9]"><CardContent className="p-6">
            <h3 className="font-semibold text-[#00308f] mb-2">Skills Transition Programs</h3>
            <p className="text-sm">Reskilling pathways and change management to help teams adapt confidently.</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl px-6 py-16">
        <div className="bg-[#00308f] text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6 opacity-95">
            Join organizations creating better AI workplaces for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              className="bg-white text-[#00308f] hover:bg-[#5D8AA8] hover:text-white px-8 py-3 rounded-2xl"
            >
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-[#00308f] bg-white hover:bg-[#5D8AA8] hover:text-white px-8 py-3 rounded-2xl">
              Download Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-12 px-6 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-[#00308f] text-lg mb-4">AIEPC</h3>
              <p className="text-gray-600 text-sm">
                AI Employee Protection Coalition - Practical safeguards for the future of work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#00308f] mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00308f] text-sm">Policy Templates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00308f] text-sm">Best Practices</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00308f] text-sm">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#00308f] mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00308f] text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00308f] text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00308f] text-sm">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#00308f] mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/legal-center" className="text-gray-600 hover:text-[#00308f] text-sm">Legal Center: Terms of Use, Privacy Policy, Refund Policy and Organizing Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">&copy; 2025 AI Employee Protection Coalition. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Calendly Widget */}
      <CalendlyWidget 
        url="https://calendly.com/your-calendly-link" 
        isOpen={isCalendlyOpen} 
        onClose={handleCloseCalendly} 
      />
    </div>
  );
}