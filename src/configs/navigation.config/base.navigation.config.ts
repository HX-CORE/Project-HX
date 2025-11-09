import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const controlNavigationConfig: NavigationTree[] = [
    {
        // ! Dashboard
        key: 'base',
        path: '',
        title: 'Dashboard',
        translateKey: '',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            // ! Kontrollzentrum
            {
                key: 'base.controlCenter',
                path: '/Kontrollzentrum',
                title: 'Kontrollzentrum',
                translateKey: 'nav.base.controlCenter',
                icon: 'control',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
            // ! Leitstelle
            {
                key: 'base.dutySheet',
                path: '/Leitstelle',
                title: 'Leitstelle',
                translateKey: 'nav.base.dutySheet',
                icon: 'police',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
        ]
    },
]

export default controlNavigationConfig
