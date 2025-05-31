import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import UserTypesSection from '../components/UserTypesSection';
import ARHighlightsSection from '../components/ARHighLightSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UserTypesSection />
      <ARHighlightsSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
