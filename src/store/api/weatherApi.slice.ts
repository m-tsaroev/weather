import { ENDPOINTS } from '@/config/urls'
import type { ForecastApiResponse } from '@/types/weatherForecast.types'
import { getApiKey } from '@/utils/apiKeys'
import { apiSlice } from './api.slice'

const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForecast: builder.query<ForecastApiResponse, { city: string }>({
      query: ({ city = 'Moscow' }) => {
        return {
          url: ENDPOINTS.FORECAST,
          params: {
            key: getApiKey(),
            q: city,
          },
        }
      },
      providesTags: ['Weather Forecast'],
    }),

    validateApiKey: builder.query<{ valid: boolean }, { apiKey?: string }>({
      query: ({ apiKey = getApiKey() }) => {
        return {
          url: ENDPOINTS.FORECAST,
          params: {
            key: apiKey,
            q: 'Moscow',
          },
        }
      },
      transformResponse: () => ({ valid: true }),
      transformErrorResponse: () => ({ valid: false }),
    }),
  }),
})

export { weatherApiSlice }
export const { useGetForecastQuery } = weatherApiSlice
