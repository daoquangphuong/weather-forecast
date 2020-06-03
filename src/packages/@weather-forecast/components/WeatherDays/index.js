import React from 'react';
import { Spin, Row, Col } from 'antd';
import WeatherDay from '../WeatherDay';
import { Root } from './styled';
import container from './container';

const WeatherDays = props => {
    const { weatherDaysLoading, weatherDays } = props;
    return (
        <Root>
            <Row justify={'center'}>
                {weatherDaysLoading ?
                    <Col>
                        <br/>
                        <br/>
                        <Spin size={'large'}/>
                    </Col>
                    :
                    <>
                        {(weatherDays || []).map(item => <Col key={item.id} xs={24} sm={12} md={6} lg={4}>
                            <WeatherDay data={item}/>
                        </Col>)}
                    </>
                }
            </Row>
        </Root>
    );
};

export default container(WeatherDays);
