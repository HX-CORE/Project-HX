import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN, LEADER, PERSONNEL_DIVISION, TRAINING_DIVISION, CRIMINAL_DIVISION, INTERNAL_AFFAIRS, SWAT} from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const unitNavigationConfig: NavigationTree[] = [
    {
        // ! Abteilungen
        key: 'units',
        path: '',
        title: 'Abteilungen',
        translateKey: 'nav.units',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, LEADER, PERSONNEL_DIVISION, TRAINING_DIVISION, INTERNAL_AFFAIRS, CRIMINAL_DIVISION, SWAT],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            // ! Personalabteilung
            {
                key: 'units.personnal',
                path: '',
                title: 'Personalabteilung',
                translateKey: 'nav.internal.controlCenter',
                icon: 'personal',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                subMenu: [
                    // ! Beamte
                    {
                        key: 'units.personnal.manageUser',
                        path: '',
                        title: 'Beamte',
                        translateKey: 'nav.units.personnal.manageUser',
                        icon: 'official',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                        subMenu: [
                            // ! Bearbeiten
                            {
                                key: 'units.personnal.manageUser.editUser',
                                path: '/Abteilungen/Personalabteilung/Beamte/Bearbeiten',
                                title: 'Bearbeiten',
                                translateKey: 'nav.units.personnal.manageUser.editUser',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                            // ! Befördern
                            {
                                key: 'units.personnal.manageUser.promoteUser',
                                path: '/Abteilungen/Personalabteilung/Beamte/Befördern',
                                title: 'Befördern',
                                translateKey: 'nav.units.personnal.manageUser.promoteUser',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                            // ! Degradieren
                            {
                                key: 'units.personnal.manageUser.degradeUser',
                                path: '/Abteilungen/Personalabteilung/Beamte/Degradierung',
                                title: 'Degradieren',
                                translateKey: 'nav.units.personnal.manageUser.degradeUser',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                            // ! Einstellen
                            {
                                key: 'units.personnal.manageUser.addUser',
                                path: '/Abteilungen/Personalabteilung/Beamte/Einstellung',
                                title: 'Einstellen',
                                translateKey: 'nav.units.personnal.manageUser.addUser',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                            // ! Sanktionieren
                            {
                                key: 'units.personnal.manageUser.sanctionUser',
                                path: '/Abteilungen/Personalabteilung/Beamte/Sanktionierung',
                                title: 'Sanktionieren',
                                translateKey: 'nav.units.personnal.manageUser.sanctionUser',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                            // ! Entlassen
                            {
                                key: 'units.personnal.manageUser.removeUser',
                                path: '/Abteilungen/Personalabteilung/Beamte/Entlassen',
                                title: 'Entlassen',
                                translateKey: 'nav.units.personnal.manageUser.removeUser',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                        ]
                    },
                    // ! Dokumente
                    {
                        key: 'units.personnal.manageDocument',
                        path: '',
                        title: 'Dokumente',
                        translateKey: 'nav.units.personnal.manageDocument',
                        icon: 'document',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                        subMenu: [
                            // ! Browser
                            {
                                key: 'units.personnal.manageDocument.browserDocument',
                                path: '/Abteilungen/Personalabteilung/Dokumente/Browser',
                                title: 'Browser',
                                translateKey: 'nav.units.personnal.manageDocument.browserDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                            // ! Editor
                            {
                                key: 'units.personnal.manageDocument.addDocument',
                                path: '/Abteilungen/Personalabteilung/Dokumente/Editor',
                                title: 'Editor',
                                translateKey: 'nav.units.personnal.manageDocument.addDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
                                subMenu: []
                            },
                        ]
                    },
                ]
            },
            // ! Dienstaufsicht
            {
                key: 'units.supervision',
                path: '/Abteilungen/Dienstaufsicht',
                title: 'Dienstaufsicht',
                translateKey: 'nav.units.supervision',
                icon: 'supervision',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, INTERNAL_AFFAIRS],
                subMenu: [
                    // ! Dokumente
                    {
                        key: 'units.supervision.manageDocument',
                        path: '',
                        title: 'Dokumente',
                        translateKey: 'nav.units.personnal.manageDocument',
                        icon: 'document',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, INTERNAL_AFFAIRS],
                        subMenu: [
                            // ! Browser
                            {
                                key: 'units.supervision.manageDocument.browserDocument',
                                path: '/Abteilungen/Dienstaufsicht/Dokumente/Browser',
                                title: 'Browser',
                                translateKey: 'nav.units.supervision.manageDocument.browserDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, INTERNAL_AFFAIRS],
                                subMenu: []
                            },
                            // ! Editor
                            {
                                key: 'units.supervision.manageDocument.addDocument',
                                path: '/Abteilungen/Dienstaufsicht/Dokumente/Editor',
                                title: 'Editor',
                                translateKey: 'nav.units.supervision.manageDocument.addDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, INTERNAL_AFFAIRS],
                                subMenu: []
                            },
                        ]
                    },
                ]
            },
            // ! Criminal Division
            {
                key: 'units.criminal',
                path: '/Abteilungen/Criminal-Division',
                title: 'Criminal Division',
                translateKey: 'nav.units.criminalDivision',
                icon: 'criminal',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, CRIMINAL_DIVISION],
                subMenu: [
                    // ! Dokumente
                    {
                        key: 'units.criminal.manageDocument',
                        path: '',
                        title: 'Dokumente',
                        translateKey: 'nav.units.personnal.manageDocument',
                        icon: 'document',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, CRIMINAL_DIVISION],
                        subMenu: [
                            // ! Browser
                            {
                                key: 'units.criminal.manageDocument.browserDocument',
                                path: '/Abteilungen/Criminal-Division/Dokumente/Browser',
                                title: 'Browser',
                                translateKey: 'nav.units.criminal.manageDocument.browserDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, CRIMINAL_DIVISION],
                                subMenu: []
                            },
                            // ! Editor
                            {
                                key: 'units.criminal.manageDocument.addDocument',
                                path: '/Abteilungen/Criminal-Division/Dokumente/Editor',
                                title: 'Editor',
                                translateKey: 'nav.units.criminal.manageDocument.addDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, CRIMINAL_DIVISION],
                                subMenu: []
                            },
                        ]
                    },
                ]
            },
            // ! SWAT
            {
                key: 'units.swat',
                path: '/Abteilungen/SWAT',
                title: 'S.W.A.T',
                translateKey: 'nav.units.swat',
                icon: 'swat',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, SWAT],
                subMenu: [
                    // ! Dokumente
                    {
                        key: 'units.swat.manageDocument',
                        path: '',
                        title: 'Dokumente',
                        translateKey: 'nav.units.personnal.manageDocument',
                        icon: 'document',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, SWAT],
                        subMenu: [
                            // ! Browser
                            {
                                key: 'units.swat.manageDocument.browserDocument',
                                path: '/Abteilungen/SWAT/Dokumente/Browser',
                                title: 'Browser',
                                translateKey: 'nav.units.swat.manageDocument.browserDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, SWAT],
                                subMenu: []
                            },
                            // ! Editor
                            {
                                key: 'units.swat.manageDocument.addDocument',
                                path: '/Abteilungen/SWAT/Dokumente/Editor',
                                title: 'Editor',
                                translateKey: 'nav.units.swat.manageDocument.addDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, SWAT],
                                subMenu: []
                            },
                        ]
                    },
                ]
            },
            // ! Ausbildungsabteilung
            {
                key: 'units.trainingDivision',
                path: '',
                title: 'Ausbildung',
                translateKey: 'nav.units.trainingDivision',
                icon: 'school',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, LEADER, TRAINING_DIVISION],
                subMenu: [
                    // ! Dokumente
                    {
                        key: 'units.training.manageDocument',
                        path: '',
                        title: 'Dokumente',
                        translateKey: 'nav.units.trainingDevision.manageDocument',
                        icon: 'document',
                        type: NAV_ITEM_TYPE_COLLAPSE,
                        authority: [ADMIN, LEADER, TRAINING_DIVISION],
                        subMenu: [
                            // ! Browser
                            {
                                key: 'units.training.manageDocument.browserDocument',
                                path: '/Abteilungen/Ausbildungsabteilung/Dokumente/Browser',
                                title: 'Browser',
                                translateKey: 'nav.units.trainingDevision.manageDocument.browserDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, TRAINING_DIVISION],
                                subMenu: []
                            },
                            // ! Editor
                            {
                                key: 'units.training.manageDocument.addDocument',
                                path: '/Abteilungen/Ausbildungsabteilung/Dokumente/Editor',
                                title: 'Editor',
                                translateKey: 'nav.units.trainingDevision.manageDocument.addDocument',
                                icon: '',
                                type: NAV_ITEM_TYPE_ITEM,
                                authority: [ADMIN, LEADER, TRAINING_DIVISION],
                                subMenu: []
                            },
                        ]
                    },
                ],
            },
        ]
    }
]

export default unitNavigationConfig
