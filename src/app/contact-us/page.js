import PaddingTop from "@/components/shared/gap's/PaddingTop";
import React from "react";
import contactHero from "../../assets/commonHero/contact.jpg";
import ServicesHero from "../services/components/ServicesHero";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import Footer from "@/components/shared/Footer";
import ContactForm from "./ContactForm";
import LocationBox from "./LocationBox";
import Inner from "@/components/shared/wrapper's/motion/Inner";

export const metadata = {
  title: "Mediusware || Contact Us",
  description: "Medius Family",
};

const ContactPage = () => {
  const data = {
    title: "CONTACT WITH US",
    heroImage: contactHero,
    description1:
      "Give us a call or drop by anytime, we endeavor to answer all",
    description2: "inquiries within 24 hours on business days.",
  };
  return (
    <Inner>
      <PaddingTop />
      <ServicesHero data={data} />
      <SectionsGap />
      <ContactForm />
      <SectionsGap />
      <LocationBox />
      <SectionsGap />
    </Inner>
  );
};

export default ContactPage;
