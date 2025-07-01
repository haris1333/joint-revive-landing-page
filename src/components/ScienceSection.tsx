
import React from 'react';
import { Zap, RotateCcw, Sun } from 'lucide-react';

const ScienceSection = () => {
  const phases = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Phase 1: Thermal-Flow Therapy",
      description: "Far-infrared heat penetrates deep into joint tissue, causing constricted blood vessels to dilate. This 'opens the floodgates' for healing circulation."
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Phase 2: Rhythmic Decompression Massage",
      description: "Targeted, rhythmic pressure patterns act like a pump, actively pushing out trapped inflammatory fluid while creating space for fresh, oxygenated blood."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Phase 3: Photonic Cell Energizing",
      description: "Medical-grade red light therapy at precisely 660nm stimulates mitochondria – dramatically accelerating repair and reducing inflammation where it starts."
    }
  ];

  const scrollToFinalCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
          The Research Obsession That Changed Everything
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            What I Discovered: "Inflammatory Stagnation"
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-red-600 mb-4">The Real Problem:</h4>
              <p className="text-lg text-slate-700 mb-4">
                When your joint is damaged, it swells. That swelling constricts the tiny blood vessels that normally carry healing nutrients in and inflammatory waste out.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Over time, your knee joint becomes like a <strong>stagnant pond</strong> – filled with toxic inflammatory proteins while being starved of oxygen-rich blood.
              </p>
              <p className="text-xl font-bold text-red-600">
                Your knee is literally suffocating in its own waste fluid.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Why Traditional Treatments Fail:</h4>
              <ul className="space-y-2 text-slate-700">
                <li>❌ No pill can break this circulatory deadlock</li>
                <li>❌ No brace can restore vital blood flow</li>
                <li>❌ No injection can flush out years of accumulated toxins</li>
              </ul>
            </div>
          </div>
          
          {/* Medical Diagram */}
          <div className="mt-8 bg-slate-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h4 className="text-lg font-bold text-green-700 mb-4">Normal Joint</h4>
                <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center border-2 border-green-500">
                  <img 
                    src="/lovable-uploads/6d342a9b-6f25-4d03-aa6d-1aa52d0aa324.png" 
                    alt="Normal healthy joint diagram showing protected bone, lubricating fluid, and cushioning cartilage"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-red-700 mb-4">"Inflammatory Stagnation"</h4>
                <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center border-2 border-red-500">
                  <img 
                    src="/lovable-uploads/683204fd-ef1e-49aa-b82e-fbae522a912f.png" 
                    alt="Inflamed joint showing painful end-stage arthritis with exposed bone, eroded cartilage, and inflamed capsule"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic CTA Button after Inflammatory Stagnation */}
        <div className="text-center mb-12">
          <button 
            onClick={scrollToFinalCTA}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ► How Do I Fix This Blockage?
          </button>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Synergistic Joint Rejuvenation System
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {phase.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{phase.title}</h4>
                <p className="text-slate-700">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">The Breakthrough Moment</h3>
          <p className="text-lg text-slate-700 mb-6">
            Within two weeks of using my prototype, I looked out the window and saw my mother – the woman who hadn't been able to walk to the mailbox without wincing – <strong>kneeling in her garden, pulling weeds with her bare hands.</strong>
          </p>
          
          {/* "After" Photo of Mother - Fixed for mobile */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/d0d56aa6-6cb2-498f-82a7-dd1e82aa75f7.png" 
              alt="Elderly woman happily gardening, kneeling in bright sunny garden"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-md"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
          
          <p className="text-xl font-semibold text-green-700">
            For the first time in three years, she was in her element again.
          </p>
        </div>
        
        {/* Strategic CTA Button after Breakthrough Story */}
        <div className="text-center">
          <button 
            onClick={scrollToFinalCTA}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ► What Made This Possible?
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
