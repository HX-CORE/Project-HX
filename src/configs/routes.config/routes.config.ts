import authRoute from './authRoute'
import baseRoute from './baseRoute'
import internalRoute from './internalRoute'
import databaseRoute from './databaseRoute'
import unitRoute from './unitRoute'
import leaderRoute from './leaderRoute'
import adminRoute from './adminRoute'
// import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const protectedRoutes: Routes = {
    ...baseRoute,
    ...internalRoute,
    ...databaseRoute,
    ...unitRoute,
    ...leaderRoute,
    ...adminRoute
}

export const publicRoutes: Routes = {}

export const authRoutes = authRoute
