import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Store } from "../../store"
import { API } from "../../API"
import { useRequestStack } from "../../hooks/useRequestStack"
import { UserCity, isUserCity } from "../../models/classes"
import { ResultCity } from "../../models/interfaces"
import { Actions } from "../../store/actions"
import { useStyles } from './styles'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Col, Row } from "react-bootstrap"
import { CircularProgress, InputAdornment, TextField } from "@material-ui/core"
import WeatherIcon from "../WeatherIcon"
import CloseIcon from '@material-ui/icons/Close';

export default function CitySelector() {
    const stackRequest = useRequestStack()
    const dispatch = useDispatch()
    const classes = useStyles()

    const [loadingResults, setLoadingResults] = useState(false)
    const [results, setResults] = useState<ResultCity[]>([])

    const userCities = useSelector((store: Store) => store.cities)
    const currentCity = useSelector((store: Store) => store.currentCity)

    const [typingCity, setTypingCity] = useState('')

    const cityOptions: Array<UserCity | ResultCity> = [
        ...userCities.filter(city =>
            city.name.toLocaleLowerCase().includes(typingCity.toLocaleLowerCase())
        ),
        ...results.filter(city => !userCities.some(userCity => userCity.id === city.id))
    ]

    //console.log(cityOptions)

    return <Autocomplete
        className="mx-auto"
        classes={{ noOptions: "d-none" }}
        options={typingCity ? cityOptions : userCities}
        groupBy={(city) =>
            isUserCity(city) ? "User Cities" : "Results"
        }
        getOptionLabel={(option) => option.name || "no"}
        getOptionSelected={(option) => option.id === currentCity!.id}
        style={{ width: 300 }}
        onChange={(_, city) => {
            if (!city) return

            let selectedCity: UserCity =
                isUserCity(city)
                    ? city
                    : new UserCity(city)

            !isUserCity(city) && dispatch(Actions.addCity(selectedCity))
            dispatch(Actions.setCurrentCity(selectedCity))
        }}
        onInputChange={(event, newValue) => {
            if (event.nativeEvent.type === "click") return

            setLoadingResults(true)

            newValue.length > 2 && stackRequest(() =>
                API.getCities(newValue)
                    .then(({ list }) => setResults(list))
                    .catch(error => console.error(error))
                    .finally(() => setLoadingResults(false))
            )

            setTypingCity(newValue)
        }}
        renderInput={(params) => (
            <TextField
                {...params}
                autoFocus
                className={classes.textField}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: <>{
                        loadingResults &&
                        <InputAdornment position="end" style={{
                            right: '10px',
                            transform: 'scale(0.6)',
                            position: 'absolute'
                        }}>
                            <CircularProgress />
                        </InputAdornment>
                    }</>
                }}
                label="City"
                variant="outlined"
            />
        )}
        renderOption={(city) => <>
            <Row noGutters className="w-100">
                <Col style={{ maxWidth: 40 }} className="d-flex align-items-center me-2">
                    <WeatherIcon icon={city.weather[0].icon} />
                </Col>
                <Col className="d-flex align-items-center">
                    <strong className="mx-2">{city.name}, <span className="text-muted">{city.sys.country}</span></strong>
                    <span className="text-muted">{city.weather[0].main}</span>
                </Col>
                {
                    isUserCity(city) &&
                    <CloseIcon
                        className="ml-auto my-auto mr-2"
                        onClick={(event) => {
                            event.stopPropagation();
                            dispatch(Actions.removeCity(city.id))
                        }} />
                }
            </Row>
        </>}
    />
}