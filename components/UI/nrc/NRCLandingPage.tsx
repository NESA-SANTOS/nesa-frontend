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
import OptimizedHeroBackground from './OptimizedHeroBackground';

// Import enhanced CSS for hero section
import '@/styles/nrc-hero.css';

const NRCLandingPage: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();
  const { loading, hasApplication, isApproved, isPending, isRejected, canAccessDashboard } = useNRCStatus();

  const handleApplyNow = () => {
    // TODO: Re-enable authentication when backend is ready
    // Authentication temporarily disabled for testing purposes

    /* ORIGINAL AUTHENTICATION LOGIC - COMMENTED FOR TESTING
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
    */

    // For testing: Direct access to application form
    router.push('/get-involved/nrc-volunteer/apply');
  };

  const getButtonText = () => {
    // TODO: Re-enable dynamic button text when backend is ready
    // Authentication-based button text temporarily disabled for testing

    /* ORIGINAL AUTHENTICATION-BASED LOGIC - COMMENTED FOR TESTING
    if (!isAuthenticated) return 'Login to Apply';
    if (canAccessDashboard) return 'Go to Dashboard';
    if (isPending) return 'Application Pending';
    if (isRejected) return 'Application Not Approved';
    if (hasApplication) return 'View Application Status';
    */

    // For testing: Simple button text
    return 'Apply Now';
  };

  const getButtonDisabled = () => {
    // TODO: Re-enable button state logic when backend is ready
    // Button state temporarily enabled for testing

    /* ORIGINAL AUTHENTICATION-BASED LOGIC - COMMENTED FOR TESTING
    return isPending || isRejected;
    */

    // For testing: Button always enabled
    return false;
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
      {/* Enhanced Hero Section with Background Image */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden nrc-hero-container"
        aria-label="NESA Nominee Research Corps volunteer program hero section"
        role="banner"
      >
        {/* Preload background image */}
        <div className="nrc-hero-preload" aria-hidden="true" />

        {/* Optimized Background Image without Overlay */}
        <div className="absolute inset-0 z-0">
          <OptimizedHeroBackground
            src="/images/bg/education.png"
            alt="Education and research background - students and educators in Africa"
            className="nrc-hero-bg nrc-hero-gpu-accelerated"
            priority={true}
            quality={90}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white nrc-hero-animate-in"
          >
            <div className="flex items-center justify-center gap-2 mb-4" role="banner">
              <Users className="w-8 h-8 text-white drop-shadow-2xl" aria-hidden="true" />
              <span className="text-lg font-medium text-white drop-shadow-2xl">NESA Nominee Research Corps</span>
            </div>

            <h1
              className="nrc-hero-title font-bold mb-6 text-white drop-shadow-2xl"
              id="hero-title"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6), 6px 6px 12px rgba(0,0,0,0.4)'
              }}
            >
              Join the NRC Volunteer Program
            </h1>

            <p
              className="nrc-hero-subtitle leading-relaxed mb-8 font-light text-white drop-shadow-2xl"
              aria-describedby="hero-title"
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.8), 2px 2px 6px rgba(0,0,0,0.6)'
              }}
            >
              Help identify and profile 6,000+ impactful changemakers across Africa
              for the NESA-Africa 2025 Awards
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base"
              role="list"
              aria-label="Program details"
            >
              <div
                className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 text-white"
                role="listitem"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">Remote (All African Countries + Diaspora)</span>
              </div>
              <div
                className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 text-white"
                role="listitem"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">July 15 – August 20, 2025</span>
              </div>
              <div
                className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 text-white"
                role="listitem"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}
              >
                <Users className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">30 Volunteer Positions</span>
              </div>
            </div>

            <Button
              text={getButtonText()}
              onClick={handleApplyNow}
              disabled={getButtonDisabled()}
              variant="filled"
              className={`font-semibold px-8 py-4 text-lg shadow-xl nrc-hero-button nrc-hero-gpu-accelerated ${
                getButtonDisabled()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-[#ea580c] hover:bg-gray-100 hover:scale-105 transition-all duration-300'
              }`}
              aria-describedby="hero-title"
              aria-label={getButtonDisabled()
                ? "Application period has ended"
                : "Apply to join the NESA Nominee Research Corps volunteer program"
              }
            />
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 nrc-hero-scroll-indicator focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
          onClick={() => {
            const nextSection = document.querySelector('#about-section');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down to learn more about the program"
          type="button"
        >
          <div className="flex flex-col items-center text-white">
            <span
              className="text-sm mb-2 font-medium"
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.8), 2px 2px 6px rgba(0,0,0,0.6)'
              }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-white/80 transition-colors duration-300 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.button>
      </section>

      {/* Program Overview */}
      <section id="about-section" className="py-16 bg-gray-50">
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
