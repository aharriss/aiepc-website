import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface MembersFormProps {
  step: number;
  setStep: (step: number) => void;
  form: {
    name: string;
    email: string;
    phone: string;
    workplace: string;
    industry: string;
    role: string;
    employeeCount: string;
    why: string;
    agreeToTerms: boolean;
    agreeToPrivacy: boolean;
  };
  setForm: (form: any) => void;
}

export default function MembersForm({ step, setStep, form, setForm }: MembersFormProps) {
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (phone: string): boolean => {
    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      return false;
    }

    // Remove all spaces, dashes, parentheses for validation
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    
    // US format: 10 digits or 11 digits starting with 1
    const usFormat = /^1?\d{10}$/;
    
    // International format: + followed by 1-3 digit country code and 7-15 digits
    const intlFormat = /^\+\d{1,3}\d{7,15}$/;
    
    if (usFormat.test(cleaned) || intlFormat.test(cleaned)) {
      setPhoneError("");
      return true;
    }
    
    setPhoneError("Invalid phone format. Use US (123-456-7890) or international (+1 234 567 8900)");
    return false;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, phone: value });
    if (value.trim()) {
      validatePhoneNumber(value);
    } else {
      setPhoneError("");
    }
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate phone before proceeding
      if (!validatePhoneNumber(form.phone)) {
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrev = () => setStep(Math.max(1, step - 1));

  const indicatorClass = (n: number) =>
    `w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer ${
      step >= n ? "bg-[#00308f] text-white" : "bg-[#B0B7BC] text-gray-800"
    }`;

  const connectorClass = (n: number) =>
    `flex-1 h-[2px] ${step >= n ? "bg-[#00308f]" : "bg-[#A9A9A9]"}`;

  return (
    <Card className="border-[#A9A9A9] sticky top-10">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center w-1/3" onClick={() => setStep(1)}>
            <div className={indicatorClass(1)}>1</div>
            <span className={`text-xs mt-2 ${step >= 1 ? "text-[#00308f] font-semibold" : "text-gray-600"}`}>Apply</span>
          </div>
          <div className={connectorClass(2)}></div>
          <div className="flex flex-col items-center w-1/3" onClick={() => step >= 1 && setStep(2)}>
            <div className={indicatorClass(2)}>2</div>
            <span className={`text-xs mt-2 ${step >= 2 ? "text-[#00308f] font-semibold" : "text-gray-600"}`}>Membership</span>
          </div>
          <div className={connectorClass(3)}></div>
          <div className="flex flex-col items-center w-1/3" onClick={() => step >= 2 && setStep(3)}>
            <div className={indicatorClass(3)}>3</div>
            <span className={`text-xs mt-2 ${step >= 3 ? "text-[#00308f] font-semibold" : "text-gray-600"}`}>Review</span>
          </div>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-[#00308f] mb-4">Apply to Start Your Local Chapter</h2>
            <p className="text-gray-700 text-sm mb-6">
              Applicants for starting local chapters must be members. If you are not a member yet, you'll be directed to the membership sign-up page after completing this form, with your details pre-filled.

            </p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
              <Input placeholder="Full Name" className="border-[#A9A9A9]" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input placeholder="Email" type="email" className="border-[#A9A9A9]" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              
              <div>
                <Input 
                  placeholder="Phone Number" 
                  type="tel" 
                  className={`${phoneError ? "border-red-500 focus:ring-red-500" : "border-[#A9A9A9]"}`}
                  value={form.phone} 
                  onChange={handlePhoneChange}
                  onBlur={() => form.phone && validatePhoneNumber(form.phone)}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>

              <Input placeholder="Workplace" className="border-[#A9A9A9]" value={form.workplace} onChange={(e) => setForm({ ...form, workplace: e.target.value })} />
              <Input placeholder="Industry" className="border-[#A9A9A9]" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} />
              <p className="text-xs text-gray-600 italic">Your name won't be disclosed until safe</p>

              <Input placeholder="Role" className="border-[#A9A9A9]" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
              <Input placeholder="Estimated number of employees at your company" className="border-[#A9A9A9]" value={form.employeeCount} onChange={(e) => setForm({ ...form, employeeCount: e.target.value })} />
              <Textarea placeholder="Why do you want to start a local chapter?" className="border-[#A9A9A9]" value={form.why} onChange={(e) => setForm({ ...form, why: e.target.value })} />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={form.agreeToTerms}
                  onChange={(e) => setForm({ ...form, agreeToTerms: e.target.checked })}
                  className="h-4 w-4 text-[#00308f] border-[#A9A9A9] rounded focus:ring-[#00308f]"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                  I agree to the <a href="/terms-of-use" className="text-[#00308f] underline hover:text-[#5D8AA8]">Terms of Use</a>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  checked={form.agreeToPrivacy}
                  onChange={(e) => setForm({ ...form, agreeToPrivacy: e.target.checked })}
                  className="h-4 w-4 text-[#00308f] border-[#A9A9A9] rounded focus:ring-[#00308f]"
                />
                <label htmlFor="agreeToPrivacy" className="text-sm text-gray-700">
                  I agree to the <a href="/privacy-policy" className="text-[#00308f] underline hover:text-[#5D8AA8]">Privacy Policy</a>
                </label>
              </div>
              <div className="flex items-center justify-between gap-3">
                <Button type="button" variant="ghost" className="text-[#00308f]" disabled>← Back</Button>
                <Button type="submit" className="bg-[#00308f] text-white hover:bg-[#5D8AA8]">Continue →</Button>
              </div>

            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-[#00308f] mb-4">Membership Required</h2>
            <p className="text-gray-700 text-sm mb-6">
              To start a Local Chapter, you must be a member of AI Union. Continue to the membership sign-up page. Your application details will be pre-filled.

            </p>
            <div className="flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" className="text-[#00308f]" onClick={handlePrev}>← Back</Button>
              <Button className="bg-[#00308f] text-white hover:bg-[#5D8AA8]" onClick={() => window.location.href = '/checkout'}>Go to Membership →</Button>
            </div>
            <p className="text-xs text-gray-600 text-center mt-2">
              This pledge is not a union authorization card. <a href="/union-process" className="text-[#00308f] underline hover:text-[#5D8AA8]">Learn more</a>.
            </p>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-[#00308f] mb-4">Review Application</h2>
            <div className="bg-[#B0B7BC] bg-opacity-20 p-4 rounded-lg mb-4">
              <p><strong>Name:</strong> {form.name || "—"}</p>
              <p><strong>Email:</strong> {form.email || "—"}</p>
              <p><strong>Phone:</strong> {form.phone || "—"}</p>
              <p><strong>Workplace:</strong> {form.workplace || "—"}</p>
              <p><strong>Industry:</strong> {form.industry || "—"}</p>
              <p><strong>Role:</strong> {form.role || "—"}</p>
              <p><strong>Employee Count:</strong> {form.employeeCount || "—"}</p>
              <p><strong>Why:</strong> {form.why || "—"}</p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" className="text-[#00308f]" onClick={handlePrev}>← Back</Button>
              <Button className="bg-[#00308f] text-white hover:bg-[#5D8AA8]">Submit for Review →</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}