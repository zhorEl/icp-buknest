import React from 'react';
import { Target, Heart, Globe, Users, Lightbulb, Shield, Award, ArrowRight, CheckCircle, Star } from 'lucide-react';

interface MissionPageProps {
  onPageChange: (page: string) => void;
}

export default function MissionPage({ onPageChange }: MissionPageProps) {
  const missionPillars = [
    {
      icon: Heart,
      title: 'Compassionate Support',
      description: 'Every family deserves understanding, empathy, and personalized care on their unique journey.',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Globe,
      title: 'Universal Access',
      description: 'Breaking down barriers to make quality developmental support available to all families, everywhere.',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation for Good',
      description: 'Harnessing cutting-edge AI technology to enhance, not replace, human connection and expertise.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Creating supportive networks where families and professionals can connect, learn, and grow together.',
      color: 'from-purple-400 to-indigo-400'
    }
  ];

  const goals = [
    {
      title: 'Early Intervention',
      description: 'Identify developmental concerns early when interventions are most effective',
      icon: Target,
      progress: 85
    },
    {
      title: 'Professional Network',
      description: 'Build a comprehensive network of verified, qualified professionals',
      icon: Award,
      progress: 72
    },
    {
      title: 'Family Empowerment',
      description: 'Equip families with knowledge, tools, and confidence to advocate for their children',
      icon: Shield,
      progress: 90
    },
    {
      title: 'Community Impact',
      description: 'Create lasting positive change in underserved communities',
      icon: Globe,
      progress: 68
    }
  ];

  const impact = [
    {
      metric: '10,000+',
      label: 'Families Supported',
      description: 'Families who have found guidance and support through our platform'
    },
    {
      metric: '500+',
      label: 'Professionals',
      description: 'Certified experts providing quality care across multiple specializations'
    },
    {
      metric: '50+',
      label: 'Communities',
      description: 'Cities and regions where we\'ve made developmental support accessible'
    },
    {
      metric: '95%',
      label: 'Success Rate',
      description: 'Families reporting improved outcomes within 3 months'
    }
  ];

  const commitments = [
    'Maintain the highest standards of privacy and data security',
    'Ensure all professionals are thoroughly vetted and certified',
    'Provide culturally sensitive and inclusive support',
    'Continuously improve our AI to better serve families',
    'Advocate for policy changes that support special needs families',
    'Offer sliding scale pricing to ensure accessibility'
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
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-16 left-12 opacity-20 animate-gentle-pulse" style={{ animationDelay: '3s' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-20 h-20" />
        </div>
        <div className="absolute top-24 right-20 opacity-18 animate-subtle-bounce" style={{ animationDelay: '8s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-18 h-18" />
        </div>
        <div className="absolute bottom-16 left-24 opacity-22 animate-float-gentle" style={{ animationDelay: '12s' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-16 h-16" />
        </div>
        <div className="absolute top-32 right-8 opacity-15 animate-gentle-pulse" style={{ animationDelay: '15s' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-14 h-14" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
              <Target className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten" style={{ color: '#CB748E' }}>
                <span className="text-white">Our </span><span className="text-yellow-300">Mission</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Creating a world where every child with special needs has access to the support they deserve
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
              We envision a future where geographical barriers, long waiting lists, and limited resources no longer 
              prevent families from getting the developmental support their children need to thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 -translate-x-40 translate-y-40"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-20 left-16 opacity-18 animate-float-slow" style={{ animationDelay: '5s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-22 h-22" />
        </div>
        <div className="absolute bottom-32 right-20 opacity-15 animate-subtle-bounce" style={{ animationDelay: '10s' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-18 h-18" />
        </div>
        <div className="absolute top-40 right-32 opacity-20 animate-gentle-pulse" style={{ animationDelay: '14s' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-16 h-16" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>What Drives Us</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-12 border border-white border-opacity-50 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-green-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Core Mission</h3>
              <p className="text-xl text-green-700 leading-relaxed mb-8 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
                To democratize access to quality developmental support by combining the warmth of human expertise 
                with the accessibility of AI technology, ensuring that every child with special needs can reach 
                their full potential regardless of where they live or their family's circumstances.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => onPageChange('assessment')}
                  className="bg-gradient-to-r from-pink-400 to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-handwritten"
                >
                  Experience Our Mission
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Pillars */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-48 h-48 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20 -translate-x-24"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Foundation</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Four pillars that guide every decision we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-green-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-50">
                  <div className={`bg-gradient-to-br ${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>{pillar.title}</h3>
                  <p className="text-green-700 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Goals & Progress */}
      <div className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Goals</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Measurable objectives that drive our progress forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-pink-200 to-green-200 w-12 h-12 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-handwritten" style={{ color: '#CB748E' }}>{goal.title}</h3>
                  </div>
                  <p className="text-green-700 mb-6 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{goal.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-600 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>Progress</span>
                    <span className="text-sm font-bold text-green-800 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-48 h-48 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20 -translate-x-24"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Impact</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Real numbers that reflect the lives we've touched
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-50">
                <div className="text-4xl font-bold text-green-800 mb-2 font-handwritten">{item.metric}</div>
                <div className="text-xl font-bold mb-3 font-handwritten" style={{ color: '#CB748E' }}>{item.label}</div>
                <div className="text-sm text-green-700 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitments */}
      <div className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 -translate-x-40 translate-y-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Our Commitments</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Promises we make to every family we serve
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
              <div className="grid md:grid-cols-2 gap-6">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-green-700 leading-relaxed font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>{commitment}</p>
                  </div>
                ))}
              </div>
            </div>
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
            Join Our Mission
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
            Be part of the movement to make developmental support accessible to all families
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('assessment')}
              className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => onPageChange('professionals')}
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 font-handwritten"
            >
              Become a Professional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}