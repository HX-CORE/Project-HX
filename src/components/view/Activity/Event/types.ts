/**
 * Datenstruktur für Aktivitäts-Events
 * Enthält alle Informationen für die Darstellung von Aktivitäten
 */
export interface ActivityEventData {
  readonly type: string
  readonly dateTime: number
  readonly caseId?: string
  readonly case?: string
  readonly title?: string
  readonly status?: number
  readonly userName: string
  readonly userImg?: string
  readonly comment?: string
  readonly tags?: readonly string[]
  readonly attachedFiles?: readonly string[]
  readonly assignee?: string
  readonly changes?: string
}

/**
 * Props für die ActivityEvent Komponente
 */
export interface ActivityEventProps {
  readonly data: ActivityEventData
  readonly compact?: boolean
}

/**
 * Status-Konfiguration für Akten
 * Definiert Aussehen und Beschriftung der verschiedenen Status
 */
export interface CaseStatusConfig {
  readonly label: string
  readonly bgClass: string
  readonly textClass: string
}

/**
 * Mapping der Case-Status zu ihren Konfigurationen
 */
export type CaseStatusRecord = Record<number, CaseStatusConfig>

/**
 * Mapping der Task-Labels zu ihren Farben
 */
export type TaskLabelColorsRecord = Record<string, string>