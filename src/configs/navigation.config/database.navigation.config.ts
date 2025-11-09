import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const databaseNavigationConfig: NavigationTree[] = [
    {
        // ! Datenbank
        key: 'database',
        path: '',
        title: 'Datenbank',
        translateKey: 'nav.database',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            // ! Akten
            {
                key: 'database.acts',
                path: 'Datenbank/Akten',
                title: 'Akten',
                translateKey: 'nav.database.acts',
                icon: 'acts',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: []
            },
            // ! Strafanzeigen
            {
                key: 'database.reports',
                path: 'Datenbank/Strafanzeigen',
                title: 'Strafanzeigen',
                translateKey: 'nav.database.reports',
                icon: 'reports',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: []
            },
            // ! Register
            {
                key: 'database.register',
                path: 'Datenbank/Register',
                title: 'Register',
                translateKey: 'nav.database.register',
                icon: 'register',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [
                    // ! Organisationen
                    {
                        key: 'database.organizations',
                        path: 'Datenbank/Organisationen',
                        title: 'Organisationen',
                        translateKey: 'nav.database.register.organizations',
                        icon: 'organization',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! Personen
                    {
                        key: 'database.register.person',
                        path: 'Datenbestande/Register/Personen',
                        title: 'Personen',
                        translateKey: 'nav.database.register.person',
                        icon: 'personal',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! Fahrzeuge
                    {
                        key: 'database.register.vehicle',
                        path: 'Datenbank/Register/Fahrzeuge',
                        title: 'Fahrzeuge',
                        translateKey: 'nav.database.register.vehicle',
                        icon: 'car',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! Helikopter
                    {
                        key: 'database.register.helicopter',
                        path: 'Datenbank/Register/Helikopter',
                        title: 'Helikopter',
                        translateKey: 'nav.database.register.helicopter',
                        icon: 'helicopter',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! Flugzeug
                    {
                        key: 'database.register.airplane',
                        path: 'Datenbank/Register/Flugzeuge',
                        title: 'Flugzeuge',
                        translateKey: 'nav.database.register.airplane',
                        icon: 'airplane',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! Waffen
                    {
                        key: 'database.register.weapon',
                        path: 'Datenbank/Register/Waffen',
                        title: 'Waffen',
                        translateKey: 'nav.database.register.weapon',
                        icon: 'weapon',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! Orte
                    {
                        key: 'database.register.location',
                        path: 'Datenbank/Register/Orte',
                        title: 'Orte',
                        translateKey: 'nav.database.register.location',
                        icon: 'location',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [
                            // ! Stadtteil
                            {
                                key: 'database.register.location.district',
                                path: 'Datenbank/Register/Orte/Stadtteile',
                                title: 'Stadtteile',
                                translateKey: 'nav.database.register.location.district',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                            // ! Anwesen
                            {
                                key: 'database.register.location.headquarters',
                                path: 'Datenbank/Register/Orte/Anwesen',
                                title: 'Anwesen',
                                translateKey: 'nav.database.register.location.headquarters',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                            // ! Dealer
                            {
                                key: 'database.register.location.dealer',
                                path: 'Datenbank/Register/Orte/Dealer',
                                title: 'Dealer',
                                translateKey: 'nav.database.register.location.dealer',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                            // ! Werkstation
                            {
                                key: 'database.register.location.workstation',
                                path: 'Datenbank/Register/Orte/Werkstation',
                                title: 'Werkstation',
                                translateKey: 'nav.database.register.location.workstation',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                            // ! Ressourcen
                            {
                                key: 'database.register.location.resource',
                                path: 'Datenbank/Register/Orte/Ressourcen',
                                title: 'Ressourcen',
                                translateKey: 'nav.database.register.location.resource',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                            // ! Shops
                            {
                                key: 'database.register.location.shop',
                                path: 'Datenbank/Register/Orte/Shops',
                                title: 'Shops',
                                translateKey: 'nav.database.register.location.shop',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                            // ! Staatliche Einrichtungen
                            {
                                key: 'database.register.location.state',
                                path: 'Datenbank/Register/Orte/Staatliche-Einrichtungen',
                                title: 'Staatliche Einrichtungen',
                                translateKey: 'nav.database.register.location.state',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                                subMenu: [],
                            },
                        ],
                    }
                ]
            },
            // ! Gesetze
            {
                key: 'database.laws',
                path: 'Datenbank/Gesetze',
                title: 'Gesetze',
                translateKey: 'nav.database.laws',
                icon: 'law',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [
                    // ! StGB - Strafgesetzbuch
                    {
                        key: 'database.laws.stgb',
                        path: 'Datenbank/Gesetze/StGB',
                        title: '§ StGB',
                        translateKey: 'nav.database.laws.stgb',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! BtmG - Betäubungsmittelgesetz
                    {
                        key: 'database.laws.btmg',
                        path: 'Datenbank/Gesetze/BtmG',
                        title: '§ BtmG',
                        translateKey: 'nav.database.laws.btmg',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! WaffG - Waffengesetz
                    {
                        key: 'database.laws.waffg',
                        path: 'Datenbank/Gesetze/WaffG',
                        title: '§ WaffG',
                        translateKey: 'nav.database.laws.waffg',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                    // ! StVO - Straßenverkehrsordnung
                    {
                        key: 'database.laws.stvo',
                        path: 'Datenbank/Gesetze/StVO',
                        title: '§ StVO',
                        translateKey: 'nav.database.laws.stvo',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                        subMenu: [],
                    },
                ]
            },
        ]
    },
]

export default databaseNavigationConfig
