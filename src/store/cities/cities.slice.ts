import type { CitiesSliceState } from '@/store/cities/cities.types'
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
      state.cities = state.cities.filter((city) => city !== action.payload)
      citiesStorageActions('set', state)
    },
    changeActiveCity: (state, action: PayloadAction<number>) => {
      if (action.payload > state.cities.length || action.payload < 0) return

      state.activeCityIndex = action.payload
      state.activeCityName = state.cities[action.payload]
      citiesStorageActions('set', state)
    },
  },
})

export { citiesSlice }
export const citiesReducer = citiesSlice.reducer
export const citiesActions = citiesSlice.actions
