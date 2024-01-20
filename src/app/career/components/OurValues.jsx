import SectionWrapper from "@/components/shared/wrapper's/SectionWrapper";
import SectionsHeader from "@/components/shared/SectionsHeader";
import SectionsGap from "@/components/shared/gap's/SectionsGap";
import React from "react";
import ValuesCards from "./ValuesCards";
const valuesData = [
  {
    id: 1,
    title: "Team work",
    description:
      "Our team works together to achieve common goals and supports each other to ensure the success of our projects.",
    borderColor: "border-violet-600",
  },
  {
    id: 2,
    title: "Secured Future",
    description:
      "We recognize the significance of a stable future, and our commitment lies in furnishing our staff with a secure and nurturing workplace.",
    borderColor: "border-rose-600",
  },
  {
    id: 3,
    title: "Upgrade Skills",
    description:
      "At our company, we believe in staying ahead of the curve and embracing new technologies and techniques.",
    borderColor: "border-lime-600",
  },
  {
    id: 4,
    title: "Delicious Foods",
    description:
      "We are providing unlimited coffee, free lunch, Snacks so that you can enjoy it with everyone.",
    borderColor: "border-green-600",
  },
  {
    id: 5,
    title: "Annual Retreat",
    description:
      "Our annual retreats offer a mix of workshops, outdoor activities, and social events in a scenic setting that fosters creativity and camaraderie.",
    borderColor: "border-pink-600",
  },
  {
    id: 6,
    title: "Learning Opportunity",
    description:
      "We value continuous learning and development, and we offer a range of opportunities for our employees to grow their skills and expand their knowledge.",
    borderColor: "border-yellow-600",
  },
  {
    id: 7,
    title: "Weekly Event",
    description:
      "Every week various events are organized in our company so that the employees are excited.",
    borderColor: "border-purple-600",
  },
  {
    id: 8,
    title: "Paid holiday leave",
    description:
      "To respect the diversity of our teams, we offer a total of 21 days paid leave.",
    borderColor: "border-indigo-600",
  },
];

const OurValues = () => {
  return (
    <SectionWrapper>
      <SectionsHeader title1={"Our"} title2={"Values"} />
      <p className="text-primary">
        Our core values are the guiding principles that underpin our work and
        define our culture. Integrity is at the <br />
        heart of everything we do; we believe in honesty, transparency, and
        ethical behavior.
      </p>
      <SectionsGap />
      <div className="grid grid-cols-4 gap-[24px]">
        {valuesData?.map((values, index) => (
          <ValuesCards key={index} values={values} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurValues;
