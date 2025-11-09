'use client'

import { ReactNode } from 'react'

type AccessMessageProps = {
  status: 'pending' | 'denied'
}

const messages: Record<AccessMessageProps['status'], ReactNode> = {
  pending: (
    <>
      <p className="text-base">
        Dein Account wurde bereits angelegt, aber noch nicht mit den benötigten Rollen verifiziert.
      </p>
      <div className="flex flex-col items-center">
        <p className="text-base mb-3">
          Dies kann bis zu 5&nbsp;Minuten dauern.
        </p>
        <p className="text-sm text-red-500/30">
          Falls es nach dem Zeitraum noch nicht funktioniert, logge dich erneut ein. Bei bestehenden Problemen wenden Sie sich bitte an Ihren Verantwortlichen.
        </p>
      </div>
    </>
  ),
  denied: (
    <>
      <p className="text-base mb-3">
        Du hast nicht die notwendige Befugnis, um auf diese Seite zuzugreifen.
      </p>
      <p className="text-sm text-red-500/30">
        Bei Unklarheiten oder Problemen wenden Sie sich bitte an die Verantwortlichen.
      </p>
    </>
  ),
}

const AccessMessage = ({ status }: AccessMessageProps) => (
  <div className="text-center select-none">{messages[status]}</div>
)

export default AccessMessage
