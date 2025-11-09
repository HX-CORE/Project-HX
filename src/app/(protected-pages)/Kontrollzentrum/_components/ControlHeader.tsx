'use client'

import { memo } from 'react'
import Select from '@/components/ui/Select'
import useCurrentSession from '@/utils/hooks/useCurrentSession'
import { getGreeting } from '../utils/getGreeting'
import type { Period } from '../types'

interface ControlHeaderProps {
    /** Aktuell ausgewählter Zeitraum */
    readonly selectedPeriod: Period
    /** Callback für Zeitraum-Änderung */
    readonly onSelectedPeriodChange: (value: Period) => void
}

// Begrüßungsnachricht (wird einmal beim Modulimport generiert)
export const welcomeMessage = getGreeting()

// Verfügbare Zeitraum-Optionen für die Auswahl
export const options: { value: Period; label: string }[] = [
    { value: 'thisDay', label: 'Tag' },
    { value: 'thisWeek', label: 'Woche' },
    { value: 'thisMonth', label: 'Monat' },
    { value: 'thisYear', label: 'Jahr' }
] as const

// Header-Komponente mit Begrüßung und Zeitraum-Auswahl
const ControlHeader = memo<ControlHeaderProps>(({
    selectedPeriod,
    onSelectedPeriodChange,
}) => {
    const { session } = useCurrentSession()
    
    // Fallback-Werte für Session-Daten
    const userRank = session?.user?.accountInformation?.rank || 'Benutzer'
    const userLastName = session?.user?.lastName || 'Unbekannt'
    
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
            <div>
                <h4 className="mb-1 text-primary">Kontrollzentrum</h4>
                <p>{userRank} {userLastName}, {welcomeMessage}.</p>
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
})

export default ControlHeader
