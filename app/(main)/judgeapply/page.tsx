'use client';
import PhoneInput from "react-phone-input-2";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CountrySelector as CountrySelect } from 'react-international-phone';
import "react-phone-input-2/lib/style.css";
import Button from "@/components/Common/Button";
import { submitJudgeApplication } from "@/lib/services/judgeVerificationService";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiUpload, FiX } from "react-icons/fi";
import { useRouter } from 'next/navigation';


// Validation schema
const formSchema = z.object({
  full_name: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(5, 'Phone is required'),
  state: z.string().min(2, 'State/Region is required'),
  education: z.string().min(2, 'Educational background is required'),
  experience: z.string().min(5, 'Experience is required'),
  motivation: z.string().min(5, 'Motivation statement is required'),
  profileImage: z.any(),
  documents: z.any(),
});

type JudgeFormData = z.infer<typeof formSchema>;

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/judgeapply.png"
          alt="Judge Application Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-12 lg:px-16 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
        >
          New Education Standard Award:<br />
          <span className="text-orange-400">Judge Application</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light"
        >
          Join us as a judge for the New Education Standard Awards Africa and help recognize excellence in education across the continent. We're looking for experienced and passionate individuals with expertise in leadership.
        </motion.p>
      </div>
    </div>
  );
};

const JudgeApplicationForm: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<JudgeFormData>({
    resolver: zodResolver(formSchema),
  });

  const [phoneCountry, setPhoneCountry] = useState<string>('ng');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImageName, setProfileImageName] = useState('');
  const [documentsName, setDocumentsName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<JudgeFormData | null>(null);

  const pophandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // On submit
  const onSubmit = async (data: JudgeFormData) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  // Handler for confirming the application in the modal
  const handleApply = async (data: JudgeFormData) => {
    if (!data) return;
    setLoading(true);
    try {
      // Submit application and trigger email verification
      const response = await submitJudgeApplication({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        state: data.state,
        education: data.education,
        experience: data.experience,
        motivation: data.motivation,
        profileImage: data.profileImage,
        documents: data.documents
      });

      if (response.success) {
        setShowConfirmation(false);
        setShowSuccess(true);
      } else {
        throw new Error(response.message || 'Application submission failed');
      }
    } catch (error: any) {
      console.error("Failed to create Application:", error.message);
      setErrorMessage(error.message || "An unexpected error occurred.");
      setShowConfirmation(false);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Application Form Section */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Submit Applicant Information
            </h2>
            <div className="w-12 h-1 bg-orange-500 rounded"></div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
              {/* Row 1: Full Name and Experience */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor='full_name' className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 bg-gray-50"
                    placeholder="Name of Individual"
                    {...register('full_name')}
                  />
                  {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>}
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Experience
                  </label>
                  <textarea
                    id="experience"
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none bg-gray-50"
                    placeholder="Write about your professional experience"
                    {...register("experience")}
                  />
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                </div>
              </div>

              {/* Row 2: Email and Upload Documents */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 bg-gray-50"
                    type="email"
                    {...register('email')}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Upload Documents */}
                <div className="space-y-2">
                  <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
                    Upload Documents
                  </label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 min-h-[120px] flex items-center justify-center bg-gray-50"
                    onClick={() => document.getElementById('documents')?.click()}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <FiUpload className="w-8 h-8 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">
                          Drag and drop documents here or <span className="text-orange-600 font-medium">Click here</span> to upload
                        </p>
                        <p className="text-xs text-orange-500 mt-1">
                          📄 Upload your resume, passport, and other supporting documents
                        </p>
                      </div>
                      {documentsName && (
                        <p className="mt-2 text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded">
                          {documentsName}
                        </p>
                      )}
                    </div>
                  </div>
                  <input
                    type="file"
                    id="documents"
                    className="hidden"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    {...register('documents')}
                    onChange={(e) => {
                      setDocumentsName(Array.from(e.target.files || []).map(f => f.name).join(', '));
                      setValue('documents', e.target.files);
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Phone Number and State/Region */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <PhoneInput
                      country={"ng"}
                      value={phoneNumber}
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      onChange={(value) => {
                        setPhoneNumber(value);
                        setValue('phone', value, { shouldValidate: true });
                      }}
                      containerClass="w-full"
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        padding: "12px 12px 12px 50px",
                        borderRadius: "6px",
                        background: "#f9fafb",
                        border: "1px solid #d1d5db",
                        transition: "all 0.2s",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      buttonStyle={{
                        height: "48px",
                        borderRadius: "6px 0 0 6px",
                        background: "#f9fafb",
                        border: "1px solid #d1d5db",
                        borderRight: "none",
                        transition: "all 0.2s",
                      }}
                      dropdownStyle={{
                        background: "#ffffff",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      }}
                      onFocus={() => {
                        (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("border-color", "#ea580c");
                        (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("box-shadow", "0 0 0 1px #ea580c");
                        const buttonElement = document.querySelector(".react-tel-input button") as HTMLElement;
                        buttonElement?.style.setProperty("border-color", "#ea580c");
                      }}
                      onBlur={() => {
                        (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("border-color", "#d1d5db");
                        (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("box-shadow", "none");
                        (document.querySelector(".react-tel-input button") as HTMLElement)?.style.setProperty("border-color", "#d1d5db");
                      }}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                {/* State/Region */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State/Region
                  </label>
                  <input
                    placeholder="Enter your state/region"
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 bg-gray-50"
                    {...register('state')}
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
              </div>

              {/* Row 4: Educational Background and Motivation Statement */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Educational Background */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Educational Background
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none bg-gray-50"
                    placeholder="Enter your educational background"
                    {...register('education')}
                  />
                  {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>}
                </div>

                {/* Motivation Statement */}
                <div className="space-y-2">
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                    Motivation Statement
                  </label>
                  <textarea
                    rows={4}
                    id="motivation"
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none bg-gray-50"
                    placeholder="Write about what motivated you to become a judge"
                    {...register('motivation')}
                  />
                  {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation.message}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 flex justify-center">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-md bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    <span>Submit Judge Application</span>
                  )}
                </motion.button>
              </div>
            </motion.form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999] overflow-y-auto"
            style={{ margin: 0, padding: 0 }}
          >
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-auto my-8 max-h-[calc(100vh-4rem)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Confirm Your Application Details</h2>
                    <div className="w-12 h-1 bg-orange-500 rounded mt-2"></div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmation(false)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                    tabIndex={0}
                    aria-label="Close confirmation modal"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Full Name</span>
                      <p className="text-gray-900 mt-1">{formData?.full_name}</p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-gray-700">Email:</span>
                      <p className="text-gray-900 mt-1">{formData?.email}</p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-gray-700">Phone Number:</span>
                      <p className="text-gray-900 mt-1">{formData?.phone}</p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-gray-700">State/Region</span>
                      <p className="text-gray-900 mt-1">{formData?.state}</p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-gray-700">Educational Background:</span>
                      <p className="text-gray-900 mt-1 text-sm leading-relaxed">{formData?.education}</p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-gray-700">Experience:</span>
                      <p className="text-gray-900 mt-1 text-sm leading-relaxed">{formData?.experience}</p>
                    </div>
                  </div>
                </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => handleApply(formData!)}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "Submitting..." : "Submit Judge Application"}
                    </button>
                  </div>
                </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999] overflow-y-auto"
            style={{ margin: 0, padding: 0 }}
            onClick={() => setShowSuccess(false)}
          >
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 sm:p-8">
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close success modal"
                  >
                    <FiX size={20} />
                  </button>

                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                      <FiCheckCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your application has been submitted</h2>
                  <div className="text-gray-600 mb-8 space-y-2 text-sm sm:text-base">
                    <p>Your judge application has been successfully submitted and is under review.</p>
                    <p>An email will be sent when the application is approved.</p>
                  </div>

                  <button
                    onClick={() => router.push("/")}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200"
                  >
                    Back to Homepage
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999] overflow-y-auto"
            style={{ margin: 0, padding: 0 }}
            onClick={() => setErrorMessage(null)}
          >
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <FiX className="w-4 h-4 text-red-600" />
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-red-600">Submission Error</h2>
                    </div>
                    <button
                      onClick={() => setErrorMessage(null)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Close error modal"
                    >
                      <FiX size={20} />
                    </button>
                  </div>

                  <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">{errorMessage}</p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <button
                      onClick={() => setErrorMessage(null)}
                      className="w-full sm:w-auto px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JudgeApplicationForm;