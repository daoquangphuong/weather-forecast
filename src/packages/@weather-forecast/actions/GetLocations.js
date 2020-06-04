import { Fetch } from '@fetch';
import { call, put } from 'redux-saga/effects';
import { setLocations, setLoading, setError } from './index';
import { GET_LOCATIONS } from '../constants';

export default function* GetLocations(action) {
    try {
        const query = action.payload;

        yield put(setLocations(undefined));
        yield put(setLoading(GET_LOCATIONS, true));
        yield put(setError(GET_LOCATIONS, undefined));

        if (!query) {
            return;
        }

        const { data } = yield call(Fetch, {
            url: `/api/location/search/`,
            params: { query }
        })

        // {title: "San Francisco", location_type: "City", woeid: 2487956, latt_long: "37.777119, -122.41964"}
        const locations = data.map(item => ({
            id: item.woeid,
            title: item.title,
            type: item.location_type,
            lattLong: item.latt_long,
        }))

        yield put(setLocations(locations));

    } catch (e) {
        console.error(e);
        yield put(setError(GET_LOCATIONS, e.message));
    } finally {
        yield put(setLoading(GET_LOCATIONS, false));
    }
};
