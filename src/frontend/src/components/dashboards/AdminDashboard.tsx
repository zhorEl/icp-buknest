import React, { useState } from 'react';
import { Users, UserCheck, AlertTriangle, DollarSign, TrendingUp, Calendar, Shield, Settings, FileText, Bell, Activity, Database, Server, Zap, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

interface AdminDashboardProps {
  user: any;
  onPageChange: (page: string) => void;
}

export default function AdminDashboard({ user, onPageChange }: AdminDashboardProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const stats = {
    totalUsers: 2847,
    activeProfessionals: 156,
    pendingVerifications: 12,
    totalSessions: 8934,
    monthlyRevenue: 45670,
    platformFee: 6850,
    newUsersThisWeek: 47,
    systemUptime: 99.9,
    avgResponseTime: 245
  };

  const pendingVerifications = [
    {
      id: '1',
      name: 'Dr. Jennifer Smith',
      type: 'Speech-Language Pathologist',
      submittedDate: '2024-01-10',
      documents: ['License', 'Certification', 'Background Check'],
      status: 'pending',
      email: 'jennifer.smith@email.com',
      experience: '8 years'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      type: 'Occupational Therapist',
      submittedDate: '2024-01-12',
      documents: ['License', 'Certification'],
      status: 'review',
      email: 'michael.rodriguez@email.com',
      experience: '5 years'
    },
    {
      id: '3',
      name: 'Dr. Lisa Chen',
      type: 'Developmental Pediatrician',
      submittedDate: '2024-01-13',
      documents: ['Medical License', 'Board Certification', 'Background Check'],
      status: 'pending',
      email: 'lisa.chen@email.com',
      experience: '12 years'
    }
  ];

  const recentReports = [
    {
      id: '1',
      type: 'User Complaint',
      description: 'Session cancellation issue',
      reporter: 'Sarah Johnson',
      date: '2024-01-14',
      priority: 'high'
    },
    {
      id: '4',
      type: 'Technical Issue',
      description: 'Video call connection problems',
      reporter: 'System Alert',
      date: '2024-01-14',
      priority: 'high'
    },
    {
      id: '2',
      type: 'Payment Issue',
      description: 'Failed payment processing',
      reporter: 'System',
      date: '2024-01-14',
      priority: 'medium'
    },
    {
      id: '3',
      type: 'Professional Inquiry',
      description: 'Profile verification question',
      reporter: 'Dr. Michael Chen',
      date: '2024-01-13',
      priority: 'low'
    }
  ];

  const systemAlerts = [
    {
      id: '1',
      type: 'warning',
      message: 'Server response time increased by 15%',
      time: '2 hours ago'
    },
    {
      id: '2',
      type: 'info',
      message: 'Scheduled maintenance tonight at 2 AM',
      time: '4 hours ago'
    },
    {
      id: '3',
      type: 'success',
      message: 'Database backup completed successfully',
      time: '6 hours ago'
    }
  ];

  const userGrowth = [
    { month: 'Oct', users: 2156, professionals: 98 },
    { month: 'Nov', users: 2543, professionals: 124 },
    { month: 'Dec', users: 2847, professionals: 156 }
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'user_signup',
      description: 'New parent registered: Maria Santos',
      time: '5 minutes ago',
      icon: Users
    },
    {
      id: '2',
      type: 'professional_verified',
      description: 'Dr. John Martinez verified successfully',
      time: '1 hour ago',
      icon: UserCheck
    },
    {
      id: '3',
      type: 'session_completed',
      description: '15 therapy sessions completed today',
      time: '2 hours ago',
      icon: Calendar
    },
    {
      id: '4',
      type: 'payment_processed',
      description: '₱12,450 in payments processed',
      time: '3 hours ago',
      icon: DollarSign
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'success':
        return <UserCheck className="h-4 w-4 text-green-600" />;
      default:
        return <Bell className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#d698ab] via-[#CB748E] to-[#698a60] rounded-3xl p-8 text-white mb-8 font-handwritten">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-white text-opacity-90 text-lg font-sans">Platform overview and management tools</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                <img src="/icon.svg" alt="BukNEST Logo" className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-[#CB748E]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Total Users</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalUsers.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-[#698a60]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Professionals</p>
                <p className="text-2xl font-bold text-gray-800">{stats.activeProfessionals}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Pending</p>
                <p className="text-2xl font-bold text-gray-800">{stats.pendingVerifications}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-[#CB748E]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Sessions</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalSessions.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-[#698a60]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Revenue</p>
                <p className="text-2xl font-bold text-gray-800">₱{stats.monthlyRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">New Users</p>
                <p className="text-2xl font-bold text-gray-800">{stats.newUsersThisWeek}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-gray-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Uptime</p>
                <p className="text-2xl font-bold text-gray-800">{stats.systemUptime}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 font-handwritten">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 font-sans">Response</p>
                <p className="text-2xl font-bold text-gray-800">{stats.avgResponseTime}ms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-10">
            {/* Pending Verifications */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Pending Verifications</h3>
                <button className="text-[#CB748E] hover:text-[#d698ab] font-bold font-sans">
                  View All
                </button>
              </div>
              
              <div className="space-y-6">
                {pendingVerifications.map((verification) => (
                  <div key={verification.id} className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-gray-800">{verification.name}</h4>
                        <p className="text-gray-600 text-sm font-semibold font-sans">{verification.type}</p>
                        <p className="text-xs text-gray-600 font-sans">{verification.email}</p>
                        <p className="text-xs text-gray-600 font-sans">Experience: {verification.experience}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        verification.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-800 font-semibold font-sans' 
                          : 'bg-pink-100 text-[#CB748E] font-semibold font-sans'
                      }`}>
                        {verification.status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-3 font-semibold font-sans">Submitted: {new Date(verification.submittedDate).toLocaleDateString()}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {verification.documents.map((doc, index) => (
                          <span key={index} className="px-2 py-1 bg-pink-100 text-[#CB748E] text-xs rounded-full font-semibold font-sans">
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-[#698a60] text-white text-sm rounded-full hover:bg-green-600 transition-colors font-semibold flex items-center font-sans">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors font-semibold flex items-center font-sans">
                        <XCircle className="h-3 w-3 mr-1" />
                        Reject
                      </button>
                      <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors font-semibold flex items-center font-sans">
                        <Eye className="h-3 w-3 mr-1" />
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Growth Chart */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">User Growth</h3>
              
              <div className="space-y-6">
                {userGrowth.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div>
                      <h4 className="font-bold text-gray-800">{month.month}</h4>
                      <p className="text-sm text-gray-600 font-sans">Users: {month.users.toLocaleString()}</p>
                      <p className="text-sm text-gray-600 font-sans">Professionals: {month.professionals}</p>
                    </div>
                    <div className="text-right">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-[#CB748E] rounded-full"
                          style={{ width: `${(month.users / 3000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reports & Issues */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Recent Issues</h3>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="border border-gray-300 rounded-xl px-3 py-1 text-sm font-semibold font-sans"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>
              </div>
              
              <div className="space-y-6">
                {recentReports.map((report) => (
                  <div key={report.id} className={`border rounded-2xl p-6 ${getPriorityColor(report.priority)}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800">{report.type}</h4>
                        <p className="text-sm text-gray-700 font-semibold font-sans">{report.description}</p>
                      </div>
                      <span className="text-xs text-gray-600 font-semibold font-sans">{new Date(report.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-700 font-semibold font-sans">Reported by: {report.reporter}</p>
                      <span className={`px-2 py-1 text-xs rounded-full font-bold font-sans ${getPriorityColor(report.priority)}`}>
                        {report.priority} priority
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* System Alerts */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">System Status</h3>
              
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start p-4 rounded-2xl bg-gray-50">
                    <div className="mr-3 mt-1">
                      {getAlertIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-semibold font-sans">{alert.message}</p>
                      <p className="text-xs text-gray-600 mt-2 font-sans">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h3>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start p-4 rounded-2xl bg-gray-50">
                      <div className="mr-3 mt-1">
                        <Icon className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 font-semibold font-sans">{activity.description}</p>
                        <p className="text-xs text-gray-600 mt-2 font-sans">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-4 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center font-sans">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </button>
                
                <button className="w-full bg-gray-600 text-white px-4 py-3 rounded-2xl font-bold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center font-sans">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Review Professionals
                </button>
                
                <button className="w-full bg-[#698a60] text-white px-4 py-3 rounded-2xl font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center font-sans">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Reports
                </button>
                
                <button className="w-full bg-white border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center font-sans">
                  <Settings className="h-4 w-4 mr-2" />
                  Platform Settings
                </button>
                
                <button className="w-full bg-white border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center font-sans">
                  <Database className="h-4 w-4 mr-2" />
                  System Backup
                </button>
              </div>
            </div>

            {/* Platform Health */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 font-handwritten">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Platform Health</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Server className="h-4 w-4 text-gray-600 mr-2" />
                    <span className="text-sm text-gray-700 font-semibold font-sans">Server Uptime</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 font-sans">99.9%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 text-gray-600 mr-2" />
                    <span className="text-sm text-gray-700 font-semibold font-sans">Response Time</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 font-sans">245ms</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Activity className="h-4 w-4 text-gray-600 mr-2" />
                    <span className="text-sm text-gray-700 font-semibold font-sans">Active Sessions</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 font-sans">1,247</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-gray-600 mr-2" />
                    <span className="text-sm text-gray-700 font-semibold font-sans">Error Rate</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 font-sans">0.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}