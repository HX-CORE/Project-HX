import { useState, useEffect, memo } from 'react'
import { components } from 'react-select'
import type {
    OptionProps,
    MultiValueGenericProps,
} from 'react-select'
import { Option as DefaultOption } from '@/components/ui/Select'
import type { BadgeOption, DepartmentOption, PersonOption } from '../types'
import { stringToLocalDate, dateToLocalString } from '../utils'

const { MultiValueLabel } = components

/**
 * Custom Badge Option Component for react-select
 * Displays badges with colored dots and labels
 */
export const CustomBadgeOption = ({ 
    data, 
    label, 
    ...props 
}: OptionProps<BadgeOption>) => (
    <DefaultOption<BadgeOption>
        data={data}
        label={label}
        {...props}
        customLabel={(optionData, optionLabel) => (
            <span className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${optionData.color}`} />
                <span>{optionLabel}</span>
            </span>
        )}
    />
)

/**
 * Custom Badge Multi Value Component for react-select
 * Shows selected badges with colored dots in the input field
 */
export const CustomBadgeMultiValue = ({ 
    children, 
    data, 
    ...props 
}: MultiValueGenericProps<BadgeOption, true>) => (
    <MultiValueLabel data={data} {...props}>
        <div className="inline-flex items-center">
            <span className={`w-2 h-2 rounded-full ${data.color} mr-1.5`} />
            {children}
        </div>
    </MultiValueLabel>
)

/**
 * Custom Department Option Component for react-select
 * Displays departments with colored dots and labels
 */
export const CustomDepartmentOption = ({ 
    data, 
    label, 
    ...props 
}: OptionProps<DepartmentOption>) => (
    <DefaultOption<DepartmentOption>
        data={data}
        label={label}
        {...props}
        customLabel={(optionData, optionLabel) => (
            <span className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${optionData.color}`} />
                <span>{optionLabel}</span>
            </span>
        )}
    />
)

/**
 * Custom Department Multi Value Component for react-select
 * Shows selected departments with colored dots in the input field
 */
export const CustomDepartmentMultiValue = ({ 
    children, 
    data, 
    ...props 
}: MultiValueGenericProps<DepartmentOption, true>) => (
    <MultiValueLabel data={data} {...props}>
        <div className="inline-flex items-center">
            <span className={`w-2 h-2 rounded-full ${data.color} mr-1.5`} />
            {children}
        </div>
    </MultiValueLabel>
)

/**
 * Custom Person Option Component for react-select
 * Displays people with profile images, names, and ranks
 */
export const CustomPersonOption = ({ 
    data, 
    label, 
    ...props 
}: OptionProps<PersonOption>) => (
    <DefaultOption<PersonOption>
        data={data}
        label={label}
        {...props}
        customLabel={(optionData, optionLabel) => (
            <div className="flex items-center gap-3">
                <img 
                    src={optionData.profileImage} 
                    alt={optionData.name}
                    className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <span className="font-medium text-sm">{optionData.name}</span>
                    <span className="text-xs text-gray-500 capitalize">{optionData.rank}</span>
                </div>
            </div>
        )}
    />
)

/**
 * Custom Person Multi Value Component for react-select
 * Shows selected people with profile images in the input field
 */
export const CustomPersonMultiValue = ({ 
    children, 
    data, 
    ...props 
}: MultiValueGenericProps<PersonOption, true>) => (
    <MultiValueLabel data={data} {...props}>
        <div className="inline-flex items-center">
            <img 
                src={data.profileImage} 
                alt={data.name}
                className="w-4 h-4 rounded-full object-cover mr-1.5"
            />
            <span>{data.name}</span>
        </div>
    </MultiValueLabel>
)

/**
 * LiveClock Component - Shows current date and time with auto-update
 */
export const LiveClock = memo(() => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatDateTime = (date: Date) => {
        const dateStr = date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        const timeStr = date.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
        return { dateStr, timeStr }
    }

    const { dateStr, timeStr } = formatDateTime(currentTime)

    return (
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 select-none">
            <span className="font-mono">{dateStr}</span>
                -
            <span className="font-mono">{timeStr}</span>
        </div>
    )
})

LiveClock.displayName = 'LiveClock'

/**
 * German DatePicker Component - Timezone-safe date picker with German formatting
 */
export const GermanDatePicker = memo(({ 
    value, 
    onChange, 
    className, 
    isInvalid,
    placeholder,
    ...props 
}: { 
    value?: string | undefined;
    onChange: (date: string) => void;
    className?: string;
    isInvalid?: boolean;
    placeholder?: string;
    [key: string]: any 
}) => {
    const { DatePicker } = require('@/components/ui')
    
    // Convert string value to Date for DatePicker
    const dateValue = value ? stringToLocalDate(value) : undefined
    
    const handleDateChange = (date: Date | null) => {
        if (date) {
            // Convert back to string using timezone-safe function
            onChange(dateToLocalString(date))
        } else {
            onChange('')
        }
    }

    return (
        <DatePicker
            {...props}
            value={dateValue}
            onChange={handleDateChange}
            className={`${className} ${isInvalid ? 'border-red-500' : ''}`}
            inputFormat="DD.MM.YYYY"
            placeholder={placeholder || "TT.MM.JJJJ"}
        />
    )
})

GermanDatePicker.displayName = 'GermanDatePicker'