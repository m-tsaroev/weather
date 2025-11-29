const getHourFromSeconds = (seconds: number, isMoscowTime = true): string => {
  const delay = isMoscowTime ? 3 : 0

  const hour = (seconds / 3600) % 24 + delay

  return `${hour <= 9 ? '0' : ''}${hour === 24 ? 0 : hour}:00`
}

export { getHourFromSeconds }
