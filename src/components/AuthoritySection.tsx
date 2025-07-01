
import React from 'react';

const AuthoritySection = () => {
  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          The Doctor's Confession
        </h2>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl mb-6 text-center text-slate-300">
            For three decades, I was part of the problem.
          </p>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-8">
            <p className="text-lg mb-4">
              My name is Dr. Klaus Richter, and I spent 30 years as one of Germany's most respected orthopedic specialists. During that time, I recommended <strong className="text-red-400">thousands of knee replacements</strong> and prescribed countless pills to patients suffering from chronic knee pain.
            </p>
            <p className="text-lg mb-4">
              I believed surgery was the only real solution for severe arthritis. I believed that when cartilage was gone, when it was "bone-on-bone," the only answer was to cut it out and replace it with metal and plastic.
            </p>
            <p className="text-xl font-semibold text-red-400">
              I was wrong.
            </p>
          </div>
          
          <p className="text-lg text-center">
            And it took my own mother's suffering to show me just how wrong I was.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
