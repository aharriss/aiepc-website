import { useRegistration } from '@/contexts/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Step2BenefitsPricing() {
  const { setStep } = useRegistration();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#00308f] mb-6">Benefits & Pricing</h1>
      
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">What You Get</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Access to exclusive training and resources</li>
            <li>Legal support and workplace advocacy</li>
            <li>Networking with industry peers</li>
            <li>Discounts on certifications and tools</li>
            <li>Monthly newsletters and policy updates</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Member Testimonials</h2>
          <blockquote className="border-l-4 border-[#00308f] pl-4 italic text-gray-700 mb-4">
            "This association gave me the tools to negotiate better pay and understand my rights." — Sarah M.
          </blockquote>
          <blockquote className="border-l-4 border-[#00308f] pl-4 italic text-gray-700">
            "Finally, a community that understands the challenges we face with AI in the workplace." — James T.
          </blockquote>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Pricing</h2>
          <p className="text-gray-700 mb-2"><strong>Monthly:</strong> $20/month</p>
          <p className="text-gray-700 mb-2"><strong>Annual:</strong> $200/year (save $40)</p>
          <p className="text-sm text-gray-600">Student/low-income pricing available upon verification</p>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setStep(1)}>← Back</Button>
        <Button onClick={() => setStep(3)} className="bg-[#00308f] hover:bg-[#5D8AA8]">Join This Association →</Button>
      </div>
    </div>
  );
}
