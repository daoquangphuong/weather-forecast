import { all } from 'redux-saga/effects';
import { saga as weatherForecastSaga } from '@weather-forecast';

export default function* rootSaga() {
  yield all([weatherForecastSaga()]);
}
