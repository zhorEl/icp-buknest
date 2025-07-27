import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, UserCheck, Heart, Shield, ArrowRight } from 'lucide-react';

interface SignupPageProps {
  onPageChange: (page: string) => void;
  onSignup: (userData: any) => void;
}

export default function SignupPage({ onPageChange, onSignup }: SignupPageProps) {
  const [userType, setUserType] = useState<'parent' | 'professional'>('parent');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    profession: ''
  });

  const professions = [
    'Special Education Teacher (SPED)',
    'Occupational Therapist',
    'Speech-Language Pathologist',
    'Physical Therapist',
    'Behavioral Therapist',
    'Developmental Pediatrician',
    'Child Psychologist',
    'Applied Behavior Analysis (ABA) Therapist',
    'Music Therapist',
    'Art Therapist',
    'Social Worker',
    'Early Intervention Specialist',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (userType === 'professional' && !formData.profession) {
      alert('Please select your profession!');
      return;
    }

    const userData = {
      id: Date.now().toString(),
      email: formData.email,
      name: formData.fullName,
      role: userType,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      profession: userType === 'professional' ? formData.profession : undefined,
      avatar: userType === 'parent' 
        ? 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
        : 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    onSignup(userData);
    
    // Redirect professionals to profile page for verification
    if (userType === 'professional') {
      setTimeout(() => {
        onPageChange('my-profile');
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] text-white py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-x-12"></div>
        <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-white bg-opacity-10 rounded-full translate-y-10"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>
        
        {/* Signup Page Floating Elements */}
        <div className="absolute top-14 left-16 opacity-25 animate-pulse">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" fill="white" opacity="0.8"/>
            <path d="M24 8L28 18H38L30 24L33 34L24 29L15 34L18 24L10 18H20L24 8Z" fill="#CB748E"/>
          </svg>
        </div>
        <div className="absolute top-28 right-20 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <rect x="6" y="6" width="30" height="30" rx="15" fill="white" opacity="0.9"/>
            <circle cx="21" cy="21" r="8" fill="#698a60"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-28 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5L24 15H34L26.5 21L29 31L20 26L11 31L13.5 21L6 15H16L20 5Z" fill="white" opacity="0.8"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
              <UserCheck className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">Join </span><span className="text-yellow-300">BukNEST</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Start your journey with our supportive community
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Whether you're a parent seeking support for your child or a professional ready to make a difference, 
              BukNEST provides the platform to connect, grow, and thrive together.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white border-opacity-50 relative">
          {/* Signup form floating elements */}
          <div className="absolute -top-4 -right-4 opacity-15 animate-pulse">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <circle cx="17.5" cy="17.5" r="15" fill="#d698ab"/>
            </svg>
          </div>
          <div className="absolute -bottom-4 -left-4 opacity-12 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L23 12H30L24.5 16L27 23L20 19L13 23L15.5 16L10 12H17L20 5Z" fill="#698a60"/>
            </svg>
          </div>
          
          {/* User Type Selection */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-6 font-handwritten" style={{ color: '#CB748E' }}>
              I am a
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                type="button"
                onClick={() => setUserType('parent')}
                className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 transform hover:scale-105 relative group ${
                  userType === 'parent'
                    ? 'border-green-400 bg-green-50 shadow-xl'
                    : 'border-pink-200 hover:bg-pink-50 hover:border-pink-300'
                }`}
              >
                {/* Card hover effects */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" fill="#d698ab"/>
                  </svg>
                </div>
                
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold mb-3 font-handwritten" style={{ color: '#CB748E' }}>Parent</h3>
                <p className="text-green-700 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  I'm seeking support and guidance for my child's developmental needs
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-green-600 font-readable">
                    <Heart className="h-4 w-4 mr-2" />
                    Access to AI assessment
                  </div>
                  <div className="flex items-center justify-center text-sm text-green-600 font-readable">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Connect with professionals
                  </div>
                  <div className="flex items-center justify-center text-sm text-green-600 font-readable">
                    <Shield className="h-4 w-4 mr-2" />
                    Track child's progress
                  </div>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setUserType('professional')}
                className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 transform hover:scale-105 relative group ${
                  userType === 'professional'
                    ? 'border-green-400 bg-green-50 shadow-xl'
                    : 'border-pink-200 hover:bg-pink-50 hover:border-pink-300'
                }`}
              >
                {/* Card hover effects */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" fill="#698a60"/>
                  </svg>
                </div>
                
                <div className="text-6xl mb-4">👩‍⚕️</div>
                <h3 className="text-2xl font-bold mb-3 font-handwritten" style={{ color: '#CB748E' }}>Professional</h3>
                <p className="text-green-700 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  I'm a certified therapist or educator ready to help families
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center text-sm text-green-600 font-readable">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Build your practice
                  </div>
                  <div className="flex items-center justify-center text-sm text-green-600 font-readable">
                    <Heart className="h-4 w-4 mr-2" />
                    Help families thrive
                  </div>
                  <div className="flex items-center justify-center text-sm text-green-600 font-readable">
                    <Shield className="h-4 w-4 mr-2" />
                    Verified credentials
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {userType === 'professional' && (
              <div>
                <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Profession *</label>
                <select
                  name="profession"
                  value={formData.profession}
                  onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                  className="w-full px-4 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                  required
                >
                  <option value="">Select your profession...</option>
                  {professions.map((profession) => (
                    <option key={profession} value={profession}>
                      {profession}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Optional Fields */}
            <div className="bg-green-50 bg-opacity-70 rounded-2xl p-6 border border-green-200 shadow-lg backdrop-blur-sm relative">
              <div className="absolute -top-2 -right-2 opacity-10">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <circle cx="12.5" cy="12.5" r="10" fill="#698a60"/>
                </svg>
              </div>
              
              <h3 className="text-lg font-bold text-green-800 mb-4 font-handwritten">Additional Information (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
                    placeholder="Your address"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center font-handwritten border border-white border-opacity-20"
            >
              Create Account
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-green-700 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Already have an account?{' '}
              <button
                onClick={() => onPageChange('home')}
                className="text-green-600 hover:text-green-700 font-bold underline"
              >
                Sign in here
              </button>
            </p>
          </div>

          <div className="mt-6 text-center">
            <div className="bg-green-50 bg-opacity-80 backdrop-blur-sm rounded-2xl p-4 border border-green-200 shadow-lg relative">
              <div className="absolute -top-1 -right-1 opacity-30" style={{ transform: 'translateX(14.4rem)' }}>
                <img src="/pattern/pattern dark green.svg" alt="" className="w-72 h-72" />
              </div>
              <div className="absolute -bottom-1 -left-1 opacity-25" style={{ transform: 'translateX(-12rem)' }}>
                <img src="/pattern/pattern light green.svg" alt="" className="w-60 h-60" />
              </div>
              <p className="text-sm text-green-700 font-readable" style={{ fontFamily: 'Calibri, sans-serif' }}>
                By creating an account, you agree to our Terms of Service and Privacy Policy. 
                All information is kept secure and confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}