import React from 'react';
import 'antd/dist/antd.css';
import { WeatherForecast } from '@weather-forecast';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <WeatherForecast />
    </Provider>
  );
};

export default App;
