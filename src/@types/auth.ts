import { AccountInformation, AccountIdentifier, AccountStatus, AccountMisc, AccountStatistics } from './account'

export type SignInCredential = {
    email: string
    password: string
}

export type SignInResponse = {
    token: string
    user: {
        userId: string
        userName: string
        lastName: string
        authority: string[]
        avatar: string
        email: string
        accountInformation: AccountInformation
        accountIdentifier: AccountIdentifier
        accountStatus: AccountStatus
        accountMisc: AccountMisc
        accountStatistics: AccountStatistics
    }
}

export type SignUpResponse = {
    status: string
    message: string
}

export type SignUpCredential = {
    userName: string
    email: string
    password: string
}

export type ForgotPassword = {
    email: string
}

export type ResetPassword = {
    newPassword: string
    confirmPassword: string
    token: string
}

export type AuthRequestStatus = 'success' | 'failed' | ''

export type AuthResult = Promise<{
    status: AuthRequestStatus
    message: string
}>

export type User = {
    userId?: string | null
    avatar?: string | null
    userName?: string | null
    lastName?: string | null
    email?: string | null
    authority?: string[]
    accountInformation?: AccountInformation
    accountIdentifier?: AccountIdentifier
    accountStatus?: AccountStatus
    accountMisc?: AccountMisc
    accountStatistics?: AccountStatistics
}

export type Token = {
    accessToken: string
    refreshToken?: string
}

export type OauthSignInCallbackPayload = {
    onSignIn: (tokens: Token, user?: User) => void
    redirect: () => void
}
