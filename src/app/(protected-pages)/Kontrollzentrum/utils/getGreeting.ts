/**
 * Generiert zeitbasierte Begrüßung basierend auf aktueller Uhrzeit
 * @returns Passende Begrüßung je nach Tageszeit
 */
export function getGreeting(): string {
    const hour = new Date().getHours()

    if (hour < 6) return 'der nächtliche Vogel fängt den Wurm'
    if (hour < 11) return 'guten Morgen'
    if (hour < 18) return 'guten Tag'
    if (hour < 22) return 'guten Abend'
    
    // Professioneller Fallback für späte Stunden
    return 'gute Nacht und trotzdem gute Arbeit'
}
