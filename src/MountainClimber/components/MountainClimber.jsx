import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from './Button';
import { ACTIONS } from '../constants';

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

const SummitWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MountainClimber = ({
  state: { showAddModal, summits, selections },
  dispatch,
}) => {
  return (
    <Card>
      {showAddModal !== '' ? (
        <Modal modalType={showAddModal} dispatch={dispatch} />
      ) : summits.length ? (
        <SummitWrapper>{summits[selections.summit]}</SummitWrapper>
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
      )}
    </Card>
  );
};

export default MountainClimber;
