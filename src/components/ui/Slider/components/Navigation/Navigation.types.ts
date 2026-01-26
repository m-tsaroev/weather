import type { ReactNode } from 'react'

interface Params {
  hidePrevButton?: boolean
  hideNextButton?: boolean
  additionalElementsParams?: {
    additionalElements: ReactNode
    position: 'start' | 'center' | 'end'
  }
}

interface NavigationProps {
  additionalFunctionToNext?: () => void
  additionalFunctionToPrev?: () => void
  params?: Params
}

export type { NavigationProps, Params }
