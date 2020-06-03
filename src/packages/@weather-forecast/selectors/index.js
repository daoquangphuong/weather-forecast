import { createSelector as createSelectorOrigin } from 'reselect'

const createSelector = (select) => createSelectorOrigin(
    state => state.weatherForecast,
    select
);

export const selectLocations = createSelector(state => state.locations);
export const selectWeatherDays = createSelector(state => state.weatherDays)