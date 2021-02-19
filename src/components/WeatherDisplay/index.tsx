import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { WeatherResponse } from "../../models/interfaces";
import { Store } from '../../store';
import WeatherIcon from '../WeatherIcon';
import { useStyles } from './styles';
import Moment from 'react-moment'
import { Button, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Actions } from '../../store/actions'
import useCapitalizedString from '../../hooks/useCapitalizedString';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useCompassSector from '../../hooks/useCompassSector';
import TodaysWeather from './TodaysWeather'
import uniqid from 'uniqid'

export default function WeatherDisplay({ weatherData }: { weatherData: WeatherResponse | null }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const capitalized = useCapitalizedString()

    const currentCity = useSelector((store: Store) => store.currentCity)

    return <>
        {
            weatherData && currentCity &&
            <Row noGutters className="px-2">
                <Col xs={12} className="mx-auto position-relative text-center">
                    <div className="position-relative">
                        <div className={classes.largeIconWrapper}>
                            <WeatherIcon icon={weatherData.current.weather[0].icon} />
                        </div>
                        <strong className="d-inline-block w-50">{currentCity.name}, {currentCity.sys.country}</strong>
                        <span className="text-muted d-block">{capitalized(weatherData.current.weather[0].description)}</span>
                    </div>
                    <Button className={classes.changeBtn} onClick={() => dispatch(Actions.resetCurrent())}>Change</Button>
                </Col>
                <TodaysWeather current={weatherData.current} daily={weatherData.daily[0]} tzOffset={weatherData.timezone_offset} />
                {
                    weatherData.daily.slice(1, 7).map(dayWeather => (
                        <Col xs={2} className="text-center d-flex flex-column mt-2 mb-4" key={uniqid()}>
                            <span className="d-block">
                                <strong>
                                    <Moment unix format="ddd">
                                        {dayWeather.dt}
                                    </Moment>
                                </strong>
                            </span>
                            <span>
                                <strong>
                                    <Moment unix format="DD">
                                        {dayWeather.dt}
                                    </Moment>
                                </strong>
                            </span>
                            <div className={classes.iconWrapper}>
                                <WeatherIcon icon={dayWeather.weather[0].icon} />
                            </div>
                            <h5>
                                {Math.round(dayWeather.temp.day)}
                            </h5>
                            <div className="d-flex justify-content-between">
                                <ArrowUpwardIcon style={{ transform: 'scale(0.75)' }} />
                                <div className="mx-auto">{Math.ceil(dayWeather.temp.max)}</div>
                            </div>
                            <div className="d-flex justify-content-between text-muted">
                                <ArrowDownwardIcon style={{ transform: 'scale(0.75)' }} />
                                <div className="mx-auto">{Math.floor(dayWeather.temp.min)}</div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        }
    </>
}