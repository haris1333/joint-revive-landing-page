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
      description: "Medical-grade materials with high-tensile velco and extension straps for any leg size. Designed for comfort during extended use."
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
            <h4 className="text-xl font-semibold text-slate-900 mb-6">Compare the Costs:</h4>
            
            {/* Visual Cost Comparison Chart */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-end justify-center space-x-8 h-64">
                <div className="flex flex-col items-center">
                  <div className="bg-red-500 w-20 h-48 rounded-t-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs text-center leading-tight">$50,000+</span>
                  </div>
                  <div className="text-center mt-4">
                    <h5 className="text-sm font-bold text-red-800">Knee Replacement</h5>
                    <p className="text-xs text-slate-600">Surgery</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 w-20 h-16 rounded-t-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">$99</span>
                  </div>
                  <div className="text-center mt-4">
                    <h5 className="text-sm font-bold text-green-800">ReviveKnee™</h5>
                    <p className="text-xs text-slate-600">Massager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
