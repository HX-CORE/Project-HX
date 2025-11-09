/**
 * @fileoverview Zentrale Konfiguration für Benutzerberechtigungen pro Seite und Komponente
 * @description Definiert die Autorisierungsregeln für einzelne UI-Komponenten basierend auf Benutzerrollen
 * @author Huntax
 * @version 1.0.0
 */

/**
 * @usageNotes
 * Verwendung der Berechtigungskonstanten mit der AuthorityCheck-Komponente:
 * 
 * ```tsx
 * <AuthorityCheck 
 *   authority={COMP_AUTH_SITE.component_Example} 
 *   userAuthority={userAuthority}
 * >
 *   ** Inhalt für berechtigte Benutzer **
 * </AuthorityCheck>
 * ```
 */

/**
 * Berechtigungskonfiguration für die Kontrollzentrum-Seite
 * 
 * @constant COMP_AUTH_KONTROLLZENTRUM
 * @description Definiert Zugriffsberechtigungen für Komponenten der Kontrollzentrum-Seite
 * 
 * @property {string[]} component_ControlScheduleCreate - Berechtigungen für Terminplanungs-Komponente
 * @property {string[]} component_ControlRecentActivity - Berechtigungen für Aktivitätsverlauf-Komponente
 * 
 * @see {@link /Kontrollzentrum} Seiten-URL
 */
export const COMP_AUTH_KONTROLLZENTRUM = {
    /**
     * Berechtigung für die Terminplanungs-Komponente
     * 
     * @description Erlaubt Benutzern das Erstellen neuer Termine im Kontrollzentrum
     * @location src/app/(protected-pages)/Kontrollzentrum/_components/ControlSchedule.tsx:157
     * @requires admin | leader
     */
    component_ControlScheduleCreate: ['admin', 'leader'] as const,

    /**
     * Berechtigung für die Aktivitätsverlauf-Komponente
     * 
     * @description Erlaubt Benutzern das Anzeigen von Details zu vergangenen Aktivitäten
     * @location src/app/(protected-pages)/Kontrollzentrum/_components/ControlRecentActivity.tsx:23
     * @requires admin | leader
     */
    component_ControlRecentActivity: ['admin', 'leader'] as const,
} as const;

/**
 * Exportiere die Berechtigungen für die Kontrollzentrum-Seite
 */
export const { 
    component_ControlScheduleCreate, 
    component_ControlRecentActivity
} = COMP_AUTH_KONTROLLZENTRUM;