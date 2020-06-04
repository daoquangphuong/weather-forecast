import React from 'react';
import { Card } from 'antd';
import { Root, Container } from './styled';
import container from './container';

const WeatherDay = (props) => {
  const { data } = props;

  return (
    <Root>
      <Card>
        <Container>
          <div className={'day'}>{data.day}</div>
          <div className={'min'}>
            <i>Min</i> <strong>{data.minTemp}</strong> °C
          </div>
          <div className={'max'}>
            <i>Max</i> <strong>{data.maxTemp}</strong> °C
          </div>
        </Container>
      </Card>
    </Root>
  );
};

export default container(WeatherDay);
