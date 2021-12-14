import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { ACTIONS } from '../constants';

const NavBar = styled.div`
  width: 80%;
  height: 10%;
  margin: 40px auto 10px;
  border: 1px solid gainsboro;
`;

const Nav = ({ dispatch }) => {
  return (
    <NavBar>
      <Button
        onClick={() =>
          dispatch({ type: ACTIONS.SET_PAGE, payload: { page: 'summits' } })
        }
      >
        Summits
      </Button>
    </NavBar>
  );
};

export default Nav;
