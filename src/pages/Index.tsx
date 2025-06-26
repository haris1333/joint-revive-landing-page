
import React from 'react';
import HeroSection from '../components/HeroSection';
import AuthoritySection from '../components/AuthoritySection';
import StorySection from '../components/StorySection';
import ScienceSection from '../components/ScienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GuaranteeSection from '../components/GuaranteeSection';
import CTASection from '../components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AuthoritySection />
      <StorySection />
      <ScienceSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <CTASection />
    </div>
  );
};

export default Index;
