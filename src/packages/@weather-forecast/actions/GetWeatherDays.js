import dayjs from 'dayjs';
import { Fetch } from "../../@fetch";
import { call, put } from "redux-saga/effects";
import { setWeatherDays } from "../constants";

export default function* GetWeatherDays(action) {
    const woeid = action.payload;

    yield put(setWeatherDays(undefined));

    const { data } = yield call(Fetch, {
        url: `/api/location/${woeid}/`,
    })

    const weatherDays = ((data && data.consolidated_weather) || []).map(item => ({
        id: item.id,
        day: dayjs(item.applicable_date, 'YYYY-MM-DD').format('dddd'),
        maxTemp: (item.max_temp).toFixed(2),
        minTemp: (item.min_temp).toFixed(2),
    }))

    yield put(setWeatherDays(weatherDays));
};
