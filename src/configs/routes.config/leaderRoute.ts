import { ADMIN, LEADER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const leaderRoute: Routes = {
    '/Leaderschaft/Einstellungen': {
        key: 'leadership.settings',
        authority: [ADMIN, LEADER],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
}

export default leaderRoute
