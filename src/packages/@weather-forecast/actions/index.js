import {
  RESET,
  GET_LOCATIONS,
  GET_WEATHER_DAYS,
  SET_LOADING,
  SET_ERROR,
  SET_LOCATIONS,
  SET_WEATHER_DAYS,
} from '../constants';

export const reset = () => {
  return { type: RESET };
};

export const getLocations = (query) => {
  return { type: GET_LOCATIONS, payload: query };
};

export const getWeatherDays = (woeid) => {
  return { type: GET_WEATHER_DAYS, payload: woeid };
};

export const setLoading = (key, value) => {
  return { type: SET_LOADING, payload: { key, value } };
};

export const setError = (key, value) => {
  return { type: SET_ERROR, payload: { key, value } };
};

export const setLocations = (locations) => {
  return { type: SET_LOCATIONS, payload: locations };
};

export const setWeatherDays = (weatherDays) => {
  return { type: SET_WEATHER_DAYS, payload: weatherDays };
};
