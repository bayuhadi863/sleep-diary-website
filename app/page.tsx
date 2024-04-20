import React from 'react';

// Mantine Import
import { Button } from '@mantine/core';

// Components import
import { LandingPageAppShell } from '@/components/landing_page_layout/app-shell';
import Container from '@/components/landing_page_layout/container';
import HeroSection from '@/components/landing_page_layout/sections/hero-section';
import AboutSection from '@/components/landing_page_layout/sections/about-section';
import FeaturesSection from '@/components/landing_page_layout/sections/features-section';
import ReviewsSection from '@/components/landing_page_layout/sections/reviews-section';

const Page = () => {
  return (
    <LandingPageAppShell>
      <main className='pb-32 '>
        <Container>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <ReviewsSection />
        </Container>
      </main>
    </LandingPageAppShell>
  );
};

export default Page;
