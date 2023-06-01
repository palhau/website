import React from 'react';
import {
  Headline,
  ProfessionalResume,
  Bio,
  Hobbies,
  SocialMediaLinks,
  Skills,
} from '@components/Home';
import { BaseLayout } from '@components/Layouts/BaseLayout';

export const WelcomePage = () => {
  return (
    <BaseLayout>
      <Headline />
      <ProfessionalResume />
      <Bio />
      <Skills />
      <Hobbies />
      <SocialMediaLinks />
    </BaseLayout>
  );
};

export default WelcomePage;
