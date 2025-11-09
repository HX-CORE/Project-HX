/**
 * ControlScheduleForm Module - Main Export Index
 * 
 * This module provides a complete schedule creation form with:
 * - Type-safe form validation using Zod
 * - Modular component architecture
 * - Reusable utility functions
 * - Customizable data options
 * - Professional code organization
 */

// Main Component
import ControlScheduleCreateComponent from './ControlScheduleCreate'
export { ControlScheduleCreateComponent as ControlScheduleCreate }
export default ControlScheduleCreateComponent

// Types
export type {
    BadgeOption,
    DepartmentOption,
    PersonOption,
    EventTypeConfig,
    FormSchema,
    ControlScheduleCreateProps,
    QuickTimeOption,
    QuickDurationOption,
    EventTypesMap,
} from './types'

// Data
export {
    badgeOptions,
    departmentOptions,
    peopleOptions,
    eventTypes,
    createEventTypes,
} from './data'

// Constants
export {
    QUICK_TIME_OPTIONS,
    QUICK_DURATION_OPTIONS,
    FORM_CONSTANTS,
    DIALOG_CONFIG,
    CSS_CLASSES,
} from './constants'

// Validation
export {
    validationSchema,
    validateField,
    type ValidationSchema,
} from './validation'

// Utilities
export {
    generateId,
    timeToDate,
    dateToTime,
    formatTime,
    formatDate,
    formatDuration,
    isValidDateString,
    isValidTimeValue,
    isValidDuration,
    debounce,
    handleBodyScroll,
    createSafeErrorMessage,
} from './utils'

// Components
export {
    CustomBadgeOption,
    CustomBadgeMultiValue,
    CustomDepartmentOption,
    CustomDepartmentMultiValue,
    CustomPersonOption,
    CustomPersonMultiValue,
} from './components'