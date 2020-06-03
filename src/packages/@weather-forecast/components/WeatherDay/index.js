import React from 'react';
import { Card, Row, Col } from 'antd';
import { Root, Container } from './styled';
import container from './container';

const WeatherDay = props => {
    const { data } = props;

    const colProps = {
        xs: 8,
        sm: 8,
        md: 24
    };

    return (
        <Root>
            <Card>
                <Container>
                    <Row align={'middle'} justify={'center'}>
                        <Col {...colProps}>
                            <div className={'day'}>{data.day}</div>
                        </Col>
                        <Col {...colProps}>
                            <div className={'min'}><i>Min</i> <strong>{data.minTemp}</strong> °C</div>
                        </Col>
                        <Col {...colProps}>
                            <div className={'max'}><i>Max</i> <strong>{data.maxTemp}</strong> °C</div>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Root>
    );
};

export default container(WeatherDay);
