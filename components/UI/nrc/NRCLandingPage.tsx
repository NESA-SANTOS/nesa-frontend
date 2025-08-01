'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/lib/context/AuthContext';
import { useNRCStatus } from '@/lib/hooks/useNRCStatus';
import { 
  Users, 
  Globe, 
  Calendar, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Clock,
  MapPin,
  UserCheck
} from 'lucide-react';
import Button from '@/components/Common/Button';

const NRCLandingPage: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();
  const { loading, hasApplication, isApproved, isPending, isRejected, canAccessDashboard } = useNRCStatus();

  const handleApplyNow = () => {
    if (!isAuthenticated) {
      router.push('/account/login');
      return;
    }

    if (canAccessDashboard) {
      router.push('/get-involved/nrc-volunteer/dashboard');
      return;
    }

    if (hasApplication) {
      // User already has an application, show status
      return;
    }

    router.push('/get-involved/nrc-volunteer/apply');
  };

  const getButtonText = () => {
    if (!isAuthenticated) return 'Login to Apply';
    if (canAccessDashboard) return 'Go to Dashboard';
    if (isPending) return 'Application Pending';
    if (isRejected) return 'Application Not Approved';
    if (hasApplication) return 'View Application Status';
    return 'Apply Now';
  };

  const getButtonDisabled = () => {
    return isPending || isRejected;
  };

  const benefits = [
    {
      icon: Award,
      title: "Certificate of Service",
      description: "Official recognition from SCEF/NESA-Africa"
    },
    {
      icon: Users,
      title: "Featured Profile",
      description: "Top researchers featured on NESA-Africa website"
    },
    {
      icon: Target,
      title: "Priority Access",
      description: "Future paid roles in 2025 Award Week and Chapter Coordinator positions"
    },
    {
      icon: Globe,
      title: "Free Expo Ticket",
      description: "Complimentary access to NESA-Africa Virtual Expo 2025"
    }
  ];

  const responsibilities = [
    "Research and document 200+ verified nominee profiles",
    "Validate achievements and impact stories",
    "Ensure alignment with SDG 4, AU Agenda 2063, and ESG principles",
    "Submit profiles through structured digital forms",
    "Participate in weekly check-in calls",
    "Tag entries with appropriate award categories"
  ];

  const requirements = [
    "Passionate about education and Africa's development",
    "Excellent research and writing skills",
    "Basic knowledge of SDG/Agenda 2063/ESG concepts",
    "Familiar with digital tools (Google Sheets, Docs, online forms)",
    "Committed to completing 200+ profiles in 30 days",
    "Available for remote work during engagement period"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#ea580c] to-[#dc2626] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-8 h-8" />
              <span className="text-lg font-medium">NESA Nominee Research Corps</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the NRC Volunteer Program
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
              Help identify and profile 6,000+ impactful changemakers across Africa 
              for the NESA-Africa 2025 Awards
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Remote (All African Countries + Diaspora)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>July 15 – August 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>30 Volunteer Positions</span>
              </div>
            </div>

            <Button
              text={getButtonText()}
              onClick={handleApplyNow}
              disabled={getButtonDisabled()}
              variant="filled"
              className={`font-semibold px-8 py-4 text-lg ${
                getButtonDisabled()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-[#ea580c] hover:bg-gray-100'
              }`}
            />
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About the NRC Program
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The NESA Nominee Research Corps (NRC) is a specialized volunteer taskforce 
              responsible for the critical pre-nomination research phase of NESA-Africa 2025. 
              Our volunteers ensure quality, credibility, and balanced representation across 
              all award categories before public nominations open.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <Target className="w-12 h-12 text-[#ea580c] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                Compile a verified database of 6,000+ changemakers worthy of recognition 
                across Africa and the diaspora.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <CheckCircle className="w-12 h-12 text-[#ea580c] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Ensure each nominee is documented with verifiable information 
                reflecting impact and alignment with core values.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <Globe className="w-12 h-12 text-[#ea580c] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Support a seamless launch of public nominations and ensure 
                balanced representation across all regions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Volunteer Responsibilities
              </h2>
              <p className="text-lg text-gray-700">
                As an NRC volunteer, you'll play a crucial role in building the foundation 
                for Africa's most prestigious education awards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#ea580c]">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#ea580c]">Ideal Volunteer Profile</h3>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-700">
              Join a meaningful mission while gaining valuable experience and recognition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <benefit.icon className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#ea580c] to-[#dc2626] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8">
              Join 30 passionate volunteers in building the foundation for Africa's 
              most prestigious education awards. Applications close July 14, 2025.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="w-5 h-5" />
              <span className="text-lg">Application Deadline: July 14, 2025</span>
            </div>

            <Button
              text={getButtonText()}
              onClick={handleApplyNow}
              disabled={getButtonDisabled()}
              variant="filled"
              className={`font-semibold px-8 py-4 text-lg ${
                getButtonDisabled()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-[#ea580c] hover:bg-gray-100'
              }`}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NRCLandingPage;
