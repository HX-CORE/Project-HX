import {
    ROOT,
    INTERNAL_PREFIX_PATH,
    DATABASE_PREFIX_PATH,
} from '@/constants/route.constant'

/**
 * 
 *   id: string (uuid)
 *   target: string (empty = system message / name = user name)
 *   description: string (message)
 *   date: string
 *   image: string
 *   type: number
 *   location: string
 *   locationLabel: string
 *   status: string
 *   readed: boolean
 * 
 */

export const notificationListData = [
    {
        id: 'e5ee8e78-050d-40e6-8b35-bedb6733e1e8',
        target: '',
        description: 'Du wurdest dem Dienst suspendiert.',
        date: 'Vor einigen Sekunden',
        image: '',
        type: 3,
        location: '/soon',
        locationLabel: '',
        status: 'succeed',
        readed: false,
    },
    {
        id: 'e55adc24-1803-4ffd-b653-09be273f8df5',
        target: 'Steven Schneefeld',
        description: 'Hat einen Beitrag von dir kommentiert.',
        date: 'Vor 5 Minuten',
        image: `${ROOT}/steven-schneefeld.gif`,
        type: 0,
        location: '/profile/steven-schneefeld',
        locationLabel: 'Kommentarfeld',
        status: '',
        readed: false,
    },
    {
        id: 'b06ca3f5-8fb0-4979-a016-30dfe63e8fd6',
        target: '',
        description: 'Bitte übergebe deinen wöchentlichen Bericht.',
        date: 'Vor 12 Minuten',
        image: '',
        type: 1,
        location: '/soon',
        locationLabel: 'Einsatzberichte',
        status: 'failed',
        readed: false,
    },
    {
        id: 'f96bec14-3dc2-4cb3-8ea7-9b30594e5096',
        target: '',
        description: 'Deine Anfrage zum erfrühten Uprank wurde akzeptiert.',
        date: 'Vor 25 Minuten',
        image: '',
        type: 2,
        location: '/soon',
        locationLabel: 'Dienstanfragen',
        status: 'succeed',
        readed: false,
    },
    {
        id: '53b838ab-2314-4931-a643-9116a77df9df',
        target: '',
        description: 'Deine Ermittlung zum Fall 5922 wurde eingestellt.',
        date: 'Vor 8 Stunden',
        image: '',
        type: 2,
        location: '/soon',
        locationLabel: 'Dienstanfragen',
        status: 'failed',
        readed: true,
    },
]

export const searchQueryPoolData = [
    // ! Kontrollzentrum
    {
        key: 'base.controlCenter',
        path: `./${ROOT}/Kontrollzentrum`,
        title: 'Kontrollzentrum',
        icon: 'control',
        category: 'Dashboard',
        categoryTitle: 'Dashboard',
    },
    // ! Leitstelle
    {
        key: 'base.dutySheet',
        path: `./${ROOT}/Leitstelle`,
        title: 'Leitstelle',
        icon: 'police',
        category: 'Dashboard',
        categoryTitle: 'Dashboard',
    },
    // ! Beamte
    {
        key: 'internal.officers',
        path: `./${INTERNAL_PREFIX_PATH}/Beamte`,
        title: 'Beamte',
        icon: 'official',
        category: 'Internal',
        categoryTitle: 'Intern',
    },
    // ! Fuhrpark
    {
        key: 'internal.garage',
        path: `./${INTERNAL_PREFIX_PATH}/Fuhrpark`,
        title: 'Fuhrpark',
        icon: 'garage',
        category: 'Internal',
        categoryTitle: 'Intern',
    },
    // ! Asservatenkammer
    {
        key: 'internal.evidenceRoom',
        path: `./${INTERNAL_PREFIX_PATH}/Asservatenkammer`,
        title: 'Asservatenkammer',
        icon: 'evidence',
        category: 'Internal',
        categoryTitle: 'Intern',
    },
    // ! Akten
    {
        key: 'database.acts',
        path: `./${DATABASE_PREFIX_PATH}/Akten`,
        title: 'Akten',
        icon: 'acts',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Strafanzeigen
    {
        key: 'database.reports',
        path: `./${DATABASE_PREFIX_PATH}/Strafanzeigen`,
        title: 'Strafanzeigen',
        icon: 'reports',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Organisationen
    {
        key: 'database.register.organizations',
        path: `./${DATABASE_PREFIX_PATH}/Register/Organisationen`,
        title: 'Organisationen',
        icon: 'organization',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Personen
    {
        key: 'database.register.person',
        path: `./${DATABASE_PREFIX_PATH}/Register/Personen`,
        title: 'Personen',
        icon: 'personal',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Fahrzeuge
    {
        key: 'database.register.vehicle',
        path: `./${DATABASE_PREFIX_PATH}/Register/Fahrzeuge`,
        title: 'Fahrzeuge',
        icon: 'car',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Helikoperter
    {
        key: 'database.register.helicopter',
        path: `./${DATABASE_PREFIX_PATH}/Register/Helikopter`,
        title: 'Helikopter',
        icon: 'helicopter',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Flugzeuge
    {
        key: 'database.register.airplane',
        path: `./${DATABASE_PREFIX_PATH}/Register/Flugzeuge`,
        title: 'Flugzeuge',
        icon: 'airplane',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Waffen
    {
        key: 'database.register.weapon',
        path: `./${DATABASE_PREFIX_PATH}/Register/Waffen`,
        title: 'Waffen',
        icon: 'weapon',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Stadtteile
    {
        key: 'database.register.location.district',
        path: `./${DATABASE_PREFIX_PATH}/Register/Orte/Stadtteile`,
        title: 'Stadtteile',
        icon: 'location',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Anwesen
    {
        key: 'database.register.location.headquarters',
        path: `./${DATABASE_PREFIX_PATH}/Register/Orte/Anwesen`,
        title: 'Anwesen',
        icon: 'location',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Dealer
    {
        key: 'database.register.location.dealer',
        path: `./${DATABASE_PREFIX_PATH}/Register/Orte/Dealer`,
        title: 'Dealer',
        icon: 'location',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Werkstation
    {
        key: 'database.register.location.workstation',
        path: `./${DATABASE_PREFIX_PATH}/Register/Orte/Werkstation`,
        title: 'Werkstation',
        icon: 'location',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Shops
    {
        key: 'database.register.location.shop',
        path: `./${DATABASE_PREFIX_PATH}/Register/Orte/Shops`,
        title: 'Shops',
        icon: 'location',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! Staatliche Einrichtungen
    {
        key: 'database.register.location.state',
        path: `./${DATABASE_PREFIX_PATH}/Register/Orte/Staatliche-Einrichtungen`,
        title: 'Staatliche Einrichtungen',
        icon: 'location',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! StGB - Strafgesetzbuch
    {
        key: 'database.laws.stgb',
        path: `./${DATABASE_PREFIX_PATH}/Gesetze/StGB`,
        title: 'StGB - Strafgesetzbuch',
        icon: 'law',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! BtmG - Betäubungsmittelgesetz
    {
        key: 'database.laws.btmg',
        path: `./${DATABASE_PREFIX_PATH}/Gesetze/BtmG`,
        title: 'BtmG - Betäubungsmittelgesetz',
        icon: 'law',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! WaffG - Waffengesetz
    {
        key: 'database.laws.waffg',
        path: `./${DATABASE_PREFIX_PATH}/Gesetze/WaffG`,
        title: 'WaffG - Waffengesetz',
        icon: 'law',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
    // ! StVO - Straßenverkehrsordnung
    {
        key: 'database.laws.stvo',
        path: `./${DATABASE_PREFIX_PATH}/Gesetze/StVO`,
        title: 'StVO - Straßenverkehrsordnung',
        icon: 'law',
        category: 'Database',
        categoryTitle: 'Datenbank',
    },
]