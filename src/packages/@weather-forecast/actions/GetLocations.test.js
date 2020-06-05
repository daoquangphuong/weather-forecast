import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import config from '@config';
import GetLocations from './GetLocations';
import { setLocations, setLoading, setError } from './index';
import { GET_LOCATIONS } from '../constants';
import { locationsResp, locations } from '../mock';

describe('calls action GetLocations', () => {
  let gen;

  const testBeforeFetch = () => {
    expect(gen.next().value).toEqual(put(setLocations(undefined)));
    expect(gen.next().value).toEqual(put(setLoading(GET_LOCATIONS, true)));
    expect(gen.next().value).toEqual(put(setError(GET_LOCATIONS, undefined)));
  };
  const testFinal = () => {
    expect(gen.next().value).toEqual(put(setLoading(GET_LOCATIONS, false)));
  };

  const testReturn = () => {
    expect(gen.next()).toEqual({ value: undefined, done: true });
  };

  test('with empty query', () => {
    gen = GetLocations({ type: GET_LOCATIONS, payload: '' });
    testBeforeFetch();
    testFinal();
    testReturn();
  });

  test('with fetch error', () => {
    const query = 'ho cho minh';
    gen = GetLocations({ type: GET_LOCATIONS, payload: query });
    testBeforeFetch();
    expect(gen.next().value).toEqual(
      call(axios, {
        url: `${config.API_ENDPOINT}/api/location/search/`,
        params: { query },
      })
    );
    const e = new Error('Network Error');
    expect(gen.throw(e).value).toEqual(put(setError(GET_LOCATIONS, e.message)));
    testFinal();
    testReturn();
  });

  test('with query = "ho chi minh" ', () => {
    const query = 'ho cho minh';
    gen = GetLocations({ type: GET_LOCATIONS, payload: query });
    testBeforeFetch();
    expect(gen.next().value).toEqual(
      call(axios, {
        url: `/api/location/search/`,
        params: { query },
      })
    );

    expect(gen.next(locationsResp).value).toEqual(put(setLocations(locations)));
    testFinal();
    testReturn();
  });
});
