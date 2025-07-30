"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Phone, ArrowLeft, LogIn } from 'lucide-react';
import { MdLocationPin } from 'react-icons/md';
import { SignupProvider, useSignup } from '@/lib/context/SignupContext';
import { SignupStep } from '@/lib/types/signup';


import AccountTypeStep from './Steps/AccountTypeStep';
import IntentSelectionStep from './Steps/IntentSelectionStep';
import PersonalInfoStep from './Steps/PersonalInfoStep';
import OrganizationInfoStep from './Steps/OrganizationInfoStep';
import RoleSelectionStep from './Steps/RoleSelectionStep';
import VerificationStep from './Steps/VerificationStep';
import CompletionStep from './Steps/CompletionStep';

// Navigation buttons component
const NavigationButtons: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-row items-center justify-between mb-6 gap-3">
      {/* Go Back Button - Always on the left */}
      <button
        onClick={handleGoBack}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        aria-label="Go back to previous page"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleGoBack();
          }
        }}
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="text-sm font-medium hidden sm:inline">Go Back</span>
        <span className="text-sm font-medium sm:hidden">Back</span>
      </button>

      {/* Login Button - Always on the right */}
      <Link
        href="/account/login"
        className="flex items-center gap-2 px-3 sm:px-4 py-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-all duration-200 group border border-orange-200 hover:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 mt-3 sm:mt-0"
        aria-label="Navigate to login page"
        tabIndex={0}
      >
        <LogIn className="w-4 h-4" />
        <span className="text-sm font-medium">Login</span>
      </Link>
    </div>
  );
};

// Progress indicator component
const ProgressIndicator: React.FC = () => {
  const { stepProgress, formData } = useSignup();

  const getStepLabel = (step: SignupStep): string => {
    switch (step) {
      case 'account-type':
        return 'Account Type';
      case 'intent-selection':
        return 'Purpose';
      case 'personal-info':
        return 'Personal Info';
      case 'organization-info':
        return 'Organization Info';
      case 'role-selection':
        return 'Role & Division';
      case 'verification':
        return 'Verification';
      case 'completion':
        return 'Complete';
      default:
        return step;
    }
  };

  const getVisibleSteps = (): SignupStep[] => {
    const baseSteps: SignupStep[] = ['account-type', 'intent-selection'];

    // Add personal or organization info step
    if (formData.accountType === 'Individual') {
      baseSteps.push('personal-info');
    } else if (formData.accountType) {
      baseSteps.push('organization-info');
    }

    // Add role selection step if user has volunteer/staff intents
    const roleRequiredIntents = ['Become Ambassador', 'Join NESA Team', 'Apply as Judge'];
    const hasRoleIntent = formData.intents?.some(intent => roleRequiredIntents.includes(intent));
    if (hasRoleIntent) {
      baseSteps.push('role-selection');
    }

    // Add verification and completion steps
    baseSteps.push('verification');
    baseSteps.push('completion');

    return baseSteps;
  };

  const visibleSteps = getVisibleSteps();
  const currentStepIndex = visibleSteps.indexOf(stepProgress.currentStep);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {visibleSteps.map((step, index) => {
          const isCompleted = stepProgress.completedSteps.includes(step);
          const isCurrent = step === stepProgress.currentStep;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                    ${isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`
                  mt-2 text-xs font-medium text-center
                  ${isCurrent ? 'text-orange-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}
                `}>
                  {getStepLabel(step)}
                </span>
              </div>

              {index < visibleSteps.length - 1 && (
                <div className={`
                  flex-1 h-0.5 mx-2 transition-all duration-200
                  ${isCompleted || (isCurrent && index < currentStepIndex)
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                  }
                `} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Progress percentage */}
      <div className="mt-4 text-center">
        <div className="text-sm text-gray-600">
          Step {currentStepIndex + 1} of {visibleSteps.length}
        </div>
      </div>
    </div>
  );
};

// Error boundary component
class SignupErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Signup flow error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We encountered an error while processing your signup. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main signup flow content component
const SignupFlowContent: React.FC = () => {
  const { stepProgress, error } = useSignup();

  const renderCurrentStep = () => {
    switch (stepProgress.currentStep) {
      case 'account-type':
        return <AccountTypeStep />;
      case 'intent-selection':
        return <IntentSelectionStep />;
      case 'personal-info':
        return <PersonalInfoStep />;
      case 'organization-info':
        return <OrganizationInfoStep />;
      case 'role-selection':
        return <RoleSelectionStep />;
      case 'verification':
        return <VerificationStep />;
      case 'completion':
        return <CompletionStep />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Step not found</h2>
            <p className="text-gray-600">The requested step could not be found.</p>
          </div>
        );
    }
  };

  // Show completion step without internal layout (PublicLayout handles navbar/footer)
  if (stepProgress.currentStep === 'completion') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompletionStep />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
        {/* Left Side - Background Image (matching existing design) */}
        
        <div className="w-full md:w-1/3 relative overflow-hidden hidden md:block">
          <div className="absolute inset-0">
            <Image
              src="/images/Hero section.png"
              alt="Background"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
          
            <div className="flex justify-center items-center flex-grow">
              <Image
                src="/images/NESA Logo 2.png"
                alt="NESA Badge"
                width={250}
                height={250}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-12 bg-white min-h-screen md:min-h-0">
          <div className="max-w-2xl mx-auto signup-form-container">
            {/* Navigation Buttons */}
            <NavigationButtons />

            {/* Progress Indicator */}
            <ProgressIndicator />

            {/* Global Error Message */}
            {error && (
              <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert" aria-live="polite">
                {error}
              </div>
            )}

            {/* Current Step Content */}
            <div
              id="signup-form-content"
              role="main"
              aria-label="Signup form content"
              className="signup-step-content"
              tabIndex={-1}
            >
              {renderCurrentStep()}
            </div>
          </div>
        </div>
    </div>
  );
};

// Main signup flow component with provider
const SignupFlow: React.FC = () => {
  return (
    <SignupErrorBoundary>
      <SignupProvider>
        <SignupFlowContent />
      </SignupProvider>
    </SignupErrorBoundary>
  );
};

export default SignupFlow;
