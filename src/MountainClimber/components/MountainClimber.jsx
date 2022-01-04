import React, { useContext } from 'react';
import Modal from './Modal';
import Page from './Page';
import { MountainClimberContext } from '../state/MountainClimberProvider';

const MountainClimber = () => {
  const { state, dispatch } = useContext(MountainClimberContext);
  const { showAddModal } = state;
  if (showAddModal) {
    return <Modal type={showAddModal} dispatch={dispatch} />;
  }

  return (
    <>
      <Page state={state} dispatch={dispatch} />
      {/*TODO refactor type*/}
      {showAddModal ? <Modal type={showAddModal} dispatch={dispatch} /> : null}
    </>
  );
};

export default MountainClimber;
