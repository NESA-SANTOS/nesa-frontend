import { FooterData, Social } from "@/lib/types/global";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export const footerData: FooterData[] = [
  {
    heading: "Quick Links",
    children: [
      { path: "/about", label: "About NESA" },
      { path: "/categories", label: "Award Categories" },
      { path: "/nominate", label: "Nominate Now" },
      { path: "/vote", label: "Vote" },
    ],
  },
  {
    heading: "Support",
    children: [
      { path: "/faq", label: "FAQ" },
      { path: "/contact", label: "Contact Us" },
      { path: "/chapters", label: "Local Chapters" },
      { path: "/volunteer", label: "Volunteer" },
    ],
  },
];

export const bottomLinks = [
  { label: "Terms", path: "/terms" },
  { label: "Privacy", path: "/privacy" },
  { label: "FAQ", path: "/faq" },
];

export const socials: Social[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
          d="M13.3333 7.16602C14.6594 7.16602 15.9312 7.6928 16.8688 8.63048C17.8065 9.56816 18.3333 10.8399 18.3333 12.166V17.9993H15V12.166C15 11.724 14.8244 11.3001 14.5118 10.9875C14.1993 10.6749 13.7753 10.4993 13.3333 10.4993C12.8913 10.4993 12.4674 10.6749 12.1548 10.9875C11.8422 11.3001 11.6666 11.724 11.6666 12.166V17.9993H8.33331V12.166C8.33331 10.8399 8.8601 9.56816 9.79778 8.63048C10.7355 7.6928 12.0072 7.16602 13.3333 7.16602Z"
          fill="white"
        />
        <path d="M5.00002 7.99951H1.66669V17.9995H5.00002V7.99951Z" fill="white" />
        <path
          d="M3.33335 5.49935C4.25383 5.49935 5.00002 4.75316 5.00002 3.83268C5.00002 2.91221 4.25383 2.16602 3.33335 2.16602C2.41288 2.16602 1.66669 2.91221 1.66669 3.83268C1.66669 4.75316 2.41288 5.49935 3.33335 5.49935Z"
          fill="white"
        />
      </svg>
    ),
    label: "LinkedIn",
    path: "https://linkedin.com/company/nesa-africa",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
          d="M15 2.16602H12.5C11.395 2.16602 10.3352 2.605 9.55376 3.3864C8.77236 4.16781 8.33337 5.22761 8.33337 6.33268V8.83268H5.83337V12.166H8.33337V18.8327H11.6667V12.166H14.1667L15 8.83268H11.6667V6.33268C11.6667 6.11167 11.7545 5.89971 11.9108 5.74343C12.0671 5.58715 12.279 5.49935 12.5 5.49935H15V2.16602Z"
          fill="white"
        />
      </svg>
    ),
    label: "Facebook",
    path: "https://facebook.com/nesaafrica",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
      </svg>
    ),
    label: "Twitter",
    path: "https://twitter.com/nesaafrica",
  },
];

export const contactInfos: { value: string; icon: JSX.Element }[] = [
  {
    value: "19 Godwin Okigbo Street, Masha Kilo, bus stop, Surulere, Lagos",
    icon: <CiLocationOn />,
  },
  {
    value: "+234-907-962-1110",
    icon: <MdOutlinePhone />,
  },
  {
    value: "+234-810-976-5897",
    icon: <MdOutlinePhone />,
  },
  {
    value: "nesa.africa@gmail.com",
    icon: <CiMail />,
  },
];
