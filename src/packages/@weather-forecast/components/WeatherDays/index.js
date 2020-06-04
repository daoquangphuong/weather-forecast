import React from 'react';
import { Spin, Typography, Row, Col } from 'antd';
import WeatherDay from '../WeatherDay';
import { Root } from './styled';
import container from './container';

const WeatherDays = props => {
    const { weatherDaysError, weatherDaysLoading, weatherDays } = props;

    let contentBlock;

    if (weatherDaysLoading) {
        contentBlock = (
            <Col>
                <br/>
                <br/>
                <Spin size={'large'}/>
            </Col>
        )
    } else if (weatherDaysError) {
        contentBlock = (
            <Col>
                <Typography.Text type={'danger'}>Error: {weatherDaysError}</Typography.Text>
            </Col>
        )
    } else {
        contentBlock = <>
            {(weatherDays || []).map(item => <Col key={item.id} xs={24} sm={12} md={6} lg={4}>
                <WeatherDay data={item}/>
            </Col>)}
        </>
    }

    return (
        <Root>
            <Row justify={'center'}>
                {contentBlock}
            </Row>
        </Root>
    );
};

export default container(WeatherDays);
