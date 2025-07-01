
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Shield, Clock } from 'lucide-react';

const CTASection = () => {
  const handleOrderClick = () => {
    window.open('https://healthylivingforall.online/products/knee', '_blank');
  };

  return (
    <section id="cta-section" className="py-16 px-4 bg-gradient-to-b from-red-600 to-red-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Don't Wait for Permission to Feel Better
        </h2>
        
        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <p className="text-xl mb-6">
            For three decades, I was part of a system that taught patients to wait for permission to heal. Wait for the appointment. Wait for the prescription. Wait for the surgery.
          </p>
          <p className="text-2xl font-bold mb-4">
            But your body doesn't need permission to heal.
          </p>
          <p className="text-2xl font-bold text-yellow-300">
            It needs opportunity.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-8 text-slate-900">
          <h3 className="text-2xl font-bold mb-6 text-red-600">Order Your Cupilo Knee Massager Today</h3>
          
          {/* Updated "What's in the Box" Image */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/5f174e17-ff34-400d-a956-2cb50f643d37.png" 
              alt="Cupilo Knee Massager complete package with device and accessories"
              className="w-full max-w-md mx-auto h-auto object-contain rounded-lg shadow-md"
            />
            <p className="text-sm text-slate-600 mt-2">Complete package includes: Cupilo Knee Massager, charging cable, and extension straps</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <Globe className="w-6 h-6 text-red-600 mr-3" />
              <div>
                <p className="font-bold text-xl">Online:</p>
                <p className="text-xl font-bold text-red-600">www.DrRichterKnee.com</p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleOrderClick}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-lg md:text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto leading-tight"
          >
            <span className="text-center">► Yes! Send My Cupilo Massager Today!</span>
          </Button>
          
          {/* New Reassurance Link */}
          <div className="mb-6">
            <a href="#guarantee" className="text-blue-600 hover:text-blue-800 underline text-sm">
              Click Here to See Our 90-Day "Pain-Free or It's Free" Guarantee
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span>90-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-green-600 mr-2" />
              <span>Medical-grade quality</span>
            </div>
          </div>
        </div>
        
        <div id="guarantee" className="bg-white/10 rounded-lg p-6">
          <p className="text-sm mb-2">
            <strong>Dr. Klaus Richter</strong> is a retired orthopedic specialist who spent 30 years practicing in Munich, Germany. He has published over 40 peer-reviewed papers on joint health and mobility.
          </p>
          <p className="text-xs italic">
            Important: This device is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new treatment program.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
