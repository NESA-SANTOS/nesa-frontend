import { NavLink, SecondaryNavLink, CTANavLink } from "../types/global";

export const navlinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
    icon: "Info",
    children: [
      {
        label: "NESA Vision",
        path: "/about/vision",
        icon: "Eye",
      },
      {
        label: "About NESA Africa/Nigeria 2025 Awards",
        path: "/about/awards-2025",
        icon: "Award",
      },
      {
        label: "About SECF",
        path: "/about/secf",
        icon: "Building2",
      },
      {
        label: "Mission 2025",
        path: "/about/mission-2025",
        icon: "Target",
      },
    ],
  },
  {
    label: "Awards",
    path: "/awards",
    icon: "Trophy",
    children: [
      {
        label: "Awards",
        path: "/awards",
        icon: "Scale",
      },
      {
        label: "African Icon",
        path: "/awards/african-icon",
        icon: "Crown",
      },
      {
        label: "Competitive",
        path: "/awards/competitive",
        icon: "Medal",
      },
      {
        label: "Non-competitive",
        path: "/awards/non-competitive",
        icon: "Star",
      },
      {
        label: "Judges Portal",
        path: "/awards/judges-portal",
        icon: "Scale",
      },
    ],
  },
  {
    label: "Get Involved",
    path: "/get-involved",
    icon: "Users",
    children: [
      {
        label: "Nominate Now",
        path: "/get-involved/nomination",
        icon: "UserPlus",
      },
      {
        label: "Get Endorsed",
        path: "/get-involved/get-endorsred",
        icon: "HandHeart",
      },
      {
        label: "Apply As An NRC Volunteer",
        path: "/get-involved/nrc-volunteer",
        icon: "Users",
      },
      {
        label: "Partner With Us",
        path: "/get-involved/partner",
        icon: "Handshake",
      },
     
    ],
  },
  {
    label: "Media",
    path: "/media",
    icon: "Play",
    children: [
      {
        label: "NESA TV",
        path: "/media/nesa-tv",
        icon: "Tv",
      },
      {
        label: "It's In Me Radio",
        path: "/media/its-in-me-radio",
        icon: "Radio",
      },
    ],
  },
  {
    label: "Donate",
    path: "/donate",
  },
  {
    label: "Login",
    path: "/account/login",
  },
  {
    label: "Sign Up",
    path: "/signup/comprehensive",
  },
  {
    label: "Support",
    path: "/support",
    icon: "HelpCircle",
    children: [
      {
        label: "FAQ",
        path: "/faq",
        icon: "MessageCircle",
      },
      {
        label: "Contact Us",
        path: "/contact",
        icon: "Mail",
      },
      {
        label: "Help Center",
        path: "/help",
        icon: "LifeBuoy",
      },
      
    ],
  },
  {
    label: "Language",
    path: "/language",
    icon: "Languages",
    children: [
      {
        label: "English",
        path: "/language/en",
        icon: "EN",
      },
      {
        label: "French",
        path: "/language/fr",
        icon: "FR",
      },
      {
        label: "Arabic",
        path: "/language/ar",
        icon: "AR",
      },
      {
        label: "Swahili",
        path: "/language/sw",
        icon: "AR",
      },
      {
        label: "Portuguese",
        path: "/language/pt",
        icon: "PT",
      },
    ]

  }, 
];


export const secondaryNavlinks: SecondaryNavLink[] = [
  {
    label: "Become a Judge",
    path: "/judgeapply",
    description: "Regional form/interactive map",
  },
  {
    label: "Become a sponsor",
    path: "/ambassador",
    description: "Ambassador pathway",
  },
  {
    label: "Buy Merchandise",
    path: "/voting",
    description: "Wallet-linked voting system",
  },
  {
    label: "Become a volunteer",
    path: "/volunteer",
    description: "Volunteer platform",
  },
  {
    label: "Join the Local chapters",
    path: "/local-chapters",
    description: "Local chapter platform",
  },
  {
    label: "Vote with AfriGoldcoin",
    path: "/vote",
    description: "GFA Wallet donation",
  },
  {
    label: "Apply as an Ambassador",
    path: "/nesatv",
    description: "NESA TV platform",
  }
];

// Level 3 CTA Navigation - Floating/Sticky Elements
export const ctaNavlinks: CTANavLink[] = [
  {
    label: "Nominate Now",
    path: "/nomination",
    description: "Nomination platform",
    priority: "high",
  },
  {
    label: "Vote Now",
    path: "/voting",
    description: "AGC voting interface",
    priority: "high",
  },
  {
    label: "Get Gala Ticket",
    path: "/gala-tickets",
    description: "Ticket platform",
    priority: "medium",
  },
  {
    label: "Refer a Friend",
    path: "/referral",
    description: "Referral dashboard",
    priority: "low",
  },
  {
    label: "Donate Now",
    path: "/donate",
    description: "GFA Wallet donation",
    priority: "medium",
  },
];

// Legacy navigation data for backward compatibility (if needed)
export const legacyNavlinks = [
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About NESA-Africa", path: "/about" },
      { label: "About NESA-Africa/Nigeria-2025 Award", path: "/about-nesa" },
      { label: "About Judges", path: "/about-judges" },
    ],
  },
  {
    label: "Awards",
    path: "/awards",
    children: [
      { label: "Awards", path: "/awards"},
      { label: "African Icon", path: "/nomination/sub-categories/africa-lifetime-education-icon" },
      { label: "Competitive", path: "/competitive" },
      { label: "Non-Competitive", path: "/non-competitive" },
      { label: "Nomination Process", path: "/nomination" },
      { label: "Judge Portal", path: "/judge" },
    ],
  },
  {
    label: "Media",
    path: "nesatv",
    children: [
      { label: "NESA-TV", path: "/nesatv" },
      { label: "it's in me Radio", path: "/radio-podcast" },
    ],
  },
  {
    label: "Admin",
    path: "admin",
  },
];
