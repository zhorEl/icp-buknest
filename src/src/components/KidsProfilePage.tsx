import React, { useState } from 'react';
import { Users, Search, Calendar, TrendingUp, FileText, Phone, Mail, MapPin, Clock, Star, Filter, ChevronDown, User, Activity, Baby, Grid, List, X, Award, Heart, AlertCircle, Plus, Edit, Trash2, CheckCircle, ArrowRight, MessageCircle, Save, Target } from 'lucide-react';

interface KidsProfilePageProps {
  user: any;
  onPageChange: (page: string) => void;
}

interface Child {
  id: string;
  name: string;
  age: number;
  dateOfBirth: string;
  conditions: string[];
  totalSessions: number;
  completedSessions: number;
  nextSession: string | null;
  lastSession: string | null;
  progressScore: number;
  avatar: string;
  joinedDate: string;
  notes: string;
  sessionHistory: SessionRecord[];
  favoriteActivities: string[];
  emergencyContact: string;
  currentProfessionals: string[];
  milestones: Milestone[];
}

interface SessionRecord {
  id: string;
  date: string;
  type: 'home-visit' | 'online';
  duration: number;
  notes: string;
  progress: string;
  rating: number;
  professional: string;
  status: 'completed' | 'scheduled' | 'cancelled';
  goals: string[];
  achievements: string[];
  nextSteps: string[];
  parentFeedback?: string;
  professionalNotes?: string;
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  achieved: boolean;
}

export default function KidsProfilePage({ user, onPageChange }: KidsProfilePageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCondition, setFilterCondition] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'thumbnail' | 'table'>('thumbnail');
  const [showChildModal, setShowChildModal] = useState(false);
  const [modalChild, setModalChild] = useState<Child | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionRecord | null>(null);
  const [selectedChildForSessions, setSelectedChildForSessions] = useState<string | null>(null);
  const [newChild, setNewChild] = useState<Partial<Child>>({});
  const [newCondition, setNewCondition] = useState('');
  const [newActivity, setNewActivity] = useState('');

  const children: Child[] = [
    {
      id: '1',
      name: 'Emma Johnson',
      age: 6,
      dateOfBirth: '2018-03-15',
      conditions: ['Autism Spectrum Disorder', 'Speech Delay'],
      totalSessions: 24,
      completedSessions: 18,
      nextSession: '2024-01-15',
      lastSession: '2024-01-12',
      progressScore: 85,
      avatar: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
      joinedDate: '2023-09-15',
      notes: 'Shows excellent progress in articulation. Very responsive to visual cues and structured activities.',
      favoriteActivities: ['Drawing', 'Music therapy', 'Sensory play'],
      emergencyContact: 'Dr. Sarah Johnson - (555) 123-4567',
      currentProfessionals: ['Dr. Sarah Johnson (Speech Therapist)', 'Maria Rodriguez (Occupational Therapist)'],
      milestones: [
        {
          id: '1',
          title: 'First Words',
          description: 'Emma said her first clear word "mama"',
          date: '2024-01-12',
          achieved: true
        },
        {
          id: '2',
          title: 'Eye Contact',
          description: 'Maintained eye contact for 5+ seconds',
          date: '2024-01-10',
          achieved: true
        }
      ],
      sessionHistory: [
        {
          id: '1',
          date: '2024-01-12',
          type: 'home-visit',
          duration: 60,
          notes: 'Great session focusing on /r/ sounds. Emma showed improvement.',
          progress: 'Improved articulation of target sounds',
          rating: 5,
          professional: 'Dr. Sarah Johnson',
          status: 'completed',
          goals: ['Improve /r/ sound articulation', 'Increase vocabulary by 5 words'],
          achievements: ['Successfully pronounced /r/ in 3 words', 'Added 4 new words to vocabulary'],
          nextSteps: ['Continue /r/ sound practice', 'Work on sentence formation'],
          parentFeedback: 'Emma was very engaged and excited to show us what she learned.',
          professionalNotes: 'Excellent progress. Emma is responding well to visual cues and repetition exercises.'
        },
        {
          id: '2',
          date: '2024-01-10',
          type: 'online',
          duration: 45,
          notes: 'Worked on vocabulary expansion. Good engagement.',
          progress: 'Added 5 new words to active vocabulary',
          rating: 4,
          professional: 'Dr. Sarah Johnson',
          status: 'completed',
          goals: ['Expand vocabulary', 'Improve attention span'],
          achievements: ['Learned 5 new words', 'Maintained focus for 40 minutes'],
          nextSteps: ['Practice new words in sentences', 'Continue attention building activities'],
          parentFeedback: 'Emma enjoyed the online session and was proud of her new words.',
          professionalNotes: 'Good engagement throughout the session. Ready for more complex vocabulary.'
        },
        {
          id: '3',
          date: '2024-01-15',
          type: 'home-visit',
          duration: 60,
          notes: 'Upcoming session - Focus on social communication',
          progress: 'Scheduled',
          rating: 0,
          professional: 'Dr. Sarah Johnson',
          status: 'scheduled',
          goals: ['Practice social greetings', 'Work on turn-taking in conversation'],
          achievements: [],
          nextSteps: [],
          professionalNotes: 'Plan to work on social communication skills and peer interaction.'
        }
      ]
    },
    {
      id: '2',
      name: 'Alex Johnson',
      age: 4,
      dateOfBirth: '2020-07-22',
      conditions: ['ADHD', 'Language Delay'],
      totalSessions: 16,
      completedSessions: 12,
      nextSession: '2024-01-18',
      lastSession: '2024-01-11',
      progressScore: 72,
      avatar: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
      joinedDate: '2023-10-20',
      notes: 'High energy child who responds well to movement breaks and structured activities.',
      favoriteActivities: ['Physical therapy', 'Story time', 'Building blocks'],
      emergencyContact: 'Dr. Michael Chen - (555) 987-6543',
      currentProfessionals: ['Dr. Michael Chen (Developmental Pediatrician)', 'Lisa Thompson (Special Education)'],
      milestones: [
        {
          id: '3',
          title: 'Following Instructions',
          description: 'Can follow 2-step instructions consistently',
          date: '2024-01-08',
          achieved: true
        },
        {
          id: '4',
          title: 'Social Play',
          description: 'Engaged in parallel play with peers',
          date: '2024-01-15',
          achieved: false
        }
      ],
      sessionHistory: [
        {
          id: '3',
          date: '2024-01-11',
          type: 'home-visit',
          duration: 45,
          notes: 'Focus on attention and following directions. Good progress.',
          progress: 'Improved attention span by 5 minutes',
          rating: 3,
          professional: 'Dr. Michael Chen',
          status: 'completed',
          goals: ['Improve attention span', 'Follow 2-step instructions'],
          achievements: ['Increased attention span to 15 minutes', 'Successfully followed 2-step instructions'],
          nextSteps: ['Work on 3-step instructions', 'Practice sustained attention activities'],
          parentFeedback: 'Alex was more focused than usual and seemed to enjoy the activities.',
          professionalNotes: 'Significant improvement in attention. Ready for more complex tasks.'
        },
        {
          id: '4',
          date: '2024-01-18',
          type: 'online',
          duration: 45,
          notes: 'Upcoming session - Continue attention building',
          progress: 'Scheduled',
          rating: 0,
          professional: 'Dr. Michael Chen',
          status: 'scheduled',
          goals: ['Practice 3-step instructions', 'Improve impulse control'],
          achievements: [],
          nextSteps: [],
          professionalNotes: 'Plan to build on previous attention improvements.'
        }
      ]
    }
  ];

  const conditions = ['all', 'Autism Spectrum Disorder', 'Speech Delay', 'ADHD', 'Language Delay', 'Sensory Processing Disorder'];

  const filteredChildren = children.filter(child => {
    const matchesSearch = child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         child.conditions.some(condition => condition.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCondition = filterCondition === 'all' || child.conditions.includes(filterCondition);
    
    return matchesSearch && matchesCondition;
  });

  const sortedChildren = [...filteredChildren].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'progress':
        return b.progressScore - a.progressScore;
      case 'sessions':
        return b.completedSessions - a.completedSessions;
      case 'age':
        return b.age - a.age;
      default:
        return 0;
    }
  });

  const handleViewDetails = (child: Child) => {
    setModalChild(child);
    setShowChildModal(true);
  };

  const handleAddChild = () => {
    if (!newChild.name || !newChild.dateOfBirth) {
      alert('Please fill in the required fields: name and date of birth');
      return;
    }

    const child: Child = {
      id: Date.now().toString(),
      name: newChild.name!,
      age: newChild.age || 0,
      dateOfBirth: newChild.dateOfBirth || '',
      gender: newChild.gender || '',
      conditions: newChild.conditions || [],
      favoriteActivities: newChild.favoriteActivities || [],
      communicationStyle: newChild.communicationStyle || '',
      behavioralTriggers: newChild.behavioralTriggers || '',
      calmingStrategies: newChild.calmingStrategies || '',
      currentGoals: newChild.currentGoals || '',
      currentProfessionals: newChild.currentProfessionals || '',
      emergencyContact: newChild.emergencyContact || '',
      schoolInfo: newChild.schoolInfo || '',
      notes: newChild.notes || '',
      assessmentHistory: [],
      sessions: [],
      avatar: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
      progressScore: 0,
      totalSessions: 0,
      completedSessions: 0,
      joinedDate: new Date().toISOString().split('T')[0]
    };

    setChildren(prev => [...prev, child]);
    setNewChild({});
    setNewCondition('');
    setNewActivity('');
    setShowAddForm(false);
  };

  const addCondition = () => {
    if (newCondition.trim()) {
      setNewChild(prev => ({
        ...prev,
        conditions: [...(prev.conditions || []), newCondition.trim()]
      }));
      setNewCondition('');
    }
  };

  const addActivity = () => {
    if (newActivity.trim()) {
      setNewChild(prev => ({
        ...prev,
        favoriteActivities: [...(prev.favoriteActivities || []), newActivity.trim()]
      }));
      setNewActivity('');
    }
  };

  const handleViewSessionDetails = (session: SessionRecord, childId: string) => {
    setSelectedSession(session);
    setSelectedChildForSessions(childId);
    setShowSessionModal(true);
  };

  const SessionDetailsModal = () => {
    if (!showSessionModal || !selectedSession) return null;

    const child = children.find(c => c.id === selectedChildForSessions);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Session Details</h2>
            <button
              onClick={() => setShowSessionModal(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-8">
            {/* Session Header */}
            <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl border border-pink-200">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 font-handwritten mb-2">
                  {child?.name} - Session #{selectedSession.id}
                </h3>
                <p className="text-xl text-[#CB748E] font-semibold font-sans mb-1">
                  {new Date(selectedSession.date).toLocaleDateString()} at {selectedSession.date.includes('T') ? new Date(selectedSession.date).toLocaleTimeString() : 'TBD'}
                </p>
                <p className="text-lg text-gray-700 font-sans">
                  {selectedSession.professional} • {selectedSession.duration} minutes • {selectedSession.type === 'home-visit' ? 'Home Visit' : 'Online Session'}
                </p>
                <div className="flex items-center mt-3">
                  <div className={`px-4 py-2 rounded-full text-lg font-bold ${
                    selectedSession.status === 'completed' ? 'bg-green-100 text-green-800' :
                    selectedSession.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedSession.status.charAt(0).toUpperCase() + selectedSession.status.slice(1)}
                  </div>
                  {selectedSession.status === 'completed' && (
                    <div className="flex items-center ml-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < selectedSession.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-700 font-sans">({selectedSession.rating}/5)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Session Goals */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Star className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Session Goals
                  </h4>
                  <div className="space-y-2">
                    {selectedSession.goals.map((goal, index) => (
                      <div key={index} className="flex items-start p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700 font-sans">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {selectedSession.status === 'completed' && selectedSession.achievements.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <Award className="h-5 w-5 mr-2 text-[#CB748E]" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedSession.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start p-3 bg-green-50 rounded-xl border border-green-200">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                          <span className="text-gray-700 font-sans">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Steps */}
                {selectedSession.status === 'completed' && selectedSession.nextSteps.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <ArrowRight className="h-5 w-5 mr-2 text-[#CB748E]" />
                      Next Steps
                    </h4>
                    <div className="space-y-2">
                      {selectedSession.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700 font-sans">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Session Notes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Session Notes
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed font-sans">{selectedSession.notes}</p>
                  </div>
                </div>

                {/* Professional Notes */}
                {selectedSession.professionalNotes && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <User className="h-5 w-5 mr-2 text-[#CB748E]" />
                      Professional Notes
                    </h4>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <p className="text-gray-700 leading-relaxed font-sans">{selectedSession.professionalNotes}</p>
                    </div>
                  </div>
                )}

                {/* Parent Feedback */}
                {selectedSession.parentFeedback && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-[#CB748E]" />
                      Parent Feedback
                    </h4>
                    <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                      <p className="text-gray-700 leading-relaxed font-sans">{selectedSession.parentFeedback}</p>
                    </div>
                  </div>
                )}

                {/* Progress Summary */}
                {selectedSession.status === 'completed' && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-[#CB748E]" />
                      Progress Summary
                    </h4>
                    <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-xl p-4 border border-pink-200">
                      <p className="text-gray-700 leading-relaxed font-sans font-semibold">{selectedSession.progress}</p>
                      <div className="flex items-center mt-3">
                        <span className="text-sm text-gray-600 font-sans mr-2">Session Rating:</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < selectedSession.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
              {selectedSession.status === 'scheduled' && (
                <>
                  <button
                    onClick={() => onPageChange('bookings')}
                    className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-sans"
                  >
                    <Edit className="h-5 w-5 mr-2" />
                    Reschedule Session
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-bold flex items-center justify-center font-sans">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact Professional
                  </button>
                </>
              )}
              {selectedSession.status === 'completed' && (
                <>
                  <button className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-sans">
                    <FileText className="h-5 w-5 mr-2" />
                    Download Report
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-bold flex items-center justify-center font-sans">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Follow-up
                  </button>
                </>
              )}
              <button
                onClick={() => setShowSessionModal(false)}
                className="px-6 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-bold flex items-center justify-center font-sans"
              >
                <X className="h-5 w-5 mr-2" />
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ChildDetailsModal = () => {
    if (!showChildModal || !modalChild) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Child Profile</h2>
            <button
              onClick={() => setShowChildModal(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-8">
            {/* Child Header */}
            <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl border border-pink-200">
              <img
                src={modalChild.avatar}
                alt={modalChild.name}
                className="w-24 h-24 rounded-full object-cover mr-6 border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 font-handwritten mb-2">{modalChild.name}</h3>
                <p className="text-xl text-[#CB748E] font-semibold font-sans mb-1">Age {modalChild.age}</p>
                <p className="text-lg text-gray-700 font-sans">Born: {new Date(modalChild.dateOfBirth).toLocaleDateString()}</p>
                <div className="flex items-center mt-3">
                  <div className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-4 py-2 rounded-full text-lg font-bold">
                    {modalChild.progressScore}% Progress
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Baby className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Basic Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 font-sans">
                      <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                      <span><strong>Date of Birth:</strong> {new Date(modalChild.dateOfBirth).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-700 font-sans">
                      <User className="h-4 w-4 mr-3 text-gray-500" />
                      <span><strong>Joined:</strong> {new Date(modalChild.joinedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-700 font-sans">
                      <Phone className="h-4 w-4 mr-3 text-gray-500" />
                      <span><strong>Emergency Contact:</strong> {modalChild.emergencyContact}</span>
                    </div>
                  </div>
                </div>

                {/* Conditions & Diagnosis */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Conditions & Diagnosis
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalChild.conditions.map((condition, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-pink-100 text-[#CB748E] text-sm rounded-full font-semibold font-sans border border-pink-200"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Current Professionals */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Current Professionals
                  </h4>
                  <div className="space-y-2">
                    {modalChild.currentProfessionals.map((professional, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
                        <User className="h-4 w-4 text-gray-500 mr-3" />
                        <span className="text-gray-700 font-sans">{professional}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Session Statistics */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Session Statistics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-green-50 rounded-xl border border-pink-200">
                      <div className="text-2xl font-bold text-gray-800 font-handwritten">{modalChild.completedSessions}</div>
                      <div className="text-sm text-gray-600 font-sans">Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-pink-50 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-gray-800 font-handwritten">{modalChild.totalSessions - modalChild.completedSessions}</div>
                      <div className="text-sm text-gray-600 font-sans">Remaining</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600 font-sans">Progress</span>
                      <span className="text-sm font-bold text-gray-800 font-sans">{modalChild.progressScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-[#CB748E] to-[#698a60] h-4 rounded-full transition-all duration-500"
                        style={{ width: `${modalChild.progressScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Favorite Activities */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Favorite Activities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalChild.favoriteActivities.map((activity, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-green-100 text-[#698a60] text-sm rounded-full font-semibold font-sans border border-green-200"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Star className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Recent Milestones
                  </h4>
                  <div className="space-y-3">
                    {modalChild.milestones.map((milestone) => (
                      <div key={milestone.id} className={`p-4 rounded-2xl border ${
                        milestone.achieved 
                          ? 'bg-pink-50 border-pink-200' 
                          : 'bg-yellow-50 border-yellow-200'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-bold text-gray-800 font-sans">{milestone.title}</h5>
                          {milestone.achieved ? (
                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          ) : (
                            <Clock className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-700 font-sans">{milestone.description}</p>
                        <p className="text-xs text-gray-600 mt-2 font-sans">{new Date(milestone.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Notes
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed font-sans">{modalChild.notes}</p>
                  </div>
                </div>

                {/* Recent Session History */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Session History & Progress
                  </h4>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {modalChild.sessionHistory.map((session) => (
                      <div 
                        key={session.id} 
                        className={`rounded-xl p-4 border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          session.status === 'completed' ? 'bg-green-50 border-green-200 hover:bg-green-100' :
                          session.status === 'scheduled' ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' :
                          'bg-red-50 border-red-200 hover:bg-red-100'
                        }`}
                        onClick={() => handleViewSessionDetails(session, modalChild.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-bold text-gray-800 font-sans">{new Date(session.date).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-600 font-sans">
                              {session.type === 'home-visit' ? 'Home Visit' : 'Online'} • {session.duration} min
                            </p>
                            <p className="text-sm text-gray-600 font-sans">with {session.professional}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold font-sans ${
                              session.status === 'completed' ? 'bg-green-100 text-green-800' :
                              session.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                            </span>
                            {session.status === 'completed' && (
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-2 font-sans"><strong>Progress:</strong> {session.progress}</p>
                        <p className="text-sm text-gray-700 mb-3 font-sans"><strong>Notes:</strong> {session.notes}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 font-sans">Click to view details</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => onPageChange('bookings')}
                className="flex-1 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-sans"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Session
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-bold flex items-center justify-center font-sans">
                <FileText className="h-5 w-5 mr-2" />
                View Reports
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-bold flex items-center justify-center font-sans">
                <Edit className="h-5 w-5 mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ChildCard = ({ child }: { child: Child }) => (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg border border-white border-opacity-50 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute -top-4 -right-4 opacity-5 animate-float">
        <img src="/pattern/pattern pink.svg" alt="" className="w-32 h-32" />
      </div>
      
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <img
              src={child.avatar}
              alt={child.name}
              className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-handwritten">{child.name}</h3>
              <p className="text-[#CB748E] font-semibold font-sans">Age {child.age}</p>
              <p className="text-sm text-gray-600 font-sans">Born: {new Date(child.dateOfBirth).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#698a60] font-handwritten">{child.progressScore}%</div>
            <div className="text-sm text-gray-600 font-sans">Progress</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center text-gray-700 font-sans">
              <Calendar className="h-4 w-4 mr-3 text-[#CB748E]" />
              <span className="text-sm">
                <strong>Next:</strong> {child.nextSession ? new Date(child.nextSession).toLocaleDateString() : 'Not scheduled'}
              </span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <Clock className="h-4 w-4 mr-3 text-[#698a60]" />
              <span className="text-sm">
                <strong>Sessions:</strong> {child.completedSessions}/{child.totalSessions}
              </span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <Phone className="h-4 w-4 mr-3 text-gray-500" />
              <span className="text-sm">{child.emergencyContact}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-700 font-sans">
              <Users className="h-4 w-4 mr-3 text-gray-500" />
              <span className="text-sm">{child.currentProfessionals.length} Professional(s)</span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <Star className="h-4 w-4 mr-3 text-yellow-500" />
              <span className="text-sm">{child.milestones.filter(m => m.achieved).length} Milestones</span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <User className="h-4 w-4 mr-3 text-gray-500" />
              <span className="text-sm">Since {new Date(child.joinedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2 font-handwritten">Conditions:</h4>
          <div className="flex flex-wrap gap-2">
            {child.conditions.map((condition, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-pink-100 text-[#CB748E] text-xs rounded-full font-semibold font-sans"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2 font-handwritten">Progress Overview:</h4>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-[#CB748E] to-[#698a60] h-3 rounded-full transition-all duration-500"
              style={{ width: `${child.progressScore}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-700 font-sans">{child.notes}</p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => handleViewDetails(child)}
            className="flex-1 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-4 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-sans"
          >
            <FileText className="h-4 w-4 mr-2" />
            View Details
          </button>
          <button
            onClick={() => onPageChange('bookings')}
            className="px-4 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-gray-700 font-bold flex items-center font-sans"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </button>
        </div>
      </div>
    </div>
  );

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
              <Baby className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">Kids </span><span className="text-yellow-300">Profile</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4 font-sans">
              Manage your children's profiles and track their progress
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed font-sans">
              View detailed information about each child, track their development milestones, and manage their therapy journey all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Child Button */}
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-8 py-4 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-handwritten"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Child Profile
          </button>
          
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

        {/* Search and Filters */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-10 border border-white border-opacity-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search children..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent bg-white shadow-lg font-sans"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={filterCondition}
                  onChange={(e) => setFilterCondition(e.target.value)}
                  className="border-2 border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent bg-white shadow-lg font-sans appearance-none pr-10"
                >
                  {conditions.map(condition => (
                    <option key={condition} value={condition}>
                      {condition === 'all' ? 'All Conditions' : condition}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-2 border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent bg-white shadow-lg font-sans appearance-none pr-10"
                >
                  <option value="name">Sort by Name</option>
                  <option value="progress">Sort by Progress</option>
                  <option value="sessions">Sort by Sessions</option>
                  <option value="age">Sort by Age</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Add Child Form */}
        {showAddForm && (
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-10 border border-white border-opacity-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Add New Child Profile</h3>
            
            <form onSubmit={(e) => { e.preventDefault(); handleAddChild(); }} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-6 border border-pink-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                  <Baby className="h-5 w-5 mr-2 text-[#CB748E]" />
                  Basic Information
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Child's Full Name *</label>
                    <input
                      type="text"
                      value={newChild.name || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      placeholder="Enter child's full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Date of Birth *</label>
                    <input
                      type="date"
                      value={newChild.dateOfBirth || ''}
                      onChange={(e) => {
                        const birthDate = new Date(e.target.value);
                        const today = new Date();
                        const age = Math.floor((today.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
                        setNewChild(prev => ({ 
                          ...prev, 
                          dateOfBirth: e.target.value,
                          age: age 
                        }));
                      }}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      max={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Age</label>
                    <input
                      type="number"
                      value={newChild.age || ''}
                      readOnly
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-gray-50 font-sans"
                      placeholder="Calculated from date of birth"
                    />
                    <p className="text-xs text-gray-500 mt-1 font-sans">Automatically calculated from date of birth</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Gender</label>
                    <select
                      value={newChild.gender || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, gender: e.target.value }))}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="bg-gradient-to-r from-green-50 to-pink-50 rounded-2xl p-6 border border-green-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-[#698a60]" />
                  Medical Information
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Conditions/Diagnosis</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(newChild.conditions || []).map((condition, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-pink-100 text-[#CB748E] text-sm rounded-full font-semibold font-sans flex items-center"
                        >
                          {condition}
                          <button
                            type="button"
                            onClick={() => {
                              const updatedConditions = (newChild.conditions || []).filter((_, i) => i !== index);
                              setNewChild(prev => ({ ...prev, conditions: updatedConditions }));
                            }}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newCondition}
                        onChange={(e) => setNewCondition(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addCondition()}
                        placeholder="Add condition (e.g., Autism Spectrum Disorder)"
                        className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      />
                      <button
                        type="button"
                        onClick={addCondition}
                        className="px-4 py-2 bg-[#CB748E] text-white rounded-xl hover:bg-[#d698ab] transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Current Professionals</label>
                    <textarea
                      value={newChild.currentProfessionals || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, currentProfessionals: e.target.value }))}
                      rows={2}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                      placeholder="List current therapists, doctors, or specialists"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Emergency Contact</label>
                    <input
                      type="text"
                      value={newChild.emergencyContact || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, emergencyContact: e.target.value }))}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      placeholder="Emergency contact name and phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences & Activities */}
              <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl p-6 border border-pink-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-[#CB748E]" />
                  Preferences & Activities
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Favorite Activities</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(newChild.favoriteActivities || []).map((activity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-[#698a60] text-sm rounded-full font-semibold font-sans flex items-center"
                        >
                          {activity}
                          <button
                            type="button"
                            onClick={() => {
                              const updatedActivities = (newChild.favoriteActivities || []).filter((_, i) => i !== index);
                              setNewChild(prev => ({ ...prev, favoriteActivities: updatedActivities }));
                            }}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newActivity}
                        onChange={(e) => setNewActivity(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addActivity()}
                        placeholder="Add favorite activity (e.g., Drawing, Music therapy)"
                        className="flex-1 border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      />
                      <button
                        type="button"
                        onClick={addActivity}
                        className="px-4 py-2 bg-[#698a60] text-white rounded-xl hover:bg-green-700 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Communication Style</label>
                    <select
                      value={newChild.communicationStyle || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, communicationStyle: e.target.value }))}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                    >
                      <option value="">Select communication style</option>
                      <option value="verbal">Verbal</option>
                      <option value="non-verbal">Non-verbal</option>
                      <option value="mixed">Mixed (verbal and non-verbal)</option>
                      <option value="assistive">Uses assistive technology</option>
                      <option value="sign-language">Sign language</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Behavioral Triggers</label>
                    <textarea
                      value={newChild.behavioralTriggers || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, behavioralTriggers: e.target.value }))}
                      rows={2}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                      placeholder="Things that may cause distress or behavioral challenges"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Calming Strategies</label>
                    <textarea
                      value={newChild.calmingStrategies || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, calmingStrategies: e.target.value }))}
                      rows={2}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                      placeholder="Effective ways to help your child calm down or feel comfortable"
                    />
                  </div>
                </div>
              </div>

              {/* Goals & Notes */}
              <div className="bg-gradient-to-r from-green-50 to-pink-50 rounded-2xl p-6 border border-green-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                  <Target className="h-5 w-5 mr-2 text-[#698a60]" />
                  Goals & Additional Notes
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Current Goals</label>
                    <textarea
                      value={newChild.currentGoals || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, currentGoals: e.target.value }))}
                      rows={3}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                      placeholder="What are you hoping to achieve through therapy? What skills would you like your child to develop?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Additional Notes</label>
                    <textarea
                      value={newChild.notes || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, notes: e.target.value }))}
                      rows={4}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                      placeholder="Any additional information about your child that would be helpful for professionals to know..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">School Information</label>
                    <input
                      type="text"
                      value={newChild.schoolInfo || ''}
                      onChange={(e) => setNewChild(prev => ({ ...prev, schoolInfo: e.target.value }))}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                      placeholder="School name, grade level, special education services"
                    />
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-handwritten"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Add Child Profile
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setNewChild({});
                    setNewCondition('');
                    setNewActivity('');
                  }}
                  className="px-6 py-4 border-2 border-gray-300 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 text-gray-700 flex items-center justify-center font-handwritten"
                >
                  <X className="h-5 w-5 mr-2" />
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Baby className="h-8 w-8 text-[#CB748E]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Total Children</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">{children.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-[#698a60]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Avg Progress</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">
                  {Math.round(children.reduce((acc, child) => acc + child.progressScore, 0) / children.length)}%
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">
                  {children.reduce((acc, child) => acc + child.completedSessions, 0)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Milestones</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">
                  {children.reduce((acc, child) => acc + child.milestones.filter(m => m.achieved).length, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Children Grid */}
        {viewMode === 'thumbnail' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {sortedChildren.map((child) => (
              <ChildCard key={child.id} child={child} />
            ))}
          </div>
        ) : (
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg border border-white border-opacity-50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-100 to-green-100">
                  <tr>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Child</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Age</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Conditions</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Progress</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Sessions</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Next Session</th>
                    <th className="px-6 py-5 text-center text-sm font-bold text-green-800 font-handwritten">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedChildren.map((child) => (
                    <tr key={child.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <img
                            src={child.avatar}
                            alt={child.name}
                            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-lg"
                          />
                          <div>
                            <div className="text-sm font-bold text-gray-900 font-handwritten">{child.name}</div>
                            <div className="text-sm text-gray-600 font-sans">Born: {new Date(child.dateOfBirth).toLocaleDateString()}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm font-bold text-gray-900 font-sans">{child.age} years</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-wrap gap-1">
                          {child.conditions.slice(0, 2).map((condition, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-pink-100 text-[#CB748E] text-xs rounded-full font-semibold font-sans"
                            >
                              {condition}
                            </span>
                          ))}
                          {child.conditions.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold font-sans">
                              +{child.conditions.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="w-16 h-3 bg-gray-200 rounded-full mr-3">
                            <div 
                              className="bg-gradient-to-r from-[#CB748E] to-[#698a60] h-3 rounded-full transition-all duration-500"
                              style={{ width: `${child.progressScore}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-gray-800 font-sans">{child.progressScore}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm text-gray-900 font-sans">{child.completedSessions}/{child.totalSessions}</span>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm text-gray-900 font-sans">
                          {child.nextSession ? new Date(child.nextSession).toLocaleDateString() : 'Not scheduled'}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex space-x-2 justify-center">
                          <button
                            onClick={() => handleViewDetails(child)}
                            className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-4 py-2 rounded-lg font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 text-xs font-sans"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => onPageChange('bookings')}
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Calendar className="h-4 w-4 text-gray-700" />
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

        {sortedChildren.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto border border-white border-opacity-50 shadow-xl">
              <Baby className="h-20 w-20 text-[#CB748E] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-handwritten">No children found</h3>
              <p className="text-gray-600 mb-6 font-sans">
                {children.length === 0 
                  ? "Add your first child's profile to get started with tracking their development journey."
                  : "Try adjusting your search or filter criteria to see more results."
                }
              </p>
              {children.length === 0 ? (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
                >
                  Add Child Profile
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCondition('all');
                  }}
                  className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Child Details Modal */}
      <ChildDetailsModal />
      
      {/* Session Details Modal */}
      <SessionDetailsModal />
    </div>
  );
}