import { combineReducers } from 'redux';
import { reducers as weatherForecast } from '@weather-forecast';

export default combineReducers({
  weatherForecast,
});
