import type { ForecastApiResponse } from '@/types/weatherForecast.types'
import { apiSlice } from './api.slice'
import { getApiKey } from '@/utils/apiKeys'

const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForecast: builder.query<ForecastApiResponse, { city: string }>({
      query: ({ city = 'Moscow' }) => {
        return {
          url: '/forecast.json',
          params: {
            key: getApiKey(),
            q: city,
          },
        }
      },
      providesTags: ['Weather Forecast'],
    }),
  }),
})

export const { useGetForecastQuery } = weatherApiSlice
