// hero images here
import webHero from "../assets/commonHero/web.jpg";
import mobileHero from "../assets/commonHero/mobile.jpg";
import eCommerceHero from "../assets/commonHero/e-commerce.jpg";
import enterpriseHero from "../assets/commonHero/enterprise.jpg";
import uiUxHero from "../assets/commonHero/ui-ux.jpg";
import apiHero from "../assets/commonHero/api.jpg";
import softwareHero from "../assets/commonHero/software.jpg";
import sqaHero from "../assets/commonHero/sqa.jpg";
import marketingHero from "../assets/commonHero/marketing.jpg";

// tech images here
import php from "../assets/tech/1.png";
import mysql from "../assets/tech/2.png";
import vue from "../assets/tech/3.png";
import four from "../assets/tech/4.png";
import five from "../assets/tech/5.png";
import react from "../assets/tech/6.png";
import bootstrap from "../assets/tech/7.png";
import eight from "../assets/tech/8.png";
import aws from "../assets/tech/9.png";
import ten from "../assets/tech/10.png";
import eleben from "../assets/tech/11.png";
import share from "../assets/tech/12.png";
import git from "../assets/tech/13.png";
import fourteen from "../assets/tech/14.png";
import redux from "../assets/tech/15.png";
import sixteen from "../assets/tech/16.png";
import seventeen from "../assets/tech/17.png";
import flutter from "../assets/tech/18.png";
import nineteen from "../assets/tech/19.webp";
import ts from "../assets/tech/20.png";
import x from "../assets/tech/21.png";
import asana from "../assets/tech/22.png";
import xd from "../assets/tech/23.png";
import ai from "../assets/tech/24.png";
import diomon from "../assets/tech/25.png";
import figma from "../assets/tech/26.png";
import miro from "../assets/tech/27.png";
import ps from "../assets/tech/28.png";
import postman from "../assets/tech/29.png";
import se from "../assets/tech/30.jpg";
import gitlab from "../assets/tech/31.png";
import mozila from "../assets/tech/32.png";
import jenkins from "../assets/tech/33.png";
import apache from "../assets/tech/34.png";
import o from "../assets/tech/35.png";
import eye from "../assets/tech/36.png";
import adobe from "../assets/tech/37.jpg";
import email from "../assets/tech/38.png";
import cro from "../assets/tech/39.jpg";
import social from "../assets/tech/40.png";
import web from "../assets/tech/37.jpg";

// animations import here
import webAnime from "../assets/animation/web.json";
import mobileAnime from "../assets/animation/mobile.json";
import eCommerceAnime from "../assets/animation/e-commerce.json";
import enterpriseAnime from "../assets/animation/enterprise.json";
import uiUxAnime from "../assets/animation/ui-ux.json";
import apiAnime from "../assets/animation/api.json";
import softwareAnime from "../assets/animation/software.json";
import sqaAnime from "../assets/animation/sqa.json";
import marketingAnime from "../assets/animation/marketing.json";

export const PageServicesData = [
  {
    id: "web development",
    heroImage: webHero,
    title: "WEB DEVELOPMENT",
    description1:
      "Crafting dynamic and responsive websites with HTML, CSS, and JavaScript, ensuring seamless",
    description2:
      "user experiences and visually appealing interfaces for clients.",
    anime: webAnime,
    features: [
      "CMS-based website development",
      "Static & Dynamic website designing solution",
      "Customized website design with powerful platforms",
      "W3C standard code, compatible with all major web browsers",
      "Fast and responsive pages",
      "Readily accessible geolocation, Email & Contact",
      "Industry-specific themes, with extended graphical experience",
      "Functional & easy to customize",
      "Cloud-based database back-up",
      "Easy integration with useful plugins & tools",
    ],
    images: [
      php,
      mysql,
      vue,
      four,
      five,
      react,
      bootstrap,
      eight,
      aws,
      ten,
      eleben,
      share,
      git,
      fourteen,
    ],
  },
  {
    id: "mobile development",
    heroImage: mobileHero,
    title: "MOBILE APP DEVELOPMENT",
    description1:
      "Designing and building mobile applications for iOS and Android platforms, utilizing",
    description2:
      "languages like Swift, Kotlin, and React Native for versatility.",
    anime: mobileAnime,
    features: [
      "CMS-based website development",
      "Static & Dynamic website designing solution",
      "Customized website design with powerful platforms",
      "W3C standard code, compatible with all major web browsers",
      "Fast and responsive pages",
      "Readily accessible geolocation, Email & Contact",
      "Industry-specific themes, with extended graphical experience",
      "Functional & easy to customize",
      "Cloud-based database back-up",
      "Easy integration with useful plugins & tools",
    ],
    images: [react, nineteen, flutter, sixteen, seventeen, ts, redux],
  },
  {
    id: "e-commerce development",
    heroImage: eCommerceHero,
    title: "E-COMMERCE SOLUTION",
    description1:
      "Developing robust ecommerce platforms, integrating secure payment gateways, and  optimizing",
    description2:
      "user experiences for seamless online shopping and business growth.",
    anime: eCommerceAnime,
    features: [
      "Built with Magento, BigCommerce, WooCommerce, Shopify, etc",
      "Compatible with any business model let it be B2B, B2C, C2C & C2B",
      "Single page application (SPA) & Multiple Page Application (MPA)",
      "Server-side rendered (SSR) eCommerce development",
      "Customizable eCommerce website & plugins",
      "Cloud hosting & migration support",
      "Fully-featured shopping cart & checkout option",
      "The reliable and secured payment gateway system",
      "Multiple currencies and language support",
      "On-demand mobile eCommerce app",
    ],
    images: [
      php,
      mysql,
      vue,
      four,
      five,
      react,
      bootstrap,
      eight,
      aws,
      ten,
      eleben,
      share,
      git,
      fourteen,
      asana,
    ],
  },
  //start from here
  {
    id: "enterprise solution",
    heroImage: enterpriseHero,
    title: "ENTERPRISE SOLUTION",
    description1:
      "Architecting scalable enterprise solutions, leveraging cutting-edge technologies to streamline operations, ",
    description2:
      "enhance productivity, and ensure business agility for organizational success.",
    anime: enterpriseAnime,
    features: [
      "Enterprise-graded software",
      "Suitable for any business & organization",
      "User-defined ERP modules- POS, HRM, CRM, and many more",
      "Simple and speedy Single Page Application (SPA)",
      "Highly customizable",
      "Available both in mobile & desktop version",
      "Industry-specific themes, with extended graphical experienceAPI integration support",
      "Assurance of high data security",
      "Technical support and assistance for large ERPs",
      "On-demand development of mobile ERP applications",
    ],
    images: [
      php,
      mysql,
      vue,
      four,
      five,
      react,
      eight,
      aws,
      ten,
      eleben,
      share,
      git,
      fourteen,
    ],
  },
  {
    id: "ui-ux development",
    heroImage: uiUxHero,
    title: "UI/UX DESIGN & DEVELOPMENT",
    description1:
      "Crafting intuitive and visually stunning user interfaces, focusing on user experience, accessibility, ",
    description2:
      "and responsive design for engaging digital interactions and satisfaction.",
    anime: uiUxAnime,
    features: [
      "Heuristic Evaluation to ensure the best usability",
      "Low, Mid & High Fidelity Prototype and wireframing",
      "UI design with powerful tools, including Figma, InVision, Adobe XD, Sketch, and more",
      "Color, Typography, and Layout maintenance",
      "Information architecture design & improvement",
      "A/B testing to meet the needs & requirements of end-users",
      "Customer feedback analysis",
      "Competitive product research",
      "Overall development concerning users’ cognitive psychology",
      "Understand human-machine interaction with persona & scenario design",
    ],
    images: [ai, ps, xd, diomon, miro, figma],
  },
  {
    id: "api integration",
    heroImage: apiHero,
    title: "API INTEGRATION",
    description1:
      "Efficiently integrating APIs for enhanced functionality, seamless data exchange, and",
    description2:
      "improved connectivity in web and mobile applications.",
    anime: apiAnime,
    features: [
      "API Integration for web & mobile applications",
      "Customer API development & Integration 07",
      "REST Standard API architecture",
      "OAuth authentication protocol",
      "Proper API documentation",
      "Various API tokens including sanctum, passport & JWT",
      "Live environment & sandbox environment",
      "Private, partner & public APIs",
      "Third-party API integration",
      "API consultation services",
    ],
    images: [vue, four, five, react, postman],
  },
  {
    id: "software development",
    heroImage: softwareHero,
    title: "SOFTWARE DEVELOPMENT",
    description1:
      "Creating efficient, scalable software solutions using agile methodologies and cutting-edge",
    description2:
      "technologies for tailored applications and client satisfaction.",
    anime: softwareAnime,
    features: [
      "Industry-specific software applicable for banks, hospitals, retails and many more",
      "Efficient and Top-notch quality web application software",
      "Robust architecture & high-standard design",
      "Accessible and easy-to-use",
      "Excellent functionality & features",
      "Compatible with different languages and time zone",
      "Quality assurance with extended testing",
      "Complete operating system support compatible with any device",
      "Secure code data & privacy protection",
      "Futuristic customization, up-gradation & maintenance support",
    ],
    images: [
      php,
      mysql,
      vue,
      four,
      five,
      react,
      bootstrap,
      eight,
      aws,
      ten,
      eleben,
      share,
      git,
      fourteen,
    ],
  },
  {
    id: "sqa solution",
    heroImage: sqaHero,
    title: "SQA SOLUTION",
    description1:
      "Ensuring software quality through rigorous testing processes, identifying bugs, and ",
    description2:
      "implementing solutions for reliable, high-performance applications.",
    anime: sqaAnime,
    features: [
      "Complete quality check for your desktop, web & mobile applications",
      "Testing throughout Software Development Life Cycle (SDLC)",
      "Quality standards as per SRS & RTM",
      "Quality audit & remediation plan",
      "Unit, Load, Regression & Performance testing",
      "Automated SQA using selenium, cypress, JMeter & other tools",
      "Test automation for CI/ CD Pipeline",
      "Entire UI/UX & functionality testing",
      "Overall security testing to ensure robust security",
      "SQA consulting",
    ],
    images: [se, eye, o, apache, jenkins, mozila, gitlab],
  },
  {
    id: "digital marketing",
    heroImage: marketingHero,
    title: "DIGITAL MARKETING",
    description1:
      "Strategizing and executing impactful digital marketing campaigns, optimizing online ",
    description2:
      "presence, and driving conversions for business growth and success.",
    anime: marketingAnime,
    features: [
      "Market Research and Strategy",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing (SMM)",
      "Conversion Rate Optimization",
      "Email Marketing",
      "Graphic Design",
      "Content Marketing",
      "Reputation Management",
      "Web design and Development",
    ],
    images: [web, email, cro, adobe, o],
  },
];