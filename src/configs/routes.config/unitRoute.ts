import { ADMIN, LEADER, PERSONNEL_DIVISION, INTERNAL_AFFAIRS, CRIMINAL_DIVISION, SWAT, TRAINING_DIVISION } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const unitRoute: Routes = {
    // ! -- Personalabteilung -- \\
        // ! Bearbeiten
        '/Abteilungen/Personalabteilung/Beamte/Bearbeiten': {
            key: 'units.personnal.manageUser.editUser',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Befördern
        '/Abteilungen/Personalabteilung/Beamte/Befördern': {
            key: 'units.personnal.manageUser.promoteUser',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Degradieren
        '/Abteilungen/Personalabteilung/Beamte/Degradieren': {
            key: 'units.personnal.manageUser.degradeUser',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Einstellen
        '/Abteilungen/Personalabteilung/Beamte/Einstellung': {
            key: 'units.personnal.manageUser.addUser',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Sanktionieren
        '/Abteilungen/Personalabteilung/Beamte/Sanktionierung': {
            key: 'units.personnal.manageUser.sanctionUser',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Entlassen
        '/Abteilungen/Personalabteilung/Beamte/Entlassen': {
            key: 'units.personnal.manageUser.removeUser',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Browser
        '/Abteilungen/Personalabteilung/Dokumente/Browser': {
            key: 'units.personnal.manageDocument.browserDocument',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Editor
        '/Abteilungen/Personalabteilung/Dokumente/Editor': {
            key: 'units.personnal.manageDocument.addDocument',
            authority: [ADMIN, LEADER, PERSONNEL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
    // ! -- Dienstaufsicht -- \\
        // ! Browser
        '/Abteilungen/Dienstaufsicht/Dokumente/Browser': {
            key: 'units.supervision.manageDocument.browserDocument',
            authority: [ADMIN, LEADER, INTERNAL_AFFAIRS],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Editor
        '/Abteilungen/Dienstaufsicht/Dokumente/Editor': {
            key: 'units.supervision.manageDocument.addDocument',
            authority: [ADMIN, LEADER, INTERNAL_AFFAIRS],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
    // ! -- Criminal Division -- \\
        // ! Browser
        '/Abteilungen/Criminal Division/Dokumente/Browser': {
            key: 'units.criminalDivision.manageDocument.browserDocument',
            authority: [ADMIN, LEADER, CRIMINAL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Editor
        '/Abteilungen/Criminal Division/Dokumente/Editor': {
            key: 'units.criminalDivision.manageDocument.addDocument',
            authority: [ADMIN, LEADER, CRIMINAL_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
    // ! -- SWAT -- \\
        // ! Browser
        '/Abteilungen/SWAT/Dokumente/Browser': {
            key: 'units.swat.manageDocument.browserDocument',
            authority: [ADMIN, LEADER, SWAT],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Editor
        '/Abteilungen/SWAT/Dokumente/Editor': {
            key: 'units.swat.manageDocument.addDocument',
            authority: [ADMIN, LEADER, SWAT],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
    // ! -- Ausbildungsabteilung -- \\
        // ! Browser
        '/Abteilungen/Ausbildungsabteilung/Dokumente/Browser': {
            key: 'units.trainingDivision.manageDocument.browserDocument',
            authority: [ADMIN, LEADER, TRAINING_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
        // ! Editor
        '/Abteilungen/Ausbildungsabteilung/Dokumente/Editor': {
            key: 'units.trainingDivision.manageDocument.addDocument',
            authority: [ADMIN, LEADER, TRAINING_DIVISION],
            meta: {
                pageBackgroundType: 'plain',
                pageContainerType: 'contained',
            },
        },
    // !
}

export default unitRoute
