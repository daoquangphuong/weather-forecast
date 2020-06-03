import { SET_LOCATIONS, SET_WEATHER_DAYS, SET_LOADING } from '../constants';

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
        case SET_LOADING:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [action.payload.key]: action.payload.value
                }
            }
        default:
            return state
    }
}