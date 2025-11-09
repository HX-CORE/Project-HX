/**
 * Aktivitäts-Typ Konstanten mit verbesserter Typsicherheit
 * Jede Konstante als `const` für strikte TypeScript-Inferenz
 */
export const PLACERHOLDER = 'PLACEHOLDER' as const
export const CREATE_CASE = 'CREATE-CASE' as const
export const EDIT_CASE_DESCRIPTION = 'EDIT-CASE-DESCRIPTION' as const
export const EDIT_CASE_ADD_FILE_ATTACHMENT = 'EDIT-CASE-ADD-FILE-ATTACHMENT' as const
export const EDIT_CASE_ADD_TAGS = 'EDIT-CASE-ADD-TAGS' as const
export const EDIT_CASE_STATUS = 'EDIT-CASE-STATUS' as const

/**
 * Typdefinitionen für bessere TypeScript-Inferenz und IntelliSense
 */
export type PlaceholderActivityType = typeof PLACERHOLDER
export type CaseActivityType = 
  | typeof CREATE_CASE
  | typeof EDIT_CASE_DESCRIPTION
  | typeof EDIT_CASE_ADD_FILE_ATTACHMENT
  | typeof EDIT_CASE_ADD_TAGS
  | typeof EDIT_CASE_STATUS

export type ActivityType = PlaceholderActivityType | CaseActivityType

/**
 * Aktivitäts-Gruppen mit unveränderlichen Arrays für Typsicherheit
 * Organisiert Konstanten nach funktionalen Bereichen
 */
export const CG_PLACERHOLDER_SYSTEM = [
    PLACERHOLDER
] as const

export const CG_CASE_SYSTEM = [
    CREATE_CASE,
    EDIT_CASE_DESCRIPTION,
    EDIT_CASE_ADD_FILE_ATTACHMENT,
    EDIT_CASE_ADD_TAGS,
    EDIT_CASE_STATUS,
] as const

/**
 * Verwendungsspezifische Arrays für Komponenten-Logik
 * Bestimmen welche Aktivitäts-Typen welche Darstellungsform nutzen
 */
export const avatarType = [
    ...CG_PLACERHOLDER_SYSTEM
] as const

export const iconType = [
    ...CG_CASE_SYSTEM
] as const

/**
 * Typ-Guards für Runtime-Typprüfung und bessere Performance
 * Ermöglichen sichere Typprüfung zur Laufzeit
 */
export const isPlaceholderActivity = (type: string): type is PlaceholderActivityType => {
  return CG_PLACERHOLDER_SYSTEM.includes(type as PlaceholderActivityType)
}

export const isCaseActivity = (type: string): type is CaseActivityType => {
  return CG_CASE_SYSTEM.includes(type as CaseActivityType)
}

/**
 * Zentrale Validierungsfunktion für alle Aktivitäts-Typen
 * Erweitert sich automatisch mit neuen Aktivitäts-Gruppen
 */
export const isValidActivityType = (type: string): type is ActivityType => {
  return isPlaceholderActivity(type) || isCaseActivity(type)
}