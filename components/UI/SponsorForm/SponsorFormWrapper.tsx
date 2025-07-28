'use client';

import { useState } from 'react';
import SponsorStep1 from './SponsorStep1';
import SponsorshipPlans from './SponsorshipPlans';

export type SponsorFormData = {
  company_name: string;
  name: string;
  email: string;
  phone: string;
  Business_reg_no: string;
  selectedPlan?: {
    name: string;
    price: number;
    details?: string[];
  };
};

export default function SponsorFormWrapper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SponsorFormData>({
    company_name: '',
    name: '',
    email: '',
    phone: '',
    Business_reg_no: '',
    selectedPlan: undefined
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleDataUpdate = (data: Partial<SponsorFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleFinalSubmit = async () => {
    console.log('Final form data:', formData);
    // Call sponsorapplication() or any API submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {step === 1 && (
        <SponsorStep1
          data={formData}
          onUpdate={handleDataUpdate}
          onNext={nextStep}
        />
      )}

      {step === 2 && (
        <SponsorshipPlans
          selectedPlan={formData.selectedPlan}
          onSelect={(plan) => handleDataUpdate({ selectedPlan: plan })}
          onSubmit={handleFinalSubmit}
          onBack={prevStep}
        />
      )}
    </div>
  );
}