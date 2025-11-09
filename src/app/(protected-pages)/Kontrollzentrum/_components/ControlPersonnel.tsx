'use client'

import { memo, useMemo, type ReactNode } from 'react'
import { useModuleLogging } from '@/utils/hooks/useModuleLogging'
import Card from '@/components/ui/Card'
import Loading from '@/components/shared/Loading'
import { GiPoliceOfficerHead, GiSpy, GiHealthNormal } from 'react-icons/gi'
import type { PersonnelData } from '../types'

interface PersonnelItemProps {
    /** Anzeigename für den Personaltyp (z.B. "Online Officers") */
    readonly title: string
    /** Anzahl aktuell aktiver Personen */
    readonly active: number
    /** Gesamtanzahl verfügbarer Personen */
    readonly total: number
    /** Icon für diesen Personaltyp */
    readonly icon: ReactNode
    /** Ladevorgang aktiv (für Live-Updates) */
    readonly isLoading?: boolean
    /** Fehlermeldung falls Daten nicht geladen werden können */
    readonly error?: string | null
}

interface ControlPersonnelProps {
    /** Personal-Statistiken aufgeteilt nach Typ (Officers, Agents, Medics) */
    readonly data: PersonnelData
    /** Ladevorgang für die gesamte Komponente */
    readonly isLoading?: boolean
    /** Fehlerstatus für die gesamte Komponente */
    readonly error?: string | null
    /** Callback-Funktion um Daten neu zu laden (bei Fehlern) */
    readonly onRefresh?: () => void
}

// Konfiguration für die drei Personaltypen (wird später durch API ersetzt)
const PERSONNEL_CONFIG = [
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
] as const

// Einzelnes Personal-Item mit Performance-Optimierung
const PersonnelItem = memo<PersonnelItemProps>(({
    title,
    active,
    total,
    icon,
    isLoading = false,
    error = null,
}) => {
    // Berechne Prozentsatz mit Validierung (verhindert Fehler bei ungültigen Daten)
    const activePercentage = useMemo(() => {
        if (typeof active !== 'number' || typeof total !== 'number' || active < 0 || total < 0 || active > total) return 0
        return total > 0 ? Math.round((active / total) * 100) : 0
    }, [active, total])
    
    return (
        <Loading loading={isLoading} type="cover" asElement="div" className="flex items-center gap-2 flex-1" spinnerClass="text-primary">
            <div className="flex flex-col items-center gap-2 flex-1 p-1" role="group" aria-label={`${title} status`}>
                <div className="flex items-center justify-center min-h-10 min-w-10 max-h-10 max-w-10 text-primary border-2 border-primary dark:bg-gray-900 avatar-round text-lg" aria-hidden="true">
                    {icon}
                </div>
                <div className="text-center w-full">
                    <div className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {title}
                    </div>
                    <div 
                        className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1" 
                        aria-label={`${active} von ingesamt ${total} sind aktiv`}
                    >
                        {active} / {total}
                    </div>
                    <div className="flex justify-center">
                        <div 
                            className="w-4/5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" 
                            role="progressbar" 
                            aria-valuenow={activePercentage} 
                            aria-valuemin={0} 
                            aria-valuemax={100} 
                            aria-label={`${activePercentage}% aktiv`}
                        >
                            <div 
                                className="h-full bg-primary transition-all duration-300 ease-in-out"
                                style={{ width: `${activePercentage}%` }}
                            />
                        </div>
                    </div>
                    {error && (
                        <div className="text-red-500 text-xs mt-1" role="alert">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </Loading>
    )
})

// Hauptkomponente - zeigt alle Personaltypen in einer Karte an
const ControlPersonnel = memo<ControlPersonnelProps>(({ 
    data, 
    isLoading = false, 
    error = null, 
    onRefresh 
}) => {

    // Zentrales Module-Logging
    useModuleLogging('Personalanzeige', isLoading, error, 'Kontrollzentrum', false, data)

    // Falls ein Fehler aufgetreten ist, zeige Fehlermeldung mit Retry-Button
    if (error) {
        return (
            <Card className="h-fit">
                <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-red-500 text-sm mb-2" role="alert">
                        Error loading personnel data: {error}
                    </div>
                    {onRefresh && (
                        <button 
                            onClick={onRefresh}
                            className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-primary/80 transition-colors"
                            aria-label="Retry loading personnel data"
                        >
                            Retry
                        </button>
                    )}
                </div>
            </Card>
        )
    }

    // Normale Anzeige - alle Personaltypen nebeneinander
    return (
        <Card className="h-fit">
            <div className="flex gap-5">
                {PERSONNEL_CONFIG.map((config) => {
                    const personnelData = data[config.key]
                    return (
                        <PersonnelItem
                            key={config.key}
                            title={config.title}
                            active={personnelData.active}
                            total={personnelData.total}
                            icon={config.icon}
                            isLoading={isLoading}
                            error={null} // Individual item errors könnten hier später hinzugefügt werden
                        />
                    )
                })}
            </div>
        </Card>
    )
})

export default ControlPersonnel