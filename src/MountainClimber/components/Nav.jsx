import React, { useContext } from 'react';
import { MountainClimberContext } from '../state/MountainClimberProvider';
import styled from 'styled-components';
import Button from './Button';
import { ACTIONS } from '../constants';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 10%;
  margin: 40px auto 10px;
  border: 1px solid gainsboro;
`;

const NavButton = styled(Button)`
  width: 100px;
  padding: 0;
  text-align: center;
`;

const Nav = () => {
  const { dispatch } = useContext(MountainClimberContext);

  return (
    <NavBar>
      <NavButton
        onClick={() =>
          dispatch({
            type: ACTIONS.SET_PAGE_PARAMS,
            payload: { action: 'index', id: undefined, type: 'summits' },
          })
        }
      >
        Summits
      </NavButton>
      <NavButton
        onClick={() =>
          dispatch({
            type: ACTIONS.SET_PAGE_PARAMS,
            payload: { action: 'index', id: undefined, type: 'waypoints' },
          })
        }
      >
        Waypoints
      </NavButton>
      <NavButton
        onClick={() =>
          dispatch({
            type: ACTIONS.SET_PAGE_PARAMS,
            payload: { action: 'index', id: undefined, type: 'hills' },
          })
        }
      >
        Hills
      </NavButton>
      <NavButton
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_STATE,
          })
        }
      >
        Toggle State
      </NavButton>
    </NavBar>
  );
};

export default Nav;
