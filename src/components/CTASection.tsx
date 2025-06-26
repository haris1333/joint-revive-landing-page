
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Globe, Truck, Shield, Clock } from 'lucide-react';

const CTASection = () => {
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
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <p className="font-bold text-xl">Call Now:</p>
                  <p className="text-2xl font-bold text-red-600">1-800-XXX-XXXX</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <p className="font-bold text-xl">Online:</p>
                  <p className="text-xl font-bold text-red-600">www.DrRichterKnee.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 mb-6"
          >
            ORDER NOW - RISK FREE
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Truck className="w-4 h-4 text-green-600 mr-2" />
              <span>Same-day shipping</span>
            </div>
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
        
        <div className="bg-white/10 rounded-lg p-6">
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
