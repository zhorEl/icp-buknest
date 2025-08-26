import { useState, useEffect } from 'react'
import { getChildren, Child } from '../lib/supabase'

export const useChildren = (parentId: string | null) => {
  const [children, setChildren] = useState<Child[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!parentId) {
      setChildren([])
      setLoading(false)
      return
    }

    const fetchChildren = async () => {
      try {
        setLoading(true)
        const { data, error } = await getChildren(parentId)
        
        if (error) {
          setError(error.message)
          return
        }
        
        setChildren(data || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchChildren()
  }, [parentId])

  return { children, loading, error, refetch: () => {
    if (parentId) {
      const fetchChildren = async () => {
        const { data } = await getChildren(parentId)
        setChildren(data || [])
      }
      fetchChildren()
    }
  }}
}