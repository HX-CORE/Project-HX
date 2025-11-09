export const ROLES_SYSTEM = {
    USER: 'user',                                     // everyone
    ADMIN: 'admin'                                    // only admin
} as const 

export const ROLES_COMMANDS = {
    LEADER: 'leader',                                 // 12, 11, 10
    HIGH_COMMAND: 'high_command',                     // 9, 8, 7
    MID_COMMAND: 'mid_command',                       // 6, 5, 4
    LOW_COMMAND: 'low_command'                        // 3, 2, 1
} as const

export const ROLES_UNITS = {
    PERSONNEL_DIVISION: 'personnel_division',         // Personalabteilung
    INTERNAL_AFFAIRS: 'internal_affairs',             // Dienstaufsicht / Interne Ermittlungen
    CRIMINAL_DIVISION: 'criminal_division',           // Kriminalabteilung
    TRAINING_DIVISION: 'training_division',           // Ausbildung / Police Academy
    SWAT: 'swat'                                      // Spezialeinheit SWAT
} as const

export const ROLES_RANKS = {
    CHIEF: 'chief',                                   // 12
    ASSISTANT_CHIEF: 'assistant_chief',               // 11
    COMMANDER: 'commander',                           // 10
    CAPTAIN: 'captain',                               // 9
    LIEUTENANT: 'lieutenant',                         // 8
    SERGEANT: 'sergeant',                             // 7
    DETECTIVE_3: 'detective_3',                       // 6
    DETECTIVE_2: 'detective_2',                       // 5
    DETECTIVE_1: 'detective_1',                       // 4
    OFFICER_2: 'officer_2',                           // 3
    OFFICER_1: 'officer_1',                           // 2
    ROOKIE: 'rookie'                                  // 1
} as const


export const { ADMIN, USER } = ROLES_SYSTEM
export const { LEADER, HIGH_COMMAND, MID_COMMAND, LOW_COMMAND } = ROLES_COMMANDS
export const { PERSONNEL_DIVISION, INTERNAL_AFFAIRS, CRIMINAL_DIVISION, TRAINING_DIVISION, SWAT } = ROLES_UNITS
export const { CHIEF, ASSISTANT_CHIEF, COMMANDER, CAPTAIN, LIEUTENANT, SERGEANT, DETECTIVE_3, DETECTIVE_2, DETECTIVE_1, OFFICER_2, OFFICER_1, ROOKIE } = ROLES_RANKS