'use client'

import { useState, memo, useMemo } from 'react'
import { useModuleLogging } from '@/utils/hooks/useModuleLogging'
import ControlHeader from './ControlHeader'
import ControlMetrics from './ControlMetrics'
import RecentActivity from './ControlRecentActivity'
import ControlSchedule from './ControlSchedule'
import ControlPersonnel from './ControlPersonnel'
import type { ControlDashboardData, Period } from '../types'

interface ControlDashboardProps {
    /** Vollständige Dashboard-Daten für alle Zeiträume */
    readonly data: ControlDashboardData
    /** Globaler Ladevorgang für das Dashboard */
    readonly isLoading?: boolean
    /** Globaler Fehlerstatus für das Dashboard */
    readonly error?: string | null
    /** Callback für Daten-Aktualisierung */
    readonly onRefresh?: () => void
}

// Hauptkomponente - Dashboard-Layout mit allen Kontrollzentrum-Bereichen
const ControlDashboard = memo<ControlDashboardProps>(({ 
    data, 
    isLoading = false, 
    error = null, 
    onRefresh 
}) => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('thisMonth')
    
    // Zentrales Module-Logging für gesamtes Dashboard
    useModuleLogging('Dashboard', isLoading, error, 'Kontrollzentrum', false, data)
    
    // Validierte Metrik-Daten für ausgewählten Zeitraum
    const currentMetrics = useMemo(() => {
        if (!data?.[selectedPeriod]?.metrics) {
            console.warn(`[Dashboard] Keine Metrik-Daten für Zeitraum: ${selectedPeriod}`)
            return null
        }
        return data[selectedPeriod].metrics
    }, [data, selectedPeriod])
    
    // Fallback bei fehlenden Daten
    if (!data || (!isLoading && (!data.personnel || !data.recentActivity))) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="text-red-500 text-lg mb-4" role="alert">
                    Dashboard-Daten konnten nicht geladen werden
                </div>
                {onRefresh && (
                    <button 
                        onClick={onRefresh}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
                        aria-label="Dashboard neu laden"
                    >
                        Dashboard neu laden
                    </button>
                )}
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <ControlHeader
                selectedPeriod={selectedPeriod}
                onSelectedPeriodChange={setSelectedPeriod}
            />
            <div className="flex flex-col 2xl:grid grid-cols-4 gap-4">
                <div className="2xl:col-span-1">
                    {currentMetrics ? (
                        <ControlMetrics
                            dataID={[1, 2, 3, 4]}
                            data={currentMetrics}
                            selectedPeriod={selectedPeriod}
                            isLoading={isLoading}
                            error={error}
                            onRefresh={onRefresh}
                        />
                    ) : (
                        <div className="text-center p-4 text-gray-500">
                            Keine Metrik-Daten verfügbar
                        </div>
                    )}
                </div>
                <div className="2xl:col-span-2 flex flex-col gap-4">
                    <div className="select-none">
                        <ControlPersonnel 
                            data={data.personnel} 
                            isLoading={isLoading}
                            error={error}
                            onRefresh={onRefresh}
                        />
                    </div>
                    <div>
                        <RecentActivity
                            data={data.recentActivity}
                            isLoading={isLoading}
                            error={error}
                            onRefresh={onRefresh}
                        />
                    </div>
                </div>
                <div className="2xl:col-span-1">
                    <ControlSchedule 
                        isLoading={isLoading}
                        error={error}
                        onRefresh={onRefresh}
                    />
                </div>
            </div>
        </div>
    )
})

export default ControlDashboard
