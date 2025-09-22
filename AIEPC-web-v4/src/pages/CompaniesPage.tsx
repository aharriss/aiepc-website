import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

export default function CompaniesPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center">
        {/* Hero with background image + blue overlay */}
        <section className="relative w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-[#00308f]/80" />
          <div className="relative text-white py-20 px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Partner with AI Union</h1>
              <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
                Co-govern AI with your workforce to reduce risk, accelerate adoption, and build a trusted, future-ready business.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="#contact">
                  <Button className="bg-white text-[#00308f] hover:bg-[#5D8AA8] hover:text-white px-6 py-3 rounded-2xl">
                    Contact AI Union →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section id="why" className="w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-[#00308f] text-center mb-10">Why employers should partner with AI Union</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Risk, Compliance & Legal */}
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#00308f] mb-3">Risk, Compliance & Legal Defensibility</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>De-risk AI deployments with human review, bias testing, and audit trails.</li>
                  <li>Stay ahead of emerging AI and privacy regulations via co-governance.</li>
                  <li>Improve legal posture with documented worker consultation and fair process.</li>
                  <li>Achieve labor peace and predictability around tech rollouts.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Productivity, Adoption & Quality */}
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#00308f] mb-3">Productivity, Adoption & Quality</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Higher adoption when workers help shape tools—faster ROI.</li>
                  <li>Fewer failed implementations via early frontline feedback.</li>
                  <li>Better decisions from human + AI workflows designed with users.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cost, Retention & Workforce Planning */}
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#00308f] mb-3">Cost, Retention & Workforce Planning</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Lower turnover and absenteeism with transparent AI and reskilling.</li>
                  <li>Stabilize staffing and overtime with fair, predictable metrics.</li>
                  <li>Redeploy talent through upskilling instead of churn and rehiring.</li>
                  <li>Signal control to insurers and risk-sensitive customers.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Brand, Trust & Market Access */}
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#00308f] mb-3">Brand, Trust & Market Access</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Employer-of-choice halo from credible worker-centered AI practices.</li>
                  <li>Strengthen buyer confidence and pass supplier due diligence.</li>
                  <li>Boost ESG credibility by elevating the S and G with verifiable governance.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Governance, Security & Privacy */}
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#00308f] mb-3">Data Governance, Security & Privacy</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Clear boundaries: data minimization, purpose limitation, and worker consent.</li>
                  <li>Reduce insider risk by replacing opaque monitoring with transparent norms.</li>
                  <li>Joint incident response playbooks to contain algorithmic harms.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Innovation & Continuous Improvement */}
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#00308f] mb-3">Innovation & Continuous Improvement</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Frontline councils surface improvements dashboards miss.</li>
                  <li>Replace risky workarounds with co-designed tools and shared KPIs.</li>
                  <li>Quarterly reviews align productivity, quality, fairness, and well-being.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Programs */}
        <section className="w-full max-w-6xl px-6 pb-12">
          <div className="bg-[#B0B7BC] bg-opacity-20 border border-[#A9A9A9] rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-[#00308f] mb-4">Practical partnership programs</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800">
              <ul className="list-disc list-inside space-y-1">
                <li>Joint AI Governance Council</li>
                <li>Algorithmic Impact Assessments (bias, privacy, job-impact)</li>
                <li>Human Review Protocols (no algorithmic firing/discipline)</li>
                <li>Transparent Metrics Charter</li>
                <li>Surveillance Limits & Privacy Zones</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>Reskilling & Redeployment Academy</li>
                <li>Frontline Tech Ambassadors</li>
                <li>AI Incident Hotline & Ombudsperson</li>
                <li>Change-Management Playbook</li>
                <li>Shared KPI Dashboard (quarterly)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials / Social Proof */}
        <section className="w-full max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold text-[#00308f] mb-4 text-center">What Folks are Saying...</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-[#A9A9A9]"><CardContent className="p-6 text-lg italic text-gray-800">"Partnering with AI Union turned our AI rollout into a competitive advantage—fewer grievances, faster adoption."</CardContent></Card>
            <Card className="border-[#A9A9A9]"><CardContent className="p-6 text-lg italic text-gray-800">"Co-governed AI shipped faster, failed less, and cleared internal audit with room to spare."</CardContent></Card>
            <Card className="border-[#A9A9A9]"><CardContent className="p-6 text-lg italic text-gray-800">"Reskilling with the union kept our teams intact—and our customers noticed the quality bump."</CardContent></Card>
            <Card className="border-[#A9A9A9]"><CardContent className="p-6 text-lg italic text-gray-800">"Trust went up, attrition went down. That alone paid for the program."</CardContent></Card>
          </div>
        </section>

        {/* CTA: Contact */}
        <section id="contact" className="w-full bg-[#5D8AA8] text-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-3">Let's build worker-centered AI—together.</h2>
              <p className="opacity-95 mb-6">Reach out for co-governance pilots, contract language, and implementation support tailored to your business.</p>
              <div className="text-sm opacity-90">Prefer email? <span className="font-semibold">partnerships@aiunion.org</span></div>
            </div>

            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6 bg-white text-gray-900 rounded-xl">
                {!submitted ? (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input placeholder="Full Name" className="border-[#A9A9A9]" required />
                      <Input type="email" placeholder="Work Email" className="border-[#A9A9A9]" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input placeholder="Company" className="border-[#A9A9A9]" required />
                      <Input placeholder="Title" className="border-[#A9A9A9]" />
                    </div>
                    <Textarea placeholder="What partnership are you interested in? (e.g., governance council, assessments, training)" className="border-[#A9A9A9]" rows={5} />
                    <Button type="submit" className="w-full bg-[#00308f] text-white hover:bg-[#00308f]/90">Request Partnership Consultation →</Button>
                  </form>
                ) : (
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#00308f] mb-2">Thanks! We've received your request.</h3>
                    <p className="text-gray-700 mb-4">Someone from AI Union will contact you shortly to schedule a consultation.</p>
                    <a href="#why"><Button className="bg-[#00308f] text-white hover:bg-[#00308f]/90">Back to Top</Button></a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}