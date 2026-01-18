import type {
  CitiesSliceState,
  cityRenameActionPayload,
} from '@/store/cities/cities.types'
import { citiesStorageActions } from '@/utils/citiesStorageActions/citiesStorageActions'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CitiesSliceState = {
  ...citiesStorageActions('get'),
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      const isAlreadyThere = state.cities.some(
        (city) => city === action.payload,
      )

      if (isAlreadyThere) return

      state.cities.push(action.payload)
      citiesStorageActions('set', state)
    },

    removeCity: (state, action: PayloadAction<string>) => {
      const cityToRemove = action.payload
      const removeIndex = state.cities.findIndex(
        (city) => city === cityToRemove,
      )

      const isRemovingActiveCity = cityToRemove === state.activeCityName

      state.cities = state.cities.filter((city) => city !== cityToRemove)

      if (state.cities.length === 0) {
        state.activeCityIndex = -1
        state.activeCityName = ''
      } else if (isRemovingActiveCity) {
        if (removeIndex >= state.cities.length) {
          state.activeCityIndex = state.cities.length - 1
        } else {
          state.activeCityIndex = Math.min(removeIndex, state.cities.length - 1)
        }
        state.activeCityName = state.cities[state.activeCityIndex]
      } else if (removeIndex < state.activeCityIndex) {
        state.activeCityIndex -= 1
      }

      citiesStorageActions('set', state)
    },

    renameCity: (state, action: PayloadAction<cityRenameActionPayload>) => {
      const { cityName, newCityName } = action.payload

      state.cities = state.cities.map((city) =>
        city === cityName ? newCityName : city
      )
      state.activeCityName = newCityName

      citiesStorageActions('set', state)
    },

    changeActiveCity: (state, action: PayloadAction<number>) => {
      if (action.payload > state.cities.length || action.payload < 0) return

      state.activeCityIndex = action.payload
      state.activeCityName = state.cities[state.activeCityIndex]
      
      citiesStorageActions('set', state)
    },
  },
})

export { citiesSlice }
export const citiesReducer = citiesSlice.reducer
export const citiesActions = citiesSlice.actions
