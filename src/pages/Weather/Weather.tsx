import { useGetForecastQuery } from '@/store/api/weatherApi.slice'

const Weather = () => {
  const { data } = useGetForecastQuery({ city: 'Rostov on don' })  

  data?.forecast.forecastday.forEach((forecaster) => {
    forecaster.hour.forEach(hours => {
      console.log(hours.time)
      return
    });
  })

  return <h1>Weather</h1>
}

export { Weather }