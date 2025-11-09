import { ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const databaseRoute: Routes = {
    // ! Akten
    '/Datenbank/Akten': {
        key: 'database.acts',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Strafanzeigen
    '/Datenbank/Strafanzeigen': {
        key: 'database.reports',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Register
    '/Datenbank/Register': {
        key: 'database.register',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Organisationen
    '/Datenbank/Register/Organisationen': {
        key: 'database.register.organizations',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Personen
    '/Datenbank/Register/Personen': {
        key: 'database.register.person',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Fahrzeuge
    '/Datenbank/Register/Fahrzeuge': {
        key: 'database.register.vehicle',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Helikopter
    '/Datenbank/Register/Helikopter': {
        key: 'database.register.helicopter',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Flugzeuge
    '/Datenbank/Register/Flugzeuge': {
        key: 'database.register.airplane',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Waffen
    '/Datenbank/Register/Waffen': {
        key: 'database.register.weapon',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Orte
    '/Datenbank/Register/Orte': {
        key: 'database.register.location',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Stadtteil
    '/Datenbank/Register/Orte/Stadtteile': {
        key: 'database.register.location.district',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Anwesen
    '/Datenbank/Register/Orte/Anwesen': {
        key: 'database.register.location.headquarters',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Dealer
    '/Datenbank/Register/Orte/Dealer': {
        key: 'database.register.location.dealer',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Werkstation
    '/Datenbank/Register/Orte/Werkstation': {
        key: 'database.register.location.workstation',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Ressourcen
    '/Datenbank/Register/Orte/Ressourcen': {
        key: 'database.register.location.resource',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Shops
    '/Datenbank/Register/Orte/Shops': {
        key: 'database.register.location.shop',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Staatliche Einrichtungen
    '/Datenbank/Register/Orte/Staatliche-Einrichtungen': {
        key: 'database.register.location.state',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! Gesetze
    '/Datenbank/Gesetze': {
        key: 'database.laws',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! StGB - Strafgesetzbuch
    '/Datenbank/Gesetze/StGB': {
        key: 'database.laws.stgb',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! BtmG - Betäubungsmittelgesetz
    '/Datenbank/Gesetze/BtmG': {
        key: 'database.laws.btmg',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! WaffG - Waffengesetz
    '/Datenbank/Gesetze/WaffG': {
        key: 'database.laws.waffg',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
    // ! StVO - Straßenverkehrsordnung
    '/Datenbank/Gesetze/StVO': {
        key: 'database.laws.stvo',
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
}

export default databaseRoute
