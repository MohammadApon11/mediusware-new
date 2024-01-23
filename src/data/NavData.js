import { IoLogoWebComponent } from "react-icons/io5";
import { FaMobileAlt, FaPinterestP } from "react-icons/fa";
import {
  SiBigcommerce,
  SiJirasoftware,
  SiAffinitydesigner,
  SiEnterprisedb,
  SiGooglemarketingplatform,
} from "react-icons/si";
import { SlSocialFoursqare } from "react-icons/sl";
export const NavData = [
  { id: 1, title: "HOME", path: "/" },
  { id: 2, title: "SERVICES", path: "/services" },
  { id: 3, title: "PROJECTS", path: "/projects" },
  { id: 4, title: "WHY MEDIUSWARE", path: "/why-mediusware" },
  { id: 5, title: "BLOG", path: "/blog" },
  { id: 6, title: "CAREER", path: "/career" },
  { id: 7, title: "OUR TEAM", path: "/our-team" },
];
export const SubNavData = [
  {
    id: 1,
    title: "WEBSITE DEVELOPMENT",
    path: "/web-development",
    icon: <IoLogoWebComponent />,
  },
  {
    id: 2,
    title: "MOBILE APP DEVELOPMENT",
    path: "/mobile-development",
    icon: <FaMobileAlt />,
  },
  {
    id: 3,
    title: "E-COMMERCE SOLUTION",
    path: "/e-commerce",
    icon: <SiBigcommerce />,
  },
  {
    id: 4,
    title: "SOFTWARE DEVELOPMENT",
    path: "/software-development",
    icon: <SiJirasoftware />,
  },
  {
    id: 5,
    title: "UI/UX DESIGN & DEVELOPMENT",
    path: "/ui-ux",
    icon: <SiAffinitydesigner />,
  },
  {
    id: 6,
    title: "SQA SOLUTION",
    path: "/sqa-solution",
    icon: <SlSocialFoursqare />,
  },
  {
    id: 7,
    title: "ENTERPRISE SOLUTION",
    path: "/enterprise-solution",
    icon: <SiEnterprisedb />,
  },
  {
    id: 8,
    title: "API INTEGRATION",
    path: "/api-integration",
    icon: <FaPinterestP />,
  },
  {
    id: 9,
    title: "DIGITAL MARKETING",
    path: "/digital-marketing",
    icon: <SiGooglemarketingplatform />,
  },
];
