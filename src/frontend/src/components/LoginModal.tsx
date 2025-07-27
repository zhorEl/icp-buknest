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
    } else {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
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
                  <div className="text-2xl mb-1">{type.icon}</div>
                  <div className="text-xs font-medium">{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sample Credentials Helper */}
          <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-green-800">Demo Credentials</p>
                <p className="text-xs text-green-600">
                  {sampleCredentials[userType].email} / {sampleCredentials[userType].password}
                </p>
              </div>
              <button
                type="button"
                onClick={fillSampleCredentials}
                className="px-3 py-1 bg-green-700 text-white text-xs rounded hover:bg-green-800 transition-colors"
              >
                Use Demo
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
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

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 hover:text-green-700 font-medium"
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