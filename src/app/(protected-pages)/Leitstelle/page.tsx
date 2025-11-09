'use client'

import useCurrentSession from '@/utils/hooks/useCurrentSession'

const Page = () => {
    const { session } = useCurrentSession()
    
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">Leitstelle</p>
            <p className="text-lg">Willkommen {session?.user?.name || 'Anonymous'}! Viel Erfolg bei der Einteilung</p>
            <pre className="text-lg">
                {JSON.stringify(session, null, 2)}
            </pre>
        </div>
    )
}
export default Page
