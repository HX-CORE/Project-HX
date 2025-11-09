'use client'

import { ReactNode } from 'react'
import Container from '@/components/shared/Container'
import SpaceSignBoard from '@/assets/svg/SpaceSignBoard'

type AccessLayoutProps = {
  title: string
  children: ReactNode
}

const AccessLayout = ({ title, children }: AccessLayoutProps) => (
  <Container className="h-full">
    <div className="h-full flex flex-col items-center justify-center">
      <SpaceSignBoard height={280} width={280} />
      <div className="mt-10 text-center" aria-labelledby="access-title">
        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
        {children}
      </div>
    </div>
  </Container>
)

export default AccessLayout
