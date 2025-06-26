
import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const GuaranteeSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "All-Day Power™ Battery System",
      description: "Premium lithium-ion cells provide 8-10 full treatment sessions per charge. No more devices that die after five uses."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Comfort-Fit™ Strapping System",
      description: "Medical-grade materials with high-tensile velcro and extension straps for any leg size. Designed for comfort during extended use."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "German Engineering Standards",
      description: "Every unit assembled and tested to the same rigorous standards as medical devices used in European hospitals."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
          Medical-Grade Quality You Can Trust
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero Risk, Everything to Gain</h3>
            <div className="bg-green-100 rounded-lg p-6 inline-block">
              <p className="text-lg text-green-800 font-semibold mb-2">90-Day Money-Back Guarantee</p>
              <p className="text-slate-700">
                If you don't experience significant improvement in your knee pain and mobility within 90 days, return the device for a full refund. <strong>No questions asked.</strong>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Compare the Costs:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h5 className="text-lg font-bold text-red-800 mb-2">Knee Replacement Surgery</h5>
                <ul className="text-slate-700 space-y-1">
                  <li>💰 $50,000+ cost</li>
                  <li>⏰ Months of painful recovery</li>
                  <li>⚠️ 30% still experience pain after</li>
                  <li>🚫 Irreversible procedure</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h5 className="text-lg font-bold text-green-800 mb-2">Cupilo Knee Massager</h5>
                <ul className="text-slate-700 space-y-1">
                  <li>✅ Fraction of the cost</li>
                  <li>✅ Use at home, your schedule</li>
                  <li>✅ 90-day guarantee</li>
                  <li>✅ Completely reversible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
