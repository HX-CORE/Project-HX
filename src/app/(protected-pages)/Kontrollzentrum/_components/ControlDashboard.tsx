'use client'

import { useState } from 'react'
import ControlHeader from './ControlHeader'
import ControlMetrics from './ControlMetrics'
import RecentActivity from './ControlRecentActivity'
import ControlSchedule from './ControlSchedule'
import ControlPersonnel from './ControlPersonnel'
import type { ControlDashboardData, Period } from '../types'

type ControlDashboardProps = {
    data: ControlDashboardData
}

const ControlDashboard = ({ data }: ControlDashboardProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('thisMonth')

    return (
        <div className="flex flex-col gap-4">
            <ControlHeader
                selectedPeriod={selectedPeriod}
                onSelectedPeriodChange={setSelectedPeriod}
            />
            <div className="flex flex-col 2xl:grid grid-cols-4 gap-4">
                <div className="2xl:col-span-1">
                    <ControlMetrics
                        dataID={[1, 2, 3, 4]}
                        data={data[selectedPeriod].metrics}
                        selectedPeriod={selectedPeriod}
                    />
                </div>
                <div className="2xl:col-span-2 flex flex-col gap-4">
                    <div className="select-none">
                        <ControlPersonnel data={data.personnel} />
                    </div>
                    <div className="">
                        <RecentActivity
                            data={data.recentActivity}
                        />
                    </div>
                </div>
                <div className="2xl:col-span-1">
                    <ControlSchedule />
                </div>
            </div>
        </div>
    )
}

export default ControlDashboard
