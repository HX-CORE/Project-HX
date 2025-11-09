export type AccountInformation = {
    rank: string
    unit: string[]
    qualification: string[]
}

export type AccountIdentifier = {
    discordId: string
    steam64Id: string
}

export type AccountStatus = {
    isOnline: boolean
    isBanned: boolean
    isSuspended: boolean
    isBlocked: boolean
    isActivated: boolean
}

export type AccountMisc = {
    createdAt: Date
    updatedAt: Date
    firstLoginAt: Date
    lastLoginAt: Date
    failedLoginAttempts: number
}

export type AccountStatistics = {
    actions: {
        update: number
        insert: number
        delete: number
    }
    system: {
        logins: number
        sessions: number
    }
    occupation: {
        arrests: number
        reportsFiled: number
        seized: {
            weapons: number
            drugs: number
            cash: number
        }
    }
}
