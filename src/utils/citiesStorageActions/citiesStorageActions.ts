import { STORAGE_KEYS } from '@/config/storageKeys'
import type { CitiesSliceState } from '@/store/cities/cities.types'
import type {
  Action,
  CitiesStorageActions,
} from '@/utils/citiesStorageActions/citiesStorageActions.types'

const citiesStorageActions: CitiesStorageActions = (
  actions: Action,
  body?: CitiesSliceState,
) => {
  if (actions === 'get') {
    const raw = localStorage.getItem(STORAGE_KEYS.CITIES)

    if (!raw) {
      return {
        cities: ['London', 'Nazran'],
        activeCityName: 'London',
        activeCityIndex: 0,
      }
    }

    return JSON.parse(raw) as CitiesSliceState
  }

  if (actions === 'set' && body) {
    localStorage.setItem(STORAGE_KEYS.CITIES, JSON.stringify(body))
  }
}

export { citiesStorageActions }
