import type { ReactNode } from "react"

interface OverlayModalProps {
  overlayName: 'AddForm' | 'RenameForm' | 'WeatherDisplayTypes'
  children: ReactNode
  className?: string
}

export type { OverlayModalProps }
