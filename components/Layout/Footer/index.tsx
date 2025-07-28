"use client";

import Image from "next/image";
import { bottomLinks, contactInfos, footerData, socials } from "./data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 relative text-white overflow-hidden">
      <Image
        src={"/images/bg/back_.jpeg"}
        alt="dark background"
        className="w-full h-full object-cover -z-[2] absolute top-0 left-0"
        width={1024}
        height={600}
      />
      {/* <div className="container mb-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
            <motion.p
            className="text-lg md:text-2xl font-medium leading-snug"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
            “Africa’s future is not waiting. It is being designed — by the ones building the policies, platforms, and partnerships that fuel learning at scale.”
            </motion.p>
          <p className="text-base md:text-lg font-medium text-[#ffd37a]">
        NESA-Africa 2025 — Celebrating Vision, Strategy &amp; System-Builders.
          </p>
        </div>
      </div> */}

      <div className="bg-[#15110999] absolute top-0 left-0 w-full -z-[1] h-full"></div>
      <div className="space-y-8">
        <div className="container grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-5">
            <Image src={"/svgs/logo.svg"} alt="NESA-Africa logo" width={150} height={150} />
            <p className="text-white/80 text-sm leading-relaxed">
              Celebrating excellence in African education through recognition, innovation, and community impact.
            </p>

            {contactInfos.map((info, id) => (
              <div key={id} className="flex items-center gap-3">
                <div className="text-orange-500">
                  {info.icon}
                </div>
                <p className="text-white/80 text-sm">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Navigation Links */}
          {footerData.map((data, id) => (
            <div key={id} className="space-y-4">
              <h5 className="font-semibold text-orange-500">{data.heading}</h5>
              <ul className="text-white/80 space-y-3">
                {data.children.map((child, childId) => (
                  <li key={childId}>
                    <Link
                      href={child.path}
                      className="hover:text-orange-500 transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="container border-t border-white/20 pt-6">
          <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
            {/* Copyright and Links */}
            <div className="flex items-center gap-6 flex-col sm:flex-row">
              <p className="text-white/80 text-sm">© 2025 NESA-Africa. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {bottomLinks.map((data, id) => (
                  <Link
                    key={id}
                    href={data.path}
                    className="text-sm text-white/80 hover:text-orange-500 transition-colors duration-200"
                  >
                    {data.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              {socials.map((social, id) => (
                <Link
                  key={id}
                  href={social.path}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-200 flex items-center justify-center group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
