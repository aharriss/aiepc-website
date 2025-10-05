import { RegistrationProvider, useRegistration } from '@/contexts/RegistrationContext';
import Layout from '@/components/Layout';
import Step1AssociationSelection from '@/components/registration/Step1AssociationSelection';
import Step2BenefitsPricing from '@/components/registration/Step2BenefitsPricing';
import Step3CreateAccount from '@/components/registration/Step3CreateAccount';
import Step4IdentityProfession from '@/components/registration/Step4IdentityProfession';
import Step5PrivacyConsent from '@/components/registration/Step5PrivacyConsent';
import Step6MembershipTier from '@/components/registration/Step6MembershipTier';
import Step7Payment from '@/components/registration/Step7Payment';
import Step8Confirmation from '@/components/registration/Step8Confirmation';

function RegistrationFlow() {
  const { step } = useRegistration();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
              <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= s ? 'bg-[#00308f] text-white' : 'bg-gray-300 text-gray-600'}`}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && <Step1AssociationSelection />}
        {step === 2 && <Step2BenefitsPricing />}
        {step === 3 && <Step3CreateAccount />}
        {step === 4 && <Step4IdentityProfession />}
        {step === 5 && <Step5PrivacyConsent />}
        {step === 6 && <Step6MembershipTier />}
        {step === 7 && <Step7Payment />}
        {step === 8 && <Step8Confirmation />}
      </div>
    </Layout>
  );
}

export default function RegistrationPage() {
  return (
    <RegistrationProvider>
      <RegistrationFlow />
    </RegistrationProvider>
  );
}
