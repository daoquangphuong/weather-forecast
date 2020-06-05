import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import config from '@config';
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

    const { data } = yield call(axios, {
      url: `${config.API_ENDPOINT}/api/location/search/`,
      params: { query },
    });

    // {title: "San Francisco", location_type: "City", woeid: 2487956, latt_long: "37.777119, -122.41964"}
    const locations = data.map((item) => ({
      id: item.woeid,
      title: item.title,
    }));

    yield put(setLocations(locations));
  } catch (e) {
    yield put(setError(GET_LOCATIONS, e.message));
  } finally {
    yield put(setLoading(GET_LOCATIONS, false));
  }
}
