import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN, LEADER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const leaderNavigationConfig: NavigationTree[] = [
    {
        // ! Leaderschaft
        key: 'leadership',
        path: '',
        title: 'Leaderschaft',
        translateKey: 'nav.leadership',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, LEADER],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            // ! Einstellungen
            {
                key: 'leadership.settings',
                path: '/Leaderschaft/Einstellungen',
                title: 'Einstellungen',
                translateKey: 'nav.leadership.settings',
                icon: 'settings',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER],
                subMenu: [],
            },
        ]
    },
]

export default leaderNavigationConfig
