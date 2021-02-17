import { Coord, ResultCity, WeatherSummary } from "./interfaces";

export class UserCity implements ResultCity {
    id: number;
    name: string;
    coord: Coord;
    weather: WeatherSummary[];
    userCity: boolean
    sys: { country: string; };

    constructor({ id, name, coord, weather, sys }: ResultCity) {
        this.id = id;
        this.name = name;
        this.coord = coord;
        this.sys = sys;
        this.weather = weather;
        this.userCity = true
    }
}

export const isUserCity = (city: UserCity | ResultCity): city is UserCity => city.hasOwnProperty("userCity")
