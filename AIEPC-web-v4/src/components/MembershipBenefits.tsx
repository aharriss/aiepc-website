import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Legal Protection",
    description: "Expert legal support for workplace AI disputes and discrimination cases.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326498630_6fab5ce0.webp"
  },
  {
    title: "Collective Bargaining",
    description: "Negotiate AI policies and protections with unified worker power.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326500552_af3ceff4.webp"
  },
  {
    title: "AI Training Resources",
    description: "Stay ahead with education on AI tools and workplace rights.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326502527_69333a5a.webp"
  },
  {
    title: "Privacy Advocacy",
    description: "Fight against invasive surveillance and data collection.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326504256_71429ddd.webp"
  },
  {
    title: "Job Security Support",
    description: "Protect against unfair automation and displacement.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326506012_a50836ff.webp"
  },
  {
    title: "Bias Prevention",
    description: "Combat algorithmic discrimination in hiring and evaluation.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326507734_8ae48053.webp"
  },
  {
    title: "Policy Advocacy",
    description: "Shape legislation protecting workers in the AI economy.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326509658_671f0ab7.webp"
  },
  {
    title: "Community Support",
    description: "Connect with fellow workers facing similar AI challenges.",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326511414_9937f086.webp"
  }
];

export default function MembershipBenefits() {
  return (
    <div className="w-full bg-[#F8F9FA] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#00308f] mb-4">Membership Benefits</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join thousands of workers protecting their rights and dignity in the AI workplace.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-[#A9A9A9] hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <img src={benefit.image} alt={benefit.title} className="w-16 h-16 mx-auto mb-4 rounded-lg" />
                <h3 className="font-semibold text-[#00308f] mb-2">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}