export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    locale: string
    activeNavTranslation: boolean
}

const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/Kontrollzentrum',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'de',
    activeNavTranslation: false,
}

export default appConfig
