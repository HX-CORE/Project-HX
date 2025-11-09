import baseNavigationConfig from './base.navigation.config'
import controlNavigationConfig from './internal.navigation.config'
import datasetsNavigationConfig from './database.navigation.config'
import unitNavigationConfig from './unit.navigation.config'
import leaderNavigationConfig from './leader.navigation.config'
import adminNavigationConfig from './admin.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    ...baseNavigationConfig,
    ...controlNavigationConfig,
    ...datasetsNavigationConfig,
    ...unitNavigationConfig,
    ...leaderNavigationConfig,
    ...adminNavigationConfig
]

export default navigationConfig
