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
      const cityToRemove = action.payload
      const removeIndex = state.cities.findIndex(
        (city) => city === cityToRemove,
      )

      // Проверяем, удаляем ли мы активный город
      const isRemovingActiveCity = cityToRemove === state.activeCityName

      // Удаляем город
      state.cities = state.cities.filter((city) => city !== cityToRemove)

      // Если не осталось городов
      if (state.cities.length === 0) {
        state.activeCityIndex = -1
        state.activeCityName = ''
      }
      // Если удалили активный город
      else if (isRemovingActiveCity) {
        // Если удалили последний город
        if (removeIndex >= state.cities.length) {
          state.activeCityIndex = state.cities.length - 1
        } else {
          // Остаемся на том же индексе (следующий город займет место)
          state.activeCityIndex = Math.min(removeIndex, state.cities.length - 1)
        }
        state.activeCityName = state.cities[state.activeCityIndex]
      }
      // Если удалили город до активного
      else if (removeIndex < state.activeCityIndex) {
        state.activeCityIndex -= 1
        // activeCityName остается тот же (индекс изменился)
      }
      // Если удалили город после активного - ничего не меняем

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
