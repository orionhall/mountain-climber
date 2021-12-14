import React, { useReducer } from 'react';
import styled from 'styled-components';
import './app.css';
import { addSummit } from '../actions';
import { ACTIONS } from './constants';
import MountainClimber from './components/MountainClimber';
import Nav from './components/Nav';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
`;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_SUMMIT:
      return {
        ...state,
        showAddModal: '',
        summits: addSummit(state, payload),
      };
    case ACTIONS.SHOW_ADD_MODAL:
      return {
        ...state,
        showAddModal: payload.modalType,
      };
    case ACTIONS.HIDE_ADD_MODAL:
      return {
        ...state,
        showAddModal: '',
      };
    case ACTIONS.SET_PAGE:
      return {
        ...state,
        selections: {
          ...state.selections,
          page: payload.page,
        },
      };
    default:
      return state;
  }
};
const initState = state => state;

const App = () => {
  const initialState = {
    summits: [],
    peaks: [],
    hills: [],
    selections: {
      page: '',
    },
    showAddModal: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState, initState);

  console.log({ showAddModal: state.showAddModal, summits: state.summits });

  return (
    <Wrapper>
      <Nav dispatch={dispatch} />
      {/*TODO modal goes here w/ isVisible*/}
      {/*TODO screen/page selection*/}
      <MountainClimber state={state} dispatch={dispatch} />
    </Wrapper>
  );
};

export default App;
