import { SearchResponse, WeatherResponse } from "../models/interfaces"
import { UserCity } from "../models/classes"

const citiesEndpoint = "https://openweathermap.org/data/2.5/find?type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1613412071764"
const weatherEndpoint = "https://api.openweathermap.org/data/2.5/onecall?appid=44397f5076949434f62fedc9ff68bfaa&exclude=minutely&units=metric"

export const API = {
    getCities: async (query: string) => {
        const response = await fetch(`${citiesEndpoint}&q=${query}`)
        const data = await response.json() as SearchResponse
        return data
    },
    getWeather: async (city: UserCity) => {
        const response = await fetch(`${weatherEndpoint}&lat=${city.coord.lat}&lon=${city.coord.lon}`)
        const data = await response.json() as WeatherResponse
        return data
    }
}