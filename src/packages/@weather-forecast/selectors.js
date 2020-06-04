import { createSelector as createSelectorOrigin } from 'reselect'
import { GET_LOCATIONS, GET_WEATHER_DAYS } from './constants';

const createSelector = (select) => createSelectorOrigin(
    state => state.weatherForecast,
    select
);

export const selectLocations = createSelector(state => state.locations);
export const selectWeatherDays = createSelector(state => state.weatherDays)
export const selectLocationsLoading = createSelector(state => state.loading && state.loading[GET_LOCATIONS])
export const selectWeatherDaysLoading = createSelector(state => state.loading && state.loading[GET_WEATHER_DAYS])
export const selectLocationsError = createSelector(state => state.error && state.error[GET_LOCATIONS])
export const selectWeatherDaysError = createSelector(state => state.error && state.error[GET_WEATHER_DAYS])