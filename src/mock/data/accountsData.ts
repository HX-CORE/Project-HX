export const profileData = {
    id: '1',
    name: 'Cyko Emerson',
    firstName: 'Cyko',
    lastName: 'Emerson',
    email: 'cyko-emerson@hx.com',
    img: '/img/avatars/cyko-emerson.png',
    location: 'Vice City, US',
    address: '500 First Street',
    postcode: '50680',
    city: 'Vice City',
    country: 'US',
    dialCode: '+1',
    birthday: '04/02/2000',
    phoneNumber: '+55-555-555555',
}

export const notificationSettingsData = {
    desktop: false,
    unreadMessageBadge: false,
    email: [],
    notifymeAbout: 'allNew',
}

export const roleGroupsData = [
    {
        id: 'admin',
        name: 'Admin',
        description:
            'Full access to all functionalities and settings. Can manage users, roles, and configurations.',
        users: [],
        accessRight: {
        },
    },
    {
        id: 'supervisor',
        name: 'Supervisor',
        description:
            'Oversees operations and users. Can view reports and has limited configuration access.',
        users: [],
        accessRight: {
            users: ['write', 'read'],
            products: ['write', 'read'],
            configurations: ['write', 'read'],
            files: ['write', 'read'],
            reports: ['read'],
        },
    },
    {
        id: 'support',
        name: 'Support',
        description:
            'Provides technical assistance. Can access user accounts and system reports for diagnostics.',
        users: [],
        accessRight: {
            users: ['read'],
            products: ['write', 'read'],
            configurations: ['read'],
            files: ['write', 'read'],
            reports: ['read'],
        },
    },
    {
        id: 'user',
        name: 'User',
        description:
            'Access to basic features necessary for tasks. Limited administrative privileges.',
        users: [],
        accessRight: {
            users: [],
            products: ['read'],
            configurations: [],
            files: ['write', 'read'],
            reports: [],
        },
    },
    {
        id: 'auditor',
        name: 'Auditor',
        description:
            'Reviews system activities. Can access reports, but cannot make changes.',
        users: [],
        accessRight: {
            users: ['read'],
            products: ['read'],
            configurations: [],
            files: ['read'],
            reports: ['read'],
        },
    },
    {
        id: 'guest',
        name: 'Guest',
        description:
            'Temporary access to limited features. Ideal for visitors or temporary users.',
        users: [],
        accessRight: {
            users: [],
            products: ['read'],
            configurations: [],
            files: [],
            reports: [],
        },
    },
]