import {SET_LOCATIONS, SET_WEATHER_DAYS} from '../constants';

const defaultState = {};

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_LOCATIONS:
            return {
                ...state,
                locations: action.payload,
            }
        case SET_WEATHER_DAYS:
            return {
                ...state,
                weatherDays: action.payload,
            }
        default:
            return state
    }
}