import { SET_LOCATIONS, SET_WEATHER_DAYS, SET_LOADING, SET_ERROR } from '../constants';

const defaultState = {
    // weatherDays: [
    //     { id: 4963654879412224, day: "Wednesday", maxTemp: "23", minTemp: "15" },
    //     { id: 4944825407242240, day: "Thursday", maxTemp: "19", minTemp: "13" },
    //     { id: 6021746043912192, day: "Friday", maxTemp: "16", minTemp: "12" },
    //     { id: 4729498362707968, day: "Saturday", maxTemp: "16", minTemp: "12" },
    //     { id: 4570999372644352, day: "Sunday", maxTemp: "16", minTemp: "12" },
    // ]
};

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
        case SET_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    [action.payload.key]: action.payload.value
                }
            }
        default:
            return state
    }
}