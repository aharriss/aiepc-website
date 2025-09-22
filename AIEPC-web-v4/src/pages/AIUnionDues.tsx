import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/contexts/AppContext";
import Layout from "@/components/Layout";
export default function AIUnionDues() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState("standard");
  const { setIsMember } = useAppContext();

  const handleJoinComplete = () => {
    setIsMember(true);
    window.location.href = '/dashboard';
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-lg shadow-lg rounded-2xl border border-[#A9A9A9]">
          <CardContent className="p-8">
            {/* Header */}
            <h1 className="text-2xl font-bold text-center mb-6 text-[#00308f]">
              AI Union Membership
            </h1>

            {step === 1 && (
              <div className="space-y-4">
                <Input placeholder="Full Name" className="border-[#A9A9A9]" />
                <Input placeholder="Email" className="border-[#A9A9A9]" />
                <Input placeholder="Workplace / Industry" className="border-[#A9A9A9]" />
                <Input placeholder="Role" className="border-[#A9A9A9]" />

                <div className="flex items-center space-x-2 mt-4">
                  <input type="checkbox" id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Membership Terms & Privacy Policy
                  </Label>
                </div>

                <Button
                  className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]"
                  onClick={() => setStep(2)}
                >
                  Continue →
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-[#00308f]">
                  Choose Your Dues Plan
                </h2>
                <RadioGroup
                  defaultValue="standard"
                  onValueChange={(val) => setPlan(val)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 border p-3 rounded-lg bg-[#B0B7BC] bg-opacity-20">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="w-full">
                      $20 / Month (Standard Plan)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border p-3 rounded-lg bg-[#B0B7BC] bg-opacity-20">
                    <RadioGroupItem value="reduced" id="reduced" />
                    <Label htmlFor="reduced" className="w-full">
                      $10 / Month (Reduced Income Plan)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border p-3 rounded-lg bg-[#B0B7BC] bg-opacity-20">
                    <RadioGroupItem value="annual" id="annual" />
                    <Label htmlFor="annual" className="w-full">
                      $200 / Year (Save 15%)
                    </Label>
                  </div>
                </RadioGroup>

                <Button
                  className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]"
                  onClick={() => setStep(3)}
                >
                  Secure Join →
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center space-y-6">
                <h2 className="text-xl font-bold text-[#00308f]">
                  ✅ Welcome to AI Union!
                </h2>
                <p className="text-gray-700">
                  You're now an <strong>Active Member</strong> of AI Union. Your dues plan: <br />
                  <span className="font-semibold capitalize">{plan}</span>
                </p>

                <div className="bg-[#B0B7BC] bg-opacity-20 p-4 rounded-lg text-left">
                  <h3 className="font-semibold text-[#00308f] mb-2">How Your Dues Are Used:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-800">
                    <li>40%: Collective bargaining & legal defense</li>
                    <li>30%: Worker organizing & outreach</li>
                    <li>20%: Training & education programs</li>
                    <li>10%: Union operations</li>
                  </ul>
                </div>

                <Button 
                  className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]"
                  onClick={handleJoinComplete}
                >
                  Access Member Dashboard →
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}