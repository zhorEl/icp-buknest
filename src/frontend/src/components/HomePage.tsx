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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
        {/* Organic Background Shapes */}
        <div className="absolute top-0 left-0 -translate-x-32 -translate-y-32 rounded-full w-96 h-96 bg-gradient-to-br from-pink-200 to-green-200 opacity-30"></div>
        <div className="absolute right-0 translate-x-32 rounded-full opacity-25 top-20 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200"></div>
        <div className="absolute bottom-0 w-64 h-64 translate-y-32 rounded-full left-1/4 bg-gradient-to-br from-pink-200 to-green-200 opacity-20"></div>
        <div className="absolute w-48 h-48 rounded-full opacity-25 bottom-20 right-1/4 bg-gradient-to-br from-green-200 to-emerald-200"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute top-20 left-16 opacity-30 animate-float-slow" style={{ transform: 'translateX(-24rem)', animationDelay: '0s' }}>
          <img src="/pattern/pattern pink.svg" alt="" className="w-120 h-120" />
        </div>
        <div className="absolute opacity-25 top-40 right-24 animate-float-gentle" style={{ animationDelay: '3s', transform: 'translateX(26.4rem)' }}>
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
        
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            {/* Brand Logo */}
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-white border border-white border-opacity-50 shadow-lg bg-opacity-80 backdrop-blur-sm rounded-3xl">
                <img src="/icon.svg" alt="BukNEST Logo" className="w-16 h-16" />
              </div>
            </div>
            
            {/* Brand Name */}
            <div className="flex justify-center mb-4">
              <img src="/logo-name.svg" alt="BukNEST" className="h-16 md:h-24 lg:h-32" />
            </div>
            
            {/* Tagline */}
            {/* Main Description */}
            <div className="max-w-4xl p-8 mx-auto mb-12 bg-white border border-white border-opacity-50 bg-opacity-70 backdrop-blur-sm rounded-3xl">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl font-handwritten" style={{ color: '#CB748E' }}>
                A safe nest for every child with special needs
              </h2>
              <p className="text-lg leading-relaxed text-green-700 md:text-xl font-readable">
                Get AI-powered guidance, book consultations, and Connect with certified professionals who understand your child's unique journey. Track progress in a warm, supportive environment.
              </p>
            </div>
            
            {/* How It Works Preview */}
            <div className="max-w-5xl p-8 mx-auto mb-12 bg-white border border-white border-opacity-50 bg-opacity-60 backdrop-blur-sm rounded-3xl">
              <h3 className="mb-6 text-3xl font-bold md:text-4xl font-handwritten" style={{ color: '#CB748E' }}>How it works?</h3>
              
              <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 border border-pink-100 bg-pink-50 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-pink-300 rounded-full">
                    <span className="font-bold text-white font-handwritten">1</span>
                  </div>
                  <h4 className="mb-2 font-bold font-handwritten" style={{ color: '#CB748E' }}>Parent Engagement</h4>
                  <p className="text-sm text-green-700 font-readable">Share concerns through our conversational AI chatbot</p>
                </div>
                
                <div className="p-6 border bg-rose-50 rounded-2xl border-rose-100">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-rose-300">
                    <span className="font-bold text-white font-handwritten">2</span>
                  </div>
                  <h4 className="mb-2 font-bold font-handwritten" style={{ color: '#CB748E' }}>AI Initial Support</h4>
                  <p className="text-sm text-green-700 font-readable">Get personalized insights and expert recommendations</p>
                </div>
                
                <div className="p-6 border border-green-100 bg-green-50 rounded-2xl md:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-300 rounded-full">
                    <span className="font-bold text-white font-handwritten">3</span>
                  </div>
                  <h4 className="mb-2 font-bold font-handwritten" style={{ color: '#CB748E' }}>Expert Connection</h4>
                  <p className="text-sm text-green-700 font-readable">Book with verified professionals for ongoing support</p>
                </div>
              </div>
            </div>
            
            {/* Hero CTAs */}
            <div className="flex flex-col justify-center gap-6 mb-16 sm:flex-row">
              <button
                onClick={() => onPageChange('assessment')}
                className="flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-pink-400 to-green-500 rounded-2xl hover:from-pink-500 hover:to-green-600 hover:scale-105 font-handwritten"
              >
                Start Free Assessment
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              <button
                onClick={() => onPageChange('professionals')}
                className="px-10 py-5 text-lg font-bold text-green-700 transition-all duration-300 transform bg-white border-2 border-green-300 bg-opacity-80 backdrop-blur-sm rounded-2xl hover:bg-opacity-100 hover:scale-105 font-handwritten"
              >
                Find Professionals
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-white border border-white border-opacity-50 bg-opacity-70 backdrop-blur-sm rounded-2xl">
                  <div className="mb-2 text-2xl font-bold text-green-800 md:text-3xl font-handwritten">{stat.value}</div>
                  <div className="text-sm text-green-600 md:text-base font-handwritten">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NESTY Jumbotron */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] text-white py-20 relative overflow-hidden min-h-[60vh]">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-white rounded-full bg-opacity-10"></div>
        <div className="absolute right-0 w-24 h-24 translate-x-12 bg-white rounded-full top-4 bg-opacity-10"></div>
        <div className="absolute bottom-0 w-20 h-20 translate-y-10 bg-white rounded-full right-1/4 bg-opacity-10"></div>
        <div className="absolute w-16 h-16 bg-white rounded-full top-1/2 left-1/4 bg-opacity-5"></div>
        <div className="absolute w-12 h-12 bg-white rounded-full bottom-1/4 right-1/3 bg-opacity-10"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute opacity-25 top-10 left-10 animate-float-gentle" style={{ transform: 'translateX(-19.2rem)', animationDelay: '2s' }}>
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
          <div className="w-full text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 p-4 mr-4 overflow-hidden bg-white border-4 border-white rounded-full shadow-lg bg-opacity-20 backdrop-blur-sm">
                <img src="/NESTY.svg" alt="NESTY" className="object-cover w-full h-full" />
              </div>
              <div>
                <h1 className="text-4xl font-bold md:text-6xl font-handwritten" style={{ color: '#CB748E' }}>
                <span className="text-white">TALK with </span><span className="text-yellow-300">NESTY!</span>
                </h1>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="mb-4 text-xl text-white md:text-2xl text-opacity-95" style={{ fontFamily: 'Calibri, sans-serif' }}>
                Your friendly AI-powered companion for early assessment
              </p>
              <p className="text-lg leading-relaxed text-white md:text-xl text-opacity-90" style={{ fontFamily: 'Calibri, sans-serif' }}>
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
                <MessageCircle className="w-6 h-6 mr-3" />
                Start Chatting with NESTY
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              <p className="mt-4 text-sm text-white text-opacity-80" style={{ fontFamily: 'Calibri, sans-serif' }}>
                Free • Confidential • No registration required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Start Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 translate-x-32 -translate-y-32 rounded-full bg-gradient-to-br from-pink-200 to-green-200 opacity-20"></div>
        <div className="absolute bottom-0 left-0 -translate-x-40 translate-y-40 rounded-full w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-200 opacity-15"></div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-handwritten" style={{ color: '#CB748E' }}>Starting Where It Matters Most</h2>
          </div>
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="p-8 bg-white border border-white border-opacity-50 bg-opacity-80 backdrop-blur-sm rounded-3xl">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-3 bg-pink-300 rounded-full"></div>
                  <h3 className="text-xl font-bold font-handwritten" style={{ color: '#CB748E' }}>Why Start Here?</h3>
                </div>
                <ul className="space-y-3 text-green-700 font-readable">
                  <li>• 1 in 6 children may have developmental delays, but access to specialists remains limited</li>
                  <li>• Many parents feel lost and unsupported, especially in underserved areas</li>
                </ul>
              </div>
              
              <div className="p-8 bg-white border border-white border-opacity-50 bg-opacity-80 backdrop-blur-sm rounded-3xl">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-3 rounded-full bg-rose-300"></div>
                  <h3 className="text-xl font-bold font-handwritten" style={{ color: '#CB748E' }}>BukNEST bridges that gap:</h3>
                </div>
                <ul className="space-y-3 text-green-700 font-readable">
                  <li>• AI-powered guidance available 24/7</li>
                  <li>• Connects parents to <strong>local or regional experts</strong></li>
                  <li>• Promotes awareness, early action, and community support</li>
                </ul>
              </div>
              
              <div className="p-8 bg-white border border-white border-opacity-50 bg-opacity-80 backdrop-blur-sm rounded-3xl">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-3 bg-green-300 rounded-full"></div>
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
              <div className="max-w-md p-8 bg-white border border-white border-opacity-50 bg-opacity-80 backdrop-blur-sm rounded-3xl">
                <div className="text-center">
                  <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-200 to-green-200">
                    <Users className="w-16 h-16 text-green-600" />
                  </div>
                  <h4 className="mb-4 text-xl font-bold font-handwritten" style={{ color: '#CB748E' }}>Join Our Community</h4>
                  <p className="mb-6 text-green-700 font-readable">Be part of a supportive network of families and professionals</p>
                  <button
                    onClick={() => onPageChange('assessment')}
                    className="px-6 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-400 to-green-500 rounded-2xl hover:from-pink-500 hover:to-green-600 font-handwritten"
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
      <div className="relative py-20 overflow-hidden bg-white">
        {/* Background Decorations */}
        <div className="absolute left-0 w-48 h-48 -translate-x-24 rounded-full top-20 bg-gradient-to-br from-green-200 to-pink-200 opacity-20"></div>
        <div className="absolute right-0 w-64 h-64 translate-x-32 rounded-full bottom-20 bg-gradient-to-br from-rose-200 to-pink-200 opacity-15"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute opacity-25 top-16 left-12 animate-float-gentle" style={{ transform: 'translateX(-28.8rem)', animationDelay: '1s' }}>
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
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-handwritten" style={{ color: '#CB748E' }}>How We Support Your Family</h2>
            <p className="max-w-3xl mx-auto text-xl text-green-600 font-readable">Comprehensive care through our innovative platform</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
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
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold font-handwritten" style={{ color: '#CB748E' }}>{feature.title}</h3>
                  <p className="mb-8 leading-relaxed text-green-700 font-readable">{feature.description}</p>
                  <button
                    onClick={feature.action}
                    className="flex items-center font-bold text-green-600 transition-colors hover:text-green-700 group font-handwritten"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
        {/* Background Decorations */}
        <div className="absolute top-0 w-32 h-32 rounded-full opacity-25 left-1/4 bg-gradient-to-br from-pink-200 to-green-200"></div>
        <div className="absolute bottom-0 w-40 h-40 rounded-full right-1/4 bg-gradient-to-br from-green-200 to-pink-200 opacity-20"></div>
        
        {/* Floating Pattern Elements */}
        <div className="absolute opacity-25 top-24 left-8 animate-subtle-bounce" style={{ animationDelay: '4s' }}>
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
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-handwritten" style={{ color: '#CB748E' }}>Trusted by Families</h2>
            <p className="max-w-3xl mx-auto text-xl text-green-600 font-readable">Your child's safety and progress are our top priorities</p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white border border-white border-opacity-50 rounded-full bg-opacity-80 backdrop-blur-sm">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold font-handwritten" style={{ color: '#CB748E' }}>Verified Professionals</h3>
              <p className="text-lg text-green-700 font-readable">All therapists are licensed and background-checked</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white border border-white border-opacity-50 rounded-full bg-opacity-80 backdrop-blur-sm">
                <Clock className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold font-handwritten" style={{ color: '#CB748E' }}>24/7 Support</h3>
              <p className="text-lg text-green-700 font-readable">Round-the-clock assistance for your family</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white border border-white border-opacity-50 rounded-full bg-opacity-80 backdrop-blur-sm">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold font-handwritten" style={{ color: '#CB748E' }}>Proven Results</h3>
              <p className="text-lg text-green-700 font-readable">95% of families see improvement within 3 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}