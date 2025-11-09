export const signInUserData = [
    {
        id: '1',
        accountUserName: 'Huntax',
        userName: 'Cyko Emerson',
        lastName: 'Emerson',
        email: 'cyko-emerson@hx.com',
        password: '123',
        avatar: 'https://cdn.discordapp.com/avatars/273137429655846922/2fd734ab9c647cfb67075f27b785a6f8?size=1024',
        authority: [
            'user',
            'leader',
            'high_command',
            'mid_command',
            'low_command',
            'personnel',
            'internal_affairs',
            'criminal_division',
            'swat',
            'training_division',
        ],
        accountInformation: {
            rank: 'Chief',
            unit: [
                'Personalabteilung',
                'Dienstaufsicht',
                'Kriminalabteilung',
                'SWAT',
                'Ausbildung',
            ],
            qualification: [
                'Verhandlungsführung',
                'Einsatzleitung',
                'SWAT-Grundausbildung',
                'Deeskalationstraining',
                'Führungskräftetraining',
            ],
        },
        // ! Not used yet
        accountIdentifier: {
            discordId: '273137429655846922',
            steam64Id: '76561198012345678',
        },
        // ! Not used yet
        accountStatus: {
            isOnline: true,
            isBanned: false,
            isSuspended: false,
            isBlocked: false,
            isActivated: true,
        },
        // ! Not used yet
        accountMisc: {
            createdAt: new Date('2023-11-05T08:22:00Z'),
            updatedAt: new Date('2025-10-12T17:00:00Z'),
            firstLoginAt: new Date('2023-11-05T09:10:00Z'),
            lastLoginAt: new Date('2025-10-12T16:50:00Z'),
            failedLoginAttempts: 0,
        },
        // ! Not used yet
        accountStatistics: {
            actions: {
                update: 238,
                insert: 94,
                delete: 21,
            },
            system: {
                logins: 62,
                sessions: 38,
            },
            occupation: {
                arrests: 253,
                reportsFiled: 29,
                seized: {
                    weapons: 95,
                    drugs: 5825,
                    cash: 95450,
                }
            },
        },
    },
]