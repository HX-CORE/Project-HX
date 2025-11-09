import type { ComponentType } from 'react'

/**
 * Basis-Typ für Aktivitäts-Bezeichner
 * Erweitert sich automatisch mit neuen Aktivitäts-Gruppen
 */
export type ActivityType = string

/**
 * React Icon Komponenten-Typ
 */
export type IconComponent = ComponentType<any>

/**
 * Datenstruktur für Avatar-Aktivitäten
 */
export interface ActivityAvatarData {
  readonly type: ActivityType
  readonly userImg?: string
  readonly userName: string
}

/**
 * Props für die ActivityAvatar Komponente
 */
export interface ActivityAvatarProps {
  readonly data?: ActivityAvatarData
  readonly size?: number
  readonly className?: string
}

/**
 * Konfiguration für eine Icon-Gruppe
 */
export interface ActivityIconConfig {
  /** Array der zugehörigen Aktivitäts-Konstanten */
  readonly constants: readonly string[]
  /** Mapping von Aktivitäts-Typ zu Icon-Komponente */
  readonly icons: Record<string, IconComponent>
  /** Standard-Icon für unbekannte Typen in dieser Gruppe */
  readonly defaultIcon: IconComponent
  /** Benutzerfreundlicher Name der Gruppe */
  readonly groupName: string
  /** Optionale Beschreibung der Gruppe */
  readonly description?: string
}

/**
 * Registry aller Icon-Gruppen
 * Ermöglicht O(1) Zugriff auf Icon-Konfigurationen
 */
export interface ActivityIconRegistry {
  readonly [groupKey: string]: ActivityIconConfig
}