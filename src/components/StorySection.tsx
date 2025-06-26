
import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const StorySection = () => {
  const failedTreatments = [
    "Anti-inflammatory medications upset her stomach and caused dangerous blood pressure spikes",
    "Cortisone injections provided only two weeks of relief before pain returned worse",
    "Expensive hinged brace gathered dust - too bulky and uncomfortable",
    "Physical therapy left her in more pain than when she started"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
          When the System Failed the One Person Who Mattered Most
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">My Mother at 72:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Avid gardener for 40+ years
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Raised five children independently
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Never asked for help from anyone
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-slate-700">
              Then came the devastating diagnosis: <strong>severe osteoarthritis with "bone-on-bone" degeneration</strong> in both knees.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">Every "Standard" Treatment Failed:</h3>
            <ul className="space-y-3">
              {failedTreatments.map((treatment, index) => (
                <li key={index} className="flex items-start text-slate-700">
                  <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-slate-100 rounded-lg p-8 text-center">
          <p className="text-xl text-slate-800 mb-4">
            As I watched this strong, independent woman become a prisoner in her own home, I realized something that <strong>shook me to my core</strong>:
          </p>
          <p className="text-2xl font-bold text-red-600">
            The system I had trusted for 30 years had nothing left to offer the people who needed help most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
