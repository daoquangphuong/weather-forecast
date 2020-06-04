import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import GetWeatherDays from './GetWeatherDays';
import { setWeatherDays, setLoading, setError } from './index';
import { GET_WEATHER_DAYS } from '../constants';

describe('call action GetWeatherDays', () => {
    let gen

    const testBeforeFetch = () => {
        expect(gen.next().value).toEqual(put(setWeatherDays(undefined)))
        expect(gen.next().value).toEqual(put(setLoading(GET_WEATHER_DAYS, true)))
        expect(gen.next().value).toEqual(put(setError(GET_WEATHER_DAYS, undefined)))
    }
    const testFinal = () => {
        expect(gen.next().value).toEqual(put(setLoading(GET_WEATHER_DAYS, false)))
    };

    const testReturn = () => {
        expect(gen.next()).toEqual({ value: undefined, done: true })
    }

    test('with empty id', () => {
        gen = GetWeatherDays({ type: GET_WEATHER_DAYS, payload: '' });
        testBeforeFetch();
        testFinal();
        testReturn()
    })

    test('with fetch error', () => {
        const woeid = 2487956
        gen = GetWeatherDays({ type: GET_WEATHER_DAYS, payload: woeid });
        testBeforeFetch();
        expect(gen.next().value).toEqual(call(axios, { url: `/api/location/${woeid}/`, }));
        const e = new Error('Network Error')
        expect(gen.throw(e).value).toEqual(put(setError(GET_WEATHER_DAYS, e.message)));
        testFinal();
        testReturn()
    })

    test('with 2487956 = 2487956 ', () => {
        const woeid = 2487956
        gen = GetWeatherDays({ type: GET_WEATHER_DAYS, payload: woeid });
        testBeforeFetch();
        expect(gen.next().value).toEqual(call(axios, { url: `/api/location/${woeid}/`, }));
        const resp = {
            data: {
                "consolidated_weather": [{
                    "id": 6600884265943040,
                    "weather_state_name": "Clear",
                    "weather_state_abbr": "c",
                    "wind_direction_compass": "W",
                    "created": "2020-06-04T15:16:16.401037Z",
                    "applicable_date": "2020-06-04",
                    "min_temp": 13.465,
                    "max_temp": 20.805,
                    "the_temp": 22.46,
                    "wind_speed": 5.740782293377343,
                    "wind_direction": 263.9595670412567,
                    "air_pressure": 1008.0,
                    "humidity": 56,
                    "visibility": 15.857082140300644,
                    "predictability": 68
                }]
            }
        }

        const weatherDays = [{
            id: 6600884265943040,
            day: 'Thursday',
            maxTemp: '21',
            minTemp: '13'
        }];

        expect(gen.next(resp).value).toEqual(put(setWeatherDays(weatherDays)));
        testFinal();
        testReturn();
    })
})