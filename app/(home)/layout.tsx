import React from 'react';
// Component import
import { LandingPageAppShell } from '@/components/landing_page_layout/app-shell';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <LandingPageAppShell>{children}</LandingPageAppShell>;
};

export default HomeLayout;
