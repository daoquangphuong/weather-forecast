import styled from 'styled-components';

export const Root = styled.div`
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  > *:nth-child(2) {
    height: 100%;
    overflow: auto;
    
    > * {
      display: flex;
      height: 100%;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  > *:last-child {
    height: 100%;
  }
`

export const Header = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px #0a434a, 0 0 5px #1fc8db;
`
export const Footer = styled.div`
  text-align: center;
  padding: 10px 20px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
`;