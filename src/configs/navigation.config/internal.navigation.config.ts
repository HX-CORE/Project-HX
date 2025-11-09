import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const controlNavigationConfig: NavigationTree[] = [
    {
        // ! Intern
        key: 'internal',
        path: '',
        title: 'Intern',
        translateKey: 'nav.internal',
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
            // ! Beamte
            {
                key: 'internal.officers',
                path: '/Intern/Beamte',
                title: 'Beamte',
                translateKey: 'nav.internal.officers',
                icon: 'official',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
            // ! Fuhrpark
            {
                key: 'internal.garage',
                path: '/Intern/Fuhrpark',
                title: 'Fuhrpark',
                translateKey: 'nav.internal.garage',
                icon: 'garage',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
            // ! Asservatenkammer
            {
                key: 'internal.evidenceRoom',
                path: '/Intern/Asservatenkammer',
                title: 'Asservatenkammer',
                translateKey: 'nav.internal.evidenceRoom',
                icon: 'evidenceRoom',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
            // ! Termine
            {
                key: 'internal.appointments',
                path: '/Intern/Termine',
                title: 'Termine',
                translateKey: 'nav.internal.appointments',
                icon: 'appointments',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
            // ! Kleiderordnung
            {
                key: 'internal.clothingRegulation',
                path: '/Intern/Kleiderordnung',
                title: 'Kleiderordnung',
                translateKey: 'nav.internal.clothingRegulation',
                icon: 'clothingRegulation',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
            // ! Ampel
            {
                key: 'internal.trafficLight',
                path: '/Intern/Ampel',
                title: 'Ampel',
                translateKey: 'nav.internal.trafficLight',
                icon: 'trafficLight',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND],
                subMenu: [],
            },
        ]
    },
]

export default controlNavigationConfig
