import { z } from 'zod'
import { FORM_CONSTANTS } from '../constants'

/**
 * Validation schema for the schedule creation form
 * Uses Zod for type-safe form validation with German error messages
 */
export const validationSchema = z.object({
    type: z.union([
        z.literal('meeting'),
        z.literal('operation'),
        z.literal('training'),
        z.literal('examination'),
        z.literal('raid'),
        z.literal('transport'),
        z.literal('convoy'),
    ], { message: 'Bitte wähle einen Termin-Typ aus' }),
    
    label: z.string({ message: 'Bitte gebe einen Titel ein' })
        .min(1, 'Titel ist erforderlich')
        .max(FORM_CONSTANTS.MAX_TITLE_LENGTH, `Titel darf maximal ${FORM_CONSTANTS.MAX_TITLE_LENGTH} Zeichen haben`)
        .refine(
            val => !/[<>&"']/.test(val), 
            'HTML-Sonderzeichen sind nicht erlaubt'
        ),
        
    description: z.string({ message: 'Bitte gebe eine Beschreibung ein' })
        .min(1, 'Beschreibung ist erforderlich')
        .max(FORM_CONSTANTS.MAX_DESCRIPTION_LENGTH, `Beschreibung darf maximal ${FORM_CONSTANTS.MAX_DESCRIPTION_LENGTH} Zeichen haben`)
        .refine(
            val => !/[<>&"']/.test(val), 
            'HTML-Sonderzeichen sind nicht erlaubt'
        ),
        
    date: z.string({ message: 'Bitte wähle ein Datum aus' })
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Datum muss im Format YYYY-MM-DD sein')
        .refine(
            val => {
                const date = new Date(val)
                return date instanceof Date && !isNaN(date.getTime())
            },
            'Ungültiges Datum'
        ),
        
    time: z.number({ message: 'Bitte wähle eine Uhrzeit aus' })
        .min(FORM_CONSTANTS.MIN_TIME, 'Ungültige Uhrzeit')
        .max(FORM_CONSTANTS.MAX_TIME, 'Ungültige Uhrzeit')
        .refine(
            val => val >= 0 && val < 24,
            'Uhrzeit muss zwischen 00:00 und 23:59 liegen'
        ),
        
    duration: z.number({ message: 'Bitte gebe eine Dauer ein' })
        .min(FORM_CONSTANTS.MIN_DURATION, `Dauer muss mindestens ${FORM_CONSTANTS.MIN_DURATION} Minute betragen`)
        .max(FORM_CONSTANTS.MAX_DURATION, `Dauer darf maximal ${FORM_CONSTANTS.MAX_DURATION} Minuten betragen`)
        .int('Dauer muss eine ganze Zahl sein'),
        
    badges: z.array(
        z.object({
            value: z.string().min(1, 'Badge-Wert ist erforderlich'),
            label: z.string().min(1, 'Badge-Label ist erforderlich'),
            color: z.string().min(1, 'Badge-Farbe ist erforderlich'),
        })
    )
        .min(1, 'Bitte wähle mindestens ein Badge aus')
        .max(10, 'Maximal 10 Badges erlaubt'),
        
    departments: z.array(
        z.object({
            value: z.string().min(1, 'Abteilungs-Wert ist erforderlich'),
            label: z.string().min(1, 'Abteilungs-Label ist erforderlich'),
            color: z.string().min(1, 'Abteilungs-Farbe ist erforderlich'),
        })
    )
        .min(1, 'Bitte wähle mindestens eine Abteilung aus')
        .max(10, 'Maximal 10 Abteilungen erlaubt'),
        
    people: z.array(
        z.object({
            value: z.string().min(1, 'Person-Wert ist erforderlich'),
            label: z.string().min(1, 'Person-Label ist erforderlich'),
            name: z.string().min(1, 'Person-Name ist erforderlich'),
            profileImage: z.string().min(1, 'Profilbild-URL ist erforderlich'),
            rank: z.string().min(1, 'Rang ist erforderlich'),
        })
    )
        .min(1, 'Bitte wähle mindestens eine Person aus')
        .max(20, 'Maximal 20 Personen erlaubt'),
})

/**
 * Type inference from the validation schema
 */
export type ValidationSchema = z.infer<typeof validationSchema>

/**
 * Validation helper functions
 */
export const validateField = {
    /**
     * Validates if a string contains HTML special characters
     */
    hasNoHtmlChars: (value: string): boolean => !/[<>&"']/.test(value),
    
    /**
     * Validates if a date string is in the correct format and is a valid date
     */
    isValidDateString: (value: string): boolean => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
        const date = new Date(value)
        return date instanceof Date && !isNaN(date.getTime())
    },
    
    /**
     * Validates if a time value is within valid bounds
     */
    isValidTime: (value: number): boolean => {
        return value >= FORM_CONSTANTS.MIN_TIME && value <= FORM_CONSTANTS.MAX_TIME
    },
    
    /**
     * Validates if a duration is within valid bounds
     */
    isValidDuration: (value: number): boolean => {
        return Number.isInteger(value) && 
               value >= FORM_CONSTANTS.MIN_DURATION && 
               value <= FORM_CONSTANTS.MAX_DURATION
    },
}