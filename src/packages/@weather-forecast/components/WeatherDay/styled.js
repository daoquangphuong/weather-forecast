import styled from 'styled-components';

export const Root = styled.div`
  padding: 10px;

  > * {
    border-radius: 5px;
  }
`;

export const Container = styled.div`
  .day {
    color: #337ab7;
    text-align: center;
    font-size: 20px;
  }
  .max,
  .min {
    text-align: center;
  }
`;
