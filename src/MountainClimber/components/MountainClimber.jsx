import React from 'react';
import Modal from './Modal';
import Page from './Page';

const MountainClimber = ({ state, dispatch }) => {
  const { showAddModal } = state;
  if (showAddModal) {
    return <Modal type={showAddModal} dispatch={dispatch} />;
  }

  return (
    <>
      <Page state={state} dispatch={dispatch} />
      {showAddModal && <Modal type={showAddModal} dispatch={dispatch} />}
    </>
  );
};

export default MountainClimber;
