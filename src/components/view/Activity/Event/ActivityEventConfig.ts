import type { CaseStatusRecord, TaskLabelColorsRecord } from './types'

/**
 * Konfiguration für Case-Status
 * Definiert Aussehen und Beschriftung der verschiedenen Case-Status
 */
export const caseStatus: CaseStatusRecord = {
    0: {
        label: 'Abgeschlossen',
        bgClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    1: {
        label: 'In Bearbeitung',
        bgClass: 'bg-blue-500',
        textClass: 'text-blue-500',
    },
    2: {
        label: 'Ausstehend',
        bgClass: 'bg-amber-500',
        textClass: 'text-amber-500',
    },
}

/**
 * Konfiguration für Task-Label-Farben
 * Definiert die Hintergrundfarben für verschiedene Tags
 */
export const taskLabelColors: TaskLabelColorsRecord = {
    Raubüberfall: 'bg-red-800',
    Staatsbank: 'bg-green-600',
}