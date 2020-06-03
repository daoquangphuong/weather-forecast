import React from 'react';
import { Row, Col } from 'antd';
import WeatherDay from '../WeatherDay';
import container from './container';

const WeatherDays = props => {
    const { weatherDays } = props;
    return (
        <Row>
            {(weatherDays || []).map(item => <Col key={item.id}>
                <WeatherDay data={item}/>
            </Col>)}
        </Row>
    );
};

export default container(WeatherDays);
