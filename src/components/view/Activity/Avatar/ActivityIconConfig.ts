import { TbUser, TbRefresh, TbArrowBadgeDown, TbTag, TbChecks } from 'react-icons/tb'
import { GoBriefcase } from 'react-icons/go'
import * as ActivityConstants from '../constants'
import type { 
  ActivityType, 
  IconComponent, 
  ActivityIconConfig, 
  ActivityIconRegistry 
} from './types'

// Re-exportiere Typen für externe Verwendung
export type { ActivityType, IconComponent, ActivityIconConfig, ActivityIconRegistry }

/**
 * Speziales Symbol um Avatar-Darstellung zu kennzeichnen
 * Wird in der Registry verwendet um zu signalisieren, dass ein Benutzer-Avatar angezeigt werden soll
 */
export const USER_AVATAR_SYMBOL = Symbol('USER_AVATAR') as any

/**
 * Zentrale Registry für alle Aktivitäts-Icon-Gruppen
 */
export const ACTIVITY_ICON_REGISTRY: ActivityIconRegistry = {
  PLACEHOLDER: {
    groupName: 'Platzhalter-System',
    description: 'Icons für Platzhalter und Standard-Aktivitäten',
    constants: ActivityConstants.CG_PLACERHOLDER_SYSTEM,
    icons: {
      [ActivityConstants.PLACERHOLDER]: TbUser,
    },
    defaultIcon: TbUser,
  },

  CASE_SYSTEM: {
    groupName: 'Akten-Management-System',
    description: 'Icons für aktenbezogene Aktivitäten und Operationen',
    constants: ActivityConstants.CG_CASE_SYSTEM,
    icons: {
      [ActivityConstants.CREATE_CASE]: USER_AVATAR_SYMBOL, // Als Avatar anzeigen
      [ActivityConstants.EDIT_CASE_DESCRIPTION]: TbRefresh,
      [ActivityConstants.EDIT_CASE_ADD_FILE_ATTACHMENT]: TbArrowBadgeDown,
      [ActivityConstants.EDIT_CASE_ADD_TAGS]: TbTag,
      [ActivityConstants.EDIT_CASE_STATUS]: TbChecks,
    },
    defaultIcon: GoBriefcase,
  },
} as const

/**
 * Validiert ob ein Wert ein gültiger Aktivitäts-Typ ist
 */
export const isValidActivityType = (type: unknown): type is ActivityType => {
  return typeof type === 'string' && type.length > 0
}

/**
 * Prüft ob eine bestimmte Gruppe in der Registry existiert
 */
export const hasActivityGroup = (groupKey: string): boolean => {
  return groupKey in ACTIVITY_ICON_REGISTRY
}

/**
 * Performance-optimierte Lookup-Map für O(1) Gruppenfindung
 * Wird beim Modulstart einmalig erstellt und cached
 */
export const ACTIVITY_TYPE_TO_GROUP_MAP = (() => {
  const map = new Map<string, string>()
  
  Object.entries(ACTIVITY_ICON_REGISTRY).forEach(([groupKey, config]) => {
    config.constants.forEach(activityType => {
      map.set(activityType, groupKey)
    })
  })
  
  return map
})()

/**
 * Findet die zugehörige Icon-Gruppe für einen Aktivitäts-Typ
 * Nutzt O(1) Map-Lookup für optimale Performance bei 100+ Icons
 */
export const findActivityGroup = (type: string): ActivityIconConfig | null => {
  if (!isValidActivityType(type)) {
    return null
  }
  
  const groupKey = ACTIVITY_TYPE_TO_GROUP_MAP.get(type)
  return groupKey ? ACTIVITY_ICON_REGISTRY[groupKey] : null
}

/**
 * Prüft ob ein Aktivitäts-Typ als Avatar dargestellt werden soll
 */
export const shouldShowAsAvatar = (type: string): boolean => {
  const group = findActivityGroup(type)
  if (!group) return false
  
  return group.icons[type] === USER_AVATAR_SYMBOL
}

/**
 * Zentrale Icon-Resolver-Funktion mit umfassendem Error-Handling
 * Fallback-Strategie: Spezifisches Icon → Gruppen-Standard → Globaler Fallback
 */
export const resolveActivityIcon = (type: string): IconComponent => {
  try {
    if (!isValidActivityType(type)) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[ActivityIcon] Ungültiger Aktivitäts-Typ: ${type}`)
      }
      return TbUser
    }

    const group = findActivityGroup(type)
    
    if (!group) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[ActivityIcon] Keine Gruppe gefunden für Aktivitäts-Typ: ${type}`)
      }
      return TbUser
    }

    const resolvedIcon = group.icons[type] ?? group.defaultIcon ?? TbUser
    
    // Falls USER_AVATAR_SYMBOL, verwende Fallback-Icon (sollte normalerweise nicht aufgerufen werden)
    if (resolvedIcon === USER_AVATAR_SYMBOL) {
      return group.defaultIcon ?? TbUser
    }

    return resolvedIcon
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[ActivityIcon] Fehler beim Auflösen des Icons für Typ "${type}":`, error)
    }
    return TbUser
  }
}

/**
 * Entwicklungs-Hilfsfunktion für Debugging und Monitoring der Registry
 * Zeigt Statistiken über alle Icon-Gruppen und deren Auslastung
 */
export const getRegistryStats = () => {
  const stats = {
    totalGroups: Object.keys(ACTIVITY_ICON_REGISTRY).length,
    totalActivityTypes: ACTIVITY_TYPE_TO_GROUP_MAP.size,
    groupDetails: Object.entries(ACTIVITY_ICON_REGISTRY).map(([key, config]) => ({
      groupKey: key,
      groupName: config.groupName,
      constantCount: config.constants.length,
      iconCount: Object.keys(config.icons).length,
      constants: [...config.constants],
    })),
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.group('Aktivitäts-Icon Registry Statistiken')
    console.table(stats.groupDetails)
    console.log(`Gesamt: ${stats.totalGroups} Gruppen, ${stats.totalActivityTypes} Aktivitäts-Typen`)
    console.groupEnd()
  }
  
  return stats
}

// Export utilities for external use - types are already exported above