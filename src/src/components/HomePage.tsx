import React from 'react';
import { MessageCircle, Users, Calendar, Star, ArrowRight, Shield, Clock } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Pre-Assessment',
      description: 'Get instant insights about your child\'s needs through our AI-powered assessment tool.',
      action: () => onPageChange('assessment'),
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Expert Professionals',
      description: 'Connect with certified speech therapists, occupational therapists, and special education teachers.',
      action: () => onPageChange('professionals'),
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Schedule home visits or online consultations that fit your family\'s schedule.',
      action: () => onPageChange('bookings'),
      color: 'bg-purple-500'
    }
  ];

  const stats = [
    { label: 'Certified Professionals', value: '500+' },
    { label: 'Families Helped', value: '10,000+' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Cities Covered', value: '50+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Organic Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-green-50 overflow-hidden min-h-screen">
        {/* Organic Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-30 -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-25 translate-x-32"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-20 translate-y-32"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-25"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-20 left-16 opacity-30 animate-float-slow" style={{ transform: 'translateX(-24rem)', animationDelay: '0s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-120 h-120" />
        </div>
        <div className="absolute top-40 right-24 opacity-25 animate-float-gentle" style={{ animationDelay: '3s', transform: 'translateX(26.4rem)' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-132 h-132" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-28 animate-subtle-bounce" style={{ animationDelay: '7s', transform: 'translateX(-20.8rem)' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-120 h-120" />
        </div>
        <div className="absolute top-60 right-32 opacity-22 animate-float-gentle" style={{ animationDelay: '11s', transform: 'translateX(21.6rem)' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-108 h-108" />
        </div>
        <div className="absolute bottom-60 left-40 opacity-26 animate-float-slow" style={{ animationDelay: '5s', transform: 'translateX(-19.2rem)' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-96 h-96" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            {/* Brand Logo */}
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-lg border border-white border-opacity-50">
                <img src="/icon.svg" alt="BukNEST Logo" className="w-16 h-16" />
              </div>
            </div>
            
            {/* Brand Name */}
            <div className="flex justify-center mb-4">
              <img src="/logo-name.svg" alt="BukNEST" className="h-16 md:h-24 lg:h-32" />
            </div>
            
            {/* Tagline */}
            {/* Main Description */}
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto border border-white border-opacity-50">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>
                A safe nest for every child with special needs
              </h2>
              <p className="text-lg md:text-xl text-green-700 leading-relaxed font-readable">
                Get AI-powered guidance, book consultations, and Connect with certified professionals who understand your child's unique journey. Track progress in a warm, supportive environment.
              </p>
            </div>
            
            {/* How It Works Preview */}
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-5xl mx-auto border border-white border-opacity-50">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>How it works?</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                  <div className="w-12 h-12 bg-pink-300 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold font-handwritten">1</span>
                  </div>
                  <h4 className="font-bold mb-2 font-handwritten" style={{ color: '#CB748E' }}>Parent Engagement</h4>
                  <p className="text-sm text-green-700 font-readable">Share concerns through our conversational AI chatbot</p>
                </div>
                
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                  <div className="w-12 h-12 bg-rose-300 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold font-handwritten">2</span>
                  </div>
                  <h4 className="font-bold mb-2 font-handwritten" style={{ color: '#CB748E' }}>AI Initial Support</h4>
                  <p className="text-sm text-green-700 font-readable">Get personalized insights and expert recommendations</p>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100 md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-green-300 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white font-bold font-handwritten">3</span>
                  </div>
                  <h4 className="font-bold mb-2 font-handwritten" style={{ color: '#CB748E' }}>Expert Connection</h4>
                  <p className="text-sm text-green-700 font-readable">Book with verified professionals for ongoing support</p>
                </div>
              </div>
            </div>
            
            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => onPageChange('assessment')}
                className="bg-gradient-to-r from-pink-400 to-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-handwritten"
              >
                Start Free Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button
                onClick={() => onPageChange('professionals')}
                className="bg-white bg-opacity-80 backdrop-blur-sm border-2 border-green-300 text-green-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 font-handwritten"
              >
                Find Professionals
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-50">
                  <div className="text-2xl md:text-3xl font-bold text-green-800 mb-2 font-handwritten">{stat.value}</div>
                  <div className="text-green-600 text-sm md:text-base font-handwritten">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NESTY Jumbotron */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] text-white py-20 relative overflow-hidden min-h-[60vh]">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-x-12"></div>
        <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-white bg-opacity-10 rounded-full translate-y-10"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-10 left-10 opacity-25 animate-float-gentle" style={{ transform: 'translateX(-19.2rem)', animationDelay: '2s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-96 h-96" />
        </div>
        <div className="absolute top-32 right-20 opacity-22 animate-float-slow" style={{ animationDelay: '8s', transform: 'translateX(16.8rem)' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-84 h-84" />
        </div>
        <div className="absolute bottom-20 left-32 opacity-28 animate-subtle-bounce" style={{ animationDelay: '12s', transform: 'translateX(-21.6rem)' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-108 h-108" />
        </div>
        <div className="absolute top-1/2 right-16 opacity-20 animate-float-gentle" style={{ animationDelay: '15s', transform: 'translateX(14.4rem)' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-72 h-72" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center min-h-[50vh]">
          <div className="text-center w-full">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold font-handwritten" style={{ color: '#CB748E' }}>
                <span className="text-white">TALK with </span><span className="text-yellow-300">NESTY!</span>
                </h1>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4" style={{ fontFamily: 'Calibri, sans-serif' }}>
                Your friendly AI-powered companion for early assessment
              </p>
              <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                NESTY creates a safe, welcoming space where you can share your concerns about your child's development. 
                Through gentle conversation, NESTY helps identify early signs and provides personalized guidance to support 
                your child's unique journey. No judgment, just understanding and support.
              </p>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => onPageChange('assessment')}
                className="bg-white text-[#CB748E] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto font-handwritten"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Start Chatting with NESTY
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <p className="text-sm text-white text-opacity-80 mt-4" style={{ fontFamily: 'Calibri, sans-serif' }}>
                Free • Confidential • No registration required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Start Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-green-50 py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 -translate-x-40 translate-y-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Starting Where It Matters Most</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-pink-300 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold font-handwritten" style={{ color: '#CB748E' }}>Why Start Here?</h3>
                </div>
                <ul className="space-y-3 text-green-700 font-readable">
                  <li>• 1 in 6 children may have developmental delays, but access to specialists remains limited</li>
                  <li>• Many parents feel lost and unsupported, especially in underserved areas</li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-rose-300 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold font-handwritten" style={{ color: '#CB748E' }}>BukNEST bridges that gap:</h3>
                </div>
                <ul className="space-y-3 text-green-700 font-readable">
                  <li>• AI-powered guidance available 24/7</li>
                  <li>• Connects parents to <strong>local or regional experts</strong></li>
                  <li>• Promotes awareness, early action, and community support</li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-300 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold font-handwritten" style={{ color: '#CB748E' }}>The Vision Ahead</h3>
                </div>
                <ul className="space-y-3 text-green-700 font-readable">
                  <li>• Pilot with real families</li>
                  <li>• Validate impact with real families</li>
                  <li>• Scale gradually to other underserved areas</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-50 max-w-md">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-16 w-16 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>Join Our Community</h4>
                  <p className="text-green-700 mb-6 font-readable">Be part of a supportive network of families and professionals</p>
                  <button
                    onClick={() => onPageChange('assessment')}
                    className="bg-gradient-to-r from-pink-400 to-green-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-pink-500 hover:to-green-600 transition-all duration-300 font-handwritten"
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-48 h-48 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20 -translate-x-24"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-15 translate-x-32"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-16 left-12 opacity-25 animate-float-gentle" style={{ transform: 'translateX(-28.8rem)', animationDelay: '1s' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-144 h-144" />
        </div>
        <div className="absolute top-32 right-16 opacity-22 animate-float-slow" style={{ animationDelay: '7s', transform: 'translateX(31.2rem)' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-156 h-156" />
        </div>
        <div className="absolute bottom-40 left-24 opacity-20 animate-subtle-bounce" style={{ animationDelay: '10s', transform: 'translateX(-26.4rem)' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-132 h-132" />
        </div>
        <div className="absolute top-60 right-40 opacity-28 animate-float-gentle" style={{ animationDelay: '14s', transform: 'translateX(24rem)' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-120 h-120" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>How We Support Your Family</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable">Comprehensive care through our innovative platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = [
                { bg: 'from-pink-400 to-green-500', card: 'from-pink-50 to-green-50' },
                { bg: 'from-rose-400 to-green-400', card: 'from-rose-50 to-green-50' },
                { bg: 'from-green-400 to-pink-400', card: 'from-green-50 to-pink-50' }
              ];
              return (
                <div key={index} className={`bg-gradient-to-br ${colors[index].card} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-50`}>
                  <div className={`bg-gradient-to-br ${colors[index].bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>{feature.title}</h3>
                  <p className="text-green-700 mb-8 leading-relaxed font-readable">{feature.description}</p>
                  <button
                    onClick={feature.action}
                    className="text-green-600 font-bold hover:text-green-700 flex items-center group transition-colors font-handwritten"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-green-50 py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-green-200 to-pink-200 rounded-full opacity-20"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-24 left-8 opacity-25 animate-subtle-bounce" style={{ animationDelay: '4s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-108 h-108" />
        </div>
        <div className="absolute bottom-16 right-12 opacity-22 animate-gentle-pulse" style={{ animationDelay: '9s' }}>
          <img src="/pattern/pattern dark green.svg" alt="" className="w-120 h-120" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float-slow" style={{ animationDelay: '6s' }}>
          <img src="/pattern/pattern light green.svg" alt="" className="w-96 h-96" />
        </div>
        <div className="absolute bottom-32 left-16 opacity-28 animate-subtle-bounce" style={{ animationDelay: '13s' }}>
          <img src="/pattern/pattern light pink with green.svg" alt="" className="w-132 h-132" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-handwritten" style={{ color: '#CB748E' }}>Trusted by Families</h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-readable">Your child's safety and progress are our top priorities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white border-opacity-50">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>Verified Professionals</h3>
              <p className="text-green-700 text-lg font-readable">All therapists are licensed and background-checked</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white border-opacity-50">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>24/7 Support</h3>
              <p className="text-green-700 text-lg font-readable">Round-the-clock assistance for your family</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white border-opacity-50">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>Proven Results</h3>
              <p className="text-green-700 text-lg font-readable">95% of families see improvement within 3 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}