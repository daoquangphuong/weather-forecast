import {takeLatest, all} from 'redux-saga/effects';
import {GET_LOCATIONS, GET_WEATHER_DAYS} from '../constants';

import GetLocations from '../actions/GetLocations';
import GetWeatherDays from '../actions/GetWeatherDays';

export default function* rootSaga() {
    yield all([
        yield takeLatest(GET_LOCATIONS, GetLocations),
        yield takeLatest(GET_WEATHER_DAYS, GetWeatherDays)
    ]);
}