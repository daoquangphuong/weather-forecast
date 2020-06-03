import React from 'react';
import SearchForm from '../SearchForm';
import WeatherDays from '../WeatherDays';
import container from './container';

const WeatherForecast = () => {
    return (
        <div>
            <SearchForm/>
            <WeatherDays/>
        </div>
    );
};

export default container(WeatherForecast);
