'use client'

import useAuthority from './useAuthority'
import useUserAuthority from './useUserAuthority'

/**
 * Custom hook that combines user authority retrieval with authority checking.
 * This is a convenience hook for components that need to check user permissions.
 * 
 * @param requiredAuthorities - Array of authorities required for access
 * @param emptyCheck - Whether to return false when authorities are empty (default: false)
 * @returns Object containing user authority array and boolean indicating if user has required permissions
 */
export const useAuthorityCheck = (
    requiredAuthorities: string[] = [],
    emptyCheck: boolean = false
) => {
    const userAuthority = useUserAuthority()
    const hasPermission = useAuthority(userAuthority, requiredAuthorities, emptyCheck)
    
    return {
        userAuthority,
        hasPermission
    }
}

export default useAuthorityCheck