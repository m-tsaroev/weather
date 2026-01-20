import { apiSlice } from '@/store/api/api.slice'
import { apiKeyReducer } from '@/store/apiKey/apiKey.slice'
import { citiesReducer } from '@/store/cities/cities.slice'
import { modalWindowsReducer } from '@/store/modalWindows/modalWindows.slice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    apiKey: apiKeyReducer,
    cities: citiesReducer,
    modalWindows: modalWindowsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export { store }
export type TypeRootState = ReturnType<typeof store.getState>
