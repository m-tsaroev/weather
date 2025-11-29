import { Spinner } from '@/components/ui/Spinner'
import { PATHS } from '@/config/paths'
import { Layout } from '@/layouts/Layout'
import { Setup } from '@/pages/Setup'
import { Weather } from '@/pages/Weather'
import { testApiKeyLoader } from '@/router/loaders/testApiKey.loader'
import { createBrowserRouter, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: PATHS.MAIN,
    element: <Layout />,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        path: PATHS.MAIN,
        loader: () => redirect(PATHS.WEATHER),
      },
      {
        path: PATHS.WEATHER,
        element: <Weather />,
        loader: testApiKeyLoader,
      },
      {
        path: PATHS.SETUP,
        element: <Setup />,
      },
    ],
  },
])

export { router }
