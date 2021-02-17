import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { WeatherResponse } from "../../models/interfaces";
import { Store } from '../../store';
import WeatherIcon from '../WeatherIcon';
import { useStyles } from './styles';
import Moment from 'react-moment'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Actions } from '../../store/actions'
import useCapitalizedString from '../../hooks/useCapitalizedString';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
                        <div className={classes.iconWrapper}>
                            <WeatherIcon icon={weatherData.current.weather[0].icon} />
                            <div style={{ position: 'relative', top: '-15px' }}>{Math.round(weatherData.current.temp)}°</div>
                        </div>
                        <strong>{currentCity.name}, {currentCity.sys.country}</strong>
                        <span className="text-muted d-block">{capitalized(weatherData.current.weather[0].description)}</span>
                    </div>
                    <Button className={classes.changeBtn} onClick={() => dispatch(Actions.resetCurrent())}>Change</Button>
                </Col>
                <Col xs={6} className="d-flex justify-content-center my-4">
                    <WbSunnyIcon className="mx-2" /><Moment unix format="HH:mm">{weatherData.current.sunrise! + weatherData.timezone_offset}</Moment>
                </Col>
                <Col xs={6} className="d-flex justify-content-center my-4">
                    <Brightness3Icon className="mx-2" /><Moment unix format="HH:mm">{weatherData.current.sunset! + weatherData.timezone_offset}</Moment>
                </Col>
                {
                    weatherData.daily.slice(1, 7).map(dayWeather => (
                        <Col xs={2} className="text-center d-flex flex-column mb-4">
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
                            <WeatherIcon icon={dayWeather.weather[0].icon} />
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