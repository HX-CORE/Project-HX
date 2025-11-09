'use client'

import { useMemo, memo } from 'react'
import { useModuleLogging } from '@/utils/hooks/useModuleLogging'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ScrollBar from '@/components/ui/ScrollBar'
import Timeline from '@/components/ui/Timeline'
import Loading from '@/components/shared/Loading'
import { COMP_AUTH_KONTROLLZENTRUM } from '../constants/authority.constant'
import { useUserAuthority } from '@/utils/authority'
import AuthorityCheck from '@/components/shared/AuthorityCheck'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { ActivityAvatar, ActivityEvent } from '@/components/view/Activity'
import isEmpty from 'lodash/isEmpty'
import type { Activities } from '../types'

// Konfiguration für maximale Anzahl angezeigter Aktivitäten
const MAX_ACTIVITIES_TO_SHOW = 5

interface RecentActivityProps {
    /** Array der Aktivitätsdaten */
    readonly data: Activities
    /** Ladevorgang für die gesamte Komponente */
    readonly isLoading?: boolean
    /** Fehlerstatus für die gesamte Komponente */
    readonly error?: string | null
    /** Callback-Funktion um Daten neu zu laden (bei Fehlern) */
    readonly onRefresh?: () => void
}

// Hauptkomponente - zeigt kürzliche Aktivitäten in einer Timeline an
const RecentActivity = memo<RecentActivityProps>(({ 
    data, 
    isLoading = false, 
    error = null, 
    onRefresh 
}) => {
    const userAuthority = useUserAuthority()
    
    // Zentrales Module-Logging
    useModuleLogging('Kürzliche Aktivitäten', isLoading, error, 'Kontrollzentrum', false, data)
    
    // Performance-optimierte Sortierung und Filterung mit useMemo
    const recentActivities = useMemo(() => {
        if (!Array.isArray(data) || data.length === 0) return []
        
        return data
            .sort((a, b) => b.dateTime - a.dateTime)
            .slice(0, MAX_ACTIVITIES_TO_SHOW)
    }, [data])

    // Falls ein Fehler aufgetreten ist, zeige Fehlermeldung mit Retry-Button
    if (error) {
        return (
            <Card>
                <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-red-500 text-sm mb-3" role="alert">
                        Fehler beim Laden der Aktivitäten: {error}
                    </div>
                    {onRefresh && (
                        <Button 
                            size="sm"
                            onClick={onRefresh}
                            className="bg-primary text-white hover:bg-primary/80"
                            aria-label="Aktivitäten neu laden"
                        >
                            Erneut versuchen
                        </Button>
                    )}
                </div>
            </Card>
        )
    }
    
    return (
        <Loading loading={isLoading} type="cover" asElement={Card} spinnerClass="text-primary"
            className="min-h-[200px]"
        >
            <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                <h4>Kürzliche Aktivitäten ({recentActivities.length})</h4>
                <AuthorityCheck
                    authority={[...COMP_AUTH_KONTROLLZENTRUM.component_ControlRecentActivity]}
                    userAuthority={userAuthority}
                    noMatch={
                        <Button
                            size="sm"
                            disabled={true}
                            type="button"
                            onClick={() => {
                                toast.push(
                                    <Notification title="Uhhh, aufpassen!" type="warning" duration={2500}>
                                        {`Ernsthaft? Lass diese Spielchen.`}
                                    </Notification>,
                                )
                            }}
                        >
                            Unberechtigt...
                        </Button>
                    }
                >
                <Button size="sm">Logs</Button>
                </AuthorityCheck>
            </div>
            <div className="lg:*:min-h-[367px]">
                <ScrollBar className="max-h-[367px]">
                    <Timeline>
                        {isEmpty(recentActivities) ? (
                            <Timeline.Item>Keine kürzlichen Aktivitäten</Timeline.Item>
                        ) : (
                            recentActivities.map((event, index) => (
                                <Timeline.Item
                                    key={event.type + index}
                                    media={<ActivityAvatar data={event} />}
                                >
                                    <div className="mt-1">
                                        <ActivityEvent compact data={event} />
                                    </div>
                                </Timeline.Item>
                            ))
                        )}
                    </Timeline>
                </ScrollBar>
            </div>
        </Loading>
    )
})

export default RecentActivity
