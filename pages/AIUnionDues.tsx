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
  const [country, setCountry] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    stateProvince: "",
    zipCode: "",
    phoneNumber: "",
    workplace: "",
    industry: "",
    role: ""
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    country: false,
    industry: false,
    role: false
  });
  const { setIsMember } = useAppContext();

  const handleJoinComplete = () => {
    setIsMember(true);
    window.location.href = '/dashboard';
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateAndContinue = () => {
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim(),
      country: !formData.country,
      industry: !formData.industry.trim(),
      role: !formData.role.trim()
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    setStep(2);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-lg shadow-lg rounded-2xl border border-[#A9A9A9]">
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold text-center mb-6 text-[#00308f]">
              AIEPC Membership
            </h1>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Full Name*</Label>
                  <Input 
                    placeholder="Full Name" 
                    className={`border-[#A9A9A9] ${errors.fullName ? 'border-red-500 border-2' : ''}`}
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Email*</Label>
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    className={`border-[#A9A9A9] ${errors.email ? 'border-red-500 border-2' : ''}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Select Country*</Label>
                  <select 
                    className={`w-full px-3 py-2 border border-[#A9A9A9] rounded-md ${errors.country ? 'border-red-500 border-2' : ''}`}
                    value={formData.country}
                    onChange={(e) => {
                      handleInputChange('country', e.target.value);
                      setCountry(e.target.value);
                    }}
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <Input 
                  placeholder="State/Province (optional)" 
                  className="border-[#A9A9A9]"
                  value={formData.stateProvince}
                  onChange={(e) => handleInputChange('stateProvince', e.target.value)}
                />
                
                {country === "United States" && (
                  <Input 
                    placeholder="ZIP Code (optional)" 
                    className="border-[#A9A9A9]"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  />
                )}
                
                <Input 
                  placeholder="Phone Number (optional)" 
                  type="tel" 
                  className="border-[#A9A9A9]"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
                
                <Input 
                  placeholder="Workplace (optional)" 
                  className="border-[#A9A9A9]"
                  value={formData.workplace}
                  onChange={(e) => handleInputChange('workplace', e.target.value)}
                />
                
                <div>
                  <Label className="text-sm font-medium">Industry*</Label>
                  <Input 
                    placeholder="Industry" 
                    className={`border-[#A9A9A9] ${errors.industry ? 'border-red-500 border-2' : ''}`}
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Role*</Label>
                  <Input 
                    placeholder="Role" 
                    className={`border-[#A9A9A9] ${errors.role ? 'border-red-500 border-2' : ''}`}
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <input type="checkbox" id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Membership Terms & Privacy Policy
                  </Label>
                </div>

                <Button
                  className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]"
                  onClick={validateAndContinue}
                >
                  Continue →
                </Button>
                
                <p className="text-xs text-gray-600 text-center mt-2">
                  * Fields marked with an asterisk are required
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-[#00308f] mb-3">How Your Dues Are Used:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>30%:</strong> Legal defense</li>
                    <li><strong>25%:</strong> Employee organizing & outreach</li>
                    <li><strong>25%:</strong> Training & education programs</li>
                    <li><strong>20%:</strong> Operations</li>
                  </ul>
                  <p className="text-xs text-gray-600 italic mt-2">(Dues allocations will change as needs change.)</p>
                </div>
                
                <h2 className="text-lg font-semibold text-[#00308f]">Choose Your Dues Plan</h2>

                <RadioGroup defaultValue="standard" onValueChange={(val) => setPlan(val)} className="space-y-3">
                  <div className="flex items-center space-x-3 border p-3 rounded-lg bg-[#B0B7BC] bg-opacity-20">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="w-full">$20 / Month (Standard Plan)</Label>
                  </div>
                  <div className="flex items-center space-x-3 border p-3 rounded-lg bg-[#B0B7BC] bg-opacity-20">
                    <RadioGroupItem value="reduced" id="reduced" />
                    <Label htmlFor="reduced" className="w-full">$10 / Month (Reduced Income Plan)</Label>
                  </div>
                  <div className="flex items-center space-x-3 border p-3 rounded-lg bg-[#B0B7BC] bg-opacity-20">
                    <RadioGroupItem value="annual" id="annual" />
                    <Label htmlFor="annual" className="w-full">$200 / Year (Save 15%)</Label>
                  </div>
                </RadioGroup>
                <Button className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]" onClick={() => setStep(3)}>
                  Secure Join →
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center space-y-6">
                <h2 className="text-xl font-bold text-[#00308f]">✅ Welcome to AIEPC!</h2>
                <p className="text-gray-700">
                  You're now an <strong>Active Member</strong> of AIEPC. Your dues plan: <br />
                  <span className="font-semibold capitalize">{plan}</span>
                </p>

                <Button className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]" onClick={handleJoinComplete}>
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
