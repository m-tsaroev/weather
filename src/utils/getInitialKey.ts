import { STORAGE_KEYS } from '@/config/storageKeys'

const getInitialKey = (): string | null => {
  return (
    localStorage.getItem(STORAGE_KEYS.API_KEY) ||
    import.meta.env.VITE_WEATHER_API_KEY ||
    null
  )
}

export { getInitialKey }
