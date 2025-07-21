import React from 'react';
import { Heart, Users, Award, Shield, Target, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy, understanding, and genuine care for the individuals and families we serve."
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "We believe in creating opportunities for everyone to participate fully in community life, regardless of their abilities."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in service delivery, continuously improving to exceed expectations."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our interactions and services."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We focus on building independence and self-determination, helping individuals achieve their personal goals."
    },
    {
      icon: Globe,
      title: "Community",
      description: "We work collaboratively with families, organizations, and communities to create lasting positive change."
    }
  ];

  const team = [
    {
      name: "Dr. Amira Hassan",
      role: "Chief Executive Officer",
      qualification: "PhD in Disability Studies",
      experience: "15+ years in disability services",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Director of Services",
      qualification: "MSc in Rehabilitation Counseling",
      experience: "12+ years in service delivery",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Mohammed",
      role: "Clinical Director",
      qualification: "MD, Specialist in Physical Medicine",
      experience: "18+ years in clinical practice",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Omar Al-Zahra",
      role: "Community Outreach Manager",
      qualification: "BA in Social Work",
      experience: "10+ years in community services",
      image: "https://images.pexels.com/photos/6749789/pexels-photo-6749789.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About DisabilityUAE
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Dedicated to empowering individuals with disabilities across the UAE through 
            comprehensive services, innovative solutions, and unwavering support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To provide comprehensive, person-centered disability services that promote 
                independence, dignity, and quality of life for individuals with disabilities 
                and their families throughout the United Arab Emirates.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A fully inclusive UAE where every individual, regardless of their abilities, 
                has equal opportunities to participate in all aspects of community life and 
                achieve their full potential.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-emerald-50 rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Serving the UAE Since 2009
                  </h3>
                  <p className="text-gray-600">
                    Over 15 years of dedicated service to the disability community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to transform disability services in the UAE
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  DisabilityUAE was founded in 2009 by a group of passionate healthcare 
                  professionals, social workers, and disability advocates who recognized 
                  the need for comprehensive, culturally sensitive disability services 
                  in the United Arab Emirates.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  What started as a small team providing basic support services has grown 
                  into one of the UAE's leading disability service providers, serving over 
                  5,000 individuals and families across all seven emirates.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our growth has been driven by our unwavering commitment to excellence, 
                  innovation, and the belief that every person deserves the opportunity 
                  to live with dignity and independence. We've continuously expanded our 
                  services, embraced new technologies, and developed partnerships with 
                  leading organizations to better serve our community.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Today, we're proud to be a trusted partner for individuals, families, 
                  healthcare providers, and government agencies throughout the UAE, 
                  working together to build a more inclusive society for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to advancing disability services in the UAE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-emerald-600 font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-2">
                    {member.qualification}
                  </p>
                  
                  <p className="text-gray-500 text-sm">
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Accreditations & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence and working with leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ISO 9001:2015 Certified
              </h3>
              <p className="text-gray-600">
                Quality management system certification ensuring consistent, 
                high-quality service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                UAE Ministry Approved
              </h3>
              <p className="text-gray-600">
                Officially recognized and approved by the UAE Ministry of 
                Community Development.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Strategic Partnerships
              </h3>
              <p className="text-gray-600">
                Collaborating with leading healthcare providers, educational 
                institutions, and community organizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;