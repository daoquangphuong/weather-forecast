import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import config from '@config';
import GetWeatherDays from './GetWeatherDays';
import { setWeatherDays, setLoading, setError } from './index';
import { GET_WEATHER_DAYS } from '../constants';
import { weatherDaysResp, weatherDays } from '../mock';

describe('calls action GetWeatherDays', () => {
  let gen;

  const testBeforeFetch = () => {
    expect(gen.next().value).toEqual(put(setWeatherDays(undefined)));
    expect(gen.next().value).toEqual(put(setLoading(GET_WEATHER_DAYS, true)));
    expect(gen.next().value).toEqual(
      put(setError(GET_WEATHER_DAYS, undefined))
    );
  };
  const testFinal = () => {
    expect(gen.next().value).toEqual(put(setLoading(GET_WEATHER_DAYS, false)));
  };

  const testReturn = () => {
    expect(gen.next()).toEqual({ value: undefined, done: true });
  };

  test('with empty id', () => {
    gen = GetWeatherDays({ type: GET_WEATHER_DAYS, payload: '' });
    testBeforeFetch();
    testFinal();
    testReturn();
  });

  test('with fetch error', () => {
    const woeid = 2487956;
    gen = GetWeatherDays({ type: GET_WEATHER_DAYS, payload: woeid });
    testBeforeFetch();
    expect(gen.next().value).toEqual(
      call(axios, { url: `${config.API_ENDPOINT}/api/location/${woeid}/` })
    );
    const e = new Error('Network Error');
    expect(gen.throw(e).value).toEqual(
      put(setError(GET_WEATHER_DAYS, e.message))
    );
    testFinal();
    testReturn();
  });

  test('with 2487956 = 2487956 ', () => {
    const woeid = 2487956;
    gen = GetWeatherDays({ type: GET_WEATHER_DAYS, payload: woeid });
    testBeforeFetch();
    expect(gen.next().value).toEqual(
      call(axios, { url: `/api/location/${woeid}/` })
    );

    expect(gen.next(weatherDaysResp).value).toEqual(
      put(setWeatherDays(weatherDays))
    );
    testFinal();
    testReturn();
  });
});
