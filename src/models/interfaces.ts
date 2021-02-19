import { Video } from "./video";

export interface SearchResponse {
    message: string;
    cod: string;
    count: number;
    list: ResultCity[];
}

export interface ResultCity {
    id: number;
    name: string;
    coord: Coord;
    weather: WeatherSummary[];
    sys: {
        country: string
    }
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface WeatherResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentWeather;
    hourly: CurrentWeather[];
    daily: Daily[];
}

export interface CurrentWeather {
    dt: number;
    sunrise?: number;
    sunset?: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherSummary[];
    pop?: number;
}

export interface WeatherSummary {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherSummary[];
    clouds: number;
    pop: number;
    uvi: number;
    snow?: number;
}

export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}
