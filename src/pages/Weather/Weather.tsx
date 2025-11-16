import { useGetForecastQuery } from '@/store/api/weatherApi.slice'

const Weather = () => {
  const { data } = useGetForecastQuery({ city: 'Rostov on don' })  

  data?.forecast.forecastday.forEach((forecaster) => {
    console.log(forecaster.day.maxtemp_c)
  })

  return <h1>Weather</h1>
}

export { Weather }