/**
 * Utility functions for schedule form handling
 */

import dayjs from 'dayjs'
import 'dayjs/locale/de'
import localizedFormat from 'dayjs/plugin/localizedFormat'

// Configure dayjs for German locale
dayjs.extend(localizedFormat)
dayjs.locale('de')

/**
 * Generates a unique ID for schedule events
 * @returns A unique string ID prefixed with 'schedule-event-'
 */
export const generateId = (): string => 
    `schedule-event-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

/**
 * Converts a time number value to a Date object
 * @param timeValue - Time as a number (e.g., 14.5 for 14:30)
 * @returns Date object or null if timeValue is undefined
 */
export const timeToDate = (timeValue: number | undefined): Date | null => {
    if (timeValue === undefined) return null
    const date = new Date()
    date.setHours(Math.floor(timeValue))
    date.setMinutes(Math.round((timeValue % 1) * 60))
    date.setSeconds(0, 0)
    return date
}

/**
 * Converts a Date object to a time number value
 * @param date - Date object to convert
 * @returns Time as a number or undefined if date is null
 */
export const dateToTime = (date: Date | null): number | undefined => {
    if (!date) return undefined
    return date.getHours() + date.getMinutes() / 60
}

/**
 * Formats a time number value to a human-readable string
 * @param timeValue - Time as a number (e.g., 14.5 for 14:30)
 * @returns Formatted time string (e.g., "14:30") or fallback message
 */
export const formatTime = (timeValue: number | undefined): string => {
    if (timeValue === undefined) return 'Nicht ausgewählt'
    const hours = Math.floor(timeValue).toString().padStart(2, '0')
    const minutes = Math.round((timeValue % 1) * 60).toString().padStart(2, '0')
    return `${hours}:${minutes}`
}

/**
 * Formats a date string to a localized German date
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted German date string or original string if parsing fails
 */
export const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return 'Nicht ausgewählt'
    
    try {
        if (typeof window !== 'undefined') {
            return new Date(dateString).toLocaleDateString('de-DE')
        }
        return dateString
    } catch {
        return dateString
    }
}

/**
 * Formats duration in minutes to a human-readable string
 * @param duration - Duration in minutes
 * @returns Formatted duration string
 */
export const formatDuration = (duration: number | undefined): string => {
    if (duration === undefined) return 'Nicht angegeben'
    
    if (duration >= 60) {
        const hours = Math.floor(duration / 60)
        const minutes = duration % 60
        if (minutes === 0) {
            return `${hours} ${hours === 1 ? 'Stunde' : 'Stunden'}`
        }
        return `${hours}h ${minutes}min`
    }
    
    return `${duration} Minuten`
}

/**
 * Validates if a string is a valid date in YYYY-MM-DD format
 * @param dateString - Date string to validate
 * @returns true if valid, false otherwise
 */
export const isValidDateString = (dateString: string): boolean => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false
    const date = new Date(dateString)
    return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Validates if a time value is within valid bounds (0-23.99)
 * @param timeValue - Time value to validate
 * @returns true if valid, false otherwise
 */
export const isValidTimeValue = (timeValue: number): boolean => {
    return timeValue >= 0 && timeValue < 24
}

/**
 * Validates if a duration is within valid bounds and is an integer
 * @param duration - Duration to validate
 * @param minDuration - Minimum allowed duration (default: 1)
 * @param maxDuration - Maximum allowed duration (default: 999)
 * @returns true if valid, false otherwise
 */
export const isValidDuration = (
    duration: number, 
    minDuration: number = 1, 
    maxDuration: number = 999
): boolean => {
    return Number.isInteger(duration) && 
           duration >= minDuration && 
           duration <= maxDuration
}

/**
 * Debounces a function call
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | undefined

    return (...args: Parameters<T>) => {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

/**
 * Prevents body scroll when modal/dialog is open
 * @param isOpen - Whether the modal is open
 * @returns Cleanup function to restore scroll
 */
export const handleBodyScroll = (isOpen: boolean): (() => void) => {
    if (typeof window === 'undefined') return () => {}

    if (isOpen) {
        const scrollY = window.scrollY
        const bodyStyle = document.body.style
        
        bodyStyle.position = 'fixed'
        bodyStyle.top = `-${scrollY}px`
        bodyStyle.width = '100%'
        bodyStyle.overflowY = 'scroll'

        return () => {
            bodyStyle.position = ''
            bodyStyle.top = ''
            bodyStyle.width = ''
            bodyStyle.overflowY = ''
            window.scrollTo(0, scrollY)
        }
    }
    
    return () => {}
}

/**
 * Creates a safe error message from various error types
 * @param error - Error object, string, or unknown
 * @returns Safe error message string
 */
export const createSafeErrorMessage = (error: unknown): string => {
    if (typeof error === 'string') return error
    if (error instanceof Error) return error.message
    if (error && typeof error === 'object' && 'message' in error) {
        return String(error.message)
    }
    return 'Ein unbekannter Fehler ist aufgetreten'
}

/**
 * Formats a date in German format (DD.MM.YYYY)
 * @param date - Date string or Date object or undefined
 * @returns German formatted date string
 */
export const formatGermanDate = (date: string | Date | undefined): string => {
    if (!date) return 'Nicht ausgewählt'
    
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date
        return dayjs(dateObj).format('DD.MM.YYYY')
    } catch {
        return 'Ungültiges Datum'
    }
}

/**
 * Formats a date for display in German locale
 * @param date - Date string or Date object or undefined
 * @returns German formatted display date
 */
export const formatGermanDateDisplay = (date: string | Date | undefined): string => {
    if (!date) return 'Nicht ausgewählt'
    
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date
        return dayjs(dateObj).format('dddd, DD. MMMM YYYY')
    } catch {
        return 'Ungültiges Datum'
    }
}

/**
 * Converts a date string to Date object without timezone issues
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Date object with correct local date
 */
export const stringToLocalDate = (dateString: string): Date => {
    const [year, month, day] = dateString.split('-').map(Number)
    return new Date(year, month - 1, day)
}

/**
 * Converts a Date object to string format without timezone issues
 * @param date - Date object
 * @returns Date string in YYYY-MM-DD format
 */
export const dateToLocalString = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}