import React from 'react';
import { Card } from 'antd';
import container from './container';

const WeatherDay = props => {
    const { data } = props;
    return (
        <Card>
            <div>{data.day}</div>
            <div>{data.minTemp}</div>
            <div>{data.maxTemp}</div>
        </Card>
    );
};

export default container(WeatherDay);
