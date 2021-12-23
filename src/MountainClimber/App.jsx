import React, { useReducer } from 'react';
import styled from 'styled-components';
import './app.css';
import { addSummit } from '../actions';
import { ACTIONS } from './constants';
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

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_SUMMIT:
      return {
        ...state,
        showAddModal: '',
        summits: addSummit(state, payload),
        selections: {
          page: 'summitsIndex',
        },
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
    waypoints: [],
    hills: [],
    selections: {
      page: '',
    },
    showAddModal: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState, initState);
  const { showAddModal } = state;
  console.log({ showAddModal: state.showAddModal, summits: state.summits });

  return (
    <Wrapper>
      <Nav dispatch={dispatch} />
      {/*TODO screen/page selection*/}
      <Card>
        {showAddModal !== '' ? (
          <Modal modalType={showAddModal} dispatch={dispatch} />
        ) : (
          <MountainClimber state={state} dispatch={dispatch} />
        )}
      </Card>
    </Wrapper>
  );
};

export default App;
