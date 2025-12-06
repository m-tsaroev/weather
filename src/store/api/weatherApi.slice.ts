import { ENDPOINTS } from '@/config/urls'
import type { ForecastApiResponse } from '@/types/weatherForecast.types'
import { getInitialKey } from '@/utils/getInitialKey'
import { apiSlice } from './api.slice'

const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForecast: builder.query<ForecastApiResponse, { city: string }>({
      query: ({ city = 'Moscow' }) => {
        return {
          url: ENDPOINTS.FORECAST,
          params: {
            key: getInitialKey(),
            q: city,
          },
        }
      },
      providesTags: ['Weather Forecast'],
    }),

    validateApiKey: builder.query<{ valid: boolean }, { apiKey?: string }>({
      query: ({ apiKey = getInitialKey() }) => {
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
export const {
  useGetForecastQuery,
  useLazyGetForecastQuery,
  useLazyValidateApiKeyQuery,
} = weatherApiSlice
