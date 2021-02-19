import { useState, useEffect, useContext } from 'react'
import { useStyles } from "./styles";
import { useSelector } from 'react-redux'
import { Store } from '../store'
import { Container, Row, Col } from 'react-bootstrap'
import VideoBackground from '../components/VideoBackground';
import React from "react";
import { WeatherResponse } from '../models/interfaces';
import WeatherLogo from '../components/WeatherLogo';
import CitySelector from '../components/CitySelector';
import WeatherDisplay from '../components/WeatherDisplay';
import { API } from '../API';
import SkinContext from '../contexts/SkinContext';
import { useWeatherUpdateEffect } from '../hooks/useWeatherUpdateEffect';

export default function Main() {
    const classes = useStyles()
    const currentCity = useSelector((store: Store) => store.currentCity)

    const [skin] = useContext(SkinContext)
    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null)

    useEffect(() => {
        currentCity &&
            API.getWeather(currentCity)
                .then(data => setWeatherData(data))
                .catch(error => console.error(error))
    }, [currentCity])

    useWeatherUpdateEffect(weatherData)

    // console.log(weatherData)

    return (<>
        <VideoBackground />
        <Container className={`${skin ? classes.darkSkin : ''}`}>
            <Row id="main-row">
                <Col id="main-col" xs={11} md={6} className={classes.mainCol}>
                    <WeatherLogo />
                    {
                        currentCity
                            ? <WeatherDisplay weatherData={weatherData} />
                            : <CitySelector />
                    }
                </Col>
            </Row>
        </Container>
    </>)
}