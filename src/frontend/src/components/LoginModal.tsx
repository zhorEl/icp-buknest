import React, { useState } from 'react';
import { X, User, Lock, Mail, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
  initialMode?: 'login' | 'signup';
}

export default function LoginModal({ isOpen, onClose, onLogin, initialMode = 'login' }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'parent' | 'professional' | 'admin'>('parent');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  // Sample credentials for demo
  const sampleCredentials = {
    parent: {
      email: 'parent@buknest.com',
      password: 'parent123',
      name: 'Sarah Johnson',
      role: 'parent'
    },
    professional: {
      email: 'therapist@buknest.com',
      password: 'therapist123',
      name: 'Dr. Maria Rodriguez',
      role: 'professional'
    },
    admin: {
      email: 'admin@buknest.com',
      password: 'admin123',
      name: 'Admin User',
      role: 'admin'
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if using sample credentials
    const sampleCred = sampleCredentials[userType];
    let userData;
    
    if (formData.email === sampleCred.email && formData.password === sampleCred.password) {
      // Use sample user data
      userData = {
        id: userType === 'parent' ? '1' : userType === 'professional' ? '2' : '3',
        email: sampleCred.email,
        name: sampleCred.name,
        role: userType,
        avatar: userType === 'parent' 
          ? 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
          : userType === 'professional'
          ? 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400'
          : 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
     } else if (isLogin) {
      // Handle real login with Supabase
      // This would be implemented with actual Supabase auth
      userData = {
        id: Date.now().toString(),
        email: formData.email,
        name: formData.name || formData.email.split('@')[0],
        role: userType,
        avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
    }else {
      // Regular signup/login
      userData = {
        id: Date.now().toString(),
        email: formData.email,
        name: formData.name || formData.email.split('@')[0],
        role: userType,
        avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
    }

    onLogin(userData);
    onClose();
  };

  const fillSampleCredentials = () => {
    const cred = sampleCredentials[userType];
    setFormData({
      ...formData,
      email: cred.email,
      password: cred.password,
      name: cred.name
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block mb-3 text-sm font-medium text-gray-700">I am a:</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'parent', label: 'Parent', icon: '👨‍👩‍👧‍👦' },
                { value: 'professional', label: 'Professional', icon: '👩‍⚕️' },
                { value: 'admin', label: 'Admin', icon: '⚙️' }
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setUserType(type.value as any)}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    userType === type.value
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="mb-1 text-2xl">{type.icon}</div>
                  <div className="text-xs font-medium">{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sample Credentials Helper */}
          <div className="p-3 mb-4 border border-green-200 rounded-lg bg-green-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">Demo Credentials</p>
                <p className="text-xs text-green-600">
                  {sampleCredentials[userType].email} / {sampleCredentials[userType].password}
                </p>
              </div>
              <button
                type="button"
                onClick={fillSampleCredentials}
                className="px-3 py-1 text-xs text-white transition-colors bg-green-700 rounded hover:bg-green-800"
              >
                Use Demo
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative">
                  <User className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition-colors bg-green-700 rounded-lg hover:bg-green-800"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-green-600 hover:text-green-700"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>

          {isLogin && (
            <div className="mt-4 text-center">
              <button className="text-sm text-gray-600 hover:text-gray-800">
                Forgot your password?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}