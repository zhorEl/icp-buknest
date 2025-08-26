import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Enhanced database types based on comprehensive schema
export interface UserProfile {
  id: string
  role: 'parent' | 'professional' | 'admin'
  full_name: string
  email: string
  phone_number?: string
  address?: string
  avatar_url?: string
  is_verified: boolean
  is_active?: boolean
  date_of_birth?: string
  emergency_contact?: string
  preferred_language?: string
  timezone?: string
  notification_preferences?: any
  created_at: string
  updated_at: string
}

export interface ProfessionalProfile {
  id: string
  title: string
  profession?: string
  specializations: string[]
  hourly_rate: number
  experience_years: number
  bio?: string
  credentials: string[]
  languages: string[]
  education?: string
  certifications: string[]
  availability_days: string[]
  availability_hours?: any
  service_areas: string[]
  max_travel_distance?: number
  is_verified: boolean
  documents_uploaded: boolean
  verification_status?: 'pending' | 'approved' | 'rejected' | 'under_review'
  verification_notes?: string
  rating: number
  review_count: number
  total_sessions: number
  completed_sessions: number
  response_rate: number
  completion_rate: number
  average_response_time?: number
  is_accepting_new_clients?: boolean
  consultation_fee?: number
  cancellation_policy?: string
  created_at: string
  updated_at: string
}

export interface Child {
  id: string
  parent_id: string
  name: string
  age: number
  date_of_birth: string
  gender?: string
  conditions: string[]
  favorite_activities: string[]
  communication_style?: string
  behavioral_triggers?: string
  calming_strategies?: string
  current_goals?: string
  current_professionals?: string
  emergency_contact?: string
  school_info?: string
  medical_history?: string
  allergies: string[]
  medications: string[]
  notes?: string
  avatar_url?: string
  progress_score: number
  total_sessions: number
  completed_sessions: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  professional_id: string
  name: string
  description: string
  rate: number
  duration: number
  session_type: ('home-visit' | 'online')[]
  max_sessions: number
  category?: string
  age_range?: string
  prerequisites?: string
  materials_needed: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  parent_id: string
  professional_id: string
  child_id: string
  service_id?: string
  session_date: string
  session_time: string
  duration: number
  session_type: 'home_visit' | 'online'
  status: 'pending' | 'accepted' | 'confirmed' | 'completed' | 'cancelled' | 'declined'
  notes?: string
  special_requirements?: string
  address?: string
  meeting_link?: string
  rate: number
  total_amount: number
  payment_status?: string
  payment_method?: string
  cancellation_reason?: string
  rescheduled_from?: string
  requested_at: string
  responded_at?: string
  confirmed_at?: string
  cancelled_at?: string
  created_at: string
  updated_at: string
}

export interface Session {
  id: string
  booking_id: string
  parent_id: string
  professional_id: string
  child_id: string
  session_date: string
  session_time: string
  duration: number
  session_type: 'home_visit' | 'online'
  status: 'pending' | 'accepted' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled'
  notes?: string
  preparation_notes?: string
  address?: string
  meeting_link?: string
  recording_url?: string
  materials_used: string[]
  homework_assigned?: string
  next_session_recommendations?: string
  started_at?: string
  completed_at?: string
  actual_duration?: number
  created_at: string
  updated_at: string
}

export interface Assessment {
  id: string
  child_id: string
  professional_id?: string
  type: 'ai-preassessment' | 'professional'
  title: string
  concerns: string[]
  recommendations: string[]
  severity?: 'mild' | 'moderate' | 'severe'
  suggested_professionals: string[]
  goals: string[]
  notes?: string
  assessment_data: any
  score?: number
  follow_up_required?: boolean
  follow_up_date?: string
  is_completed?: boolean
  created_at: string
  updated_at: string
}

export interface SessionReport {
  id: string
  session_id: string
  professional_id: string
  child_id: string
  progress_rating?: number
  progress_notes?: string
  activities_performed: string[]
  goals_worked_on: string[]
  goals_achieved: string[]
  challenges_encountered?: string
  homework_assigned?: string
  next_session_recommendations?: string
  parent_feedback?: string
  child_engagement_level?: number
  session_effectiveness?: number
  attachments: string[]
  is_shared_with_parent?: boolean
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  parent_id: string
  professional_id: string
  child_id: string
  session_id?: string
  rating: number
  review_text?: string
  communication_rating?: number
  punctuality_rating?: number
  effectiveness_rating?: number
  would_recommend?: boolean
  is_anonymous: boolean
  is_published: boolean
  professional_response?: string
  helpful_votes?: number
  created_at: string
  updated_at: string
}

export interface Message {
  id: string
  sender_id: string
  recipient_id: string
  child_id?: string
  booking_id?: string
  session_id?: string
  subject?: string
  message_text: string
  message_type?: string
  priority?: string
  attachments: string[]
  is_read: boolean
  is_system_message: boolean
  read_at?: string
  created_at: string
  updated_at: string
}

export interface VerificationDocument {
  id: string
  professional_id: string
  document_type: 'government_id' | 'professional_license' | 'certification' | 'selfie_with_id' | 'background_check' | 'other'
  file_name: string
  file_url: string
  file_size?: number
  mime_type?: string
  verification_status: 'pending' | 'approved' | 'rejected' | 'under_review'
  verified_by?: string
  verified_at?: string
  verification_notes?: string
  expiry_date?: string
  is_required?: boolean
  created_at: string
  updated_at: string
}

export interface Milestone {
  id: string
  child_id: string
  professional_id?: string
  title: string
  description?: string
  category?: string
  target_date?: string
  achieved_date?: string
  is_achieved: boolean
  progress_percentage: number
  notes?: string
  evidence_files: string[]
  created_at: string
  updated_at: string
}

export interface Availability {
  id: string
  professional_id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_available: boolean
  max_sessions_per_day?: number
  break_duration?: number
  created_at: string
  updated_at: string
}
// Auth helper functions
export const signUp = async (email: string, password: string, userData: any) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Database helper functions
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  return { data, error }
}

export const getProfessionalProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('professional_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  return { data, error }
}

export const getChildren = async (parentId: string) => {
  const { data, error } = await supabase
    .from('children')
    .select('*')
    .eq('parent_id', parentId)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const getProfessionals = async (filters?: {
  specializations?: string[]
  location?: string
  rating?: number
}) => {
  let query = supabase
    .from('professional_profiles')
    .select(`
      *,
      user_profiles!inner(full_name, avatar_url, address, phone_number, email)
    `)
    .eq('is_verified', true)
  
  if (filters?.specializations?.length) {
    query = query.overlaps('specializations', filters.specializations)
  }
  
  if (filters?.rating) {
    query = query.gte('rating', filters.rating)
  }
  
  const { data, error } = await query.order('rating', { ascending: false })
  
  return { data, error }
}

export const getBookings = async (userId: string, role: 'parent' | 'professional') => {
  const column = role === 'parent' ? 'parent_id' : 'professional_id'
  
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      children(name, age, conditions),
      parent:user_profiles!parent_id(full_name, phone_number, email),
      professional:user_profiles!professional_id(full_name, avatar_url, phone_number, email)
    `)
    .eq(column, userId)
    .order('session_date', { ascending: true })
  
  return { data, error }
}

export const createBooking = async (bookingData: Partial<Booking>) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert(bookingData)
    .select()
    .single()
  
  return { data, error }
}

export const updateBookingStatus = async (bookingId: string, status: Booking['status']) => {
  const { data, error } = await supabase
    .from('bookings')
    .update({ 
      status,
      responded_at: status !== 'pending' ? new Date().toISOString() : undefined,
      confirmed_at: status === 'confirmed' ? new Date().toISOString() : undefined
    })
    .eq('id', bookingId)
    .select()
    .single()
  
  return { data, error }
}

export const createAssessment = async (assessmentData: Partial<Assessment>) => {
  const { data, error } = await supabase
    .from('assessments')
    .insert(assessmentData)
    .select()
    .single()
  
  return { data, error }
}

export const getAssessments = async (childId: string) => {
  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .eq('child_id', childId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}
// Additional helper functions for new tables
export const createChild = async (childData: Partial<Child>) => {
  const { data, error } = await supabase
    .from('children')
    .insert(childData)
    .select()
    .single()
  
  return { data, error }
}

export const updateChild = async (childId: string, childData: Partial<Child>) => {
  const { data, error } = await supabase
    .from('children')
    .update(childData)
    .eq('id', childId)
    .select()
    .single()
  
  return { data, error }
}

export const createService = async (serviceData: Partial<Service>) => {
  const { data, error } = await supabase
    .from('services')
    .insert(serviceData)
    .select()
    .single()
  
  return { data, error }
}

export const getServices = async (professionalId: string) => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('professional_id', professionalId)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const createSessionReport = async (reportData: Partial<SessionReport>) => {
  const { data, error } = await supabase
    .from('session_reports')
    .insert(reportData)
    .select()
    .single()
  
  return { data, error }
}

export const getSessionReports = async (childId: string) => {
  const { data, error } = await supabase
    .from('session_reports')
    .select(`
      *,
      sessions(session_date, session_time),
      professional:user_profiles!professional_id(full_name)
    `)
    .eq('child_id', childId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const createReview = async (reviewData: Partial<Review>) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert(reviewData)
    .select()
    .single()
  
  return { data, error }
}

export const getReviews = async (professionalId: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      parent:user_profiles!parent_id(full_name),
      child:children!child_id(name)
    `)
    .eq('professional_id', professionalId)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const createMessage = async (messageData: Partial<Message>) => {
  const { data, error } = await supabase
    .from('messages')
    .insert(messageData)
    .select()
    .single()
  
  return { data, error }
}

export const getMessages = async (userId: string) => {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      sender:user_profiles!sender_id(full_name, avatar_url),
      recipient:user_profiles!recipient_id(full_name, avatar_url)
    `)
    .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const getMilestones = async (childId: string) => {
  const { data, error } = await supabase
    .from('milestones')
    .select('*')
    .eq('child_id', childId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const createMilestone = async (milestoneData: Partial<Milestone>) => {
  const { data, error } = await supabase
    .from('milestones')
    .insert(milestoneData)
    .select()
    .single()
  
  return { data, error }
}