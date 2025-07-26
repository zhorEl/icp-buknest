export interface Professional {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  rating: number;
  reviewCount: number;
  experience: number;
  location: string;
  avatar: string;
  hourlyRate: number;
  availability: string[];
  bio: string;
  credentials: string[];
  services?: {
    id: string;
    name: string;
    description: string;
    duration: number;
    rate: number;
    type: 'consultation' | 'service';
  }[];
}

export interface Child {
  id: string;
  name: string;
  age: number;
  dateOfBirth: string;
  gender?: string;
  conditions: string[];
  favoriteActivities?: string[];
  communicationStyle?: string;
  behavioralTriggers?: string;
  calmingStrategies?: string;
  currentGoals?: string;
  currentProfessionals?: string;
  emergencyContact?: string;
  schoolInfo?: string;
  notes?: string;
  assessmentHistory: Assessment[];
  sessions: Session[];
  avatar?: string;
  progressScore?: number;
  totalSessions?: number;
  completedSessions?: number;
  joinedDate?: string;
}

export interface Assessment {
  id: string;
  date: string;
  type: 'ai-preassessment' | 'professional';
  results: {
    concerns: string[];
    recommendations: string[];
    severity: 'mild' | 'moderate' | 'severe';
    suggestedProfessionals: string[];
  };
}

export interface Session {
  id: string;
  professionalId: string;
  childId: string;
  date: string;
  time: string;
  type: 'home-visit' | 'online';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'parent' | 'professional' | 'admin';
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Parent extends User {
  role: 'parent';
  children: Child[];
  phoneNumber?: string;
  address?: string;
}

export interface ProfessionalUser extends User {
  role: 'professional';
  professionalProfile: Professional;
  isVerified: boolean;
  documentsUploaded: boolean;
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}