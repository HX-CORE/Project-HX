import type { QuickTimeOption, QuickDurationOption } from '../types'

/**
 * Quick selection options for time (in 24-hour format)
 */
export const QUICK_TIME_OPTIONS: readonly QuickTimeOption[] = [16, 18, 20, 22] as const

/**
 * Quick selection options for duration (in minutes)
 */
export const QUICK_DURATION_OPTIONS: readonly QuickDurationOption[] = [30, 60, 90, 120] as const

/**
 * Form field configuration constants
 */
export const FORM_CONSTANTS = {
    MAX_TITLE_LENGTH: 25,
    MAX_DESCRIPTION_LENGTH: 75,
    MIN_DURATION: 1,
    MAX_DURATION: 999,
    MIN_TIME: 0,
    MAX_TIME: 23.99,
} as const

/**
 * Dialog configuration constants
 */
export const DIALOG_CONFIG = {
    WIDTH: 1200,
    MOBILE_MARGIN: 32,
    DESKTOP_MARGIN: 24,
    MAX_VISIBLE_ITEMS: 2, // For badges/departments/people preview
} as const

/**
 * CSS class constants for consistency
 */
export const CSS_CLASSES = {
    BADGE_BASE: 'inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs',
    BADGE_PREVIEW: 'inline-flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-full text-xs',
    COLOR_DOT: 'w-2 h-2 rounded-full',
    BUTTON_QUICK_SELECT: 'px-3 py-1 rounded-full text-sm font-medium transition-colors border',
    BUTTON_EVENT_TYPE: 'relative p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg',
} as const