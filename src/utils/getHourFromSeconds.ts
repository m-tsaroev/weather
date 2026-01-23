const getHourFromSeconds = <T extends boolean>(
  seconds: number,
  takeHour: T,
  timeZoneId = 'Europe/Moscow',
): T extends true ? number : string => {
  const date = new Date(seconds * 1000)
  const hour = Number(
    date.toLocaleTimeString('ru-RU', {
      timeZone: timeZoneId,
      hour: '2-digit',
    }),
  )

  if (takeHour) {
    return Math.floor(hour) as T extends true ? number : string
  }

  return `${hour <= 9 ? '0' : ''}${hour === 24 ? 0 : hour}:00` as T extends true
    ? number
    : string
}

export { getHourFromSeconds }
