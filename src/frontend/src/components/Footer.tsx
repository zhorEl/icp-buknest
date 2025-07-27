import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Users, Calendar, Shield, Award, BookOpen } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Assessment with NESTY', id: 'assessment', icon: MessageCircle },
    { name: 'Find Professionals', id: 'professionals', icon: Users },
    { name: 'Book Sessions', id: 'bookings', icon: Calendar },
    { name: 'About Us', id: 'about', icon: Heart },
  ];

  const resources = [
    { name: 'Our Mission', id: 'mission', icon: Heart },
    { name: 'Privacy Policy', id: 'privacy' },
    { name: 'Terms of Service', id: 'terms' },
    { name: 'Help Center', id: 'help' },
  ];

  const forProfessionals = [
    { name: 'Join as Professional', id: 'signup' },
    { name: 'Verification Process', id: 'verification' },
    { name: 'Professional Resources', id: 'resources' },
    { name: 'Success Stories', id: 'stories' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-3 animate-float-slow" style={{ animationDelay: '6s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-32 h-32" />
        </div>
        <div className="absolute top-20 right-16 opacity-2 animate-float-gentle" style={{ animationDelay: '11s' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-28 h-28" />
        </div>
        <div className="absolute bottom-16 left-20 opacity-3 animate-subtle-bounce" style={{ animationDelay: '16s' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-12 opacity-2 animate-float-gentle" style={{ animationDelay: '4s' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-30 h-30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/icon.svg" alt="BukNEST Logo" className="w-10 h-10 mr-3" />
              <img src="/logo-name.svg" alt="BukNEST" className="h-8" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-sans">
              A safe nest for every child with special needs. Connecting families with certified professionals 
              through AI-powered guidance and compassionate care.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-gray-700 hover:bg-[#CB748E] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-handwritten text-[#CB748E]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => onPageChange(link.id)}
                      className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-sans"
                    >
                      <Icon className="h-4 w-4 mr-3 text-[#698a60]" />
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-handwritten text-[#CB748E]">Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li key={resource.id || resource.name}>
                  <button
                    onClick={() => resource.id && onPageChange(resource.id)}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-sans"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-handwritten text-[#CB748E]">For Professionals</h3>
            <ul className="space-y-4">
              {forProfessionals.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onPageChange(item.id)}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-sans"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#CB748E] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-[#CB748E]" />
              </div>
              <div>
                <h4 className="font-bold text-white font-handwritten">Email Us</h4>
                <p className="text-gray-300 font-sans">support@buknest.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#698a60] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-[#698a60]" />
              </div>
              <div>
                <h4 className="font-bold text-white font-handwritten">Call Us</h4>
                <p className="text-gray-300 font-sans">+63 (02) 8123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#CB748E] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-[#CB748E]" />
              </div>
              <div>
                <h4 className="font-bold text-white font-handwritten">Visit Us</h4>
                <p className="text-gray-300 font-sans">Bukidnon, Philippines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CB748E] to-[#698a60] rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2 font-handwritten">Secure & Private</h4>
              <p className="text-gray-300 text-sm font-sans">Your data is protected with enterprise-grade security</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#698a60] to-[#CB748E] rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2 font-handwritten">Certified Professionals</h4>
              <p className="text-gray-300 text-sm font-sans">All therapists are licensed and background-checked</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#CB748E] to-[#698a60] rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2 font-handwritten">Evidence-Based</h4>
              <p className="text-gray-300 text-sm font-sans">Our methods are backed by research and best practices</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm font-sans mb-4 md:mb-0">
              © {currentYear} BukNEST. All rights reserved. Made with <Heart className="h-4 w-4 inline text-[#CB748E]" /> for families.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors font-sans">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors font-sans">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors font-sans">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}