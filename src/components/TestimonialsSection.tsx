
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Margaret K.",
      age: 69,
      text: "I was scheduled for surgery in three weeks. After using this for two months, I cancelled my appointment. I'm golfing 3-4 times a week now and haven't used my handicap parking sticker once.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Robert T.",
      age: 71,
      text: "As a retired carpenter, I thought my days of building things were over. Last month I built my granddaughter a treehouse. The pain is gone and I'm starting to walk up steps foot over foot instead of one at a time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dorothy L.",
      age: 74,
      text: "I just wanted to finish yard work without limping. Now I actually enjoy doing chores again. I feel fantastic.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const benefits = [
    "Getting up from chairs without pushing off with their hands",
    "Climbing stairs normally for the first time in years",
    "Grandparents getting on the floor to play with children and actually being able to get back up",
    "Avid gardeners returning to their beloved hobby pain-free",
    "People sleeping through the night without throbbing, aching knees"
  ];

  const scrollToFinalCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
          The Clinical Results That Amazed Even Me
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-slate-800 mb-8">
            Patients Are Experiencing Results That Would Be Considered Miraculous:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">age {testimonial.age}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Strategic CTA Button after testimonials */}
        <div className="text-center mb-8">
          <button 
            onClick={scrollToFinalCTA}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ► I Want Results Like This Too
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-slate-700">
            <strong>These aren't isolated cases.</strong> When you restore proper circulation to joint tissue that's been starving for oxygen and nutrients, the body's own healing mechanisms can accomplish what surgery and drugs cannot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
