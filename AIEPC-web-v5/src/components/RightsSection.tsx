import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rights = [
  {
    title: "Right to Algorithmic Transparency",
    description: "Know how AI systems make decisions that affect your work, pay, and career advancement.",
    details: "You have the right to understand the criteria, data sources, and decision-making processes of any AI system used to evaluate your performance, determine your pay, or make hiring decisions."
  },
  {
    title: "Right to Human Review",
    description: "Request human oversight for any AI-driven workplace decision that impacts you.",
    details: "No worker should face termination, discipline, or denied opportunities based solely on algorithmic decisions. You can demand human review and appeal processes."
  },
  {
    title: "Right to Data Privacy",
    description: "Control how your personal and work data is collected, stored, and used by AI systems.",
    details: "Your biometric data, productivity metrics, and personal information cannot be collected or used without clear consent and legitimate business purposes."
  },
  {
    title: "Right to Non-Discrimination",
    description: "Protection from biased AI systems that discriminate based on protected characteristics.",
    details: "AI systems must be regularly audited for bias and discrimination. You have the right to challenge unfair treatment by algorithmic systems."
  },
  {
    title: "Right to Reasonable Accommodation",
    description: "Ensure AI systems accommodate disabilities and diverse working styles.",
    details: "AI monitoring and evaluation systems must be adjusted to accommodate workers with disabilities and different working patterns."
  },
  {
    title: "Right to Collective Bargaining",
    description: "Negotiate AI implementation and policies through union representation.",
    details: "Workers have the right to collectively bargain over AI deployment, monitoring systems, and workplace automation policies."
  }
];

export default function RightsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="w-full py-16 bg-gradient-to-b from-blue-800 to-blue-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Know Your Rights</h2>
          <p className="text-white max-w-2xl mx-auto">
            Understanding your workplace rights in the age of AI is the first step to protecting them.
          </p>
        </div>
        <div className="space-y-4">
          {rights.map((right, index) => (
            <Card key={index} className="border-[#A9A9A9] hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#00308f] text-lg">{right.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="text-[#00308f] hover:bg-[#00308f] hover:text-white"
                  >
                    {expandedCard === index ? '−' : '+'}
                  </Button>
                </div>
                <p className="text-gray-700 mb-3">{right.description}</p>
                {expandedCard === index && (
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-[#00308f]">
                    <p className="text-gray-800 text-sm">{right.details}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}