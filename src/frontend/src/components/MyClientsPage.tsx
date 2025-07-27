import React, { useState } from 'react';
import { Users, Search, Calendar, TrendingUp, FileText, Phone, Mail, MapPin, Clock, Star, Filter, ChevronDown, User, Activity, Baby, Grid, List, X, Award, Heart, AlertCircle } from 'lucide-react';

interface MyClientsPageProps {
  user: any;
  onPageChange: (page: string) => void;
}

interface Client {
  id: string;
  childName: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  address: string;
  age: number;
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
}

interface SessionRecord {
  id: string;
  date: string;
  type: 'home-visit' | 'online';
  duration: number;
  notes: string;
  progress: string;
  rating: number;
}

export default function MyClientsPage({ user, onPageChange }: MyClientsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCondition, setFilterCondition] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'thumbnail' | 'table'>('thumbnail');
  const [showClientModal, setShowClientModal] = useState(false);
  const [modalClient, setModalClient] = useState<Client | null>(null);

  const clients: Client[] = [
    {
      id: '1',
      childName: 'Emma Johnson',
      parentName: 'Sarah Johnson',
      parentEmail: 'sarah.johnson@email.com',
      parentPhone: '(555) 123-4567',
      address: '123 Main St, Bukidnon, Philippines',
      age: 6,
      conditions: ['Autism Spectrum Disorder', 'Speech Delay'],
      totalSessions: 24,
      completedSessions: 18,
      nextSession: '2024-01-15',
      lastSession: '2024-01-12',
      progressScore: 85,
      avatar: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
      joinedDate: '2023-09-15',
      notes: 'Shows excellent progress in articulation. Very responsive to visual cues.',
      sessionHistory: [
        {
          id: '1',
          date: '2024-01-12',
          type: 'home-visit',
          duration: 60,
          notes: 'Great session focusing on /r/ sounds. Emma showed improvement.',
          progress: 'Improved articulation of target sounds',
          rating: 5
        },
        {
          id: '2',
          date: '2024-01-10',
          type: 'online',
          duration: 45,
          notes: 'Worked on vocabulary expansion. Good engagement.',
          progress: 'Added 5 new words to active vocabulary',
          rating: 4
        }
      ]
    },
    {
      id: '2',
      childName: 'Michael Chen',
      parentName: 'Lisa Chen',
      parentEmail: 'lisa.chen@email.com',
      parentPhone: '(555) 987-6543',
      address: '456 Oak Ave, Bukidnon, Philippines',
      age: 4,
      conditions: ['Sensory Processing Disorder'],
      totalSessions: 16,
      completedSessions: 12,
      nextSession: '2024-01-18',
      lastSession: '2024-01-11',
      progressScore: 72,
      avatar: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
      joinedDate: '2023-10-20',
      notes: 'Responds well to sensory integration activities. Needs consistent routine.',
      sessionHistory: [
        {
          id: '3',
          date: '2024-01-11',
          type: 'home-visit',
          duration: 45,
          notes: 'Sensory integration activities. Good tolerance to textures.',
          progress: 'Increased tolerance to various textures',
          rating: 4
        }
      ]
    },
    {
      id: '3',
      childName: 'Sofia Rodriguez',
      parentName: 'Maria Rodriguez',
      parentEmail: 'maria.rodriguez@email.com',
      parentPhone: '(555) 456-7890',
      address: '789 Pine St, Bukidnon, Philippines',
      age: 5,
      conditions: ['ADHD', 'Language Delay'],
      totalSessions: 20,
      completedSessions: 15,
      nextSession: '2024-01-20',
      lastSession: '2024-01-13',
      progressScore: 68,
      avatar: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
      joinedDate: '2023-08-10',
      notes: 'High energy child. Benefits from movement breaks during sessions.',
      sessionHistory: [
        {
          id: '4',
          date: '2024-01-13',
          type: 'online',
          duration: 30,
          notes: 'Focus on attention and following directions. Some challenges.',
          progress: 'Improved attention span by 5 minutes',
          rating: 3
        }
      ]
    }
  ];

  const conditions = ['all', 'Autism Spectrum Disorder', 'Speech Delay', 'Sensory Processing Disorder', 'ADHD', 'Language Delay'];

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.conditions.some(condition => condition.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCondition = filterCondition === 'all' || client.conditions.includes(filterCondition);
    
    return matchesSearch && matchesCondition;
  });

  const sortedClients = [...filteredClients].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.childName.localeCompare(b.childName);
      case 'progress':
        return b.progressScore - a.progressScore;
      case 'sessions':
        return b.completedSessions - a.completedSessions;
      case 'recent':
        return new Date(b.lastSession || 0).getTime() - new Date(a.lastSession || 0).getTime();
      default:
        return 0;
    }
  });

  const handleViewDetails = (client: Client) => {
    setModalClient(client);
    setShowClientModal(true);
  };

  const ClientDetailsModal = () => {
    if (!showClientModal || !modalClient) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Client Details</h2>
            <button
              onClick={() => setShowClientModal(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-8">
            {/* Client Header */}
            <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl border border-pink-200">
              <img
                src={modalClient.avatar}
                alt={modalClient.childName}
                className="w-24 h-24 rounded-full object-cover mr-6 border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 font-handwritten mb-2">{modalClient.childName}</h3>
                <p className="text-xl text-[#CB748E] font-semibold font-sans mb-1">Age {modalClient.age}</p>
                <p className="text-lg text-gray-700 font-sans">Parent: {modalClient.parentName}</p>
                <div className="flex items-center mt-3">
                  <div className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-4 py-2 rounded-full text-lg font-bold">
                    {modalClient.progressScore}% Progress
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 font-sans">
                      <Phone className="h-4 w-4 mr-3 text-gray-500" />
                      <span>{modalClient.parentPhone}</span>
                    </div>
                    <div className="flex items-center text-gray-700 font-sans">
                      <Mail className="h-4 w-4 mr-3 text-gray-500" />
                      <span>{modalClient.parentEmail}</span>
                    </div>
                    <div className="flex items-start text-gray-700 font-sans">
                      <MapPin className="h-4 w-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
                      <span>{modalClient.address}</span>
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
                    {modalClient.conditions.map((condition, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-pink-100 text-[#CB748E] text-sm rounded-full font-semibold font-sans border border-pink-200"
                      >
                        {condition}
                      </span>
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
                      <div className="text-2xl font-bold text-gray-800 font-handwritten">{modalClient.completedSessions}</div>
                      <div className="text-sm text-gray-600 font-sans">Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-pink-50 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-gray-800 font-handwritten">{modalClient.totalSessions - modalClient.completedSessions}</div>
                      <div className="text-sm text-gray-600 font-sans">Remaining</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600 font-sans">Progress</span>
                      <span className="text-sm font-bold text-gray-800 font-sans">{modalClient.progressScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-[#CB748E] to-[#698a60] h-4 rounded-full transition-all duration-500"
                        style={{ width: `${modalClient.progressScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Timeline */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Timeline
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 font-sans">
                      <User className="h-4 w-4 mr-3 text-gray-500" />
                      <span className="text-sm">
                        <strong>Joined:</strong> {new Date(modalClient.joinedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700 font-sans">
                      <Clock className="h-4 w-4 mr-3 text-gray-500" />
                      <span className="text-sm">
                        <strong>Last Session:</strong> {modalClient.lastSession ? new Date(modalClient.lastSession).toLocaleDateString() : 'No sessions yet'}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700 font-sans">
                      <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                      <span className="text-sm">
                        <strong>Next Session:</strong> {modalClient.nextSession ? new Date(modalClient.nextSession).toLocaleDateString() : 'Not scheduled'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Clinical Notes
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed font-sans">{modalClient.notes}</p>
                  </div>
                </div>

                {/* Recent Session History */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-handwritten flex items-center">
                    <Star className="h-5 w-5 mr-2 text-[#CB748E]" />
                    Recent Sessions
                  </h4>
                  <div className="space-y-3">
                    {modalClient.sessionHistory.slice(0, 3).map((session) => (
                      <div key={session.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold text-gray-800 font-sans text-sm">{new Date(session.date).toLocaleDateString()}</p>
                            <p className="text-xs text-gray-600 font-sans">
                              {session.type === 'home-visit' ? 'Home Visit' : 'Online'} • {session.duration} min
                            </p>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-gray-700 mb-1 font-sans"><strong>Progress:</strong> {session.progress}</p>
                        <p className="text-xs text-gray-700 font-sans"><strong>Notes:</strong> {session.notes}</p>
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
                <Phone className="h-5 w-5 mr-2" />
                Contact Parent
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ClientCard = ({ client }: { client: Client }) => (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg border border-white border-opacity-50 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute -top-4 -right-4 opacity-5 animate-float">
        <img src="/pattern/pattern pink.svg" alt="" className="w-32 h-32" />
      </div>
      
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <img
              src={client.avatar}
              alt={client.childName}
              className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-handwritten">{client.childName}</h3>
              <p className="text-[#CB748E] font-semibold font-sans">Age {client.age}</p>
              <p className="text-sm text-gray-600 font-sans">Parent: {client.parentName}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#698a60] font-handwritten">{client.progressScore}%</div>
            <div className="text-sm text-gray-600 font-sans">Progress</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center text-gray-700 font-sans">
              <Calendar className="h-4 w-4 mr-3 text-[#CB748E]" />
              <span className="text-sm">
                <strong>Next:</strong> {client.nextSession ? new Date(client.nextSession).toLocaleDateString() : 'Not scheduled'}
              </span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <Clock className="h-4 w-4 mr-3 text-[#698a60]" />
              <span className="text-sm">
                <strong>Sessions:</strong> {client.completedSessions}/{client.totalSessions}
              </span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <Phone className="h-4 w-4 mr-3 text-gray-500" />
              <span className="text-sm">{client.parentPhone}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-700 font-sans">
              <Mail className="h-4 w-4 mr-3 text-gray-500" />
              <span className="text-sm">{client.parentEmail}</span>
            </div>
            
            <div className="flex items-start text-gray-700 font-sans">
              <MapPin className="h-4 w-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
              <span className="text-sm">{client.address}</span>
            </div>
            
            <div className="flex items-center text-gray-700 font-sans">
              <User className="h-4 w-4 mr-3 text-gray-500" />
              <span className="text-sm">Since {new Date(client.joinedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2 font-handwritten">Conditions:</h4>
          <div className="flex flex-wrap gap-2">
            {client.conditions.map((condition, index) => (
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
              style={{ width: `${client.progressScore}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-700 font-sans">{client.notes}</p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => handleViewDetails(client)}
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
              <Users className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">My </span><span className="text-yellow-300">Clients</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4 font-sans">
              Manage your client relationships and track progress
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed font-sans">
              View detailed information about each child you work with, track their progress, and manage session history all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-10 border border-white border-opacity-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent bg-white shadow-lg font-sans"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
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
                  <option value="recent">Sort by Recent</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-[#CB748E]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Total Clients</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">{clients.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-[#698a60]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Avg Progress</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">
                  {Math.round(clients.reduce((acc, client) => acc + client.progressScore, 0) / clients.length)}%
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
                  {clients.reduce((acc, client) => acc + client.completedSessions, 0)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">This Week</p>
                <p className="text-2xl font-bold text-gray-800 font-handwritten">
                  {clients.filter(client => client.nextSession).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Grid */}
        {viewMode === 'thumbnail' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {sortedClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        ) : (
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg border border-white border-opacity-50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-100 to-green-100">
                  <tr>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Client</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Parent</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Conditions</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Progress</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Sessions</th>
                    <th className="px-6 py-5 text-left text-sm font-bold text-green-800 font-handwritten">Next Session</th>
                    <th className="px-6 py-5 text-center text-sm font-bold text-green-800 font-handwritten">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedClients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <img
                            src={client.avatar}
                            alt={client.childName}
                            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-lg"
                          />
                          <div>
                            <div className="text-sm font-bold text-gray-900 font-handwritten">{client.childName}</div>
                            <div className="text-sm text-gray-600 font-sans">Age {client.age}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div>
                          <div className="text-sm font-bold text-gray-900 font-sans">{client.parentName}</div>
                          <div className="text-sm text-gray-600 font-sans">{client.parentPhone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex flex-wrap gap-1">
                          {client.conditions.slice(0, 2).map((condition, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-pink-100 text-[#CB748E] text-xs rounded-full font-semibold font-sans"
                            >
                              {condition}
                            </span>
                          ))}
                          {client.conditions.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold font-sans">
                              +{client.conditions.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="w-16 h-3 bg-gray-200 rounded-full mr-3">
                            <div 
                              className="bg-gradient-to-r from-[#CB748E] to-[#698a60] h-3 rounded-full transition-all duration-500"
                              style={{ width: `${client.progressScore}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-gray-800 font-sans">{client.progressScore}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm text-gray-900 font-sans">{client.completedSessions}/{client.totalSessions}</span>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-sm text-gray-900 font-sans">
                          {client.nextSession ? new Date(client.nextSession).toLocaleDateString() : 'Not scheduled'}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex space-x-2 justify-center">
                          <button
                            onClick={() => handleViewDetails(client)}
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

        {sortedClients.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto border border-white border-opacity-50 shadow-xl">
              <Users className="h-20 w-20 text-[#CB748E] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-handwritten">No clients found</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Try adjusting your search or filter criteria to see more results.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterCondition('all');
                }}
                className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Client Details Modal */}
      <ClientDetailsModal />
    </div>
  );
}