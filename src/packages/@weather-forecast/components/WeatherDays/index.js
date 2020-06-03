import React from 'react';
import { Row, Col } from 'antd';
import WeatherDay from '../WeatherDay';
import { Root } from './styled';
import container from './container';

const WeatherDays = props => {
    const { weatherDays } = props;
    return (
        <Root>
            <Row justify={'center'}>
                {(weatherDays || []).map(item => <Col key={item.id} xs={24} sm={24} md={6} lg={4}>
                    <WeatherDay data={item}/>
                </Col>)}
            </Row>
        </Root>
    );
};

export default container(WeatherDays);
