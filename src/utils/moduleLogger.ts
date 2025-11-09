/**
 * Zentrales Logging-System für Module in der Anwendung
 * Einheitliche Konsolen-Ausgaben für Initialisierung und Fehler
 */

export interface ModuleLoggerConfig {
    /** Name des Moduls (z.B. "Kontrollzentrum - Personalanzeige") */
    moduleName: string
    /** Optionale Stelle/Seite (z.B. "Dashboard", "Settings") */
    location?: string
    /** Debug-Modus aktivieren für zusätzliche Informationen */
    debug?: boolean
}

export class ModuleLogger {
    private readonly moduleName: string
    private readonly location?: string
    private readonly debug: boolean
    private hasLogged: boolean = false

    constructor(config: ModuleLoggerConfig) {
        this.moduleName = config.moduleName
        this.location = config.location
        this.debug = config.debug ?? false
    }

    /**
     * Loggt erfolgreiche Modul-Initialisierung
     */
    logSuccess(): void {
        if (this.hasLogged) return
        
        const locationPrefix = this.location ? `[${this.location}] ` : ''
        const message = `${locationPrefix}Modul [${this.moduleName}] wurde korrekt initialisiert!`
        
        console.log(`✅ ${message}`)
        
        if (this.debug) {
            console.log(`🔍 Debug: ${this.moduleName} - Timestamp: ${new Date().toISOString()}`)
        }
        
        this.hasLogged = true
    }

    /**
     * Loggt Modul-Initialisierungsfehler
     */
    logError(error?: string | Error): void {
        if (this.hasLogged) return
        
        const locationPrefix = this.location ? `[${this.location}] ` : ''
        const message = `${locationPrefix}Modul [${this.moduleName}] konnte nicht initialisiert werden!`
        
        console.error(`❌ ${message}`)
        
        if (error) {
            const errorMessage = error instanceof Error ? error.message : error
            console.error(`🔍 Fehlerdetails: ${errorMessage}`)
        }
        
        if (this.debug) {
            console.error(`🔍 Debug: ${this.moduleName} - Timestamp: ${new Date().toISOString()}`)
            if (error instanceof Error && error.stack) {
                console.error(`🔍 Stack Trace:`, error.stack)
            }
        }
        
        this.hasLogged = true
    }

    /**
     * Loggt Warnungen für das Modul
     */
    logWarning(message: string): void {
        const locationPrefix = this.location ? `[${this.location}] ` : ''
        console.warn(`⚠️ ${locationPrefix}Modul [${this.moduleName}]: ${message}`)
    }

    /**
     * Loggt Informationen (nur im Debug-Modus)
     */
    logInfo(message: string): void {
        if (!this.debug) return
        
        const locationPrefix = this.location ? `[${this.location}] ` : ''
        console.info(`ℹ️ ${locationPrefix}Modul [${this.moduleName}]: ${message}`)
    }

    /**
     * Setzt den Logging-Status zurück (für Re-Initialisierung)
     */
    reset(): void {
        this.hasLogged = false
    }
}

/**
 * Factory-Funktion für einfache Erstellung eines ModuleLoggers
 */
export function createModuleLogger(moduleName: string, location?: string, debug?: boolean): ModuleLogger {
    return new ModuleLogger({ moduleName, location, debug })
}

/**
 * Hook für React-Komponenten um Module-Logging zu vereinfachen
 */
export function useModuleLogger(moduleName: string, location?: string, debug?: boolean): ModuleLogger {
    return createModuleLogger(moduleName, location, debug)
}

/**
 * Utility-Funktionen für direktes Logging ohne Instanziierung
 */
export const ModuleLoggerUtils = {
    /**
     * Schnelle Success-Log ohne Instanziierung
     */
    logSuccess: (moduleName: string, location?: string): void => {
        const logger = createModuleLogger(moduleName, location)
        logger.logSuccess()
    },

    /**
     * Schnelle Error-Log ohne Instanziierung
     */
    logError: (moduleName: string, error?: string | Error, location?: string): void => {
        const logger = createModuleLogger(moduleName, location)
        logger.logError(error)
    },

    /**
     * Schnelle Warning-Log ohne Instanziierung
     */
    logWarning: (moduleName: string, message: string, location?: string): void => {
        const logger = createModuleLogger(moduleName, location)
        logger.logWarning(message)
    }
}