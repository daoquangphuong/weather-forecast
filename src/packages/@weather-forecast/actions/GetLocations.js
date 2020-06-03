import { Fetch } from '@fetch';
import { call, put, delay } from 'redux-saga/effects';
import { setLocations } from '../constants';

export default function* GetLocations(action) {
    const query = action.payload;

    yield put(setLocations(undefined));

    if (!query) {
        return;
    }

    const { data } = yield call(Fetch, {
        url: `/api/location/search/`,
        params: { query }
    })

    yield delay(Math.floor(Math.random() * 10) * 1000);

    yield put(setLocations(data));
};
