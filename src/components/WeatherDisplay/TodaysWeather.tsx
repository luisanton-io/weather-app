import React from "react";
import { CurrentWeather, Daily } from "../../models/interfaces";
import { Row, Col } from "react-bootstrap"
import { Typography } from '@material-ui/core'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Moment from 'react-moment'
import uniqid from 'uniqid'

import useCompassSector from "../../hooks/useCompassSector";

interface TodaysProps {
    current: CurrentWeather,
    daily: Daily,
    tzOffset: number
}

export default function TodaysWeather({ current: { temp,
    feels_like,
    humidity,
    pressure,
    wind_deg,
    wind_speed,
    sunrise,
    sunset
}, daily, tzOffset }: TodaysProps) {

    const compass = useCompassSector()

    return <>
        <Col xs={3} className="px-1 px-md-4">
            <Typography variant="h5" >
                Today
            </Typography>
            <Typography variant="h3">
                {Math.round(temp)}°
            </Typography>
            <div className="d-flex justify-content-between">
                <ArrowUpwardIcon style={{ transform: 'scale(0.75)' }} />{daily.temp.max}
            </div>
            <div className="d-flex justify-content-between text-muted">
                <ArrowDownwardIcon style={{ transform: 'scale(0.75)' }} />{daily.temp.min}
            </div>
        </Col>
        <Col xs={7} md={6} className="p-3 d-flex flex-column justify-content-between">
            {
                [
                    [
                        "Feels like:",
                        `${Math.round(feels_like)}°`
                    ],
                    [
                        "Humidity:",
                        `${Math.round(humidity)}%`
                    ],
                    [
                        "Pressure:",
                        `${Math.round(pressure)}hPa`
                    ],
                    [
                        "Wind:",
                        `${compass(wind_deg)}, ${wind_speed} m/s`
                    ]
                ].map(([datum, value]) => (
                    <div className="d-flex justify-content-between" key={uniqid()}>
                        <span className="font-weight-bold text-muted">{datum}</span><span>{value}</span>
                    </div>
                ))
            }
        </Col>
        <Col xs={2} md={3} className="d-flex my-3 pr-md-4 flex-column justify-content-around align-items-end">
            <div className="text-center">
                <WbSunnyIcon className="d-block mx-auto" />
                <div className="mx-auto">
                    <Moment unix format="HH:mm">
                        {sunrise! + tzOffset}
                    </Moment>
                </div>
            </div>
            <div className="text-center">
                <Brightness3Icon className="d-block mx-auto" />
                <div className="mx-auto">
                    <Moment unix format="HH:mm">
                        {sunset! + tzOffset}
                    </Moment>
                </div>
            </div>
        </Col>
    </>
}


