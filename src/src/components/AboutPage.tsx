import React from 'react';
import { Users, Heart, Shield, Award, Target, Globe, Lightbulb, Heart as HandHeart } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export default function AboutPage({ onPageChange }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Gly Tabamo',
      role: '',
      bio: '',
      avatar: '/team/gly.png',
      credentials: []
    },
    {
      name: 'Angel Fortin',
      role: '',
      bio: '',
      avatar: '/team/angel.png',
      credentials: []
    },
    {
      name: 'Zhor Natinga',
      role: '',
      bio: '',
      avatar: '/team/zhor.png',
      credentials: []
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every interaction is guided by empathy, understanding, and genuine care for families.',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'We prioritize the safety and privacy of every family, creating secure spaces for growth.',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining cutting-edge AI technology with proven therapeutic approaches.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making quality developmental support available to families everywhere, regardless of location.',
      color: 'from-purple-400 to-indigo-400'
    }
  ];

  const stats = [
    { label: 'Families Supported', value: '10,000+' },
    { label: 'Certified Professionals', value: '500+' },
    { label: 'Cities Reached', value: '50+' },
    { label: 'Success Stories', value: '95%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] text-white py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-x-12"></div>
        <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-white bg-opacity-10 rounded-full translate-y-10"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten" style={{ color: '#CB748E' }}>
                <span className="text-white">About </span><span className="text-yellow-300">BukNEST</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Building bridges between families and the support they need
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
              We believe every child deserves access to quality developmental support. Through innovative technology 
              and compassionate care, we're creating a world where no family feels alone in their journey.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 -translate-x-40 translate-y-40"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-20 left-16 opacity-18 animate-float-slow" style={{ animationDelay: '4s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-22 h-22" />
        </div>
        <div className="absolute bottom-32 right-20 opacity-15 animate-subtle-bounce" style={{ animationDelay: '9s' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-18 h-18" />
        </div>
        <div className="absolute top-40 right-32 opacity-20 animate-gentle-pulse" style={{ animationDelay: '13s' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-16 h-16" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Story</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
                <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>The Beginning</h3>
                <p className="text-green-700 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  BukNEST was born from a simple observation: too many families were struggling to find the right 
                  support for their children's developmental needs. Long waiting lists, limited access to specialists, 
                  and the overwhelming nature of navigating the system left parents feeling lost and alone.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
                <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>Our Solution</h3>
                <p className="text-green-700 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  We created NESTY, an AI companion that provides initial support and guidance, paired with a 
                  platform that connects families directly with verified professionals. Our approach combines the 
                  accessibility of technology with the irreplaceable value of human expertise.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50 max-w-md">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <HandHeart className="h-16 w-16 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>Our Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-green-800 font-handwritten">{stat.value}</div>
                        <div className="text-sm text-green-600 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-48 h-48 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20 -translate-x-24"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Values</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-green-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-50">
                  <div className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>{value.title}</h3>
                  <p className="text-green-700 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Meet Our Team</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Passionate professionals dedicated to supporting families
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-50">
                <div className="text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold mb-2 font-handwritten" style={{ color: '#CB748E' }}>{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full translate-x-20 translate-y-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-handwritten">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
            Join thousands of families who have found support and guidance through BukNEST
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('assessment')}
              className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
            >
              Start with NESTY
            </button>
            <button
              onClick={() => onPageChange('professionals')}
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 font-handwritten"
            >
              Find Professionals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}