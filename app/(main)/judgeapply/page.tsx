'use client';
import PhoneInput from "react-phone-input-2";
import React, { useState, ChangeEvent, FormEvent } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CountrySelector as CountrySelect } from 'react-international-phone';
import "react-phone-input-2/lib/style.css";
import Button from "@/components/Common/Button";
import { judgesapplication } from "@/lib/services/judgesapplyservice";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiUpload, FiX, FiArrowLeft } from "react-icons/fi";
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

type FormData = z.infer<typeof formSchema>;

const JudgeApplicationForm:  React.FC = () => {
   const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
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
const [formData, setFormData] = useState<FormData | null>(null);

  const pophandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

// On submit
const onSubmit = async (data: FormData) => {
  
  setFormData(data);
  setShowConfirmation(true);
};

// Handler for confirming the application in the modal
const handleApply = async (data: FormData) => {
  if (!data) return;
  setLoading(true);
  try {
    await judgesapplication({
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

    setShowConfirmation(false);
    setShowSuccess(true);
  } catch (error: any) {
    console.error("Failed to create Application:", error.message);
    setErrorMessage(error.response?.data?.error || error.message || "An unexpected error occurred.");
    setShowConfirmation(false);
  } finally {
    setLoading(false);
  }
};
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-20 max-w-5xl mx-auto p-8 space-y-8">
      <h2 className="text-2xl font-semibold">Submit Applicant Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div>
          <label  htmlFor='full_name' className="block text-sm font-medium mb-2">Full Name</label>
          <input id="full_name" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400" placeholder="Name.." {...register('full_name')} />
          {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>}
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-2">
            Experience <span className="text-red-500">*</span>
          </label>
          <textarea
            id="experience"
            rows={4}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            placeholder="Write about your professional experiences (at least 5 characters)"
            {...register("experience")}
          />
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input id="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Upload Documents */}
        <div>
          <label htmlFor="documents" className="block text-sm font-medium mb-2">Upload Documents</label>
          <div 
            className="border-2 border-dashed rounded-md p-6 text-center text-sm text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('documents')?.click()}
          >
            <p>Drag and drop documents here or <span className="text-yellow-600">Click here</span> to upload</p>
            <p className="text-xs text-gray-400 mt-2">Upload your resume, passport, and other supporting documents</p>
            {documentsName && <p className="mt-2 text-green-600">{documentsName}</p>}
          </div>
          <input
            type="file"
            id="documents"
            className="hidden"
            multiple
            {...register('documents')}
            onChange={(e) => {
              setDocumentsName(Array.from(e.target.files || []).map(f => f.name).join(', '));
              setValue('documents', e.target.files);
            }}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="flex items-center space-x-2">
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
                containerClass="mb-6"
                inputStyle={{
                  width: "100%",
                  height: "48px",
                  padding: "12px 12px 12px 48px",
                  borderRadius: "6px",
                  background: "#FFF9ED",
                  border: "1px solid #D1D5DB", // Default gray border
                  transition: "border-color 0.3s",
                }}
                buttonStyle={{
                  height: "48px",
                  borderRadius: "6px 0 0 6px",
                  background: "#FFF9ED",
                  border: "1px solid #D1D5DB", // Default gray border
                  transition: "border-color 0.3s",
                }}
                dropdownStyle={{
                  background: "#FFF9ED",
                }}
                onFocus={() => {
                  (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("border-color", "#FFC247");
                  const buttonElement = document.querySelector(".react-tel-input button") as HTMLElement;
                  buttonElement?.style.setProperty("border-color", "#FFC247");
                }}
                onBlur={() => {
                  (document.querySelector(".react-tel-input input") as HTMLElement)?.style.setProperty("border-color", "#D1D5DB");
                  (document.querySelector(".react-tel-input button") as HTMLElement)?.style.setProperty("border-color", "#D1D5DB");
                }}
              />
            </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Motivation */}
        <div>
          <label htmlFor="motivation" className="block text-sm font-medium mb-2">Motivation</label>
          <textarea rows={4} id="motivation" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400" placeholder="Enter your educational background" {...register('motivation')} />
          {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>}
        </div>

        {/* State/Region */}
        <div>
          <label className="block text-sm font-medium mb-2">State/Region</label>
          <input placeholder="Enter your state/region" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400" {...register('state')} />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
        </div>

        {/* Educational Background */}
        <div>
          <label className="block text-sm font-medium mb-2">Educational Background</label>
          <textarea rows={4} className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-yellow-400" placeholder="Enter your educational background" {...register('education')} />
          {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>}
        </div>

        {/* Upload Profile Image */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload Profile Image</label>
          <div
            className="border-2 border-dashed rounded-md p-6 text-center text-sm text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('profileInput')?.click()}
          >
            <p>Drag and drop documents here or <span className="text-yellow-600">Click here</span> to upload</p>
            <p className="text-xs text-gray-400 mt-2">Upload your resume, passport, and other supporting documents</p>
            {profileImageName && <p className="mt-2 text-green-600">{profileImageName}</p>}
          </div>
          <input
            type="file"
            id="profileInput"
            className="hidden"
            {...register('profileImage')}
            onChange={(e) => {
              setProfileImageName(e.target.files?.[0]?.name || '');
              setValue('profileImage', e.target.files?.[0]);
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
  <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              className="text-black font-bold py-3 px-4 rounded-lg w-full"
              style={{
                background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)'
              }}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Judge Application"
                )}
              </motion.button>
      </div>

       {/* Confirmation Modal */}
                <AnimatePresence>
                  {showConfirmation && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    >
                      <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="bg-white rounded-xl shadow-xl w-full max-w-md"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Confirm Application Details</h2>
                            <button
                              type="button"
                              onClick={() => setShowConfirmation(false)}
                              className="text-gray-400 hover:text-gray-600"
                              tabIndex={0}
                              aria-label="Close confirmation modal"
                            >
                              <FiX size={24} />
                            </button>
                          </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h3 className="font-medium text-gray-900 mb-2">{formData?.full_name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{formData?.email}</p>
                            </div>

                          <div className="flex justify-end gap-3">
                            <button
                              type="button"
                              onClick={() => setShowConfirmation(false)}
                              tabIndex={0}
                              aria-label="Close confirmation modal"
                              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleApply(formData!)}
                              disabled={loading}
                              className="px-4 py-2 rounded-lg text-white font-medium disabled:opacity-70"
                              style={{
                                background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                              }}
                            >
                              {loading ? "Submitting..." : "Confirm Submission"}
                            </button>
                          </div>
                        </div>
                      </motion.div>
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
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    >
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        className="bg-white rounded-xl shadow-xl w-full max-w-md text-center p-8"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <FiCheckCircle className="w-10 h-10 text-green-500" />
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
                        <p className="text-gray-600 mb-6">
                          Thank you for recognizing excellence. Your Application has been received and will be reviewed shortly.
                        </p>
          
                        <div className="flex flex-col gap-3">
                          <button
                            onClick={() => router.push("/ProfileSetting")}
                            className="w-full py-3 px-4 rounded-lg text-white font-medium"
                            style={{
                              background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                            }}
                          >
                            Return to Dashboard
                          </button>
    
                        </div>
                      </motion.div>
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
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    >
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        className="bg-white rounded-xl shadow-xl w-full max-w-md p-6"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-2xl font-bold text-red-600">Submission Error</h2>
                          <button onClick={() => setErrorMessage(null)} className="text-gray-400 hover:text-gray-600">
                            <FiX size={24} />
                          </button>
                        </div>
                        
                        <p className="text-gray-700 mb-6">{errorMessage}</p>
                        
                        <div className="flex justify-end">
                          <button
                            onClick={() => setErrorMessage(null)}
                            className="px-4 py-2 rounded-lg text-white font-medium"
                            style={{
                              background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)",
                            }}
                          >
                            Try Again
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
    
    </form>

    
  );
}

export default JudgeApplicationForm