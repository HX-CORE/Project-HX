'use client'

import { useState, useEffect, useCallback, useMemo, memo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import { Form, FormItem } from '@/components/ui/Form'
import TimeInput from '@/components/ui/TimeInput/TimeInput'
import { DatePicker } from '@/components/ui'
import Select from '@/components/ui/Select'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import useCurrentSession from '@/utils/hooks/useCurrentSession'


// Import all modular parts
import type { ControlScheduleCreateProps, FormSchema } from './types'
import { 
    QUICK_TIME_OPTIONS, 
    QUICK_DURATION_OPTIONS, 
    DIALOG_CONFIG, 
    CSS_CLASSES 
} from './constants'
import { 
    badgeOptions, 
    departmentOptions, 
    peopleOptions, 
    eventTypes 
} from './data'
import { validationSchema } from './validation'
import { 
    generateId, 
    timeToDate, 
    dateToTime, 
    formatTime, 
    formatGermanDate,
    handleBodyScroll 
} from './utils'
import {
    CustomBadgeOption,
    CustomBadgeMultiValue,
    CustomDepartmentOption,
    CustomDepartmentMultiValue,
    CustomPersonOption,
    CustomPersonMultiValue,
    LiveClock,
    GermanDatePicker,
} from './components'

/**
 * ControlScheduleCreate Component
 * 
 * A comprehensive schedule creation form with modular architecture.
 * Features type-safe validation, responsive design, and professional UX.
 */
const ControlScheduleCreate = memo<ControlScheduleCreateProps>(({ onCreateEvent }) => {
    // State management
    const [dialogOpen, setDialogOpen] = useState(false)
    const [expandedSection, setExpandedSection] = useState<'badges' | 'departments' | 'people' | null>(null)

    // Session hook
    const { session } = useCurrentSession()

    // Helper function for accordion behavior
    const toggleSection = useCallback((section: 'badges' | 'departments' | 'people') => {
        setExpandedSection(current => current === section ? null : section)
    }, [])

    // Form setup with validation
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
        watch,
    } = useForm<FormSchema>({
        resolver: zodResolver(validationSchema),
        mode: 'onChange',
    })

    const watchedValues = watch()

    // Dialog handlers
    const handleDialogClose = useCallback(() => {
        reset()
        setExpandedSection(null) // Reset expanded sections when closing
        setDialogOpen(false)
    }, [reset])

    const handleDialogOpen = useCallback(() => {
        setDialogOpen(true)
    }, [])

    // Body scroll management
    useEffect(() => {
        const cleanup = handleBodyScroll(dialogOpen)
        return cleanup
    }, [dialogOpen])

    // Form validation check
    const isFormValid = useMemo(() => {
        const { type, label, description, date, time, duration, badges, departments, people } = watchedValues
        return !!(
            type && 
            label && 
            description && 
            date && 
            time !== undefined && 
            duration !== undefined &&
            badges && badges.length > 0 &&
            departments && departments.length > 0 &&
            people && people.length > 0
        )
    }, [watchedValues])

    // Form submission handler
    const onSubmit = useCallback((value: FormSchema) => {
        onCreateEvent({
            id: generateId(),
            ...value,
        })
        
        // Success notification
        toast.push(
            <Notification title="Termin" type="success" duration={5000}>
                {`Dein Termin wurde erstellt & wird am ${formatGermanDate(value.date)} um ${formatTime(value.time)} Uhr starten.`}
            </Notification>,
        )
        
        handleDialogClose()
    }, [onCreateEvent, handleDialogClose])

    return (
        <>
            <Button block onClick={handleDialogOpen}>
                Termin Hinzufügen
            </Button>
            <Dialog
                isOpen={dialogOpen}
                width={DIALOG_CONFIG.WIDTH}
                contentClassName="p-0 w-[calc(100%-16px)] sm:w-[calc(100%-24px)] lg:w-full h-auto max-h-[99vh] sm:max-h-[92vh] lg:h-[80vh] lg:max-h-screen lg:overflow-hidden min-h-[600px] sm:min-h-[700px] mx-2 sm:mx-3 lg:mx-6 flex flex-col rounded-xl overflow-y-auto lg:overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onClose={handleDialogClose}
                onRequestClose={handleDialogClose}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white select-none">Termin</h4>
                    </div>
                    <div>
                        <LiveClock />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 lg:overflow-hidden lg:min-h-0">
                    <div className="flex flex-col lg:flex-row lg:h-full">
                        {/* Preview Panel */}
                        <div className="w-full lg:w-[35%] px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 lg:border-r border-gray-200 dark:border-gray-700 flex flex-col border-b lg:border-b-0 order-2 lg:order-1 justify-start lg:justify-center">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 sm:p-3 lg:p-4 lg:my-auto">
                                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Termin Details</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center h-8 mb-3">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Typ</span>
                                        <span className={`text-xs ${watchedValues.type ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500 italic'}`}>
                                            {watchedValues.type ? eventTypes[watchedValues.type]?.label : 'Nicht ausgewählt'}
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-1">Titel</span>
                                        <div className="min-h-[2rem] flex items-start">
                                            <span className={`block break-words text-xs ${watchedValues.label ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500 italic'}`}>
                                                {watchedValues.label || 'Noch kein Titel eingegeben'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-1">Beschreibung</span>
                                        <div className="min-h-[2rem] flex items-start">
                                            <div className={`block break-words leading-tight text-xs ${watchedValues.description ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500 italic'}`}>
                                                {watchedValues.description || 'Noch keine Beschreibung eingegeben'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center h-8 mb-3">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Datum</span>
                                        <span className={`text-xs ${watchedValues.date ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500 italic'}`}>
                                            {formatGermanDate(watchedValues.date)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center h-8 mb-3">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Startzeit</span>
                                        <span className={`text-xs ${watchedValues.time !== undefined ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500 italic'}`}>
                                            {formatTime(watchedValues.time)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center h-8 mb-4">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Dauer</span>
                                        <span className={`text-xs ${watchedValues.duration !== undefined ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500 italic'}`}>
                                            {watchedValues.duration !== undefined 
                                                ? `${watchedValues.duration} Minuten`
                                                : 'Nicht angegeben'
                                            }
                                        </span>
                                    </div>

                                    {/* Badges Preview */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Badges</span>
                                            {watchedValues.badges && watchedValues.badges.length > DIALOG_CONFIG.MAX_VISIBLE_ITEMS && (
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSection('badges')}
                                                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                    title={expandedSection === 'badges' ? 'Weniger anzeigen' : 'Alle anzeigen'}
                                                >
                                                    <svg 
                                                        className={`w-4 h-4 transition-transform ${expandedSection === 'badges' ? 'rotate-180' : ''}`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                        <div className="min-h-[2rem] flex items-start">
                                            {watchedValues.badges && watchedValues.badges.length > 0 ? (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {(expandedSection === 'badges' ? watchedValues.badges : watchedValues.badges.slice(0, DIALOG_CONFIG.MAX_VISIBLE_ITEMS)).map((badge, index) => (
                                                        <div 
                                                            key={index}
                                                            className={CSS_CLASSES.BADGE_BASE}
                                                        >
                                                            <span className={`${CSS_CLASSES.COLOR_DOT} ${badge.color}`}></span>
                                                            <span className="text-gray-700 dark:text-gray-300">{badge.label}</span>
                                                        </div>
                                                    ))}
                                                    {expandedSection !== 'badges' && watchedValues.badges.length > DIALOG_CONFIG.MAX_VISIBLE_ITEMS && (
                                                        <div className={CSS_CLASSES.BADGE_PREVIEW}>
                                                            <span className="text-gray-500 dark:text-gray-400">+{watchedValues.badges.length - DIALOG_CONFIG.MAX_VISIBLE_ITEMS} weitere</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-xs text-gray-400 dark:text-gray-500 italic">Badges erforderlich</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Departments Preview */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Abteilungen</span>
                                            {watchedValues.departments && watchedValues.departments.length > DIALOG_CONFIG.MAX_VISIBLE_ITEMS && (
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSection('departments')}
                                                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                    title={expandedSection === 'departments' ? 'Weniger anzeigen' : 'Alle anzeigen'}
                                                >
                                                    <svg 
                                                        className={`w-4 h-4 transition-transform ${expandedSection === 'departments' ? 'rotate-180' : ''}`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                        <div className="min-h-[2rem] flex items-start">
                                            {watchedValues.departments && watchedValues.departments.length > 0 ? (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {(expandedSection === 'departments' ? watchedValues.departments : watchedValues.departments.slice(0, DIALOG_CONFIG.MAX_VISIBLE_ITEMS)).map((dept, index) => (
                                                        <div 
                                                            key={index}
                                                            className={CSS_CLASSES.BADGE_BASE}
                                                        >
                                                            <span className={`${CSS_CLASSES.COLOR_DOT} ${dept.color}`}></span>
                                                            <span className="text-gray-700 dark:text-gray-300">{dept.label}</span>
                                                        </div>
                                                    ))}
                                                    {expandedSection !== 'departments' && watchedValues.departments.length > DIALOG_CONFIG.MAX_VISIBLE_ITEMS && (
                                                        <div className={CSS_CLASSES.BADGE_PREVIEW}>
                                                            <span className="text-gray-500 dark:text-gray-400">+{watchedValues.departments.length - DIALOG_CONFIG.MAX_VISIBLE_ITEMS} weitere</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-xs text-gray-400 dark:text-gray-500 italic">Abteilung erforderlich</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* People Preview */}
                                    <div className="mb-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Personen</span>
                                            {watchedValues.people && watchedValues.people.length > DIALOG_CONFIG.MAX_VISIBLE_ITEMS && (
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSection('people')}
                                                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                    title={expandedSection === 'people' ? 'Weniger anzeigen' : 'Alle anzeigen'}
                                                >
                                                    <svg 
                                                        className={`w-4 h-4 transition-transform ${expandedSection === 'people' ? 'rotate-180' : ''}`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                        <div className="min-h-[2rem] flex items-start">
                                            {watchedValues.people && watchedValues.people.length > 0 ? (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {(expandedSection === 'people' ? watchedValues.people : watchedValues.people.slice(0, DIALOG_CONFIG.MAX_VISIBLE_ITEMS)).map((person, index) => (
                                                        <div 
                                                            key={index}
                                                            className={CSS_CLASSES.BADGE_BASE}
                                                        >
                                                            <img 
                                                                src={person.profileImage} 
                                                                alt={person.name}
                                                                className="w-4 h-4 rounded-full object-cover"
                                                            />
                                                            <span className="text-gray-700 dark:text-gray-300">{person.name}</span>
                                                        </div>
                                                    ))}
                                                    {expandedSection !== 'people' && watchedValues.people.length > DIALOG_CONFIG.MAX_VISIBLE_ITEMS && (
                                                        <div className={CSS_CLASSES.BADGE_PREVIEW}>
                                                            <span className="text-gray-500 dark:text-gray-400">+{watchedValues.people.length - DIALOG_CONFIG.MAX_VISIBLE_ITEMS} weitere</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-xs text-gray-400 dark:text-gray-500 italic">Personen erforderlich</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mobile divider between containers */}
                        <div className="lg:hidden">
                            <div className="px-5 py-2 bg-gray-50/90 dark:bg-gray-800/90 border-y border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">Formular</span>
                                    <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Form Panel */}
                        <div className="w-full lg:w-[65%] px-5 lg:px-6 xl:px-8 py-5 lg:py-6 lg:overflow-y-auto lg:flex-1 lg:min-h-0 lg:max-h-full lg:[&::-webkit-scrollbar]:hidden lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] order-1 lg:order-2 lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_8px,black_calc(100%-8px),transparent_100%)]">
                            <Form id="schedule-form" onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-5 lg:space-y-6">
                                {/* Event Type Selection */}
                                <FormItem
                                    label="Typ"
                                    invalid={Boolean(errors.type)}
                                    errorMessage={errors.type?.message && 'Bitte wähle einen Termin-Typ aus'}
                                >
                                    <Controller
                                        name="type"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                                                {Object.entries(eventTypes).map(([key, config]) => (
                                                    <button
                                                        key={key}
                                                        type="button"
                                                        onClick={() => field.onChange(key)}
                                                        className={`
                                                            ${CSS_CLASSES.BUTTON_EVENT_TYPE}
                                                            ${field.value === key 
                                                                ? 'border-blue-500 shadow-md' 
                                                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                            }
                                                        `}
                                                    >
                                                        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${config.color}`}>
                                                                {config.icon}
                                                            </div>
                                                            <span className="text-sm font-medium text-center">
                                                                {config.label}
                                                            </span>
                                                        </div>
                                                        {field.value === key && (
                                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    />
                                </FormItem>

                                {/* Title Input */}
                                <FormItem
                                    label="Titel"
                                    invalid={Boolean(errors.label)}
                                    errorMessage={errors.label?.message}
                                >
                                    <Controller
                                        name="label"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="relative">
                                                <Input
                                                    type="text"
                                                    autoComplete="off"
                                                    placeholder="z.B. Wöchentliche Teambesprechung"
                                                    className="pr-10"
                                                    maxLength={25}
                                                    {...field}
                                                />
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </FormItem>

                                {/* Description Input */}
                                <FormItem
                                    label="Beschreibung"
                                    invalid={Boolean(errors.description)}
                                    errorMessage={errors.description?.message}
                                >
                                    <Controller
                                        name="description"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                placeholder="z.B. Besprechung der aktuellen Einsatzlage und Planung"
                                                maxLength={75}
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormItem>

                                {/* Date Input */}
                                <FormItem
                                    label="Datum"
                                    invalid={Boolean(errors.date)}
                                    errorMessage={errors.date?.message}
                                >
                                    <Controller
                                        name="date"
                                        control={control}
                                        render={({ field }) => (
                                            <div>
                                                <GermanDatePicker
                                                    defaultValue={new Date()}
                                                    minDate={new Date()}
                                                    placeholder="Wähle ein Datum"
                                                    inputFormat="dd.MM.yyyy"
                                                    isInvalid={Boolean(errors.date)}
                                                    value={field.value}
                                                    onChange={(dateString: string) => {
                                                        field.onChange(dateString || undefined)
                                                    }}
                                                    className="[&_.disabled]:!bg-red-50 [&_.disabled]:!text-red-300 dark:[&_.disabled]:!bg-red-900/20 dark:[&_.disabled]:!text-red-400 [&_.disabled]:!opacity-60 [&_.disabled]:!cursor-not-allowed"                                    
                                                />
                                            </div>
                                        )}
                                    />
                                </FormItem>

                                {/* Time and Duration Row */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {/* Start Time */}
                                    <FormItem
                                        label="Startzeit"
                                        invalid={Boolean(errors.time)}
                                        errorMessage={errors.time?.message}
                                    >
                                        <Controller
                                            name="time"
                                            control={control}
                                            render={({ field }) => {
                                                return (
                                                    <div className="space-y-3">
                                                        <div className="flex flex-wrap gap-2">
                                                            {QUICK_TIME_OPTIONS.map((hour) => (
                                                                <button
                                                                    key={hour}
                                                                    type="button"
                                                                    onClick={() => field.onChange(hour)}
                                                                    className={`
                                                                        ${CSS_CLASSES.BUTTON_QUICK_SELECT}
                                                                        ${field.value === hour
                                                                            ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                                                            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                                                                        }
                                                                    `}
                                                                >
                                                                    {hour.toString().padStart(2, '0')}:00
                                                                </button>
                                                            ))}
                                                        </div>
                                                        
                                                        <TimeInput 
                                                            value={timeToDate(field.value)} 
                                                            onChange={(date) => field.onChange(dateToTime(date))}
                                                            format="24"
                                                        />
                                                    </div>
                                                )
                                            }}
                                        />
                                    </FormItem>

                                    {/* Duration */}
                                    <FormItem
                                        label="Dauer (Minuten)"
                                        invalid={Boolean(errors.duration)}
                                        errorMessage={errors.duration?.message}
                                    >
                                        <Controller
                                            name="duration"
                                            control={control}
                                            render={({ field }) => (
                                                <div className="space-y-3">
                                                    <div className="flex flex-wrap gap-2">
                                                        {QUICK_DURATION_OPTIONS.map((minutes) => (
                                                            <button
                                                                key={minutes}
                                                                type="button"
                                                                onClick={() => field.onChange(minutes)}
                                                                className={`
                                                                    ${CSS_CLASSES.BUTTON_QUICK_SELECT}
                                                                    ${field.value === minutes
                                                                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                                                        : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                                                                    }
                                                                `}
                                                            >
                                                                {minutes} min
                                                            </button>
                                                        ))}
                                                    </div>
                                                    
                                                    <Input
                                                        type="number"
                                                        placeholder="z.B. 60"
                                                        min="1"
                                                        max="999"
                                                        maxLength={3}
                                                        value={field.value || ''}
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value
                                                            if (rawValue === '') {
                                                                field.onChange(undefined)
                                                                return
                                                            }
                                                            const numValue = parseInt(rawValue, 10)
                                                            if (!isNaN(numValue) && numValue >= 1 && numValue <= 999) {
                                                                field.onChange(numValue)
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </FormItem>
                                </div>

                                {/* Badges Selection */}
                                <FormItem
                                    label="Badges"
                                    invalid={Boolean(errors.badges)}
                                    errorMessage={errors.badges?.message}
                                >
                                    <Controller
                                        name="badges"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                isMulti
                                                options={badgeOptions}
                                                components={{
                                                    Option: CustomBadgeOption,
                                                    MultiValueLabel: CustomBadgeMultiValue,
                                                }}
                                                placeholder="Wähle Badges aus..."
                                                noOptionsMessage={() => "Keine Badges verfügbar"}
                                                value={field.value || []}
                                                onChange={field.onChange}
                                                menuPlacement="top"
                                                maxMenuHeight={300}
                                                styles={{
                                                    menuList: (provided) => ({
                                                        ...provided,
                                                        '&::-webkit-scrollbar': {
                                                            display: 'none'
                                                        },
                                                        msOverflowStyle: 'none',
                                                        scrollbarWidth: 'none'
                                                    })
                                                }}
                                            />
                                        )}
                                    />
                                </FormItem>

                                {/* Departments and People Row */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {/* Departments */}
                                    <FormItem
                                        label="Abteilung"
                                        invalid={Boolean(errors.departments)}
                                        errorMessage={errors.departments?.message}
                                    >
                                        <Controller
                                            name="departments"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    isMulti
                                                    options={departmentOptions}
                                                    components={{
                                                        Option: CustomDepartmentOption,
                                                        MultiValueLabel: CustomDepartmentMultiValue,
                                                    }}
                                                    placeholder="Wähle Abteilungen aus..."
                                                    noOptionsMessage={() => "Keine Abteilungen verfügbar"}
                                                    value={field.value || []}
                                                    onChange={field.onChange}
                                                    menuPlacement="top"
                                                    maxMenuHeight={300}
                                                    styles={{
                                                        menuList: (provided) => ({
                                                            ...provided,
                                                            '&::-webkit-scrollbar': {
                                                                display: 'none'
                                                            },
                                                            msOverflowStyle: 'none',
                                                            scrollbarWidth: 'none'
                                                        })
                                                    }}
                                                />
                                            )}
                                        />
                                    </FormItem>

                                    {/* People */}
                                    <FormItem
                                        label="Personen"
                                        invalid={Boolean(errors.people)}
                                        errorMessage={errors.people?.message}
                                    >
                                        <Controller
                                            name="people"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    isMulti
                                                    options={peopleOptions}
                                                    components={{
                                                        Option: CustomPersonOption,
                                                        MultiValueLabel: CustomPersonMultiValue,
                                                    }}
                                                    placeholder="Wähle Personen aus..."
                                                    noOptionsMessage={() => "Keine Personen verfügbar"}
                                                    value={field.value || []}
                                                    onChange={field.onChange}
                                                    menuPlacement="top"
                                                    maxMenuHeight={300}
                                                    styles={{
                                                        menuList: (provided) => ({
                                                            ...provided,
                                                            '&::-webkit-scrollbar': {
                                                                display: 'none'
                                                            },
                                                            msOverflowStyle: 'none',
                                                            scrollbarWidth: 'none'
                                                        })
                                                    }}
                                                />
                                            )}
                                        />
                                    </FormItem>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 z-10 bg-white dark:bg-gray-900 flex flex-col sm:flex-row items-center justify-between px-5 sm:px-6 py-3 sm:py-4 border-t border-gray-200 dark:border-gray-700 gap-2 sm:gap-0 flex-shrink-0">
                    <div className="flex items-center gap-2 order-2 sm:order-1 select-none">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                            {session?.user?.image ? (
                                <img src={session.user.image} className="w-full h-full rounded-full" />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gray-400 dark:bg-gray-700" />
                            )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{session?.user?.name}</span>
                    </div>
                    <div className="flex gap-2 sm:gap-3 order-1 sm:order-2 w-full sm:w-auto">
                        <Button
                            variant="default"
                            onClick={handleDialogClose}
                            size="sm"
                            className="px-4 flex-1 sm:flex-initial"
                        >
                            Abbrechen
                        </Button>
                        <Button
                            type="submit"
                            variant="solid"
                            loading={isSubmitting}
                            form="schedule-form"
                            size="sm"
                            disabled={!isFormValid}
                            className="px-4 flex-1 sm:flex-initial"
                        >
                            {isSubmitting ? 'Wird erstellt...' : 'Termin erstellen'}
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
})

ControlScheduleCreate.displayName = 'ControlScheduleCreate'

export default ControlScheduleCreate