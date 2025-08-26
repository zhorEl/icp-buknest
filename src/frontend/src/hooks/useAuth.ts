import { useState, useEffect } from 'react'
import { supabase, getCurrentUser, getUserProfile, UserProfile } from '../lib/supabase'

import type { User } from '@supabase/supabase-js'

interface AuthState {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  error: string | null
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const user = await getCurrentUser()
        
        if (user) {
          const { data: profile, error } = await getUserProfile(user.id)
          if (error) {
            console.error('Error fetching user profile:', error)
            setAuthState(prev => ({ ...prev, error: error.message, loading: false }))
            return
          }
          
          setAuthState({
            user,
            profile,
            loading: false,
            error: null
          })
        } else {
          setAuthState({
            user: null,
            profile: null,
            loading: false,
            error: null
          })
        }
      } catch (error) {
        console.error('Error getting initial session:', error)
        setAuthState(prev => ({ 
          ...prev, 
          error: error instanceof Error ? error.message : 'Unknown error',
          loading: false 
        }))
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const { data: profile, error } = await getUserProfile(session.user.id)
          if (error) {
            console.error('Error fetching user profile:', error)
            setAuthState(prev => ({ ...prev, error: error.message }))
            return
          }
          
          setAuthState({
            user: session.user,
            profile,
            loading: false,
            error: null
          })
        } else {
          setAuthState({
            user: null,
            profile: null,
            loading: false,
            error: null
          })
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return authState
}