'use client'

import useCurrentSession from '@/utils/hooks/useCurrentSession'
import AccessLayout from './_components/AccessLayout'
import AccessMessage from './_components/AccessMessage'

const Page = () => {
  const { session } = useCurrentSession()
  const authority = session?.user?.authority

  const isPending =
    Array.isArray(authority)
      ? authority.length === 1 && authority[0] === 'user'
      : authority === 'user'

  return (
    <AccessLayout title="Zugang verweigert!">
      <AccessMessage status={isPending ? 'pending' : 'denied'} />
    </AccessLayout>
  )
}

export default Page
