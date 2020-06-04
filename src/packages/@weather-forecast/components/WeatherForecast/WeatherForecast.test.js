import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../../../store';
import Com from './index';
import {
    reset,
    setError,
    setLoading,
    setLocations,
    setWeatherDays
} from '../../actions';
import { GET_LOCATIONS, GET_WEATHER_DAYS } from '../../constants';
import { locations, weatherDays } from '../../mock';

const App = () => {
    return (
        <Provider store={store}>
            <Com/>
        </Provider>
    )
}

test('renders WeatherForecast', () => {
    store.dispatch(reset());
    const { getByText } = render(<App/>);
    const textElement = getByText(/Weather Forecast Application/i);
    expect(textElement).toBeInTheDocument();
});

test('renders WeatherForecast with empty data', () => {
    store.dispatch(reset());

    store.dispatch(setLocations([]));
    store.dispatch(setWeatherDays([]));

    const { getByText } = render(<App/>);
    const textElement = getByText(/Weather Forecast Application/i);
    expect(textElement).toBeInTheDocument();
});

test('renders WeatherForecast with full data', () => {
    store.dispatch(reset());
    store.dispatch(setLocations(locations));
    store.dispatch(setWeatherDays(weatherDays));

    const { getByText } = render(<App/>);
    const textElement = getByText(/Weather Forecast Application/i);
    expect(textElement).toBeInTheDocument();
});

test('renders WeatherForecast with loading', () => {
    store.dispatch(reset());
    store.dispatch(setLoading(GET_LOCATIONS, true));
    store.dispatch(setLoading(GET_WEATHER_DAYS, true));

    const { getByText } = render(<App/>);
    const textElement = getByText(/Weather Forecast Application/i);
    expect(textElement).toBeInTheDocument();
});

test('renders WeatherForecast with error', () => {
    store.dispatch(reset());
    store.dispatch(setError(GET_LOCATIONS, 'error'));
    store.dispatch(setError(GET_WEATHER_DAYS, 'error'));

    const { getByText } = render(<App/>);
    const textElement = getByText(/Weather Forecast Application/i);
    expect(textElement).toBeInTheDocument();
});
