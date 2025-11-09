import { useEffect, useRef } from 'react'
import { createModuleLogger, type ModuleLogger } from '../moduleLogger'

/**
 * React Hook für automatisches Module-Logging basierend auf Loading/Error States
 * 
 * @param moduleName - Name des Moduls
 * @param isLoading - Loading-Status
 * @param error - Error-Status (string oder Error-Objekt)
 * @param location - Optionale Stelle/Seite
 * @param debug - Debug-Modus aktivieren
 * @param data - Optionale Daten um sicherzustellen dass Success nur mit gültigen Daten geloggt wird
 */
export function useModuleLogging(
    moduleName: string,
    isLoading: boolean,
    error: string | Error | null = null,
    location?: string,
    debug: boolean = false,
    data?: any
): ModuleLogger {
    const loggerRef = useRef<ModuleLogger | null>(null)
    
    // Logger nur einmal erstellen
    if (!loggerRef.current) {
        loggerRef.current = createModuleLogger(moduleName, location, debug)
    }

    useEffect(() => {
        const logger = loggerRef.current!
        
        // Nur loggen wenn der Ladevorgang abgeschlossen ist
        if (!isLoading) {
            if (error) {
                logger.logError(error)
            } else if (data !== undefined ? data : true) {
                // Success nur wenn entweder data vorhanden ist oder data nicht überwacht wird
                logger.logSuccess()
            }
        }
    }, [isLoading, error]) // data bewusst nicht in dependencies um doppelte Logs zu vermeiden

    return loggerRef.current
}