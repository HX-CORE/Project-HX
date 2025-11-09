'use client'

import { useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'

export const useAutoLogout = () => {
  const { data: session } = useSession()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    if (!session?.expires) return

    const expiresAt = new Date(session.expires).getTime()
    const now = Date.now()
    const timeLeft = expiresAt - now

    if (timeLeft <= 0) {
      signOut()
      return
    }

    timerRef.current = setTimeout(() => {
      signOut()
    }, timeLeft)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [session])
}
