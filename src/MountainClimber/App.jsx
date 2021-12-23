import React, { useReducer } from 'react';
import styled from 'styled-components';
import './App.css';
import { initialState, reducer, resetState } from './reducer';
import MountainClimber from './components/MountainClimber';
import Nav from './components/Nav';
import Modal from './components/Modal';

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

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState, resetState);
  console.log({ state });

  return (
    <Wrapper>
      <Nav dispatch={dispatch} />
      <Card>
        <MountainClimber state={state} dispatch={dispatch} />
      </Card>
    </Wrapper>
  );
};

export default App;
