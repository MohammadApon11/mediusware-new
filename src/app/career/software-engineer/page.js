import PaddingTop from '@/components/shared/gap\'s/PaddingTop';
import React from 'react';
import JobHero from '../components/JobHero';
import ContentGap from '@/components/shared/gap\'s/ContentGap';
import RequirementDetails from '../components/RequirementDetails';
import SectionsGap from '@/components/shared/gap\'s/SectionsGap';
import WeOffer from '../components/WeOffer';
import { JobRequirementsData } from '@/data/CareerData';

const SoftwareEngineer = () => {
    const data = JobRequirementsData.find((job) => job.id === "software engineer")
    return (
        <>
          <PaddingTop />
      <JobHero data={data} />
      <ContentGap />
      <RequirementDetails data={data} />
      <SectionsGap />
      <WeOffer />
        </>
    );
};

export default SoftwareEngineer;