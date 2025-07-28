"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaCrown,
  FaVoteYea,
  FaWallet,
  FaTicketAlt,
  FaCertificate,
  FaHandsHelping,
  FaHeart,
  FaCheck
} from "react-icons/fa";
import { Award, Trophy } from "lucide-react";

const AwardCategories = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  return (
    <section className="bg-gradient-to-br from-whiteGold via-[#fdf3dc] to-xlGold px-6 lg:px-8 py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primaryGold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-deepGold rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkBrown mb-6 leading-tight">
            Nominate a Hero Today
            <span className="block text-2xl lg:text-3xl font-medium text-primaryGold mt-2">
              Shape Africa's Educational Future
            </span>
          </h2>
          <p className="text-darkBrown/80 font-poppins text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            At the New Education Standard Award Africa (NESA–Africa) 2025, we celebrate the real changemakers
            shaping the future of education across Africa. Choose your nomination path below.
          </p>
        </motion.div>

        {/* Award Structure Overview - Enhanced */}
        <motion.div
          variants={itemVariants}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-primaryGold/20 p-8 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primaryGold/10 to-transparent rounded-bl-full"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primaryGold to-deepGold rounded-full flex items-center justify-center">
              <FaTrophy className="text-darkBrown text-xl" />
            </div>
            <h3 className="text-darkBrown font-bold text-2xl lg:text-3xl">
              NESA–AFRICA 2025 AWARD STRUCTURE
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Trophy className="text-primaryGold" size={24} />, count: "8", label: "Competitive Blue Garnet Award Categories" },
              { icon: <FaMedal className="text-primaryGold" size={24} />, count: "101", label: "Subcategory Gold Certificate Winners" },
              { icon: <Award className="text-primaryGold" size={24} />, count: "53", label: "Platinum Recognition Certificates" },
              { icon: <FaCertificate className="text-primaryGold" size={24} />, count: "6,000+", label: "Letters of Recognition" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-gradient-to-b from-whiteGold to-white border border-primaryGold/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primaryGold mb-1">{stat.count}</div>
                <div className="text-sm text-darkBrown/70 font-poppins">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-darkBrown/80 text-center font-poppins">
            All determined through nomination, expert judging, AGC-powered voting, and stakeholder validation.
          </p>
        </motion.div>

        {/* Hero Card - Hidden/Removed */}

        {/* Three Award Cards - Horizontal Flex Layout */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-16 justify-center items-stretch"
        >
          {/* African Education Icon Card */}
          <div className="block group flex-1 max-w-sm mx-auto lg:mx-0">
            <motion.div
              className="relative bg-gradient-to-br from-darkBrown via-secondaryDark to-darkBrown rounded-2xl p-8 shadow-xl border border-primaryGold/20 h-full overflow-hidden flex flex-col"
              whileHover="hover"
              variants={{
                hover: {
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primaryGold/10 to-transparent rounded-full"></div>

              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primaryGold to-deepGold rounded-full flex items-center justify-center">
                  <FaCrown className="text-darkBrown text-lg" />
                </div>
                <span className="text-primaryGold text-sm font-semibold tracking-wider uppercase">
                  Lifetime Achievement
                </span>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                African Education Icon for Decade
              </h3>

              <p className="text-primaryGold text-sm font-medium mb-4">
                (2014–2024)
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                Reserved for lifetime achievement. Nominees must have 10+ years institutional achievements, w/ they deserve recognition.
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {[
                  "Fromalizationmakers",
                  "Harvest Institutional",
                  "achievements, w/ they",
                  "deserve recognition"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-primaryGold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-darkBrown text-xs" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/nesa-mg.png"
                    alt="African Education Icon Award"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primaryGold to-deepGold text-darkBrown px-6 py-3 rounded-full font-semibold shadow-lg group-hover:shadow-xl transition-shadow duration-300 w-full justify-center mt-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <span className="text-lg">→</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Competitive Category Card */}
          <Link href="/competitive" className="block group flex-1 max-w-sm mx-auto lg:mx-0">
            <motion.div
              className="relative bg-gradient-to-br from-darkBrown via-secondaryDark to-darkBrown rounded-2xl p-8 shadow-xl border border-primaryGold/20 h-full overflow-hidden flex flex-col"
              whileHover="hover"
              variants={{
                hover: {
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primaryGold/10 to-transparent rounded-full"></div>

              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primaryGold to-deepGold rounded-full flex items-center justify-center">
                  <FaTrophy className="text-darkBrown text-lg" />
                </div>
                <span className="text-primaryGold text-sm font-semibold tracking-wider uppercase">
                  Public Voting
                </span>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                Competitive Awards
              </h3>

              <p className="text-white/80 mb-6 leading-relaxed">
                Open competition with public participation through AGC voting and expert judging.
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {[
                  "Public Institutional Nomination",
                  "Voting + Judging-Based Selection",
                  "Major Categories and 101 Subcategories",
                  "Gold Certificate"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-primaryGold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-darkBrown text-xs" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/nesa-mg.png"
                    alt="Competitive Awards"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primaryGold to-deepGold text-darkBrown px-6 py-3 rounded-full font-semibold shadow-lg group-hover:shadow-xl transition-shadow duration-300 w-full justify-center mt-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nominate Now
                <span className="text-lg">→</span>
              </motion.div>
            </motion.div>
          </Link>

          {/* Non-Competitive Category Card */}
          <Link href="/non-competitive" className="block group flex-1 max-w-sm mx-auto lg:mx-0">
            <motion.div
              className="relative bg-gradient-to-br from-darkBrown via-secondaryDark to-darkBrown rounded-2xl p-8 shadow-xl border border-primaryGold/20 h-full overflow-hidden flex flex-col"
              whileHover="hover"
              variants={{
                hover: {
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-deepGold/10 to-transparent rounded-full"></div>

              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-deepGold to-midGold rounded-full flex items-center justify-center">
                  <FaMedal className="text-darkBrown text-lg" />
                </div>
                <span className="text-deepGold text-sm font-semibold tracking-wider uppercase">
                  Expert Selection
                </span>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                Non-Competitive Awards
              </h3>

              <p className="text-white/80 mb-6 leading-relaxed">
                Merit-based recognition through expert panel evaluation and institutional review.
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {[
                  "Global Public Nomination",
                  "Internal Judging Only",
                  "Criteria: No Voting Involved"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-deepGold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-darkBrown text-xs" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/nesa-mg.png"
                    alt="Non-Competitive Awards"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-deepGold to-midGold text-darkBrown px-6 py-3 rounded-full font-semibold shadow-lg group-hover:shadow-xl transition-shadow duration-300 w-full justify-center mt-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nominate Now
                <span className="text-lg">→</span>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Powered by GFA Wallet – AfriGold Coin (AGC) */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-whiteGold via-white to-xlGold rounded-2xl shadow-xl border border-primaryGold/30 p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primaryGold/5 to-deepGold/5"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primaryGold to-deepGold rounded-full flex items-center justify-center shadow-lg">
                <FaWallet className="text-darkBrown text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-darkBrown text-xl lg:text-2xl">
                  POWERED BY GFA WALLET
                </h3>
                <p className="text-primaryGold font-semibold">AfriGold Coin (AGC)</p>
              </div>
            </div>

            <p className="text-darkBrown/80 mb-6 text-lg leading-relaxed">
              Nominations, voting, ticketing, and certificates are transacted securely using AfriGold Coin (AGC):
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <FaVoteYea className="text-primaryGold" size={20} />, text: "Nominate or Vote using AGC" },
                { icon: <FaTicketAlt className="text-primaryGold" size={20} />, text: "Buy Gala Tickets or Access Webinars" },
                { icon: <FaCertificate className="text-primaryGold" size={20} />, text: "Download Gold & Platinum Certificates" },
                { icon: <FaHandsHelping className="text-primaryGold" size={20} />, text: "Support EduAid Africa or Chapter Projects" },
                { icon: <FaHeart className="text-primaryGold" size={20} />, text: "Make Donations — Securely and Transparently" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl border border-primaryGold/10"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-darkBrown font-poppins text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AwardCategories;
