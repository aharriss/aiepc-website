import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326492360_b3326dcf.webp",
    quote: "AI Union helped me fight algorithmic bias in my performance reviews. Now I have fair evaluations and my voice is heard."
  },
  {
    name: "Marcus Johnson",
    role: "Factory Supervisor",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326494221_bf02b26d.webp",
    quote: "When automation threatened our jobs, AI Union negotiated retraining programs. We kept our dignity and our livelihoods."
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Healthcare Worker",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326495946_492b2c62.webp",
    quote: "The privacy protections we won mean AI can't monitor our every move. We can focus on patient care, not surveillance."
  },
  {
    name: "James Park",
    role: "Delivery Driver",
    image: "https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756326497754_12fd5d63.webp",
    quote: "Thanks to AI Union, route optimization AI can't penalize us for bathroom breaks or helping customers. Humanity matters."
  }
];

export default function TestimonialSection() {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#00308f] mb-4">Real Stories, Real Impact</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from members who've won workplace protections and dignity through collective action.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-[#A9A9A9] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#00308f]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}