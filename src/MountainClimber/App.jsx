import React from 'react';
import styled from 'styled-components';
import './App.css';
import MountainClimber from './components/MountainClimber';
import Nav from './components/Nav';
import StateDisplay from './components/StateDisplay';
import { MountainClimberProvider } from './state/MountainClimberProvider';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;
  margin: 0 auto;
  border: 1px solid gainsboro;
  color: white;
`;

const App = () => (
  <MountainClimberProvider>
    <Wrapper>
      <Nav />
      <Card>
        <MountainClimber />
      </Card>
      <StateDisplay />
    </Wrapper>
  </MountainClimberProvider>
);

export default App;
