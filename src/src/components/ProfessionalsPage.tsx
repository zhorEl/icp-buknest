import React, { useState } from 'react';
import { Star, MapPin, Clock, Filter, Calendar, MessageCircle, Award, User, Grid, List, X, CheckCircle, Home, Video, DollarSign, Users as UsersIcon } from 'lucide-react';
import { Professional } from '../types';

interface ProfessionalsPageProps {
  onPageChange: (page: string) => void;
  user?: any;
  onLogin?: () => void;
}

export default function ProfessionalsPage({ onPageChange, user, onLogin }: ProfessionalsPageProps) {
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [viewMode, setViewMode] = useState<'thumbnail' | 'table'>('thumbnail');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedSessionType, setSelectedSessionType] = useState<'home-visit' | 'online' | ''>('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [selectedChild, setSelectedChild] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '4111 1111 1111 1111',
    expiryDate: '12/25',
    cvv: '123',
    cardName: 'John Doe',
    gcashNumber: '09123456789',
    mayaNumber: '09123456789'
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Sample children data for parent
  const parentChildren = [
    {
      id: '1',
      name: 'Emma Johnson',
      age: 6,
      conditions: ['Autism Spectrum Disorder', 'Speech Delay']
    },
    {
      id: '2',
      name: 'Alex Johnson',
      age: 4,
      conditions: ['ADHD', 'Language Delay']
    }
  ];

  const professionals: Professional[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      title: 'Speech-Language Pathologist',
      specialization: ['Autism Spectrum Disorders', 'Language Delays', 'Articulation'],
      rating: 4.9,
      reviewCount: 127,
      experience: 8,
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      hourlyRate: 85,
      availability: ['Mon', 'Wed', 'Fri'],
      bio: 'Specialized in working with children on the autism spectrum and language development.',
      credentials: ['MS-SLP', 'CCC-SLP', 'BCBA'],
      services: [
        {
          id: '1',
          name: 'Initial Speech Assessment',
          description: 'Comprehensive evaluation of speech and language abilities',
          duration: 90,
          rate: 150,
          type: 'consultation'
        },
        {
          id: '2',
          name: 'Individual Speech Therapy',
          description: 'One-on-one therapy sessions for speech development',
          duration: 60,
          rate: 85,
          type: 'service'
        },
        {
          id: '3',
          name: 'Articulation Therapy',
          description: 'Focused sessions on sound production and clarity',
          duration: 45,
          rate: 75,
          type: 'service'
        }
      ]
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      title: 'Occupational Therapist',
      specialization: ['Sensory Processing', 'Fine Motor Skills', 'Daily Living Skills'],
      rating: 4.8,
      reviewCount: 89,
      experience: 6,
      location: 'Los Angeles, CA',
      avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      hourlyRate: 75,
      availability: ['Tue', 'Thu', 'Sat'],
      bio: 'Passionate about helping children develop independence through sensory integration therapy.',
      credentials: ['OTR/L', 'SI Certified'],
      services: [
        {
          id: '1',
          name: 'Occupational Therapy Assessment',
          description: 'Comprehensive evaluation of motor skills and sensory processing',
          duration: 90,
          rate: 120,
          type: 'consultation'
        },
        {
          id: '2',
          name: 'Sensory Integration Therapy',
          description: 'Therapy focused on sensory processing and integration',
          duration: 60,
          rate: 75,
          type: 'service'
        },
        {
          id: '3',
          name: 'Fine Motor Skills Training',
          description: 'Targeted therapy for hand and finger coordination',
          duration: 45,
          rate: 65,
          type: 'service'
        }
      ]
    },
    {
      id: '3',
      name: 'Dr. Michael Chen',
      title: 'Developmental Pediatrician',
      specialization: ['ADHD', 'Developmental Delays', 'Behavioral Issues'],
      rating: 4.9,
      reviewCount: 156,
      experience: 12,
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      hourlyRate: 120,
      availability: ['Mon', 'Tue', 'Thu'],
      bio: 'Board-certified developmental pediatrician with expertise in neurodevelopmental disorders.',
      credentials: ['MD', 'Board Certified Pediatrics', 'Developmental-Behavioral Pediatrics'],
      services: [
        {
          id: '1',
          name: 'Developmental Assessment',
          description: 'Comprehensive medical evaluation of developmental milestones',
          duration: 120,
          rate: 200,
          type: 'consultation'
        },
        {
          id: '2',
          name: 'ADHD Evaluation',
          description: 'Specialized assessment for attention and behavioral concerns',
          duration: 90,
          rate: 150,
          type: 'consultation'
        },
        {
          id: '3',
          name: 'Follow-up Consultation',
          description: 'Regular check-ups and treatment plan adjustments',
          duration: 45,
          rate: 120,
          type: 'service'
        }
      ]
    },
    {
      id: '4',
      name: 'Jennifer Williams',
      title: 'Special Education Teacher',
      specialization: ['Learning Disabilities', 'IEP Development', 'Academic Support'],
      rating: 4.7,
      reviewCount: 73,
      experience: 10,
      location: 'Houston, TX',
      avatar: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=400',
      hourlyRate: 60,
      availability: ['Mon', 'Wed', 'Fri', 'Sat'],
      bio: 'Dedicated special education teacher helping children reach their academic potential.',
      credentials: ['M.Ed Special Education', 'State Certified'],
      services: [
        {
          id: '1',
          name: 'Educational Assessment',
          description: 'Comprehensive evaluation of learning abilities and challenges',
          duration: 90,
          rate: 80,
          type: 'consultation'
        },
        {
          id: '2',
          name: 'Individual Tutoring',
          description: 'One-on-one academic support and skill building',
          duration: 60,
          rate: 60,
          type: 'service'
        },
        {
          id: '3',
          name: 'IEP Development Support',
          description: 'Assistance with Individualized Education Program planning',
          duration: 75,
          rate: 70,
          type: 'service'
        }
      ]
    }
  ];

  const specializations = [
    'all',
    'Speech Therapy',
    'Occupational Therapy',
    'Developmental Pediatrics',
    'Special Education'
  ];

  const locations = [
    'all',
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX'
  ];

  const availabilityOptions = [
    'all',
    'Today',
    'This Week',
    'Weekends'
  ];

  const filteredProfessionals = professionals.filter(professional => {
    const matchesSpecialization = selectedSpecialization === 'all' || 
      professional.title.toLowerCase().includes(selectedSpecialization.toLowerCase()) ||
      professional.specialization.some(spec => spec.toLowerCase().includes(selectedSpecialization.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'all' || professional.location === selectedLocation;
    
    return matchesSpecialization && matchesLocation;
  });

  const handleBookSession = (professional?: Professional) => {
    if (!user) {
      // If user is not logged in, redirect to login
      if (onLogin) {
        onLogin();
      }
      return;
    }
    // If user is logged in, show booking modal
    if (professional) {
      setSelectedProfessional(professional);
      setShowBookingModal(true);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    if (!selectedProfessional) return 0;
    return selectedServices.reduce((total, serviceId) => {
      const service = selectedProfessional.services?.find(s => s.id === serviceId);
      return total + (service?.rate || 0);
    }, 0);
  };

  const handleBookingSubmit = () => {
    if (!selectedProfessional || selectedServices.length === 0 || !selectedSessionType || !selectedDate || !selectedTime || !selectedChild) {
      alert('Please fill in all required fields including child selection');
      return;
    }

    // Show payment modal
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setSelectedServices([]);
    setSelectedSessionType('');
    setSelectedDate('');
    setSelectedTime('');
    setSpecialRequests('');
    setSelectedChild('');
    setShowBookingModal(false);
    setSelectedProfessional(null);
    setShowPaymentModal(false);
    setPaymentMethod('');
    setIsProcessingPayment(false);
    setPaymentSuccess(false);
  };

  const handlePaymentSubmit = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessingPayment(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      
      // Show success for 2 seconds then close
      setTimeout(() => {
        // Here you would typically submit the booking to your backend
        console.log('Booking submitted:', {
          professional: selectedProfessional?.name,
          child: parentChildren.find(c => c.id === selectedChild)?.name,
          services: selectedServices,
          sessionType: selectedSessionType,
          date: selectedDate,
          time: selectedTime,
          specialRequests,
          paymentMethod,
          total: calculateTotal()
        });

        handleCloseModal();
        alert('Booking confirmed! Payment successful. The professional will contact you to confirm the session details.');
      }, 2000);
    }, 3000);
  };

  const PaymentModal = () => {
    if (!showPaymentModal || !selectedProfessional) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Payment</h2>
            <button
              onClick={handleCloseModal}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-8">
            {paymentSuccess ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-handwritten">Payment Successful!</h3>
                <p className="text-gray-600 mb-6 font-sans">Your booking has been confirmed. The professional will contact you soon.</p>
              </div>
            ) : isProcessingPayment ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-handwritten">Processing Payment...</h3>
                <p className="text-gray-600 font-sans">Please wait while we process your payment securely.</p>
              </div>
            ) : (
              <>
                {/* Booking Summary */}
                <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-6 border border-pink-200 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-handwritten">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-sans">Professional:</span>
                      <span className="font-bold text-gray-800 font-sans">{selectedProfessional.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-sans">Child:</span>
                      <span className="font-bold text-gray-800 font-sans">
                        {parentChildren.find(c => c.id === selectedChild)?.name || 'Not selected'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-sans">Date & Time:</span>
                      <span className="font-bold text-gray-800 font-sans">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-sans">Session Type:</span>
                      <span className="font-bold text-gray-800 font-sans capitalize">{selectedSessionType?.replace('-', ' ')}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800 font-handwritten">Total Amount:</span>
                        <span className="text-2xl font-bold text-[#698a60] font-handwritten">₱{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 font-handwritten">Select Payment Method</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                        paymentMethod === 'card'
                          ? 'border-[#CB748E] bg-pink-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-bold font-sans">Credit/Debit Card</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('gcash')}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                        paymentMethod === 'gcash'
                          ? 'border-[#698a60] bg-green-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-bold font-sans">GCash</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('maya')}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                        paymentMethod === 'maya'
                          ? 'border-[#CB748E] bg-pink-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-bold font-sans">Maya</div>
                    </button>
                  </div>
                </div>

                {/* Payment Details */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Card Number</label>
                      <input
                        type="text"
                        value={paymentDetails.cardNumber}
                        onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Expiry Date</label>
                        <input
                          type="text"
                          value={paymentDetails.expiryDate}
                          onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
                          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">CVV</label>
                        <input
                          type="text"
                          value={paymentDetails.cvv}
                          onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Cardholder Name</label>
                      <input
                        type="text"
                        value={paymentDetails.cardName}
                        onChange={(e) => setPaymentDetails({...paymentDetails, cardName: e.target.value})}
                        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'gcash' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">GCash Number</label>
                      <input
                        type="text"
                        value={paymentDetails.gcashNumber}
                        onChange={(e) => setPaymentDetails({...paymentDetails, gcashNumber: e.target.value})}
                        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#698a60] focus:border-transparent font-sans"
                        placeholder="09123456789"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'maya' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Maya Number</label>
                      <input
                        type="text"
                        value={paymentDetails.mayaNumber}
                        onChange={(e) => setPaymentDetails({...paymentDetails, mayaNumber: e.target.value})}
                        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                        placeholder="09123456789"
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t border-gray-200">
                  <button
                    onClick={handlePaymentSubmit}
                    disabled={!paymentMethod}
                    className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-handwritten ${
                      paymentMethod
                        ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Pay ₱{calculateTotal()}
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-4 border-2 border-gray-300 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 text-gray-700 flex items-center justify-center font-handwritten"
                  >
                    <X className="h-5 w-5 mr-2" />
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const BookingModal = () => {
    if (!showBookingModal || !selectedProfessional) return null;

    const consultations = selectedProfessional.services?.filter(s => s.type === 'consultation') || [];
    const services = selectedProfessional.services?.filter(s => s.type === 'service') || [];
    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Book Session</h2>
            <button
              onClick={handleCloseModal}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-8">
            {/* Professional Info */}
            <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl border border-pink-200">
              <img
                src={selectedProfessional.avatar}
                alt={selectedProfessional.name}
                className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 font-handwritten">{selectedProfessional.name}</h3>
                <p className="text-xl text-[#CB748E] font-semibold font-sans">{selectedProfessional.title}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-bold text-gray-800 font-sans">{selectedProfessional.rating}</span>
                  <span className="text-sm text-gray-600 ml-1 font-sans">({selectedProfessional.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Services */}
              <div className="space-y-6">
                {/* Consultations */}
                {consultations.length > 0 && (
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <UsersIcon className="h-5 w-5 mr-2 text-[#CB748E]" />
                      Consultations
                    </h4>
                    <div className="space-y-3">
                      {consultations.map((service) => (
                        <div
                          key={service.id}
                          className={`border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                            selectedServices.includes(service.id)
                              ? 'border-[#CB748E] bg-pink-50'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedServices.includes(service.id)}
                                  onChange={() => handleServiceToggle(service.id)}
                                  className="mr-3 h-4 w-4 text-[#CB748E] focus:ring-[#CB748E] border-gray-300 rounded"
                                />
                                <h5 className="font-bold text-gray-800 font-sans">{service.name}</h5>
                              </div>
                              <p className="text-sm text-gray-600 mt-2 ml-7 font-sans">{service.description}</p>
                              <div className="flex items-center mt-3 ml-7 space-x-4">
                                <div className="flex items-center text-sm text-gray-700 font-sans">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {service.duration} min
                                </div>
                                <div className="flex items-center text-sm font-bold text-[#698a60] font-sans">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  ₱{service.rate}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services */}
                {services.length > 0 && (
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <Award className="h-5 w-5 mr-2 text-[#698a60]" />
                      Therapy Services
                    </h4>
                    <div className="space-y-3">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                            selectedServices.includes(service.id)
                              ? 'border-[#698a60] bg-green-50'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedServices.includes(service.id)}
                                  onChange={() => handleServiceToggle(service.id)}
                                  className="mr-3 h-4 w-4 text-[#698a60] focus:ring-[#698a60] border-gray-300 rounded"
                                />
                                <h5 className="font-bold text-gray-800 font-sans">{service.name}</h5>
                              </div>
                              <p className="text-sm text-gray-600 mt-2 ml-7 font-sans">{service.description}</p>
                              <div className="flex items-center mt-3 ml-7 space-x-4">
                                <div className="flex items-center text-sm text-gray-700 font-sans">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {service.duration} min
                                </div>
                                <div className="flex items-center text-sm font-bold text-[#698a60] font-sans">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  ₱{service.rate}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Booking Details */}
              <div className="space-y-6">
                {/* Session Type */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Session Type *</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedSessionType('home-visit')}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                        selectedSessionType === 'home-visit'
                          ? 'border-[#CB748E] bg-pink-50 text-[#CB748E]'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Home className="h-6 w-6 mx-auto mb-2" />
                      <div className="font-bold font-sans">Home Visit</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSessionType('online')}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                        selectedSessionType === 'online'
                          ? 'border-[#698a60] bg-green-50 text-[#698a60]'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Video className="h-6 w-6 mx-auto mb-2" />
                      <div className="font-bold font-sans">Online</div>
                    </button>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Preferred Date *</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Preferred Time *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl border-2 text-center transition-all duration-300 font-sans ${
                          selectedTime === time
                            ? 'border-[#CB748E] bg-pink-50 text-[#CB748E] font-bold'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Special Requests</label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={3}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                    placeholder="Any specific needs or requests for the session..."
                  />
                </div>

                {/* Total Cost */}
                {selectedServices.length > 0 && (
                  <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-6 border border-pink-200">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 font-handwritten">Booking Summary</h4>
                    <div className="space-y-2">
                      {selectedServices.map((serviceId) => {
                        const service = selectedProfessional.services?.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex justify-between items-center text-sm font-sans">
                            <span className="text-gray-700">{service.name}</span>
                            <span className="font-bold text-gray-800">₱{service.rate}</span>
                          </div>
                        ) : null;
                      })}
                      <div className="border-t border-gray-300 pt-2 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800 font-handwritten">Total:</span>
                          <span className="text-2xl font-bold text-[#698a60] font-handwritten">₱{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Child Selection */}
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Select Child *</label>
                <div className="space-y-3">
                  {parentChildren.map((child) => (
                    <div
                      key={child.id}
                      className={`border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                        selectedChild === child.id
                          ? 'border-[#CB748E] bg-pink-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedChild(child.id)}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="selectedChild"
                          checked={selectedChild === child.id}
                          onChange={() => setSelectedChild(child.id)}
                          className="mr-3 h-4 w-4 text-[#CB748E] focus:ring-[#CB748E] border-gray-300"
                        />
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800 font-sans">{child.name}</h5>
                          <p className="text-sm text-gray-600 font-sans">Age {child.age}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {child.conditions.map((condition, index) => (
                              <span key={index} className="px-2 py-1 bg-pink-100 text-[#CB748E] text-xs rounded-full font-semibold font-sans">
                                {condition}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleBookingSubmit}
                disabled={selectedServices.length === 0 || !selectedSessionType || !selectedDate || !selectedTime}
                className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-handwritten ${
                  selectedServices.length > 0 && selectedSessionType && selectedDate && selectedTime
                    ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Book Session (₱{calculateTotal()})
              </button>
              <button
                onClick={handleCloseModal}
                className="px-6 py-4 border-2 border-gray-300 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 text-gray-700 flex items-center justify-center font-handwritten"
              >
                <X className="h-5 w-5 mr-2" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
        
        {/* Professional Page Floating Elements */}
        <div className="absolute top-16 left-12 opacity-25 animate-pulse">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="20" fill="white" opacity="0.8"/>
            <path d="M25 10V40M10 25H40" stroke="#CB748E" strokeWidth="3"/>
          </svg>
        </div>
        <div className="absolute top-24 right-20 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <path d="M22.5 5L27 15H37L29.5 21L32 31L22.5 26L13 31L15.5 21L8 15H18L22.5 5Z" fill="white" opacity="0.9"/>
          </svg>
        </div>
        <div className="absolute bottom-16 left-24 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="8" width="24" height="24" rx="12" fill="white" opacity="0.7"/>
            <circle cx="20" cy="20" r="6" fill="#698a60"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">Find </span><span className="text-yellow-300">Professionals</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Connect with certified experts who understand your child's unique needs
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Browse our network of verified professionals including speech therapists, occupational therapists, 
              developmental pediatricians, and special education teachers ready to support your family's journey.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Background floating elements for main content */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20 animate-pulse">
            <img src="/pattern/pattern pink.svg" alt="" className="w-60 h-60" />
          </div>
          <div className="absolute top-40 right-16 opacity-18 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <img src="/pattern/pattern light green.svg" alt="" className="w-56 h-56" />
          </div>
          <div className="absolute bottom-32 left-20 opacity-22 animate-float" style={{ animationDelay: '0.8s' }}>
            <img src="/pattern/pattern dark green.svg" alt="" className="w-52 h-52" />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white border-opacity-50 font-handwritten relative">
          {/* Filter section decorative elements */}
          <div className="absolute -top-3 -right-3 opacity-30">
            <img src="/pattern/pattern pink.svg" alt="" className="w-32 h-32" />
          </div>
          <div className="absolute -bottom-3 -left-3 opacity-25">
            <img src="/pattern/pattern light green.svg" alt="" className="w-36 h-36" />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Filter className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-green-800">Find Your Perfect Match</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('thumbnail')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'thumbnail' 
                    ? 'bg-[#CB748E] text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-[#CB748E] text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Specialization</label>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full border-2 border-green-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>
                    {spec === 'all' ? 'All Specializations' : spec}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border-2 border-green-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-green-600 mb-3 font-readable">Availability</label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full border-2 border-green-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white bg-opacity-95 shadow-lg font-readable backdrop-blur-sm"
              >
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>
                    {option === 'all' ? 'Any Time' : option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Professionals Grid */}
        {viewMode === 'thumbnail' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfessionals.map((professional) => (
              <div key={professional.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-white border-opacity-50 font-handwritten relative group">
                {/* Card floating elements */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <img src="/pattern/pattern pink.svg" alt="" className="w-28 h-28" />
                </div>
                <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-25 transition-opacity duration-300">
                  <img src="/pattern/pattern light green.svg" alt="" className="w-32 h-32" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src={professional.avatar}
                      alt={professional.name}
                      className="w-20 h-20 rounded-full object-cover mr-4 border-4 border-white shadow-xl ring-2 ring-pink-200"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-green-800">{professional.name}</h3>
                      <p className="text-green-600 text-sm font-bold font-readable">{professional.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-bold text-green-800 font-readable">{professional.rating}</span>
                      <span className="ml-1 text-sm text-green-600 font-readable">({professional.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-green-700 mb-3 font-readable">
                    <MapPin className="h-4 w-4 mr-1" />
                    {professional.location}
                  </div>

                  <div className="flex items-center text-sm text-green-700 mb-4 font-readable">
                    <Clock className="h-4 w-4 mr-1" />
                    {professional.experience} years experience
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-green-800 mb-3 font-readable">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {professional.specialization.slice(0, 2).map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold font-readable"
                        >
                          {spec}
                        </span>
                      ))}
                      {professional.specialization.length > 2 && (
                        <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full font-semibold font-readable">
                          +{professional.specialization.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600 font-readable">Starting from</span>
                      <span className="text-xl font-bold text-green-800">₱{professional.hourlyRate}/hr</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {professional.credentials.slice(0, 2).join(', ')}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleBookSession(professional)}
                      className="flex-1 bg-gradient-to-r from-pink-400 to-green-500 text-white px-4 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center border border-white border-opacity-20"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {user ? 'Book Session' : 'Sign In to Book'}
                    </button>
                    <button className="px-4 py-3 border-2 border-green-300 rounded-2xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg bg-white bg-opacity-80 backdrop-blur-sm">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl border border-white border-opacity-50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-100 to-green-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Professional</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Specialization</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Experience</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Location</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-green-800 font-handwritten">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProfessionals.map((professional) => (
                    <tr key={professional.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={professional.avatar}
                            alt={professional.name}
                            className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-white shadow-lg"
                          />
                          <div>
                            <div className="text-sm font-bold text-gray-900 font-handwritten">{professional.name}</div>
                            <div className="text-sm text-gray-600 font-sans">{professional.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {professional.specialization.slice(0, 2).map((spec, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold font-sans"
                            >
                              {spec}
                            </span>
                          ))}
                          {professional.specialization.length > 2 && (
                            <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full font-semibold font-sans">
                              +{professional.specialization.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-bold text-gray-900 font-sans">{professional.rating}</span>
                          <span className="text-sm text-gray-600 ml-1 font-sans">({professional.reviewCount})</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 font-sans">{professional.experience} years</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900 font-sans">₱{professional.hourlyRate}/hr</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 font-sans">{professional.location}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2 justify-center">
                          <button
                            onClick={() => handleBookSession(professional)}
                            className="bg-gradient-to-r from-pink-400 to-green-500 text-white px-3 py-2 rounded-lg font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 text-xs font-sans"
                          >
                            {user ? 'Book' : 'Sign In'}
                          </button>
                          <button className="p-2 border border-green-300 rounded-lg hover:bg-green-50 transition-colors">
                            <MessageCircle className="h-4 w-4 text-green-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto border border-white border-opacity-50 shadow-xl relative">
              <div className="absolute -top-4 -right-4 opacity-25" style={{ transform: 'translateX(21.6rem)' }}>
                <img src="/pattern/pattern pink.svg" alt="" className="w-108 h-108" />
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-20" style={{ transform: 'translateX(-19.2rem)' }}>
                <img src="/pattern/pattern light green.svg" alt="" className="w-96 h-96" />
              </div>
              <div className="text-green-400 mb-6">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-handwritten">No professionals found</h3>
              <p className="text-green-600 mb-6 font-readable">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => {
                  setSelectedSpecialization('all');
                  setSelectedLocation('all');
                  setSelectedAvailability('all');
                }}
                className="bg-gradient-to-r from-pink-400 to-green-500 text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-handwritten border border-white border-opacity-20"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Booking Modal */}
      <BookingModal />
      
      {/* Payment Modal */}
      <PaymentModal />
    </div>
  );
}