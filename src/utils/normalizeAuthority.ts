/**
 * Normalizes user authority to ensure it's always an array of strings.
 * Handles cases where authority might be undefined, null, a single string, or already an array.
 * 
 * @param authority - The user's authority which can be string[], string, undefined, or null
 * @returns Always returns an array of strings, empty array if no valid authority is provided
 */
export function normalizeAuthority(authority: string[] | string | undefined | null): string[] {
    if (!authority) {
        return []
    }
    
    if (Array.isArray(authority)) {
        return authority.filter(Boolean) // Remove any falsy values like empty strings
    }
    
    if (typeof authority === 'string' && authority.trim()) {
        return [authority.trim()]
    }
    
    return []
}