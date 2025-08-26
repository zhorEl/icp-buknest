import React, { createContext, useContext, ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import type { User } from '@supabase/supabase-js'
import type { UserProfile } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}