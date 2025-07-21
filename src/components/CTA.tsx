import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take the First Step Today
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Don't wait to access the support you deserve. Our team of experts is ready 
            to help you navigate your journey towards greater independence and quality of life.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Apply Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Apply?
            </h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Start your application process today. Our streamlined online form makes 
              it easy to request services and begin your assessment.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply for Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Contact Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have Questions?
            </h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Speak with our friendly team to learn more about our services and 
              how we can support you or your loved ones.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
            <p className="text-emerald-100">+971 4 123 4567</p>
            <p className="text-emerald-200 text-sm">Available 24/7</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
            <p className="text-emerald-100">info@disabilityuae.ae</p>
            <p className="text-emerald-200 text-sm">Quick response guaranteed</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Office Hours</h4>
            <p className="text-emerald-100">Sun - Thu: 8AM - 6PM</p>
            <p className="text-emerald-200 text-sm">Emergency support 24/7</p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <p className="text-white text-lg font-medium mb-2">
              🌟 Your journey to independence starts here
            </p>
            <p className="text-emerald-100">
              Join thousands of satisfied clients who have transformed their lives with our support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;