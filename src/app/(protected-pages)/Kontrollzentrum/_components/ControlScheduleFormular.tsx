/**
 * ControlScheduleCreate - Main Entry Point
 * 
 * This file now serves as a simple re-export of the modularized component.
 * All the logic has been moved to the ControlScheduleForm module for better
 * organization and maintainability.
 */

// Import and re-export the refactored component from the modular structure
import ControlScheduleCreate from './ControlScheduleForm/ControlScheduleCreate'

// Re-export commonly used types for backward compatibility
export type { 
    FormSchema, 
    ControlScheduleCreateProps,
    BadgeOption,
    DepartmentOption,
    PersonOption
} from './ControlScheduleForm/types'

export default ControlScheduleCreate
