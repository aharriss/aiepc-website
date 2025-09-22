import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import MembersForm from "@/components/MembersForm";
import Layout from "@/components/Layout";
export default function MembersPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    workplace: "",
    role: "",
    employeeCount: "",
    why: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756363661610_ebe4b4e1.webp')",
          }}
        />
        <div className="absolute inset-0 bg-[#00308f]/80" />
        <div className="relative text-white py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Problems Workers Face in the Age of AI</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
              Understand the challenges, then take action by starting a local division.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center p-8">
        {/* Our Mission Section */}
        <div className="w-full max-w-6xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#00308f] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
              We exist to ensure that AI empowers people—not exploit them. We do this by advocating for policy reform, and fighting for transparency, fairness, and protections that ensures this technology serves all workers.
            </p>
            <button className="bg-[#00308f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Join Our Mission →
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#00308f] mb-6 text-center">Membership Benefits</h3>
            <p className="text-center text-gray-600 mb-8">Join our community to advocate for your protection in the AI supported workforce.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-[#A9A9A9]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-[#00308f] mb-2">AI Training Resources</h4>
                  <p className="text-gray-700 text-sm">Stay ahead with education on AI tools and workplace rights.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#A9A9A9]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-[#00308f] mb-2">Privacy Advocacy</h4>
                  <p className="text-gray-700 text-sm">Fight against invasive surveillance and data collection.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#A9A9A9]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-[#00308f] mb-2">Job Security Support</h4>
                  <p className="text-gray-700 text-sm">Protect against unfair automation and displacement.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#A9A9A9]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-[#00308f] mb-2">Bias Prevention</h4>
                  <p className="text-gray-700 text-sm">Combat algorithmic discrimination in hiring and evaluation.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#A9A9A9]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-[#00308f] mb-2">Policy Advocacy</h4>
                  <p className="text-gray-700 text-sm">Shape legislation protecting workers in the AI economy.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#A9A9A9]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-[#00308f] mb-2">Community Support</h4>
                  <p className="text-gray-700 text-sm">Connect with fellow workers facing similar AI challenges.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl grid grid-cols-[65%_35%] gap-10">
          <div className="space-y-8">
            {/* The Risks We Face Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-[#00308f]">The Risks We Face</h2>
            </div>
            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-[#00308f] mb-2">1. Economic & Job Security Risks</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Job Displacement / Replacement →</strong> AI agents automate roles.</li>
                  <li><strong>Wage Suppression & Labor Arbitrage →</strong> AI used to minimize labor costs, reduce hours, or push workers into gig roles.</li>
                  <li><strong>Deskilling & Dependence →</strong> Reliance on AI tools reduces human expertise, making workers easier to replace.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-[#00308f] mb-2">2. Privacy & Autonomy Risks</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Surveillance & Monitoring →</strong> Keystrokes, webcam analysis, productivity trackers, even emotional monitoring.</li>
                  <li><strong>Manipulative Nudging →</strong> AI agents subtly guide behavior to work against employees best interests.</li>
                  <li><strong>Erosion of Work-Life Boundaries →</strong> AI-driven scheduling demands 24/7 availability and blurs personal time.</li>
                  <li><strong>Retaliation via Data Misuse →</strong> Analyzed communications, wellness data, or personal information leveraged against employees.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-[#00308f] mb-2">3. Psychological & Social Risks</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Dehumanization & Algorithmic Management →</strong> "AI bosses" remove empathy and human judgment from leadership.</li>
                  <li><strong>Constant Comparison to AI Benchmarks →</strong> Pressure to keep up with machines leads to burnout and anxiety.</li>
                  <li><strong>Emotional Strain & Alienation →</strong> Workers feel expendable, voiceless, or alienated when decisions are opaque.</li>
                  <li><strong>Isolation & Division →</strong> AI-enabled personalization or "divide and conquer" tactics reduce solidarity among employees.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#A9A9A9]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-[#00308f] mb-2">4. Legal, Ethical & Structural Risks</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Bias in HR & Performance Algorithms →</strong> Discrimination based on gender, race, age, disability, etc.</li>
                  <li><strong>Opaque "Black Box" Decisions →</strong> The potential for employees to not be able to contest automated evaluations or firings.</li>
                  <li><strong>Shifted Liability →</strong> Employees may be blamed for mistakes caused by AI tools.</li>
                  <li><strong>Weak Regulatory Oversight →</strong> Laws lag behind AI deployment, leaving employees unprotected.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Learn More Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-[#00308f] mb-4 text-center">Learn More</h2>
              <p className="text-lg text-gray-700 text-center mb-8">
                Understanding the risks and best practices in the age of AI is the first step to protecting yourself.
              </p>
              
              <div className="space-y-4">
                <Card className="border-[#A9A9A9]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00308f] mb-1">Algorithmic Transparency</h3>
                        <p className="text-gray-700 text-sm">Know how AI systems make decisions that affect your work, pay, and career advancement.</p>
                      </div>
                      <span className="text-2xl text-[#00308f] font-bold">+</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#A9A9A9]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00308f] mb-1">Human Review</h3>
                        <p className="text-gray-700 text-sm">Request human oversight for any AI-driven workplace decision that impacts you.</p>
                      </div>
                      <span className="text-2xl text-[#00308f] font-bold">+</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#A9A9A9]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00308f] mb-1">Data Privacy</h3>
                        <p className="text-gray-700 text-sm">Control how your personal and work data is collected, stored, and used by AI systems.</p>
                      </div>
                      <span className="text-2xl text-[#00308f] font-bold">+</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#A9A9A9]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00308f] mb-1">Non-Discrimination</h3>
                        <p className="text-gray-700 text-sm">Protection from biased AI systems that discriminate based on protected characteristics.</p>
                      </div>
                      <span className="text-2xl text-[#00308f] font-bold">+</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#A9A9A9]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00308f] mb-1">Reasonable Accommodation</h3>
                        <p className="text-gray-700 text-sm">Ensure AI systems accommodate disabilities and diverse working styles.</p>
                      </div>
                      <span className="text-2xl text-[#00308f] font-bold">+</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <MembersForm step={step} setStep={setStep} form={form} setForm={setForm} />
          </div>
        </div>
      </div>
    </Layout>
  );
}