import { STORAGE_KEYS } from '@/config/storageKeys'

const getApiKey = (): string => {
  return (
    import.meta.env.VITE_WEATHER_API_KEY ||
    localStorage.getItem(STORAGE_KEYS.API_KEY) || ''
  )
}

const setApiKey = (key: string) => {
  localStorage.setItem(STORAGE_KEYS.API_KEY, key)
}

const hasApiKey = (): boolean => {
  return !!getApiKey()
}

const deleteApiKey = () => {
  localStorage.setItem(STORAGE_KEYS.API_KEY, '')
}

export { getApiKey, hasApiKey, setApiKey, deleteApiKey }
