'use client'

import useCurrentSession from './useCurrentSession'
import { normalizeAuthority } from '../normalizeAuthority'

/**
 * Custom hook that provides normalized user authority from the current session.
 * Returns an empty array if no session exists or user has no authority.
 * 
 * @returns Array of user authority strings, guaranteed to be an array
 */
export const useUserAuthority = (): string[] => {
    const { session } = useCurrentSession() 
    
    return normalizeAuthority(session?.user?.authority)
}

export default useUserAuthority