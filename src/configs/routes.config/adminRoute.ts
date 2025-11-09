import { ADMIN } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const adminRoute: Routes = {
    '/Administration/Einstellungen': {
        key: 'admin.settings',
        authority: [ADMIN],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
}

export default adminRoute
