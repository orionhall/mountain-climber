import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { ACTIONS } from '../constants';

const SummitWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MountainClimber = ({
  state: {
    summits,
    selections: { page },
  },
  dispatch,
}) => {
  // show summits index page after clicking Summits in the nav
  // if (page !== '') {
  //   return <Page />
  // }

  return summits.length && page === 'summitsIndex' ? (
    <SummitWrapper>
      {summits[0]}
      <br />
      <Button
        onClick={() =>
          dispatch({ type: ACTIONS.SET_PAGE, payload: { page: '' } })
        }
      >
        Back
      </Button>
    </SummitWrapper>
  ) : (
    <Button
      onClick={() =>
        dispatch({
          type: ACTIONS.SHOW_ADD_MODAL,
          payload: { modalType: 'Summit' },
        })
      }
    >
      Add Summit
    </Button>
  );
};

export default MountainClimber;
