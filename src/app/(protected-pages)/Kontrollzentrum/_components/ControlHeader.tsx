'use client'

import Select from '@/components/ui/Select'
import useCurrentSession from '@/utils/hooks/useCurrentSession'
import { getGreeting } from '../utils/getGreeting'
import type { Period } from '../types'

type ControlHeaderProps = {
    selectedPeriod: Period
    onSelectedPeriodChange: (value: Period) => void
}

export const welcomeMessage = getGreeting()

export const options: { value: Period; label: string }[] = [
    { value: 'thisDay', label: 'Tag' },
    { value: 'thisWeek', label: 'Woche' },
    { value: 'thisMonth', label: 'Monat' },
    { value: 'thisYear', label: 'Jahr' }
]

const ControlHeader = ({
    selectedPeriod,
    onSelectedPeriodChange,
}: ControlHeaderProps) => {
    const { session } = useCurrentSession()
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
            <div>
                <h4 className="mb-1 text-primary">Kontrollzentrum</h4>
                <p>{session?.user?.accountInformation?.rank || '?'} {session?.user?.lastName || 'Anonymous'}, {welcomeMessage}.</p>
            </div>
            <div className="flex items-center gap-2">
                <span>Zeitraum:</span>
                <Select
                    instanceId="period"
                    className="w-[150px]"
                    size="sm"
                    placeholder="Ausgewählter Zeitraum"
                    value={options.filter(
                        (option) => option.value === selectedPeriod,
                    )}
                    options={options}
                    isSearchable={false}
                    onChange={(option) => {
                        if (option?.value) {
                            onSelectedPeriodChange(option?.value)
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default ControlHeader
