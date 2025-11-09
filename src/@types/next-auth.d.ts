import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'
import { AccountInformation, AccountIdentifier, AccountStatus, AccountMisc, AccountStatistics } from './account'

declare module 'next-auth' {
    interface Session {
        user: {
            id: string
            lastName: string
            authority: string[]
            accountInformation: AccountInformation
            accountIdentifier: AccountIdentifier // Debug only
            accountStatus: AccountStatus // Debug only
            accountMisc: AccountMisc // Debug only
            accountStatistics: AccountStatisticsccountStatistics // Debug only
        } & DefaultSession['user']
    }

    interface User extends DefaultUser {
        lastName: string
        authority: string[]
        accountInformation: AccountInformation
        accountIdentifier: AccountIdentifier // Debug only
        accountStatus: AccountStatus // Debug only
        accountMisc: AccountMisc // Debug only
        accountStatistics: AccountStatistics // Debug only
    }
}

declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        lastName: string
        authority: string[]
        accountInformation: AccountInformation
        accountIdentifier: AccountIdentifier // Debug only
        accountStatus: AccountStatus // Debug only
        accountMisc: AccountMisc // Debug only
        accountStatistics: AccountStatistics // Debug only
    }
}