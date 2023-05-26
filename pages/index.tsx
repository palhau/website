import React from 'react';
import {
  Headline,
  ProfessionalResume,
  Bio,
  Hobbies,
  SocialMediaLinks,
} from '@components/Home';
import { BaseLayout } from '@components/Layouts/BaseLayout';

export const WelcomePage = () => {
  return (
    <BaseLayout>
      <Headline />
      <ProfessionalResume />
      <Bio />
      <Hobbies />
      <SocialMediaLinks />
    </BaseLayout>
  );
};

export default WelcomePage;
