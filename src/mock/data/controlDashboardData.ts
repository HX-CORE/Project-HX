const currentDate = new Date()

export const controlsData = {
    thisDay: {
        metrics: {
            arrests: {
                value: 10,
                growShrink: 3.8,
            },
            seizedWeapons: {
                value: 9,
                growShrink: -0.5,
            },
            seizedDrugs: {
                value: 1052,
                growShrink: -1.2,
            },
            freedHostages: {
                value: 2,
                growShrink: 1.9,
            },
        },
    },
    thisWeek: {
        metrics: {
            arrests: {
                value: 42,
                growShrink: 3.8,
            },
            seizedWeapons: {
                value: 39,
                growShrink: -0.5,
            },
            seizedDrugs: {
                value: 10529,
                growShrink: -1.2,
            },
            freedHostages: {
                value: 21,
                growShrink: 1.9,
            },
        },
    },
    thisMonth: {
        metrics: {
            arrests: {
                value: 201,
                growShrink: 2.2,
            },
            seizedWeapons: {
                value: 242,
                growShrink: 5.8,
            },
            seizedDrugs: {
                value: 65259,
                growShrink: 2.5,
            },
            freedHostages: {
                value: 89,
                growShrink: 2.3,
            },
        },
    },
    thisYear: {
        metrics: {
            arrests: {
                value: 8527,
                growShrink: 12.4,
            },
            seizedWeapons: {
                value: 9250,
                growShrink: 1.8,
            },
            seizedDrugs: {
                value: 214987,
                growShrink: 15.6,
            },
            freedHostages: {
                value: 2153,
                growShrink: 15.6,
            },
        },
    },
    recentActivity: [
        {
            type: 'EDIT-CASE-STATUS',
            dateTime: '19:35',
            caseId: '456',
            status: 0,
            userName: 'Cyko Emerson',
        },
        {
            type: 'EDIT-CASE-ADD-TAGS',
            dateTime: '19:34',
            caseId: '456',
            tags: ['Raubüberfall', 'Staatsbank'],
            userName: 'Cyko Emerson',
        },
        {
            type: 'EDIT-CASE-ADD-FILE-ATTACHMENT',
            dateTime: '19:33',
            caseId: '456',
            attachedFiles: ['picture1-case-456.png', 'picture2-case-456.png'],
            userName: 'Cyko Emerson',
        },
        {
            type: 'EDIT-CASE-DESCRIPTION',
            dateTime: '19:32',
            caseId: '456',
            changes: 'Beschreibung aktualisiert',
            userName: 'Cyko Emerson',
        }, 
        {
            type: 'CREATE-CASE',
            dateTime: '19:30',
            caseId: '456',
            title: 'Raubüberfall Staatsbank',
            userName: 'Cyko Emerson',
            userImg: '/img/avatars/cyko-emerson.png',
        },
        // Weiterer fiktiver Quatsch
        {
            type: 'EDIT-CASE-STATUS',
            dateTime: '18:45',
            caseId: '789',
            status: 1,
            userName: 'Maria Schmidt',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '18:22',
            caseId: '789',
            title: 'Drogenhandel Bahnhof',
            userName: 'Maria Schmidt',
            userImg: '/img/avatars/maria-schmidt.png',
        },

        {
            type: 'EDIT-CASE-ADD-TAGS',
            dateTime: '17:58',
            caseId: '234',
            tags: ['Einbruch', 'Wohnhaus'],
            userName: 'Thomas Weber',
        },
        {
            type: 'EDIT-CASE-DESCRIPTION',
            dateTime: '17:45',
            caseId: '234',
            changes: 'Zeugenaussage hinzugefügt',
            userName: 'Thomas Weber',
        },
        {
            type: 'EDIT-CASE-ADD-FILE-ATTACHMENT',
            dateTime: '17:30',
            caseId: '567',
            attachedFiles: ['evidence-fingerprints.jpg'],
            userName: 'Lisa Müller',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '16:55',
            caseId: '567',
            title: 'Vandalismus Stadtpark',
            userName: 'Lisa Müller',
            userImg: '/img/avatars/lisa-mueller.png',
        },
        {
            type: 'EDIT-CASE-STATUS',
            dateTime: '16:20',
            caseId: '123',
            status: 2,
            userName: 'Peter Klein',
        },
        {
            type: 'EDIT-CASE-ADD-TAGS',
            dateTime: '15:45',
            caseId: '890',
            tags: ['Betrug', 'Online'],
            userName: 'Sarah Fischer',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '15:30',
            caseId: '890',
            title: 'Internetbetrug',
            userName: 'Sarah Fischer',
            userImg: '/img/avatars/sarah-fischer.png',
        },
        {
            type: 'EDIT-CASE-DESCRIPTION',
            dateTime: '14:55',
            caseId: '345',
            changes: 'Verdächtiger identifiziert',
            userName: 'Michael Berg',
        },
        {
            type: 'EDIT-CASE-ADD-FILE-ATTACHMENT',
            dateTime: '14:30',
            caseId: '678',
            attachedFiles: ['surveillance-video.mp4', 'witness-statement.pdf'],
            userName: 'Anna Richter',
        },
        {
            type: 'EDIT-CASE-STATUS',
            dateTime: '14:15',
            caseId: '901',
            status: 1,
            userName: 'David Wolf',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '13:45',
            caseId: '901',
            title: 'Körperverletzung Diskothek',
            userName: 'David Wolf',
            userImg: '/img/avatars/david-wolf.png',
        },
        {
            type: 'EDIT-CASE-ADD-TAGS',
            dateTime: '13:20',
            caseId: '012',
            tags: ['Diebstahl', 'Fahrzeug'],
            userName: 'Julia Becker',
        },
        {
            type: 'EDIT-CASE-DESCRIPTION',
            dateTime: '12:50',
            caseId: '345',
            changes: 'Neue Spur gefunden',
            userName: 'Robert Schulz',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '12:25',
            caseId: '012',
            title: 'Autodiebstahl Parkplatz',
            userName: 'Julia Becker',
            userImg: '/img/avatars/julia-becker.png',
        },
        {
            type: 'EDIT-CASE-ADD-FILE-ATTACHMENT',
            dateTime: '11:55',
            caseId: '456',
            userName: 'Stefan Hoffmann',
        },
        {
            type: 'EDIT-CASE-STATUS',
            dateTime: '11:30',
            caseId: '789',
            status: 0,
            userName: 'Christine Meyer',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '11:05',
            caseId: '234',
            title: 'Häusliche Gewalt',
            userName: 'Frank Wagner',
            userImg: '/img/avatars/frank-wagner.png',
        },
        {
            type: 'EDIT-CASE-ADD-TAGS',
            dateTime: '10:40',
            caseId: '567',
            tags: ['Erpressung', 'Unternehmen'],
            userName: 'Nicole Braun',
        },
        {
            type: 'EDIT-CASE-DESCRIPTION',
            dateTime: '10:15',
            caseId: '890',
            changes: 'Ermittlungen eingeleitet',
            userName: 'Andreas Krause',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '09:50',
            caseId: '123',
            title: 'Geldwäsche Verdacht',
            userName: 'Sabine Lang',
            userImg: '/img/avatars/sabine-lang.png',
        },
        {
            type: 'EDIT-CASE-ADD-FILE-ATTACHMENT',
            dateTime: '09:25',
            caseId: '678',
            attachedFiles: ['phone-records.xlsx', 'bank-statements.pdf'],
            userName: 'Oliver Zimmermann',
        },
        {
            type: 'EDIT-CASE-STATUS',
            dateTime: '08:55',
            caseId: '345',
            status: 2,
            userName: 'Petra Neumann',
        },
        {
            type: 'CREATE-CASE',
            dateTime: '08:30',
            caseId: '901',
            title: 'Waffenschmuggel Hafen',
            userName: 'Martin Fuchs',
            userImg: '/img/avatars/martin-fuchs.png',
        },
    ],
    personnel: {
        officers: {
            active: 21,
            total: 45,
        },
        agents: {
            active: 12,
            total: 28,
        },
        medics: {
            active: 8,
            total: 11,
        },
    },
}