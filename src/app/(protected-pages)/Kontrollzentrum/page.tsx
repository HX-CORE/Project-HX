import ControlDashboard from './_components/ControlDashboard'
import getControlDashboard from '@/server/actions/getControlDashboard'

export default async function Page() {
    const data = await getControlDashboard()

    return <ControlDashboard data={data} />
}