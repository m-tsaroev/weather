import { apiSlice } from '@/store/api/api.slice'
import { apiKeyReducer } from '@/store/apiKey/apiKey.slice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    apiKey: apiKeyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export { store }
export type TypeRootState = ReturnType<typeof store.getState>
