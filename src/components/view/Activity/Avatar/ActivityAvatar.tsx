'use client'

import { useMemo, memo } from 'react'
import Avatar from '@/components/ui/Avatar'
import acronym from '@/utils/acronym'
import classNames from '@/utils/classNames'
import useRandomBgColor from '@/utils/hooks/useRandomBgColor'
import { resolveActivityIcon, shouldShowAsAvatar } from './ActivityIconConfig'
import type { AvatarProps } from '@/components/ui/Avatar'
import type { ActivityAvatarProps } from './types'

/**
 * Hauptkomponente für die Darstellung von Aktivitäts-Avataren
 * Unterstützt sowohl Benutzer-Avatare als auch Icon-basierte Darstellungen
 * Optimiert für Performance durch Memoization und intelligente Fallbacks
 */
const ActivityAvatar = memo<ActivityAvatarProps>(
  ({ data, size = 35, className }) => {
    const color = useRandomBgColor()

    // Performance: Avatar-Props einmalig berechnen und cachen
    const defaultAvatarProps: AvatarProps = useMemo(
      () => ({ 
        size, 
        shape: 'circle' as const,
      }),
      [size],
    )

    // Frühzeitiger Ausstieg bei fehlenden Daten
    if (!data?.type) {
      return null
    }

    const { type, userImg, userName } = data

    // Prüfe ob dieser Aktivitäts-Typ als Avatar konfiguriert ist
    const showAsAvatar = shouldShowAsAvatar(type)
    const hasUserData = userImg || userName

    // Avatar-Darstellung: Wenn als Avatar konfiguriert UND Benutzerdaten vorhanden
    if (showAsAvatar && hasUserData) {
      // Benutzer-Avatar Darstellung
      const avatarProps = userImg
        ? { 
            src: userImg,
            className: classNames(className)
          }
        : { 
            className: classNames(color(userName || 'Unknown User'), className) 
          }

      return (
        <Avatar {...avatarProps} {...defaultAvatarProps}>
          <span className="text-gray-900 dark:text-gray-100 font-bold">
            {acronym(userName || 'U')}
          </span>
        </Avatar>
      )
    }
    
    // Icon-Darstellung: Für alle anderen Aktivitäten (nicht als Avatar konfiguriert)
    if (!showAsAvatar) {
      try {
        const IconComponent = resolveActivityIcon(type)
        return (
          <Avatar
            {...defaultAvatarProps}
            className={classNames(
              'text-primary bg-gray-100 dark:text-primary dark:bg-gray-700',
              className
            )}
            icon={<IconComponent />}
          />
        )
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`[ActivityAvatar] Fehler beim Rendern des Icons für Typ "${type}":`, error)
        }
        // Fallback auf Standard-Icon
        const FallbackIcon = resolveActivityIcon("fallback")
        return (
          <Avatar
            {...defaultAvatarProps}
            className={classNames(
              'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-700',
              className
            )}
            icon={<FallbackIcon />}
          />
        )
      }
    }

    // Fallback: Unbekannte Typen
    return null
  },
  (prevProps, nextProps) => {
    // Optimierte Vergleichsfunktion für bessere Performance
    if (!prevProps.data && !nextProps.data) return true
    if (!prevProps.data || !nextProps.data) return false
    
    return (
      prevProps.data.type === nextProps.data.type &&
      prevProps.data.userImg === nextProps.data.userImg &&
      prevProps.data.userName === nextProps.data.userName &&
      prevProps.size === nextProps.size &&
      prevProps.className === nextProps.className
    )
  }
)

ActivityAvatar.displayName = 'ActivityAvatar'

export default ActivityAvatar
