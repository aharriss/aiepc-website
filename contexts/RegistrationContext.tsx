import { createContext, useContext, useState, ReactNode } from 'react';

interface RegistrationData {
  // Step 1
  jobTitle: string;
  sector: string;
  location: string;
  selectedAssociation: string;
  // Step 3
  email: string;
  authMethod: string;
  // Step 4

  fullName: string;
  country: string;
  state: string;
  zipCode: string;
  phoneNumber: string;

  primaryOccupation: string;
  employer: string;
  employmentStatus: string;

  yearsInRole: string;
  licenseId: string;
  workEmail: string;
  // Step 5
  consentPersonalize: boolean;
  consentAnonymized: boolean;
  // Step 6
  tier: string;
  addOns: string[];
  billingCycle: string;
}

interface RegistrationContextType {
  step: number;
  setStep: (step: number) => void;
  data: RegistrationData;
  updateData: (updates: Partial<RegistrationData>) => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<RegistrationData>({
    jobTitle: '', sector: '', location: '', selectedAssociation: '',
    email: '', authMethod: '', fullName: '', country: '', state: '', zipCode: '', phoneNumber: '',
    primaryOccupation: '', employer: '', employmentStatus: '', yearsInRole: '',

    licenseId: '', workEmail: '', consentPersonalize: true, consentAnonymized: true,
    tier: 'Pro', addOns: [], billingCycle: 'annual'
  });


  const updateData = (updates: Partial<RegistrationData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  return (
    <RegistrationContext.Provider value={{ step, setStep, data, updateData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) throw new Error('useRegistration must be used within RegistrationProvider');
  return context;
};
