const PREFIX = `WEATHER_FORECAST:`;
export const GET_LOCATIONS = `${PREFIX}GET_LOCATIONS`;
export const GET_WEATHER_DAYS = `${PREFIX}GET_WEATHER_DAYS`;
export const SET_LOCATIONS = `${PREFIX}SET_LOCATIONS`;
export const SET_WEATHER_DAYS = `${PREFIX}SET_WEATHER_DAYS`;

export const getLocations = (query) => {
    return { type: GET_LOCATIONS, payload: query }
};

export const getWeatherDays = (woeid) => {
    return { type: GET_WEATHER_DAYS, payload: woeid }
};

export const setLocations = (locations) => {
    return { type: SET_LOCATIONS, payload: locations }
};

export const setWeatherDays = (weatherDays) => {
    return { type: SET_WEATHER_DAYS, payload: weatherDays }
};