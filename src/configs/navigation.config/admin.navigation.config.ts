import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const adminNavigationConfig: NavigationTree[] = [
    {
        // ! Administration
        key: 'admin',
        path: '',
        title: 'Administration',
        translateKey: 'nav.admin',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            // ! Einstellungen
            {
                key: 'admin.settings',
                path: '/Administration/Einstellungen',
                title: 'Einstellungen',
                translateKey: 'nav.admin.settings',
                icon: 'settings',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN],
                subMenu: [],
            },
        ]
    },
]

export default adminNavigationConfig
