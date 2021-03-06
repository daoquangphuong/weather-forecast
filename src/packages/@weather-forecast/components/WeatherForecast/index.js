import React from 'react';
import SearchForm from '../SearchForm';
import WeatherDays from '../WeatherDays';
import { Card } from 'antd';
import { Root, Container, Content, Header, Footer } from './styled';
import container from './container';

const WeatherForecast = () => {
  return (
    <Root>
      <Container>
        <Header>Weather Forecast Application</Header>
        <Card>
          <Content>
            <SearchForm />
            <br />
            <WeatherDays />
          </Content>
        </Card>
        <Footer>© 2020 - Dao Quang Phuong</Footer>
      </Container>
    </Root>
  );
};

export default container(WeatherForecast);
