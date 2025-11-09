// ! Metrics
export type Period = | 'thisDay' | 'thisWeek' | 'thisMonth' | 'thisYear'

export type MetricsData = Record<
    'arrests' | 'seizedWeapons' | 'seizedDrugs' | 'freedHostages',
    {
        value: number
        growShrink: number
    }
>

// ! Personnel
export type PersonnelData = Record<
    'officers' | 'agents' | 'medics',
    {
        active: number
        total: number
    }
>

export type ControlDashboardData = Record<
    Period,
    {
        metrics: MetricsData
    }
> & {
    recentActivity: Activities
    personnel: PersonnelData
}

// ! Recent Activity
export type Activities = Array<{
    type: string
    dateTime: number
    ticket?: string
    status?: number
    userName: string
    userImg?: string
    comment?: string
    tags?: string[]
    files?: string[]
    assignee?: string
}>

// ! Schedule
export type Event =
    | 'meeting'
    | 'operation'
    | 'training'
    | 'examination'
    | 'raid'
    | 'transport'
    | 'convoy'