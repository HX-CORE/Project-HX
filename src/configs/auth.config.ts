import type { NextAuthConfig } from 'next-auth'
import validateCredential from '../server/actions/user/validateCredential'
import Credentials from 'next-auth/providers/credentials'

import type { SignInCredential } from '@/@types/auth'

import { 
  SESSION_INACTIVITY_TIMEOUT as INACTIVITY_TIME, 
  SESSION_JWT_UPDATE_INTERVAL as JWT_UPDATE_TIME 
} from '@/constants/auth.constant'

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                /** Validate credentials from backend here */
                const user = await validateCredential(
                    credentials as SignInCredential,
                )
                if (!user) {
                    return null
                }
                console.log('user', user)
                return {
                    id: user.id,
                    name: user.userName,
                    lastName: user.lastName,
                    email: user.email,
                    image: user.avatar,
                    authority: user.authority,
                    accountInformation: user.accountInformation,
                    accountIdentifier: user.accountIdentifier, // Debug only
                    accountStatus: user.accountStatus, // Debug only
                    accountMisc: user.accountMisc, // Debug only
                    accountStatistics: user.accountStatistics, // Debug only
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: INACTIVITY_TIME,
        updateAge: JWT_UPDATE_TIME,
    },
    callbacks: {
        async jwt({ token, user }) {
            // Persist the authority to the token right after signin
            if (user) {
                token.authority = user.authority
                token.lastName = user.lastName
                token.accountInformation = user.accountInformation
                token.accountIdentifier = user.accountIdentifier // Debug only
                token.accountStatus = user.accountStatus // Debug only
                token.accountMisc = user.accountMisc // Debug only
                token.accountStatistics = user.accountStatistics // Debug only
            }
            return token
        },
        async session({ session, token }) {
            // Send properties to the client
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                    lastName: token.lastName,
                    authority: token.authority,
                    accountInformation: token.accountInformation,
                    accountIdentifier: token.accountIdentifier, // Debug only
                    accountStatus: token.accountStatus, // Debug only
                    accountMisc: token.accountMisc, // Debug only
                    accountStatistics: token.accountStatistics, // Debug only
                },
            }
        },
    }
} satisfies NextAuthConfig
