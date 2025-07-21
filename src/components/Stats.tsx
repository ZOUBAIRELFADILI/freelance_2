import React, { useEffect, useState, useRef } from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    experience: 0,
    support: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Clients Served',
      description: 'Individuals supported across the UAE'
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Dedicated service to the community'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Heart,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction score'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentCount = 0;
        const increment = stat.value / steps;
        
        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= stat.value) {
            currentCount = stat.value;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'clients' : index === 1 ? 'experience' : index === 2 ? 'support' : 'satisfaction']: Math.floor(currentCount)
          }));
        }, stepDuration);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Making a Difference Every Day
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the lives we've touched 
            and the communities we've strengthened across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const countKey = index === 0 ? 'clients' : index === 1 ? 'experience' : index === 2 ? 'support' : 'satisfaction';
            
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-5xl font-bold text-white mb-2">
                  {counts[countKey]}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-emerald-100">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Families Across the UAE
            </h3>
            <p className="text-emerald-100 text-lg max-w-4xl mx-auto">
              From Dubai to Abu Dhabi, Sharjah to Ajman, we've been the trusted partner 
              for thousands of families seeking quality disability services. Our network 
              of professionals is dedicated to providing personalized care that makes a 
              real difference in people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;