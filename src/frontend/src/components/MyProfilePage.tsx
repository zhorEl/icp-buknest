import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit, Save, X, Camera, Award, CheckCircle, AlertCircle, Clock, Star, Shield, FileText } from 'lucide-react';
import VerificationModal from './VerificationModal';
import { Calendar, DollarSign, BookOpen, Users, Plus, Trash2 } from 'lucide-react';

interface MyProfilePageProps {
  user: any;
  onPageChange: (page: string) => void;
}

export default function MyProfilePage({ user, onPageChange }: MyProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user.name || 'Dr. Sarah Johnson',
    title: 'Speech-Language Pathologist',
    email: user.email || 'sarah.johnson@buknest.com',
    phone: '(555) 123-4567',
    address: 'Bukidnon, Philippines',
    bio: 'Passionate speech-language pathologist with over 8 years of experience working with children on the autism spectrum and language development. I believe in creating a supportive, engaging environment where every child can reach their full potential.',
    specializations: ['Autism Spectrum Disorders', 'Speech Delays', 'Language Development', 'Articulation Therapy'],
    credentials: ['MS-SLP', 'CCC-SLP', 'BCBA', 'State Licensed'],
    experience: 8,
    education: [
      {
        degree: 'Master of Science in Speech-Language Pathology',
        institution: 'University of the Philippines',
        year: '2016'
      },
      {
        degree: 'Bachelor of Science in Communication Sciences',
        institution: 'Ateneo de Manila University',
        year: '2014'
      }
    ],
    languages: ['English', 'Filipino', 'Cebuano'],
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    hourlyRate: 1500,
    sessionTypes: ['Home Visit', 'Online'],
    achievements: [
      'Certified Behavior Analyst (BCBA)',
      'Outstanding Therapist Award 2023',
      'Published researcher in child development'
    ]
  });

  const [newSpecialization, setNewSpecialization] = useState('');
  const [newCredential, setNewCredential] = useState('');
  const [newEducation, setNewEducation] = useState({
    degree: '',
    institution: '',
    year: ''
  });
  const [newLanguage, setNewLanguage] = useState('');
  const [newAchievement, setNewAchievement] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationData, setVerificationData] = useState({
    governmentId: null as File | null,
    professionalLicense: null as File | null,
    certifications: [] as File[],
    selfieWithId: null as File | null,
    additionalDocuments: [] as File[]
  });
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'submitted' | 'verified' | 'rejected'>('pending');
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});

  const handleInputChange = (field: string, value: any) => {
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!profileData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!profileData.title.trim()) {
      newErrors.title = 'Professional title is required';
    }
    
    if (!profileData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!profileData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!profileData.bio.trim()) {
      newErrors.bio = 'Professional bio is required';
    }
    
    if (profileData.hourlyRate <= 0) {
      newErrors.hourlyRate = 'Hourly rate must be greater than 0';
    }
    
    if (profileData.specializations.length === 0) {
      newErrors.specializations = 'At least one specialization is required';
    }
    
    if (profileData.credentials.length === 0) {
      newErrors.credentials = 'At least one credential is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addSpecialization = () => {
    if (newSpecialization.trim()) {
      setProfileData(prev => ({
        ...prev,
        specializations: [...prev.specializations, newSpecialization.trim()]
      }));
      setNewSpecialization('');
      if (errors.specializations) setErrors(prev => ({ ...prev, specializations: '' }));
    }
  };

  const removeSpecialization = (index: number) => {
    setProfileData(prev => ({
      ...prev,
      specializations: prev.specializations.filter((_, i) => i !== index)
    }));
  };

  const addCredential = () => {
    if (newCredential.trim()) {
      setProfileData(prev => ({
        ...prev,
        credentials: [...prev.credentials, newCredential.trim()]
      }));
      setNewCredential('');
      if (errors.credentials) setErrors(prev => ({ ...prev, credentials: '' }));
    }
  };

  const removeCredential = (index: number) => {
    setProfileData(prev => ({
      ...prev,
      credentials: prev.credentials.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    if (newEducation.degree.trim() && newEducation.institution.trim() && newEducation.year.trim()) {
      setProfileData(prev => ({
        ...prev,
        education: [...prev.education, { ...newEducation }]
      }));
      setNewEducation({ degree: '', institution: '', year: '' });
    }
  };

  const removeEducation = (index: number) => {
    setProfileData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !profileData.languages.includes(newLanguage.trim())) {
      setProfileData(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage('');
    }
  };

  const removeLanguage = (index: number) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setProfileData(prev => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement.trim()]
      }));
      setNewAchievement('');
    }
  };

  const removeAchievement = (index: number) => {
    setProfileData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const toggleAvailability = (day: string) => {
    setProfileData(prev => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter(d => d !== day)
        : [...prev.availability, day]
    }));
  };

  const toggleSessionType = (type: string) => {
    setProfileData(prev => ({
      ...prev,
      sessionTypes: prev.sessionTypes.includes(type)
        ? prev.sessionTypes.filter(t => t !== type)
        : [...prev.sessionTypes, type]
    }));
  };

  const handleFileUpload = (field: string, file: File) => {
    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [field]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev[field] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [field]: currentProgress + 10 };
      });
    }, 100);

    if (field === 'certifications' || field === 'additionalDocuments') {
      setVerificationData(prev => ({
        ...prev,
        [field]: [...(prev[field] as File[]), file]
      }));
    } else {
      setVerificationData(prev => ({
        ...prev,
        [field]: file
      }));
    }
  };

  const removeFile = (field: string, index?: number) => {
    if (field === 'certifications' || field === 'additionalDocuments') {
      setVerificationData(prev => ({
        ...prev,
        [field]: (prev[field] as File[]).filter((_, i) => i !== index)
      }));
    } else {
      setVerificationData(prev => ({
        ...prev,
        [field]: null
      }));
    }
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[field];
      return newProgress;
    });
  };

  const handleSubmitVerification = () => {
    if (!verificationData.governmentId || !verificationData.professionalLicense || !verificationData.selfieWithId) {
      alert('Please upload all required documents');
      return;
    }

    setVerificationStatus('submitted');
    
    // Simulate verification process
    setTimeout(() => {
      console.log('Verification submitted:', verificationData);
      setShowVerificationModal(false);
      alert('Verification documents submitted successfully! We will review your credentials within 2-3 business days.');
    }, 1500);
  };

  const handleSave = () => {
    if (!validateForm()) {
      setSaveStatus('error');
      return;
    }
    
    setSaveStatus('saving');
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Here you would typically save to database
        console.log('Saving profile data:', profileData);
        
        setSaveStatus('saved');
        setIsEditing(false);
        
        // Reset save status after 3 seconds
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      } catch (error) {
        setSaveStatus('error');
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      }
    }, 1500);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setErrors({});
    setSaveStatus('idle');
    // Reset form data to original values if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-x-12"></div>
        <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-white bg-opacity-10 rounded-full translate-y-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">My </span><span className="text-yellow-300">Profile</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4 font-sans">
              Manage your professional information and credentials
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed font-sans">
              Keep your profile updated to help families find the right support for their children.
            </p>
          </div>
        </div>
      </div>
      
      {/* Verification Modal */}
      <VerificationModal />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-200 relative">
          <div className="absolute -top-4 -right-4 opacity-5 animate-float">
            <img src="/pattern/pattern pink.svg" alt="" className="w-32 h-32" />
          </div>
          
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={user.avatar || 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={profileData.fullName}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-[#CB748E] text-white p-2 rounded-full hover:bg-[#d698ab] transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="ml-6">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`text-3xl font-bold border-2 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-handwritten ${
                        errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && (
                      <div className="flex items-center text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.fullName}
                      </div>
                    )}
                    <input
                      type="text"
                      value={profileData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className={`text-xl border-2 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans ${
                        errors.title ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.title && (
                      <div className="flex items-center text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.title}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 font-handwritten">{profileData.fullName}</h1>
                    <p className="text-xl text-[#CB748E] font-semibold font-sans">{profileData.title}</p>
                  </div>
                )}
                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center text-gray-600 font-sans">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{profileData.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600 font-sans">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{profileData.experience} years experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    disabled={saveStatus === 'saving'}
                    className={`px-6 py-3 rounded-xl font-bold transition-colors flex items-center font-sans ${
                      saveStatus === 'saving'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : saveStatus === 'saved'
                        ? 'bg-green-600 text-white'
                        : 'bg-[#698a60] text-white hover:bg-green-700'
                    }`}
                  >
                    {saveStatus === 'saving' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </>
                    ) : saveStatus === 'saved' ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={saveStatus === 'saving'}
                    className="px-6 py-3 border border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center font-sans"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-3 bg-[#CB748E] text-white rounded-xl font-bold hover:bg-[#d698ab] transition-colors flex items-center font-sans"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-green-50 rounded-xl border border-pink-200">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800 font-handwritten">4.9</div>
              <div className="text-sm text-gray-600 font-sans">Rating</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-pink-50 rounded-xl border border-green-200">
              <Users className="h-8 w-8 text-[#698a60] mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800 font-handwritten">156</div>
              <div className="text-sm text-gray-600 font-sans">Sessions</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-green-50 rounded-xl border border-pink-200">
              <Calendar className="h-8 w-8 text-[#CB748E] mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800 font-handwritten">32</div>
              <div className="text-sm text-gray-600 font-sans">Clients</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-pink-50 rounded-xl border border-green-200">
              <Shield className="h-8 w-8 text-gray-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800 font-handwritten">100%</div>
              <div className="text-sm text-gray-600 font-sans">Verified</div>
            </div>
          </div>
        </div>

        {/* Error Summary */}
        {Object.keys(errors).length > 0 && isEditing && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="text-lg font-bold text-red-800 font-handwritten">Please fix the following errors:</h3>
            </div>
            <ul className="list-disc list-inside text-red-700 font-sans">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  {isEditing ? (
                    <div className="flex-1">
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full border-2 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <div className="text-red-600 text-sm mt-1">{errors.email}</div>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-700 font-sans">{profileData.email}</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  {isEditing ? (
                    <div className="flex-1">
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full border-2 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <div className="text-red-600 text-sm mt-1">{errors.phone}</div>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-700 font-sans">{profileData.phone}</span>
                  )}
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  {isEditing ? (
                    <textarea
                      value={profileData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={2}
                      className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                    />
                  ) : (
                    <span className="text-gray-700 font-sans">{profileData.address}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Specializations</h3>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {profileData.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center px-3 py-2 bg-pink-100 text-[#CB748E] rounded-full font-semibold font-sans">
                      <span>{spec}</span>
                      {isEditing && (
                        <button
                          onClick={() => removeSpecialization(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                {errors.specializations && (
                  <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.specializations}
                  </div>
                )}
                
                {isEditing && (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newSpecialization}
                      onChange={(e) => setNewSpecialization(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSpecialization()}
                      placeholder="Add new specialization"
                      className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                    />
                    <button
                      onClick={addSpecialization}
                      className="px-4 py-2 bg-[#698a60] text-white rounded-xl hover:bg-green-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Professional Bio</h3>
              
              {isEditing ? (
                <div>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={6}
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans ${
                      errors.bio ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tell families about your experience and approach..."
                  />
                  {errors.bio && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.bio}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-2 font-sans">
                    {profileData.bio.length}/500 characters
                  </div>
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed font-sans">{profileData.bio}</p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Verification Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Professional Verification</h3>
              
              <div className="space-y-6">
                {verificationStatus === 'pending' && (
                  <div className="text-center p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition-colors"
                         onClick={() => setShowVerificationModal(true)}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-yellow-800 mb-2 font-handwritten">Click to Verify</h4>
                        <p className="text-yellow-700 font-sans">Upload your credentials to get verified</p>
                      </div>
                    </div>
                    <div className="opacity-30">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <AlertCircle className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2 font-handwritten">Verification Pending</h4>
                      <p className="text-yellow-700 text-sm font-sans">Complete your verification to start accepting bookings</p>
                    </div>
                  </div>
                )}
                
                {verificationStatus === 'submitted' && (
                  <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-800 mb-2 font-handwritten">Under Review</h4>
                    <p className="text-blue-700 text-sm font-sans">Your documents are being reviewed. This usually takes 2-3 business days.</p>
                  </div>
                )}
                
                {verificationStatus === 'verified' && (
                  <div className="text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-green-800 mb-2 font-handwritten">Verified Professional</h4>
                    <p className="text-green-700 text-sm font-sans">Your credentials have been verified. You can now accept bookings!</p>
                  </div>
                )}
                
                {verificationStatus === 'rejected' && (
                  <div className="text-center p-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition-colors"
                         onClick={() => setShowVerificationModal(true)}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <X className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-red-800 mb-2 font-handwritten">Click to Resubmit</h4>
                        <p className="text-red-700 font-sans">Upload updated credentials</p>
                      </div>
                    </div>
                    <div className="opacity-30">
                      <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <X className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-red-800 mb-2 font-handwritten">Verification Rejected</h4>
                      <p className="text-red-700 text-sm font-sans">Please resubmit your credentials with the required corrections.</p>
                    </div>
                  </div>
                )}
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-800 mb-2 font-sans">Required Documents:</h5>
                  <ul className="text-sm text-gray-700 space-y-1 font-sans">
                    <li>• Government-issued ID (Driver's License, Passport, etc.)</li>
                    <li>• Professional License or Certification</li>
                    <li>• Selfie holding your ID for identity verification</li>
                    <li>• Additional certifications (optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Credentials & Certifications */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Credentials & Certifications</h3>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {profileData.credentials.map((credential, index) => (
                    <div key={index} className="flex items-center px-3 py-2 bg-green-100 text-[#698a60] rounded-full font-semibold font-sans">
                      <Award className="h-3 w-3 mr-2" />
                      <span>{credential}</span>
                      {isEditing && (
                        <button
                          onClick={() => removeCredential(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                {errors.credentials && (
                  <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.credentials}
                  </div>
                )}
                
                {isEditing && (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newCredential}
                      onChange={(e) => setNewCredential(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCredential()}
                      placeholder="Add new credential"
                      className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                    />
                    <button
                      onClick={addCredential}
                      className="px-4 py-2 bg-[#698a60] text-white rounded-xl hover:bg-green-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Education</h3>
              
              <div className="space-y-4">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#CB748E] pl-4 relative">
                    <h4 className="font-bold text-gray-800 font-sans">{edu.degree}</h4>
                    <p className="text-gray-600 font-sans">{edu.institution}</p>
                    <p className="text-sm text-gray-500 font-sans">{edu.year}</p>
                    {isEditing && (
                      <button
                        onClick={() => removeEducation(index)}
                        className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                
                {isEditing && (
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-700 mb-3 font-sans">Add Education</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={newEducation.degree}
                        onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))}
                        placeholder="Degree (e.g., Master of Science in Speech-Language Pathology)"
                        className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      />
                      <input
                        type="text"
                        value={newEducation.institution}
                        onChange={(e) => setNewEducation(prev => ({ ...prev, institution: e.target.value }))}
                        placeholder="Institution (e.g., University of the Philippines)"
                        className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      />
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={newEducation.year}
                          onChange={(e) => setNewEducation(prev => ({ ...prev, year: e.target.value }))}
                          placeholder="Year (e.g., 2016)"
                          className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                        />
                        <button
                          onClick={addEducation}
                          className="px-4 py-2 bg-[#698a60] text-white rounded-xl hover:bg-green-700 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Service Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Hourly Rate (₱)</label>
                  {isEditing ? (
                    <div>
                      <input
                        type="number"
                        value={profileData.hourlyRate}
                        onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value) || 0)}
                        min="0"
                        className={`w-full border-2 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans ${
                          errors.hourlyRate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      />
                      {errors.hourlyRate && (
                        <div className="flex items-center text-red-600 text-sm mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.hourlyRate}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-lg font-semibold text-gray-800 font-sans">₱{profileData.hourlyRate}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Session Types</label>
                  {isEditing ? (
                    <div className="space-y-2">
                      {['Home Visit', 'Online'].map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={profileData.sessionTypes.includes(type)}
                            onChange={() => toggleSessionType(type)}
                            className="mr-2 h-4 w-4 text-[#CB748E] focus:ring-[#CB748E] border-gray-300 rounded"
                          />
                          <span className="font-sans">{type}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profileData.sessionTypes.map((type, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold font-sans">
                          {type}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Languages</label>
                  {isEditing ? (
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {profileData.languages.map((language, index) => (
                          <div key={index} className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold font-sans">
                            <span>{language}</span>
                            <button
                              onClick={() => removeLanguage(index)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={newLanguage}
                          onChange={(e) => setNewLanguage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                          placeholder="Add language"
                          className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                        />
                        <button
                          onClick={addLanguage}
                          className="px-4 py-2 bg-[#698a60] text-white rounded-xl hover:bg-green-700 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profileData.languages.map((language, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold font-sans">
                          {language}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Availability</label>
                  {isEditing ? (
                    <div className="grid grid-cols-2 gap-2">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <label key={day} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={profileData.availability.includes(day)}
                            onChange={() => toggleAvailability(day)}
                            className="mr-2 h-4 w-4 text-[#CB748E] focus:ring-[#CB748E] border-gray-300 rounded"
                          />
                          <span className="font-sans">{day}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profileData.availability.map((day, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold font-sans">
                          {day}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Achievements & Recognition</h3>
              
              <div className="space-y-3">
                {profileData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-600 mr-3" />
                      <span className="text-gray-700 font-sans">{achievement}</span>
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => removeAchievement(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                
                {isEditing && (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newAchievement}
                      onChange={(e) => setNewAchievement(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addAchievement()}
                      placeholder="Add achievement"
                      className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                    />
                    <button
                      onClick={addAchievement}
                      className="px-4 py-2 bg-[#698a60] text-white rounded-xl hover:bg-green-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Modal */}
        {showVerificationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Professional Verification</h2>
                <button
                  onClick={() => setShowVerificationModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-handwritten">Verification Requirements</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    To ensure the safety and quality of our platform, all professionals must submit the following documents for verification:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 font-sans">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Government-issued photo ID (Driver's License, Passport, National ID)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Professional license or certification in your field
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Selfie holding your government ID for identity verification
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="h-4 w-4 text-blue-600 mr-2" />
                      Additional certifications or training certificates (optional)
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Required Documents */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-800 font-handwritten">Required Documents</h4>
                    
                    {/* Government ID */}
                    <div className="border-2 border-gray-300 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-800 mb-3 font-sans flex items-center">
                        <User className="h-5 w-5 mr-2 text-[#CB748E]" />
                        Government ID *
                      </h5>
                      <p className="text-sm text-gray-600 mb-4 font-sans">Driver's License, Passport, or National ID</p>
                      
                      {verificationData.governmentId ? (
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
                          <span className="text-sm font-semibold text-green-800 font-sans">{verificationData.governmentId.name}</span>
                          <button
                            onClick={() => removeFile('governmentId')}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#CB748E] transition-colors">
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('governmentId', e.target.files[0])}
                            className="hidden"
                            id="governmentId"
                          />
                          <label htmlFor="governmentId" className="cursor-pointer">
                            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 font-sans">Click to upload or drag and drop</p>
                          </label>
                        </div>
                      )}
                      
                      {uploadProgress.governmentId !== undefined && uploadProgress.governmentId < 100 && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#CB748E] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress.governmentId}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Professional License */}
                    <div className="border-2 border-gray-300 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-800 mb-3 font-sans flex items-center">
                        <Award className="h-5 w-5 mr-2 text-[#698a60]" />
                        Professional License *
                      </h5>
                      <p className="text-sm text-gray-600 mb-4 font-sans">License or certification in your field</p>
                      
                      {verificationData.professionalLicense ? (
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
                          <span className="text-sm font-semibold text-green-800 font-sans">{verificationData.professionalLicense.name}</span>
                          <button
                            onClick={() => removeFile('professionalLicense')}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#698a60] transition-colors">
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('professionalLicense', e.target.files[0])}
                            className="hidden"
                            id="professionalLicense"
                          />
                          <label htmlFor="professionalLicense" className="cursor-pointer">
                            <Award className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 font-sans">Click to upload or drag and drop</p>
                          </label>
                        </div>
                      )}
                      
                      {uploadProgress.professionalLicense !== undefined && uploadProgress.professionalLicense < 100 && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#698a60] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress.professionalLicense}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Selfie with ID */}
                    <div className="border-2 border-gray-300 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-800 mb-3 font-sans flex items-center">
                        <Camera className="h-5 w-5 mr-2 text-[#CB748E]" />
                        Selfie with ID *
                      </h5>
                      <p className="text-sm text-gray-600 mb-4 font-sans">Photo of yourself holding your government ID</p>
                      
                      {verificationData.selfieWithId ? (
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
                          <span className="text-sm font-semibold text-green-800 font-sans">{verificationData.selfieWithId.name}</span>
                          <button
                            onClick={() => removeFile('selfieWithId')}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#CB748E] transition-colors">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('selfieWithId', e.target.files[0])}
                            className="hidden"
                            id="selfieWithId"
                          />
                          <label htmlFor="selfieWithId" className="cursor-pointer">
                            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 font-sans">Click to upload or drag and drop</p>
                          </label>
                        </div>
                      )}
                      
                      {uploadProgress.selfieWithId !== undefined && uploadProgress.selfieWithId < 100 && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#CB748E] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress.selfieWithId}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Optional Documents */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-800 font-handwritten">Optional Documents</h4>
                    
                    {/* Additional Certifications */}
                    <div className="border-2 border-gray-300 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-800 mb-3 font-sans flex items-center">
                        <Award className="h-5 w-5 mr-2 text-[#698a60]" />
                        Additional Certifications
                      </h5>
                      <p className="text-sm text-gray-600 mb-4 font-sans">Training certificates, specialization credentials</p>
                      
                      {verificationData.certifications.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {verificationData.certifications.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-200">
                              <span className="text-sm font-semibold text-blue-800 font-sans">{file.name}</span>
                              <button
                                onClick={() => removeFile('certifications', index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#698a60] transition-colors">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => e.target.files?.[0] && handleFileUpload('certifications', e.target.files[0])}
                          className="hidden"
                          id="certifications"
                          multiple
                        />
                        <label htmlFor="certifications" className="cursor-pointer">
                          <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 font-sans">Add certification</p>
                        </label>
                      </div>
                    </div>

                    {/* Additional Documents */}
                    <div className="border-2 border-gray-300 rounded-2xl p-6">
                      <h5 className="font-bold text-gray-800 mb-3 font-sans flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-gray-500" />
                        Additional Documents
                      </h5>
                      <p className="text-sm text-gray-600 mb-4 font-sans">Background checks, references, etc.</p>
                      
                      {verificationData.additionalDocuments.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {verificationData.additionalDocuments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                              <span className="text-sm font-semibold text-gray-800 font-sans">{file.name}</span>
                              <button
                                onClick={() => removeFile('additionalDocuments', index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => e.target.files?.[0] && handleFileUpload('additionalDocuments', e.target.files[0])}
                          className="hidden"
                          id="additionalDocuments"
                          multiple
                        />
                        <label htmlFor="additionalDocuments" className="cursor-pointer">
                          <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 font-sans">Add document</p>
                        </label>
                      </div>
                    </div>

                    {/* Verification Status */}
                    <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-6 border border-pink-200">
                      <h5 className="font-bold text-gray-800 mb-3 font-handwritten">Verification Process</h5>
                      <div className="space-y-2 text-sm text-gray-700 font-sans">
                        <p>• Documents are reviewed within 2-3 business days</p>
                        <p>• You'll receive an email notification once reviewed</p>
                        <p>• Verified professionals can accept bookings immediately</p>
                        <p>• All information is kept secure and confidential</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSubmitVerification}
                    disabled={!verificationData.governmentId || !verificationData.professionalLicense || !verificationData.selfieWithId}
                    className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-handwritten ${
                      verificationData.governmentId && verificationData.professionalLicense && verificationData.selfieWithId
                        ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Submit for Verification
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => onPageChange('my-services')}
            className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-8 py-4 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-handwritten"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Manage Services
          </button>
          <button
            onClick={() => onPageChange('my-clients')}
            className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center font-handwritten"
          >
            <Users className="h-5 w-5 mr-2" />
            View Clients
          </button>
        </div>
      </div>
    </div>
  );
}