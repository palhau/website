import { Headline, ProfessionalResume, Bio, Hobbies } from '@components/Home';
import { BaseLayout } from '@components/Layouts/BaseLayout';
import React from 'react';

export const WelcomePage = () => {
  return (
    <BaseLayout>
      <Headline />
      <ProfessionalResume />
      <Bio />
      <Hobbies />
    </BaseLayout>
  );
};

export default WelcomePage;
