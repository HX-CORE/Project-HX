import { TbClockStar } from 'react-icons/tb'
import { GiPoliceCar, GiKevlarVest } from 'react-icons/gi'
import { MdOutlineSportsKabaddi, MdOutlineLocalPolice } from 'react-icons/md'
import { LuClipboardCheck } from 'react-icons/lu'
import { PiTruck } from 'react-icons/pi'
import type { 
    BadgeOption, 
    DepartmentOption, 
    PersonOption, 
    EventTypesMap 
} from '../types'

/**
 * Available badge options with colors and labels
 */
export const badgeOptions: readonly BadgeOption[] = [
    { value: 'urgent', label: 'Dringend', color: 'bg-red-500' },
    { value: 'important', label: 'Wichtig', color: 'bg-orange-500' },
    { value: 'classified', label: 'Verschlusssache', color: 'bg-purple-500' },
    { value: 'training', label: 'Ausbildung', color: 'bg-blue-500' },
    { value: 'mandatory', label: 'Pflicht', color: 'bg-gray-600' },
    { value: 'voluntary', label: 'Freiwillig', color: 'bg-green-500' },
] as const

/**
 * Available department options with colors and labels
 */
export const departmentOptions: readonly DepartmentOption[] = [
    { value: 'lspd', label: 'LSPD', color: 'bg-blue-600' },
    { value: 'leadership', label: 'Leitungsebene', color: 'bg-purple-600' },
    { value: 'hr', label: 'Personalabteilung', color: 'bg-green-600' },
    { value: 'ia', label: 'Internal Affairs', color: 'bg-gray-700' },
    { value: 'criminal', label: 'Criminal Division', color: 'bg-red-600' },
    { value: 'swat', label: 'SWAT', color: 'bg-black' },
    { value: 'academy', label: 'Academy', color: 'bg-indigo-600' },
] as const

/**
 * Available people options with profile information
 */
export const peopleOptions: readonly PersonOption[] = [
    { 
        value: 'john-smith', 
        label: 'John Smith (Chief)', 
        name: 'John Smith', 
        profileImage: '/img/avatars/cyko-emerson.jpg', 
        rank: 'chief' 
    },
    { 
        value: 'sarah-johnson', 
        label: 'Sarah Johnson (Captain)', 
        name: 'Sarah Johnson', 
        profileImage: '/img/avatars/steven-schneefeld.gif', 
        rank: 'captain' 
    },
    { 
        value: 'mike-davis', 
        label: 'Mike Davis (Sergeant)', 
        name: 'Mike Davis', 
        profileImage: '/img/avatars/thumb-3.jpg', 
        rank: 'sergeant' 
    },
    { 
        value: 'lisa-brown', 
        label: 'Lisa Brown (Detective)', 
        name: 'Lisa Brown', 
        profileImage: '/img/avatars/thumb-4.jpg', 
        rank: 'detective' 
    },
    { 
        value: 'robert-wilson', 
        label: 'Robert Wilson (Officer)', 
        name: 'Robert Wilson', 
        profileImage: '/img/avatars/thumb-5.jpg', 
        rank: 'officer' 
    },
    { 
        value: 'emily-taylor', 
        label: 'Emily Taylor (Officer)', 
        name: 'Emily Taylor', 
        profileImage: '/img/avatars/thumb-6.jpg', 
        rank: 'officer' 
    },
] as const

/**
 * Event type configurations with icons and colors
 * Uses a getter function to avoid JSX serialization issues
 */
export const eventTypes = {
    meeting: {
        label: 'Besprechung',
        get icon() { return <TbClockStar /> },
        color: 'text-purple-500 border-2 border-purple-500 bg-gray-800',
    }, 
    operation: {
        label: 'Einsatz',
        get icon() { return <GiPoliceCar /> },
        color: 'text-sky-500 border-2 border-sky-500 bg-gray-800',
    },
    training: {
        label: 'Ausbildung',
        get icon() { return <MdOutlineSportsKabaddi /> },
        color: 'text-amber-500 border-2 border-amber-500 bg-gray-800',
    },
    examination: {
        label: 'Prüfung',
        get icon() { return <LuClipboardCheck /> },
        color: 'text-orange-500 border-2 border-orange-500 bg-gray-800',
    },
    raid: {
        label: 'Razzia',
        get icon() { return <GiKevlarVest /> },
        color: 'text-emerald-500 border-2 border-emerald-500 bg-gray-800',
    },
    transport: {
        label: 'Transport',
        get icon() { return <PiTruck /> },
        color: 'text-rose-500 border-2 border-rose-500 bg-gray-800',
    },
    convoy: {
        label: 'Konvoi',
        get icon() { return <MdOutlineLocalPolice /> },
        color: 'text-teal-500 border-2 border-teal-500 bg-gray-800',
    },
} as const

/**
 * Factory function to create event types with fresh JSX icons
 */
export const createEventTypes = (): EventTypesMap => ({
    meeting: {
        label: 'Besprechung',
        icon: <TbClockStar />,
        color: 'bg-purple-500',
    }, 
    operation: {
        label: 'Einsatz',
        icon: <GiPoliceCar />,
        color: 'bg-sky-500',
    },
    training: {
        label: 'Ausbildung',
        icon: <MdOutlineSportsKabaddi />,
        color: 'bg-amber-500',
    },
    examination: {
        label: 'Prüfung',
        icon: <LuClipboardCheck />,
        color: 'bg-orange-500',
    },
    raid: {
        label: 'Razzia',
        icon: <GiKevlarVest />,
        color: 'bg-emerald-500',
    },
    transport: {
        label: 'Transport',
        icon: <PiTruck />,
        color: 'bg-rose-500',
    },
    convoy: {
        label: 'Konvoi',
        icon: <MdOutlineLocalPolice />,
        color: 'bg-teal-500',
    },
})