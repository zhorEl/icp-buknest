import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Phone, User, CheckCircle, XCircle, Edit, MessageCircle, Star, Filter, ChevronDown, AlertCircle, Home, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface BookingsPageProps {
  onPageChange: (page: string) => void;
  user?: any;
}

export default function BookingsPage({ onPageChange, user }: BookingsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('upcoming');
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookingActions, setBookingActions] = useState<{[key: string]: 'pending' | 'accepted' | 'declined' | 'confirmed'}>({
    '1': 'pending',
    '2': 'accepted', 
    '3': 'pending',
    '4': 'confirmed',
    '5': 'pending',
    '6': 'accepted'
  });
  const [showMarkDoneModal, setShowMarkDoneModal] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [sessionNotes, setSessionNotes] = useState('');
  const [progressRating, setProgressRating] = useState(5);
  const [progressComments, setProgressComments] = useState('');

  // Sample bookings data - different for parents vs professionals
  const parentBookings = [
    {
      id: '1',
      professional: 'Dr. Sarah Johnson',
      professionalAvatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Speech Therapy Session',
      child: 'Emma Johnson',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: 60,
      type: 'home-visit',
      status: 'confirmed',
      address: '123 Main St, Bukidnon',
      notes: 'Focus on articulation exercises',
      rate: 1500
    },
    {
      id: '2',
      professional: 'Maria Rodriguez',
      professionalAvatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Occupational Therapy',
      child: 'Emma Johnson',
      date: '2024-01-18',
      time: '2:00 PM',
      duration: 45,
      type: 'online',
      status: 'pending',
      meetingLink: 'https://meet.buknest.com/session-456',
      notes: 'Sensory integration activities',
      rate: 1200
    }
  ];

  const professionalBookings = [
    {
      id: '1',
      parent: 'Sarah Johnson',
      parentPhone: '(555) 123-4567',
      parentEmail: 'sarah.johnson@email.com',
      child: 'Emma Johnson',
      childAge: 6,
      childConditions: ['Autism Spectrum Disorder', 'Speech Delay'],
      service: 'Speech Therapy Session',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: 60,
      type: 'home-visit',
      status: 'pending',
      address: '123 Main St, Bukidnon',
      notes: 'Focus on articulation exercises. Emma responds well to visual cues.',
      rate: 1500,
      requestedDate: '2024-01-12'
    },
    {
      id: '2',
      parent: 'Lisa Chen',
      parentPhone: '(555) 987-6543',
      parentEmail: 'lisa.chen@email.com',
      child: 'Michael Chen',
      childAge: 4,
      childConditions: ['Sensory Processing Disorder'],
      service: 'Occupational Therapy',
      date: '2024-01-18',
      time: '2:00 PM',
      duration: 45,
      type: 'online',
      status: 'accepted',
      meetingLink: 'https://meet.buknest.com/session-456',
      notes: 'Continue with sensory integration activities. Needs consistent routine.',
      rate: 1200,
      requestedDate: '2024-01-13'
    },
    {
      id: '3',
      parent: 'Maria Rodriguez',
      parentPhone: '(555) 456-7890',
      parentEmail: 'maria.rodriguez@email.com',
      child: 'Sofia Rodriguez',
      childAge: 5,
      childConditions: ['ADHD', 'Language Delay'],
      service: 'Initial Assessment',
      date: '2024-01-20',
      time: '11:00 AM',
      duration: 90,
      type: 'home-visit',
      status: 'pending',
      address: '456 Oak Ave, Bukidnon',
      notes: 'First session - comprehensive assessment needed. High energy child.',
      rate: 2000,
      requestedDate: '2024-01-14'
    },
    {
      id: '4',
      parent: 'Jennifer Thompson',
      parentPhone: '(555) 321-0987',
      parentEmail: 'jennifer.thompson@email.com',
      child: 'Alex Thompson',
      childAge: 4,
      childConditions: ['ADHD', 'Behavioral Issues'],
      service: 'Behavioral Therapy',
      date: '2024-01-22',
      time: '4:00 PM',
      duration: 60,
      type: 'online',
      status: 'confirmed',
      meetingLink: 'https://meet.buknest.com/session-789',
      notes: 'Follow-up session for behavioral strategies. Responds well to structured activities.',
      rate: 1300,
      requestedDate: '2024-01-15'
    },
    {
      id: '5',
      parent: 'David Kim',
      parentPhone: '(555) 654-3210',
      parentEmail: 'david.kim@email.com',
      child: 'Emma Kim',
      childAge: 7,
      childConditions: ['Learning Disabilities', 'Attention Issues'],
      service: 'Educational Support',
      date: '2024-01-25',
      time: '3:00 PM',
      duration: 60,
      type: 'home-visit',
      status: 'pending',
      address: '789 Pine St, Bukidnon',
      notes: 'Academic support needed for reading comprehension. Very motivated child.',
      rate: 1400,
      requestedDate: '2024-01-16'
    },
    {
      id: '6',
      parent: 'Anna Martinez',
      parentPhone: '(555) 789-0123',
      parentEmail: 'anna.martinez@email.com',
      child: 'Carlos Martinez',
      childAge: 3,
      childConditions: ['Speech Delay', 'Social Communication'],
      service: 'Speech Therapy',
      date: '2024-01-28',
      time: '9:00 AM',
      duration: 45,
      type: 'online',
      status: 'accepted',
      meetingLink: 'https://meet.buknest.com/session-101',
      notes: 'Early intervention for speech development. Parents very engaged.',
      rate: 1100,
      requestedDate: '2024-01-17'
    }
  ];

  const bookings = user?.role === 'professional' ? professionalBookings : parentBookings;

  const handleAcceptBooking = (bookingId: string) => {
    setBookingActions(prev => ({ ...prev, [bookingId]: 'accepted' }));
  };

  const handleDeclineBooking = (bookingId: string) => {
    setBookingActions(prev => ({ ...prev, [bookingId]: 'declined' }));
  };

  const handleConfirmBooking = (bookingId: string) => {
    setBookingActions(prev => ({ ...prev, [bookingId]: 'confirmed' }));
  };

  const handleMarkAsDone = (sessionId: string) => {
    setSelectedSessionId(sessionId);
    setShowMarkDoneModal(true);
  };

  const handleSaveSessionCompletion = () => {
    if (!selectedSessionId) return;
    
    // Here you would typically save to database
    console.log('Session completed:', {
      sessionId: selectedSessionId,
      notes: sessionNotes,
      progressRating,
      progressComments,
      completedAt: new Date().toISOString()
    });
    
    // Update session status to completed
    setBookingActions(prev => ({ ...prev, [selectedSessionId]: 'completed' as any }));
    
    // Reset form and close modal
    setSessionNotes('');
    setProgressRating(5);
    setProgressComments('');
    setShowMarkDoneModal(false);
    setSelectedSessionId(null);
    
    alert('Session marked as completed successfully!');
  };

  const handleCancelMarkDone = () => {
    setSessionNotes('');
    setProgressRating(5);
    setProgressComments('');
    setShowMarkDoneModal(false);
    setSelectedSessionId(null);
  };
  const getBookingStatus = (bookingId: string) => {
    return bookingActions[bookingId] || 'pending';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (selectedFilter === 'all') return true;
    if (user?.role === 'professional') {
      return getBookingStatus(booking.id) === selectedFilter;
    }
    return booking.status === selectedFilter;
  });

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getSessionsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return bookings.filter(booking => booking.date === dateString);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const CalendarModal = () => {
    return null; // Calendar is now inline, no modal needed
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
              <Calendar className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">My </span><span className="text-yellow-300">
                  {user?.role === 'professional' ? 'Sessions' : 'Bookings'}
                </span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4 font-sans">
              {user?.role === 'professional' 
                ? 'Manage your therapy sessions and client bookings'
                : 'Track your scheduled therapy sessions and appointments'
              }
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed font-sans">
              {user?.role === 'professional'
                ? 'Accept new bookings, confirm sessions, and manage your professional schedule all in one place.'
                : 'View upcoming sessions, manage appointments, and stay connected with your therapy team.'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Collapsible Calendar View */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white border-opacity-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 font-handwritten">Calendar View</h3>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="px-4 py-2 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 flex items-center font-sans"
            >
              {showCalendar ? (
                <>
                  <X className="h-4 w-4 mr-2" />
                  Hide Calendar
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4 mr-2" />
                  Show Calendar
                </>
              )}
            </button>
          </div>
          
          {showCalendar && (
            <div className="space-y-6">
              {/* Calendar Header */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-3 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600 rounded-full transition-all duration-300 border border-white"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                
                <h3 className="text-2xl font-bold font-sans" style={{ color: '#CB748E' }}>
                  {['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'][currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-3 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600 rounded-full transition-all duration-300 border border-white"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-7">
                {/* Day Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center font-bold text-gray-700 p-3 font-sans bg-gray-50 border-b border-r border-gray-200 last:border-r-0">
                    {day}
                  </div>
                ))}
                </div>
                
                <div className="grid grid-cols-7">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: (() => {
                  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
                  return firstDay;
                })() }, (_, i) => (
                  <div key={`empty-${i}`} className="h-24 border-b border-r border-gray-200 last:border-r-0"></div>
                ))}
                
                {/* Calendar Days */}
                {Array.from({ length: (() => {
                  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                  return daysInMonth;
                })() }, (_, i) => {
                  const day = i + 1;
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                  const dateString = date.toISOString().split('T')[0];
                  const isToday = date.toDateString() === new Date().toDateString();
                  const sessionsForDay = bookings.filter(booking => booking.date === dateString);
                  const confirmedSessions = sessionsForDay.filter(session => 
                    user?.role === 'professional' ? getBookingStatus(session.id) === 'confirmed' : session.status === 'confirmed'
                  );
                  const pendingSessions = sessionsForDay.filter(session => 
                    user?.role === 'professional' ? getBookingStatus(session.id) === 'pending' : session.status === 'pending'
                  );
                  const acceptedSessions = sessionsForDay.filter(session => 
                    user?.role === 'professional' ? getBookingStatus(session.id) === 'accepted' : false
                  );
                  
                  return (
                    <div
                      key={day}
                      className={`p-2 text-center cursor-pointer transition-all duration-300 font-sans min-h-[96px] flex flex-col border-b border-r border-gray-200 last:border-r-0 ${
                        isToday
                          ? 'bg-blue-100 text-blue-800 font-bold'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-800' : 'text-gray-700'}`}>
                        {day}
                      </div>
                      {sessionsForDay.length > 0 && (
                        <div className="flex-1 space-y-1">
                            {sessionsForDay.slice(0, 2).map((session, index) => (
                              <div
                                key={index}
                                className={`px-1 py-0.5 rounded text-xs font-medium truncate ${
                                  user?.role === 'professional' 
                                    ? getBookingStatus(session.id) === 'confirmed' 
                                      ? 'bg-green-500 text-white' 
                                      : getBookingStatus(session.id) === 'accepted'
                                      ? 'bg-blue-500 text-white'
                                      : getBookingStatus(session.id) === 'pending'
                                      ? 'bg-yellow-500 text-white'
                                      : 'bg-gray-500 text-white'
                                    : session.status === 'confirmed' 
                                      ? 'bg-green-500 text-white' 
                                      : session.status === 'pending'
                                      ? 'bg-yellow-500 text-white'
                                      : 'bg-gray-500 text-white'
                                }`}
                              >
                                {user?.role === 'professional' ? session.child : session.professional} - {session.time}
                              </div>
                            ))}
                            {sessionsForDay.length > 2 && (
                              <div className="text-xs font-medium text-gray-600">
                                +{sessionsForDay.length - 2} more
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  );
                })}
                </div>
              </div>
              
              {/* Calendar Legend */}
              <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-lg p-6 border border-pink-200">
                <h4 className="text-lg font-bold mb-4 font-handwritten" style={{ color: '#CB748E' }}>Legend</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#CB748E] to-[#698a60] rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 font-sans">Today</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 font-sans">Confirmed Sessions</span>
                  </div>
                  {user?.role === 'professional' && (
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700 font-sans">Accepted Sessions</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 font-sans">Pending Requests</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-10 border border-white border-opacity-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="border-2 border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent bg-white shadow-lg font-sans appearance-none pr-10"
                >
                  <option value="all">All Bookings</option>
                  {user?.role === 'professional' ? (
                    <>
                      <option value="pending">Pending Requests</option>
                      <option value="accepted">Accepted</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="declined">Declined</option>
                    </>
                  ) : (
                    <>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                    </>
                  )}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="border-2 border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent bg-white shadow-lg font-sans appearance-none pr-10"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past Sessions</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div className="text-sm text-gray-600 font-sans">
              Showing {filteredBookings.length} {filteredBookings.length === 1 ? 'booking' : 'bookings'}
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg border border-white border-opacity-50 p-8 hover:shadow-xl transition-all duration-300">
              {user?.role === 'professional' ? (
                // Professional View
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 font-handwritten">{booking.service}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold font-sans ${getStatusColor(getBookingStatus(booking.id))}`}>
                          {getBookingStatus(booking.id).charAt(0).toUpperCase() + getBookingStatus(booking.id).slice(1)}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Child & Parent Info */}
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-[#CB748E] mr-3" />
                            <div>
                              <p className="font-bold text-gray-800 font-sans">{booking.child}</p>
                              <p className="text-sm text-gray-600 font-sans">Age {booking.childAge}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-500 mr-3" />
                            <div>
                              <p className="font-semibold text-gray-800 font-sans">{booking.parent}</p>
                              <p className="text-sm text-gray-600 font-sans">{booking.parentPhone}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {booking.childConditions.map((condition, index) => (
                              <span key={index} className="px-2 py-1 bg-pink-100 text-[#CB748E] text-xs rounded-full font-semibold font-sans">
                                {condition}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Session Details */}
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-[#698a60] mr-3" />
                            <div>
                              <p className="font-bold text-gray-800 font-sans">{new Date(booking.date).toLocaleDateString()}</p>
                              <p className="text-sm text-gray-600 font-sans">{booking.time}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="text-gray-700 font-sans">{booking.duration} minutes</span>
                          </div>
                          
                          <div className="flex items-center">
                            {booking.type === 'home-visit' ? (
                              <Home className="h-5 w-5 text-gray-500 mr-3" />
                            ) : (
                              <Video className="h-5 w-5 text-gray-500 mr-3" />
                            )}
                            <span className="text-gray-700 font-sans">
                              {booking.type === 'home-visit' ? 'Home Visit' : 'Online Session'}
                            </span>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-[#698a60] font-sans">₱{booking.rate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location/Meeting Info */}
                  {booking.address && (
                    <div className="flex items-start bg-gray-50 rounded-xl p-4">
                      <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <span className="text-gray-700 font-sans">{booking.address}</span>
                    </div>
                  )}
                  
                  {booking.meetingLink && (
                    <div className="flex items-center bg-blue-50 rounded-xl p-4">
                      <Video className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-700 font-sans">Meeting link will be provided upon confirmation</span>
                    </div>
                  )}

                  {/* Notes */}
                  {booking.notes && (
                    <div className="bg-yellow-50 rounded-xl p-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-semibold text-yellow-800 font-sans mb-1">Session Notes:</p>
                          <p className="text-yellow-700 font-sans">{booking.notes}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Request Info */}
                  <div className="text-sm text-gray-500 font-sans">
                    Requested on {new Date(booking.requestedDate).toLocaleDateString()}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    {getBookingStatus(booking.id) === 'pending' && (
                      <>
                        <button
                          onClick={() => handleAcceptBooking(booking.id)}
                          className="px-6 py-3 bg-[#698a60] text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center font-sans"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept Booking
                        </button>
                        <button
                          onClick={() => handleDeclineBooking(booking.id)}
                          className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center font-sans"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Decline
                        </button>
                      </>
                    )}
                    
                    {getBookingStatus(booking.id) === 'accepted' && (
                      <button
                        onClick={() => handleConfirmBooking(booking.id)}
                        className="px-6 py-3 bg-[#CB748E] text-white rounded-xl font-bold hover:bg-[#d698ab] transition-colors flex items-center font-sans"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Confirm Session
                      </button>
                    )}
                    
                    {getBookingStatus(booking.id) === 'confirmed' && (
                      <div className="flex gap-3">
                        {booking.type === 'online' ? (
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center font-sans">
                            <Video className="h-4 w-4 mr-2" />
                            Join Session
                          </button>
                        ) : (
                          <button className="px-6 py-3 bg-[#CB748E] text-white rounded-xl font-bold hover:bg-[#d698ab] transition-colors flex items-center font-sans">
                            <MapPin className="h-4 w-4 mr-2" />
                            Get Directions
                          </button>
                        )}
                        <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center font-sans">
                          <Edit className="h-4 w-4 mr-2" />
                          Reschedule
                        </button>
                      </div>
                    )}
                    
                    {getBookingStatus(booking.id) === 'declined' && (
                      <div className="text-red-600 font-semibold font-sans">
                        Booking declined
                      </div>
                    )}
                    
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center font-sans">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Parent
                    </button>
                  </div>
                  
                  {/* Mark as Done Button - Right Aligned */}
                  {getBookingStatus(booking.id) === 'confirmed' && (
                    <div className="flex justify-end mt-4 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleMarkAsDone(booking.id)}
                        className="px-6 py-3 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white rounded-xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-sans"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Done
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Parent View (existing code)
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <img
                        src={booking.professionalAvatar}
                        alt={booking.professional}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 font-handwritten">{booking.professional}</h3>
                        <p className="text-[#CB748E] font-semibold font-sans">{booking.service}</p>
                        <p className="text-sm text-gray-600 font-sans">For {booking.child}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-[#698a60] mr-3" />
                          <span className="text-gray-700 font-sans">{new Date(booking.date).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-gray-500 mr-3" />
                          <span className="text-gray-700 font-sans">{booking.time} ({booking.duration} min)</span>
                        </div>
                        
                        <div className="flex items-center">
                          {booking.type === 'home-visit' ? (
                            <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                          ) : (
                            <Video className="h-5 w-5 text-gray-500 mr-3" />
                          )}
                          <span className="text-gray-700 font-sans">
                            {booking.type === 'home-visit' ? 'Home Visit' : 'Online Session'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-[#698a60] font-sans">₱{booking.rate}</span>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-sm font-bold font-sans ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    {booking.notes && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-700 font-sans"><strong>Notes:</strong> {booking.notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-6">
                    {booking.status === 'confirmed' && (
                      <>
                        {booking.type === 'online' ? (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center font-sans">
                            <Video className="h-4 w-4 mr-2" />
                            Join
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-[#CB748E] text-white rounded-xl font-bold hover:bg-[#d698ab] transition-colors flex items-center font-sans">
                            <MapPin className="h-4 w-4 mr-2" />
                            Directions
                          </button>
                        )}
                      </>
                    )}
                    
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center font-sans">
                      <Edit className="h-4 w-4 mr-2" />
                      Reschedule
                    </button>
                    
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center font-sans">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto border border-white border-opacity-50 shadow-xl">
              <Calendar className="h-20 w-20 text-[#CB748E] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-handwritten">No bookings found</h3>
              <p className="text-gray-600 mb-6 font-sans">
                {user?.role === 'professional' 
                  ? "You don't have any booking requests yet. Your profile is live and families can book sessions with you."
                  : "You haven't booked any sessions yet. Start by finding a professional who can help your child."
                }
              </p>
              {user?.role !== 'professional' && (
                <button
                  onClick={() => onPageChange('professionals')}
                  className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
                >
                  Find Professionals
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Calendar Modal */}
      <CalendarModal />
      
      {/* Mark as Done Modal */}
      {showMarkDoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Complete Session</h2>
              <button
                onClick={handleCancelMarkDone}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-8">
              {selectedSessionId && (
                <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl border border-pink-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 font-handwritten">Session Details</h3>
                  {(() => {
                    const session = bookings.find(s => s.id === selectedSessionId);
                    return session ? (
                      <div className="text-sm text-gray-700 font-sans">
                        <p><strong>Client:</strong> {session.child}</p>
                        <p><strong>Date:</strong> {new Date(session.date).toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {session.time}</p>
                        <p><strong>Duration:</strong> {session.duration} minutes</p>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
              
              <div className="space-y-6">
                {/* Session Notes */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Session Notes</label>
                  <textarea
                    value={sessionNotes}
                    onChange={(e) => setSessionNotes(e.target.value)}
                    rows={4}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                    placeholder="Describe what was accomplished during this session, activities performed, client's response, etc."
                  />
                  <div className="text-sm text-gray-500 mt-2 font-sans">
                    {sessionNotes.length}/500 characters
                  </div>
                </div>
                
                {/* Progress Rating */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Progress Rating</label>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-semibold text-gray-600 font-sans">Poor</span>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setProgressRating(rating)}
                          className={`w-8 h-8 rounded-full border-2 font-bold text-sm transition-colors font-sans ${
                            progressRating >= rating
                              ? 'bg-[#698a60] border-[#698a60] text-white'
                              : 'border-gray-300 text-gray-600 hover:border-[#698a60]'
                          }`}
                        >
                          {rating}
                        </button>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-600 font-sans">Excellent</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-[#698a60] font-handwritten">
                      Rating: {progressRating}/10
                    </span>
                  </div>
                </div>
                
                {/* Progress Comments */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-3 font-handwritten">Progress Comments</label>
                  <textarea
                    value={progressComments}
                    onChange={(e) => setProgressComments(e.target.value)}
                    rows={3}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                    placeholder="Specific observations about the client's progress, improvements noted, areas for continued focus, etc."
                  />
                  <div className="text-sm text-gray-500 mt-2 font-sans">
                    {progressComments.length}/300 characters
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSaveSessionCompletion}
                    disabled={!sessionNotes.trim()}
                    className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-handwritten ${
                      sessionNotes.trim()
                        ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Complete Session
                  </button>
                  <button
                    onClick={handleCancelMarkDone}
                    className="px-6 py-4 border-2 border-gray-300 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 text-gray-700 flex items-center justify-center font-handwritten"
                  >
                    <X className="h-5 w-5 mr-2" />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}