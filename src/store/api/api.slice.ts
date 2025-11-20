import { URLS } from '@/config/urls'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: URLS.BASE }),
  endpoints: () => ({}),
  tagTypes: ['Weather Forecast'],
})

export { apiSlice }
