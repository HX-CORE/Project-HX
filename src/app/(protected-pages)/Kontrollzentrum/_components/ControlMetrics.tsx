'use client'

import { memo, useMemo } from 'react'
import { useModuleLogging } from '@/utils/hooks/useModuleLogging'
import Card from '@/components/ui/Card'
import Loading from '@/components/shared/Loading'
import GrowShrinkValue from '@/components/shared/GrowShrinkValue'
import classNames from '@/utils/classNames'
import { NumericFormat } from 'react-number-format'
import { GiHandcuffs, GiMac10, GiChemicalTank, GiPerson } from 'react-icons/gi'
import type { ReactNode } from 'react'
import { MetricsData, Period } from '../types'

interface WidgetProps {
    /** Anzeigename für die Metrik */
    readonly title: string
    /** Prozentuale Veränderung (positiv/negativ) */
    readonly growShrink: number
    /** Hauptwert der Metrik */
    readonly value: string | number | ReactNode
    /** Vergleichszeitraum Text */
    readonly compareFrom: string
    /** Icon für diese Metrik */
    readonly icon: ReactNode
    /** CSS-Klassen für Icon-Container */
    readonly iconClass: string
    /** Ladevorgang aktiv */
    readonly isLoading?: boolean
    /** Fehlermeldung */
    readonly error?: string | null
}

interface MetricsProps {
    /** Array der Metrik-IDs die angezeigt werden sollen */
    readonly dataID: number[]
    /** Metrik-Daten für den ausgewählten Zeitraum */
    readonly data: MetricsData
    /** Aktuell ausgewählter Zeitraum */
    readonly selectedPeriod: Period
    /** Ladevorgang für die gesamte Komponente */
    readonly isLoading?: boolean
    /** Fehlerstatus für die gesamte Komponente */
    readonly error?: string | null
    /** Callback-Funktion um Daten neu zu laden (bei Fehlern) */
    readonly onRefresh?: () => void
}

// Zeitraum-Übersetzungen für die Anzeige
const VS_PERIOD: Record<Period, string> = {
    thisDay: 'vs. letzter Tag',
    thisMonth: 'vs. letzter Monat',
    thisWeek: 'vs. letzte Woche',
    thisYear: 'vs. letztes Jahr',
} as const

// Einzelne Metrik-Widget Komponente mit Performance-Optimierung
const Widget = memo<WidgetProps>(({
    title,
    growShrink,
    value,
    compareFrom,
    icon,
    iconClass,
    isLoading = false,
    error = null,
}) => {
    return (
        <Loading loading={isLoading} type="cover" asElement={Card} className="flex-1" spinnerClass="text-primary">
            <div className="flex justify-between gap-2 relative">
                <div className="flex-1">
                    <div className="mb-6 text-base">{title}</div>
                    <h3 className="mb-1">{value}</h3>
                    <div className="inline-flex items-center flex-wrap gap-1">
                        <GrowShrinkValue
                            className="font-bold"
                            value={growShrink}
                            suffix="%"
                            positiveIcon="+"
                            negativeIcon=""
                        />
                        <span>{compareFrom}</span>
                    </div>
                    {error && (
                        <div className="text-red-500 text-xs mt-2" role="alert">
                            {error}
                        </div>
                    )}
                </div>
                <div
                    className={classNames(
                        'flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-primary border-2 border-primary avatar-round text-2xl',
                        iconClass,
                    )}
                    aria-hidden="true"
                >
                    {icon}
                </div>
            </div>
        </Loading>
    )
})

// Konfiguration für verfügbare Metriken mit Icons und Übersetzungen
const METRIC_CONFIGS = {
    1: {
        key: 'arrests' as keyof MetricsData,
        title: 'Verhaftungen',
        icon: <GiHandcuffs />,
    },
    2: {
        key: 'seizedWeapons' as keyof MetricsData,
        title: 'Beschlagnahmte Waffen',
        icon: <GiMac10 />,
    },
    3: {
        key: 'seizedDrugs' as keyof MetricsData,
        title: 'Sichergestellte Drogen',
        icon: <GiChemicalTank />,
    },
    4: {
        key: 'freedHostages' as keyof MetricsData,
        title: 'Befreite Geiseln',
        icon: <GiPerson />,
    },
} as const

const CONTAINER_CLASSES = "flex flex-col 2xl:flex-col xl:flex-row gap-4"

// Hauptkomponente - zeigt ausgewählte Metriken in Widget-Form an
const Metrics = memo<MetricsProps>(({ 
    dataID, 
    data, 
    selectedPeriod, 
    isLoading = false, 
    error = null, 
    onRefresh 
}) => {
    // Zentrales Module-Logging
    useModuleLogging('Metriken', isLoading, error, 'Kontrollzentrum', false, data)
    
    // Performance-optimierte Validierung der angezeigten Metriken
    const validMetrics = useMemo(() => {
        return dataID.filter(id => {
            const config = METRIC_CONFIGS[id as keyof typeof METRIC_CONFIGS]
            if (!config) {
                console.warn(`[Metrics] Unbekannte Metrik-ID: ${id}`)
                return false
            }
            
            const metricData = data[config.key]
            if (!metricData || typeof metricData.value !== 'number') {
                console.warn(`[Metrics] Ungültige Daten für Metrik: ${config.key}`)
                return false
            }
            
            return true
        })
    }, [dataID, data])

    // Falls ein Fehler aufgetreten ist, zeige Fehlermeldung mit Retry-Button
    if (error) {
        return (
            <div className={CONTAINER_CLASSES}>
                <Card className="flex-1">
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="text-red-500 text-sm mb-3" role="alert">
                            Fehler beim Laden der Metriken: {error}
                        </div>
                        {onRefresh && (
                            <button 
                                onClick={onRefresh}
                                className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary/80 transition-colors"
                                aria-label="Metriken neu laden"
                            >
                                Erneut versuchen
                            </button>
                        )}
                    </div>
                </Card>
            </div>
        )
    }
    
    return (
        <div className={CONTAINER_CLASSES}>
            {validMetrics.map((id) => {
                const config = METRIC_CONFIGS[id as keyof typeof METRIC_CONFIGS]
                if (!config) return null
                
                const metricData = data[config.key]
                
                return (
                    <Widget
                        key={id}
                        title={config.title}
                        value={
                            <NumericFormat
                                displayType="text"
                                value={metricData.value}
                                thousandSeparator
                            />
                        }
                        growShrink={metricData.growShrink}
                        compareFrom={VS_PERIOD[selectedPeriod]}
                        icon={config.icon}
                        iconClass="dark:bg-gray-900"
                        isLoading={isLoading}
                        error={null} // Individual Widget-Errors könnten hier später hinzugefügt werden
                    />
                )
            })}
        </div>
    )
})

export default Metrics