import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            MEDICAL BREAKTHROUGH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Retired Orthopedic Surgeon: <br />
            <span className="text-red-600">"I Recommended 5,000 Knee Surgeries — Until My Own Mother Needed One"</span>
          </h1>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Dr. Klaus Richter reveals why the medical system failed his own mother – and the at-home breakthrough that's helping thousands avoid the knife.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-blue-600">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-600">
              <img 
                src="/lovable-uploads/917a12ad-5ab4-4bc6-bfa9-32b105254a9d.png" 
                alt="Dr. Klaus Richter" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Klaus Richter</h3>
          <p className="text-slate-600 mb-4">30+ Years Orthopedic Specialist • Munich, Germany</p>
          <p className="text-lg text-slate-700 italic">
            "For three decades, I was part of the problem. I believed surgery was the only solution for severe arthritis. I was wrong."
          </p>
        </div>

        <Button 
          onClick={scrollToCTA}
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Discover the Breakthrough →
        </Button>
        
        <p className="text-sm text-slate-500 mt-4">
          ⚡ 90-day money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
