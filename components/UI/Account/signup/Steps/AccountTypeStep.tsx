"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Building2, Landmark, GraduationCap, Users, Globe } from 'lucide-react';
import { AccountType } from '@/lib/types/signup';
import { accountTypeStepSchema } from '@/lib/validation/signupSchemas';
import { useSignup } from '@/lib/context/SignupContext';
import { ERROR_MESSAGES, createFormError } from '@/lib/types/errors';
import Button from '@/components/Common/Button';
import ErrorDisplay, { FieldError } from '@/components/Common/ErrorDisplay';

interface AccountTypeFormData {
  accountType: AccountType;
}

const accountTypeOptions = [
  {
    value: 'Individual' as AccountType,
    label: 'Individual',
    description: 'Personal account for individual participation',
    icon: User,
    color: 'text-blue-500'
  },
  {
    value: 'NGO' as AccountType,
    label: 'NGO / Non-Profit',
    description: 'Non-governmental organizations and non-profit entities',
    icon: Users,
    color: 'text-green-500'
  },
  {
    value: 'Corporation' as AccountType,
    label: 'Corporation / Company',
    description: 'Private companies and business organizations',
    icon: Building2,
    color: 'text-purple-500'
  },
  {
    value: 'Government' as AccountType,
    label: 'Government / Agency',
    description: 'Government institutions and public agencies',
    icon: Landmark,
    color: 'text-red-500'
  },
  {
    value: 'School' as AccountType,
    label: 'School / Institution',
    description: 'Educational institutions and academic organizations',
    icon: GraduationCap,
    color: 'text-indigo-500'
  },
  {
    value: 'Diaspora Group' as AccountType,
    label: 'Diaspora Group / Association',
    description: 'Diaspora communities and cultural associations',
    icon: Globe,
    color: 'text-orange-500'
  }
];

const AccountTypeStep: React.FC = () => {
  const { formData, updateFormData, nextStep, isLoading, error: contextError } = useSignup();
  const [submitError, setSubmitError] = React.useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<AccountTypeFormData>({
    resolver: zodResolver(accountTypeStepSchema),
    defaultValues: {
      accountType: formData.accountType
    },
    mode: 'onChange'
  });

  const selectedAccountType = watch('accountType');

  const onSubmit = async (data: AccountTypeFormData) => {
    try {
      setSubmitError('');
      updateFormData(data);
      nextStep();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : ERROR_MESSAGES.FORM_SUBMISSION_FAILED);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Account Type
        </h1>
        <p className="text-gray-600">
          Select the type of account that best describes you or your organization.
        </p>
      </div>

      {/* Error Messages */}
      {(contextError || submitError) && (
        <div className="mb-6">
          <ErrorDisplay
            error={contextError || submitError}
            onDismiss={() => setSubmitError('')}
          />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accountTypeOptions.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedAccountType === option.value;

            return (
              <label
                key={option.value}
                className={`
                  relative flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200
                  hover:border-orange-300 focus-within:border-orange-500
                  ${isSelected
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-300 bg-white'
                  }
                `}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                    input?.click();
                  }
                }}
              >
                <input
                  {...register('accountType')}
                  type="radio"
                  value={option.value}
                  className="sr-only"
                  aria-describedby={`${option.value}-description`}
                />

                <div className="flex items-center space-x-3 w-full">
                  <div className={`flex-shrink-0 p-2 rounded-lg ${option.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {option.label}
                    </h3>
                    <p
                      id={`${option.value}-description`}
                      className="text-sm text-gray-600"
                    >
                      {option.description}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            );
          })}
        </div>

        <FieldError
          error={errors.accountType?.message}
          className="text-center"
        />

        <div className="flex justify-end pt-6">
          <Button
            type="submit"
            text="Continue"
            variant="filled"
            size="medium"
            disabled={!isValid || isLoading}
            loading={isLoading}
            className="px-8 py-3"
          />
        </div>
      </form>
    </div>
  );
};

export default AccountTypeStep;
