import { ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const internalRoute: Routes = {
    // ! Beamte
    '/Intern/Beamte': {
        key: 'internal.officers',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Fuhrpark
    '/Intern/Fuhrpark': {
        key: 'internal.garage',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Asservatenkammer
    '/Intern/Asservatenkammer': {
        key: 'internal.evidenceRoom',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Termine
    '/Intern/Termine': {
        key: 'internal.appointments',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
}

export default internalRoute
