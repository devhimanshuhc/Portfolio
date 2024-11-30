'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

export default function ClientScene() {
  return <Scene />
}
