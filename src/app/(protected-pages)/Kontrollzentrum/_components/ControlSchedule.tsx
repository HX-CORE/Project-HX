'use client'

import { useState, useMemo } from 'react'
import { useModuleLogging } from '@/utils/hooks/useModuleLogging'
import Avatar from '@/components/ui/Avatar'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Calendar from '@/components/ui/Calendar'
import ScrollBar from '@/components/ui/ScrollBar'
import { eventGenerator, isToday } from '../utils/getSchedule'
import classNames from '@/utils/classNames'

import { COMP_AUTH_KONTROLLZENTRUM } from '../constants/authority.constant'
import { useUserAuthority } from '@/utils/authority'
import AuthorityCheck from '@/components/shared/AuthorityCheck'

import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'

import dayjs from 'dayjs'
import ControlScheduleCreate from './ControlScheduleFormular'
import { eventTypes } from './ControlScheduleForm/data'
import type { FormSchema as CreateEventPayload } from './ControlScheduleFormular'
import type { Event } from '../types'

type ScheduledEvent = {
    id: string
    type: Event
    label: string
    time?: Date
}

type ScheduledEventProps = ScheduledEvent

type ControlScheduleProps = {
    /** Ladevorgang für die gesamte Komponente */
    isLoading?: boolean
    /** Fehlerstatus für die gesamte Komponente */
    error?: string | null
    /** Callback-Funktion um Daten neu zu laden (bei Fehlern) */
    onRefresh?: () => void
}

const ScheduledEvent = (props: ScheduledEventProps) => {
    const { type, label, time } = props

    const event = eventTypes[type]

    return (
        <div className="flex items-center justify-between gap-4 py-1">
            <div className="flex items-center gap-3">
                <div>
                    <Avatar
                        className={classNames(event?.color)}
                        icon={event?.icon}
                        shape="round"
                    />
                </div>
                <div>
                    <div className="font-bold heading-text">{label}</div>
                    <div className="font-normal">{event?.label}</div>
                </div>
            </div>
            <div>
                <span className="font-semibold heading-text">
                    {time && dayjs(time).format('HH:mm')}
                </span>
            </div>
        </div>
    )
}

const ControlSchedule = ({ isLoading = false, error = null, onRefresh }: ControlScheduleProps = {}) => {
    const userAuthority = useUserAuthority()
    
    // Module Logging - wird automatisch Success/Error loggen
    useModuleLogging('Terminplanung', isLoading, error, 'Kontrollzentrum', false, { eventList: true })
    
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        dayjs().toDate(),
    )
    const [createdEventCache, setCreatedEventCache] = useState<
        Record<string, ScheduledEvent[]>
    >({})

    const eventList = useMemo(() => {
        const date = selectedDate
        const previousCreatedEvent =
            createdEventCache[dayjs(date).toISOString()] || []
        const eventList = [
            ...eventGenerator(date as Date),
            ...previousCreatedEvent,
        ]

        return eventList.sort((a, b) => {
            if (!a.time && !b.time) {
                return 0
            }
            if (!a.time) {
                return 1
            }
            if (!b.time) {
                return -1
            }
            return a.time.getTime() - b.time.getTime()
        })
    }, [selectedDate, createdEventCache])

    const handleCreateEvent = (value: CreateEventPayload & { id: string }) => {
        const payload = {
            id: value.id,
            label: value.label,
            type: value.type,
            time: dayjs(selectedDate)
                .set('hour', value.time)
                .set('minute', 0)
                .toDate(),
        }
        setCreatedEventCache((prevRecord) => {
            if (prevRecord[dayjs(selectedDate).toISOString()]) {
                prevRecord[dayjs(selectedDate).toISOString()].push(payload)
            } else {
                prevRecord[dayjs(selectedDate).toISOString()] = [payload]
            }

            return structuredClone(prevRecord)
        })
    }

    return (
        <Card>
            <div className="flex flex-col lg:flex-row 2xl:flex-col gap-4 lg:gap-6 2xl:gap-4">
                <div className="flex items-center justify-center w-full lg:w-auto lg:min-w-[280px] 2xl:w-full">
                    <div className="w-full max-w-[280px] min-h-[327px] max-h-[327px]">
                        <Calendar
                            value={selectedDate}
                            onChange={(val) => {
                                setSelectedDate(val)
                            }}
                        />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="mb-4 lg:mb-6">
                        <h5 className="text-lg font-semibold">
                            {isToday(selectedDate as Date)
                                ? 'Heute'
                                : 'Am ' + dayjs(selectedDate).format('D.M')}
                        </h5>
                    </div>
                    <div className="w-full">
                        <ScrollBar className="overflow-y-auto sm:h-[150px] lg:h-[200px] 2xl:h-[127px]">
                            <div className="flex flex-col gap-3 sm:gap-4 pr-2">
                                {eventList.length > 0 ? (
                                    eventList.map((event) => (
                                        <ScheduledEvent key={event.id} {...event} />
                                    ))
                                ) : (
                                    <div className="text-gray-500 text-center py-8">
                                        Keine Termine an diesem Tag.
                                    </div>
                                )}
                            </div>
                        </ScrollBar>
                    </div>
                </div>
            </div>
            <div className="mt-4 sm:mt-6 min-h-[48px] flex items-center justify-center">
                <AuthorityCheck 
                    authority={[...COMP_AUTH_KONTROLLZENTRUM.component_ControlScheduleCreate]} 
                    userAuthority={userAuthority}
                    noMatch={
                        <Button
                            block
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
                    <ControlScheduleCreate onCreateEvent={handleCreateEvent} />
                </AuthorityCheck>
            </div>
        </Card>
    )
}

export default ControlSchedule
