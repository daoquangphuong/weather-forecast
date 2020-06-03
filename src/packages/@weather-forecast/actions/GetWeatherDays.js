import dayjs from 'dayjs';
import { notification } from "antd";
import { Fetch } from "../../@fetch";
import { call, put } from "redux-saga/effects";
import { setLoading, setWeatherDays, GET_WEATHER_DAYS } from "../constants";

export default function* GetWeatherDays(action) {
    try {
        const woeid = action.payload;

        yield put(setWeatherDays(undefined));
        yield put(setLoading(GET_WEATHER_DAYS, true));

        let data;
        try {
            const res = yield call(Fetch, {
                url: `/api/location/${woeid}/`,
            })
            data = res.data;
        } catch (e) {
            data = {};
        }

        const weatherDays = ((data && data.consolidated_weather) || []).map(item => ({
            id: item.id,
            day: dayjs(item.applicable_date, 'YYYY-MM-DD').format('dddd'),
            maxTemp: (item.max_temp).toFixed(0),
            minTemp: (item.min_temp).toFixed(0),
        })).slice(0, 5)

        yield put(setWeatherDays(weatherDays));
    } catch (e) {
        notification.error({
            message: 'Fetch Error',
            description: e.message,
        });
        throw e;
    } finally {
        yield put(setLoading(GET_WEATHER_DAYS, false));
    }
};
