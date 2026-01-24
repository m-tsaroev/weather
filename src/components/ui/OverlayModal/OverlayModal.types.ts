import type { ReactNode } from 'react'

interface OverlayModalProps {
  id: number
  overlayName: 'AddForm' | 'RenameForm' | 'WeatherDisplayTypes'
  children: ReactNode
  className?: string
}

export type { OverlayModalProps }
