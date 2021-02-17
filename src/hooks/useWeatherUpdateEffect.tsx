import { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import SkinContext from '../contexts/SkinContext'
import { WeatherResponse } from '../models/interfaces'
import { Skin } from '../models/skin'
import { isVideoKey, Video } from '../models/video'
import { Actions } from '../store/actions'

export function useWeatherUpdateEffect(weatherData: WeatherResponse | null) {
    const [skin, setSkin] = useContext(SkinContext)
    const dispatch = useDispatch()

    useEffect(
        function currentWeatherDidUpdate() {
            if (!weatherData) return
            const weatherKey = `${weatherData.current.weather[0].main}_${weatherData.current.weather[0].icon}`
            setSkin(weatherKey.slice(-1) === 'd' ? Skin.day : Skin.night)
            isVideoKey(weatherKey) && dispatch(Actions.changeBackground(Video[weatherKey]))
        },
        [weatherData]
    )
}