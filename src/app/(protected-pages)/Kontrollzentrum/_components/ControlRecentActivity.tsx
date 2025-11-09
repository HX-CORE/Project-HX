'use client'

import { useModuleLogging } from '@/utils/hooks/useModuleLogging'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ScrollBar from '@/components/ui/ScrollBar'
import Timeline from '@/components/ui/Timeline'
import { COMP_AUTH_KONTROLLZENTRUM } from '../constants/authority.constant'
import { useUserAuthority } from '@/utils/authority'
import AuthorityCheck from '@/components/shared/AuthorityCheck'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { ActivityAvatar, ActivityEvent } from '@/components/view/Activity'
import isEmpty from 'lodash/isEmpty'
import type { Activities } from '../types'

const MAX_ACTIVITIES_TO_SHOW = 5

type RecentActivityProps = {
    data: Activities
    isLoading?: boolean
    error?: string | null
}

const RecentActivity = ({ data, isLoading = false, error = null }: RecentActivityProps) => {
    const userAuthority = useUserAuthority()
    
    // Zentrales Module-Logging
    useModuleLogging('Kürzliche Aktivitäten', isLoading, error, 'Kontrollzentrum', false, data)
    
    // Sort by dateTime (newest first) and take only the configured number of activities
    const recentActivities = data
        .sort((a, b) => b.dateTime - a.dateTime)
        .slice(0, MAX_ACTIVITIES_TO_SHOW)
    
    return (
        <Card>
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
        </Card>
    )
}

export default RecentActivity
