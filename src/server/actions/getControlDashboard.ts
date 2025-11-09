import { controlsData } from '@/mock/data/controlDashboardData'

async function getControlDashboard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return controlsData as any
}

export default getControlDashboard
