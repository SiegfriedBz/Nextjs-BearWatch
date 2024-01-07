type TCoords = {
  latitude: number
  longitude: number
}

export async function getUserLocation(): Promise<TCoords> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords)
      },
      (error) => {
        reject(error)
      },
      {
        timeout: 10000,
      }
    )
  })
}
