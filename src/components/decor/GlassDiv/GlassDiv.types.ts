import type { MotionProps } from 'motion/react'
import type { MouseEvent, ReactNode, RefObject } from 'react'

interface GlassDivProps {
  children: ReactNode
  className?: string
  hasCircles?: boolean
  tabIndex?: number
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  role?: string
  ref?: RefObject<HTMLDivElement | null>
  motionParams?: MotionProps
}

export type { GlassDivProps }
