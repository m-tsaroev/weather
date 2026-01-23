import type {
  CitiesSliceState,
  cityRenameActionPayload,
} from '@/store/cities/cities.types'
import { LocalStorageService } from '@/utils/LocalStorageService'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CitiesSliceState = {
  cities: ['London', 'Nazran'],
  activeCityName: 'London',
  activeCityIndex: 0,
}

const { state: storageState, setState } =
  new LocalStorageService<CitiesSliceState>('cities', initialState)

const citiesSlice = createSlice({
  name: 'cities',
  initialState: storageState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      const isAlreadyThere = state.cities.some(
        (city) => city === action.payload,
      )
      const isCitiesOverThenTen = state.cities.length === 10

      if (isAlreadyThere || isCitiesOverThenTen) return

      state.cities.push(action.payload)
      setState(state)
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
          console.log(15)
        }
        state.activeCityName = state.cities[state.activeCityIndex]
      } else if (removeIndex < state.activeCityIndex) {
        state.activeCityIndex -= 1
      }

      setState(state)
    },

    renameCity: (state, action: PayloadAction<cityRenameActionPayload>) => {
      const { cityName, newCityName } = action.payload

      state.cities = state.cities.map((city) =>
        city === cityName ? newCityName : city,
      )
      state.activeCityName = newCityName

      setState(state)
    },

    changeActiveCity: (state, action: PayloadAction<number>) => {
      if (action.payload > state.cities.length || action.payload < 0) return

      state.activeCityIndex = action.payload
      state.activeCityName = state.cities[state.activeCityIndex]

      setState(state)
    },
  },
})

export { citiesSlice }
export const citiesReducer = citiesSlice.reducer
export const citiesActions = citiesSlice.actions
