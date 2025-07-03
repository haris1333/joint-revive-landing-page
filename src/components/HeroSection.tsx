
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Shield } from 'lucide-react';

const HeroSection = () => {
  const handleOrderClick = () => {
    window.open('https://healthylivingforall.online/products/knee', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Updated Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900 mb-8 leading-tight">
          "I Recommended 5,000 Knee Surgeries — Until My Own Mother Needed One"
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl text-slate-700 mb-4">
            <strong>Dr. Klaus Richter, Orthopedic Specialist (Retired)</strong>
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            After three decades of recommending knee replacements, I discovered a simple at-home device that's helping seniors avoid surgery and reclaim their independence.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="mb-8 text-center">
          <img 
            src="/lovable-uploads/917a12ad-5ab4-4bc6-bfa9-32b105254a9d.png" 
            alt="Doctor Klaus Richter with patient showing improved mobility"
            className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-slate-600">
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-green-600 mr-2" />
            <span>Medical-grade quality</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span>4.8/5 stars (2,847 reviews)</span>
          </div>
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-green-600 mr-2" />
            <span>90-day guarantee</span>
          </div>
        </div>
        
        {/* Primary CTA */}
        <div className="text-center">
          <Button 
            onClick={handleOrderClick}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 mb-4"
          >
            ► Discover the Alternative to Surgery
          </Button>
          <p className="text-sm text-slate-500">
            No surgery. No side effects. Just relief.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
