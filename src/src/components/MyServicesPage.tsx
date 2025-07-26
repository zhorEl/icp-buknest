import React, { useState } from 'react';
import { Settings, DollarSign, Clock, Users, Plus, Edit, Trash2, Save, X, Grid, List } from 'lucide-react';

interface MyServicesPageProps {
  user: any;
  onPageChange: (page: string) => void;
}

interface Service {
  id: string;
  name: string;
  description: string;
  rate: number;
  duration: number;
  sessionType: 'home-visit' | 'online' | 'both';
  maxSessions: number;
  isActive: boolean;
}

export default function MyServicesPage({ user, onPageChange }: MyServicesPageProps) {
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'Speech Therapy Assessment',
      description: 'Comprehensive speech and language evaluation for children',
      rate: 1500,
      duration: 90,
      sessionType: 'both',
      maxSessions: 1,
      isActive: true
    },
    {
      id: '2',
      name: 'Individual Speech Therapy',
      description: 'One-on-one speech therapy sessions focused on articulation and language development',
      rate: 1200,
      duration: 60,
      sessionType: 'both',
      maxSessions: 20,
      isActive: true
    },
    {
      id: '3',
      name: 'Group Speech Therapy',
      description: 'Small group sessions for social communication skills',
      rate: 800,
      duration: 45,
      sessionType: 'home-visit',
      maxSessions: 12,
      isActive: true
    }
  ]);

  const [editingService, setEditingService] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [viewMode, setViewMode] = useState<'thumbnail' | 'table'>('thumbnail');
  const [newService, setNewService] = useState<Partial<Service>>({
    name: '',
    description: '',
    rate: 0,
    duration: 60,
    sessionType: 'both',
    maxSessions: 10,
    isActive: true
  });

  const handleEditService = (serviceId: string) => {
    setEditingService(serviceId);
  };

  const handleSaveService = (serviceId: string, updatedData: Partial<Service>) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId ? { ...service, ...updatedData } : service
    ));
    setEditingService(null);
  };

  const handleDeleteService = (serviceId: string) => {
    setServices(prev => prev.filter(service => service.id !== serviceId));
  };

  const handleAddService = () => {
    if (!newService.name || !newService.description || !newService.rate) {
      alert('Please fill in all required fields');
      return;
    }

    const service: Service = {
      id: Date.now().toString(),
      name: newService.name!,
      description: newService.description!,
      rate: newService.rate!,
      duration: newService.duration || 60,
      sessionType: newService.sessionType || 'both',
      maxSessions: newService.maxSessions || 10,
      isActive: newService.isActive !== false
    };

    setServices(prev => [...prev, service]);
    setNewService({
      name: '',
      description: '',
      rate: 0,
      duration: 60,
      sessionType: 'both',
      maxSessions: 10,
      isActive: true
    });
    setShowAddForm(false);
  };

  const ServiceCard = ({ service }: { service: Service }) => {
    const [editData, setEditData] = useState(service);
    const isEditing = editingService === service.id;

    return (
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 relative">
        <div className="absolute -top-4 -right-4 opacity-5 animate-float">
          <img src="/pattern/pattern pink.svg" alt="" className="w-32 h-32" />
        </div>
        
        <div className="relative">
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full text-xl font-bold border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-handwritten"
              />
              <textarea
                value={editData.description}
                onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Rate (₱)</label>
                  <input
                    type="number"
                    value={editData.rate}
                    onChange={(e) => setEditData(prev => ({ ...prev, rate: parseInt(e.target.value) }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Duration (min)</label>
                  <input
                    type="number"
                    value={editData.duration}
                    onChange={(e) => setEditData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Session Type</label>
                  <select
                    value={editData.sessionType}
                    onChange={(e) => setEditData(prev => ({ ...prev, sessionType: e.target.value as any }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  >
                    <option value="both">Both</option>
                    <option value="home-visit">Home Visit Only</option>
                    <option value="online">Online Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Max Sessions</label>
                  <input
                    type="number"
                    value={editData.maxSessions}
                    onChange={(e) => setEditData(prev => ({ ...prev, maxSessions: parseInt(e.target.value) }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => handleSaveService(service.id, editData)}
                  className="px-4 py-2 bg-[#698a60] text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center font-sans"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </button>
                <button
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 border border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center font-sans"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800 font-handwritten">{service.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold font-sans ${
                    service.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {service.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed font-sans">{service.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 font-sans">
                    <DollarSign className="h-5 w-5 mr-3 text-[#698a60]" />
                    <span className="font-semibold">₱{service.rate} per session</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 font-sans">
                    <Clock className="h-5 w-5 mr-3 text-[#CB748E]" />
                    <span className="font-semibold">{service.duration} minutes</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700 font-sans">
                    <Users className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="font-semibold">Max {service.maxSessions} sessions</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 font-sans">
                    <Settings className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="font-semibold capitalize">{service.sessionType.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => handleEditService(service.id)}
                  className="px-4 py-2 bg-[#CB748E] text-white rounded-xl font-bold hover:bg-[#d698ab] transition-colors flex items-center font-sans"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-colors flex items-center font-sans"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
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
              <Settings className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-handwritten">
                <span className="text-white">My </span><span className="text-yellow-300">Services</span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4 font-sans">
              Manage your therapy services and pricing
            </p>
            <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed font-sans">
              Set up your service offerings, rates, and session details to help families find the right support for their children.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Service Button */}
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-8 py-4 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-handwritten"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Service
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

        {/* Add Service Form */}
        {showAddForm && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-handwritten">Add New Service</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Service Name *</label>
                <input
                  type="text"
                  value={newService.name || ''}
                  onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  placeholder="e.g., Individual Speech Therapy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Description *</label>
                <textarea
                  value={newService.description || ''}
                  onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent resize-none font-sans"
                  placeholder="Describe your service and what it includes..."
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Rate (₱) *</label>
                  <input
                    type="number"
                    value={newService.rate || ''}
                    onChange={(e) => setNewService(prev => ({ ...prev, rate: parseInt(e.target.value) }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                    placeholder="1200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Duration (minutes)</label>
                  <input
                    type="number"
                    value={newService.duration || 60}
                    onChange={(e) => setNewService(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Session Type</label>
                  <select
                    value={newService.sessionType || 'both'}
                    onChange={(e) => setNewService(prev => ({ ...prev, sessionType: e.target.value as any }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  >
                    <option value="both">Both Home Visit & Online</option>
                    <option value="home-visit">Home Visit Only</option>
                    <option value="online">Online Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 font-sans">Max Sessions</label>
                  <input
                    type="number"
                    value={newService.maxSessions || 10}
                    onChange={(e) => setNewService(prev => ({ ...prev, maxSessions: parseInt(e.target.value) }))}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CB748E] focus:border-transparent font-sans"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleAddService}
                  className="px-6 py-3 bg-[#698a60] text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center font-sans"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Add Service
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center font-sans"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        {viewMode === 'thumbnail' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-100 to-green-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Max Sessions</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-green-800 font-handwritten">Status</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-green-800 font-handwritten">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {services.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-bold text-gray-900 font-handwritten">{service.name}</div>
                          <div className="text-sm text-gray-600 font-sans max-w-xs truncate">{service.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900 font-sans">₱{service.rate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 font-sans">{service.duration} min</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 font-sans capitalize">{service.sessionType.replace('-', ' ')}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 font-sans">{service.maxSessions}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold font-sans ${
                          service.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {service.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2 justify-center">
                          <button
                            onClick={() => handleEditService(service.id)}
                            className="p-2 bg-[#CB748E] text-white rounded-lg hover:bg-[#d698ab] transition-colors"
                          >
                            <Edit className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleDeleteService(service.id)}
                            className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="h-3 w-3" />
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

        {services.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto border border-white border-opacity-50 shadow-xl">
              <Settings className="h-20 w-20 text-[#CB748E] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-handwritten">No services yet</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Add your first service to start accepting bookings from families.
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white px-6 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-handwritten"
              >
                Add Service
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}