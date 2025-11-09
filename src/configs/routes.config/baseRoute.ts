import { ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const baseRoute: Routes = {
    '/Kontrollzentrum': {
        key: 'base.controlCenter',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    '/Leitstelle': {
        key: 'base.dutySheet',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
}

export default baseRoute
