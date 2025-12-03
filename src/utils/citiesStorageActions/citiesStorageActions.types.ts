import type { CitiesSliceState } from '@/store/cities/cities.types'

interface CitiesStorageActions {
  (actions: 'set', body: CitiesSliceState): void
  (actions: 'get'): CitiesSliceState
}

type Action = 'set' | 'get'

export type { Action, CitiesStorageActions }
