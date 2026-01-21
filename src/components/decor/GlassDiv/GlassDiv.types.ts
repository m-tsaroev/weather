import type { ReactNode, RefObject } from 'react'

interface GlassDivProps {
  children: ReactNode
  className?: string
  hasCircles?: boolean
  tabIndex?: number
  ref: RefObject<HTMLDivElement | null>
}

export type { GlassDivProps }
