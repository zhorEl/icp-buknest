import { useState, useEffect } from 'react'
import { getBookings, Booking } from '../lib/supabase'

export const useBookings = (userId: string | null, role: 'parent' | 'professional' | null) => {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId || !role || role === 'admin') {
      setBookings([])
      setLoading(false)
      return
    }

    const fetchBookings = async () => {
      try {
        setLoading(true)
        const { data, error } = await getBookings(userId, role)

        if (error) {
          setError(error.message)
          return
        }

        setBookings(data || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [userId, role])

  return { 
    bookings, 
    loading, 
    error, 
    refetch: () => {
      if (userId && role && role !== 'admin') {
        const fetchBookings = async () => {
          const { data } = await getBookings(userId, role)
          setBookings(data || [])
        }
        fetchBookings()
      }
    }
  }
}