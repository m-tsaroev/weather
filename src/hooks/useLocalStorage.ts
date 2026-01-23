import { useEffect, useState } from 'react'

type TypeOut<T extends object> = [state: T, setState: (newState: T) => void]

const useLocalStorage = <T extends object>(
  storageName: string,
  initialState: T,
): TypeOut<T> => {
  const raw = localStorage.getItem(storageName)

  const [state, setState] = useState<T>(raw ? JSON.parse(raw) : initialState)

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(state))
  }, [state, storageName])

  return [state, setState]
}

export { useLocalStorage }
