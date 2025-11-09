import type { ReactNode } from 'react'
import type { Event } from '../../../types'

/**
 * Badge option interface for select components
 */
export interface BadgeOption {
    value: string
    label: string
    color: string
}

/**
 * Department option interface for select components
 */
export interface DepartmentOption {
    value: string
    label: string
    color: string
}

/**
 * Person option interface for select components
 */
export interface PersonOption {
    value: string
    label: string
    name: string
    profileImage: string
    rank: string
}

/**
 * Event type configuration interface
 */
export interface EventTypeConfig {
    label: string
    icon: ReactNode
    color: string
}

/**
 * Form schema interface for schedule creation
 */
export interface FormSchema {
    type: Event
    label: string
    description: string
    date: string
    time: number
    duration: number
    badges: BadgeOption[]
    departments: DepartmentOption[]
    people: PersonOption[]
}

/**
 * Props for ControlScheduleCreate component
 */
export interface ControlScheduleCreateProps {
    onCreateEvent: (value: FormSchema & { id: string }) => void
}

/**
 * Quick selection time values
 */
export type QuickTimeOption = 16 | 18 | 20 | 22

/**
 * Quick selection duration values (in minutes)
 */
export type QuickDurationOption = 30 | 60 | 90 | 120

/**
 * Event types mapping
 */
export type EventTypesMap = Record<Event, EventTypeConfig>