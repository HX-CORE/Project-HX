'use client'

import Card from '@/components/ui/Card'
import { GiPoliceOfficerHead, GiSpy, GiHealthNormal } from 'react-icons/gi'
import type { PersonnelData } from '../types'

type PersonnelItemProps = {
    title: string
    active: number
    total: number
    icon: React.ReactNode
}

type ControlPersonnelProps = {
    data: PersonnelData
}

const PersonnelItem = ({
    title,
    active,
    total,
    icon,
}: PersonnelItemProps) => {
    const activePercentage = Math.round((active / total) * 100)
    
    return (
        <div className="flex flex-col items-center gap-2 p-1 flex-1">
            <div className="flex items-center justify-center min-h-10 min-w-10 max-h-10 max-w-10 text-primary border-2 border-primary dark:bg-gray-900 avatar-round text-lg">
                {icon}
            </div>
            <div className="text-center w-full">
                <div className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-1">
                    {title}
                </div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                    {active}/{total}
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-primary transition-all duration-300 ease-in-out"
                        style={{ width: `${activePercentage}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

const ControlPersonnel = ({ data }: ControlPersonnelProps) => {
    const personnelConfig = [
        {
            key: 'officers' as keyof PersonnelData,
            title: 'Online Officers',
            icon: <GiPoliceOfficerHead />,
        },
        {
            key: 'agents' as keyof PersonnelData,
            title: 'Online Agents',
            icon: <GiSpy />,
        },
        {
            key: 'medics' as keyof PersonnelData,
            title: 'Online Medics',
            icon: <GiHealthNormal />,
        },
    ]

    return (
        <Card className="h-fit">
            <div className="flex gap-5">
                {personnelConfig.map((config) => {
                    const personnelData = data[config.key]
                    return (
                        <PersonnelItem
                            key={config.key}
                            title={config.title}
                            active={personnelData.active}
                            total={personnelData.total}
                            icon={config.icon}
                        />
                    )
                })}
            </div>
        </Card>
    )
}

export default ControlPersonnel