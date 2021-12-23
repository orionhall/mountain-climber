import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { ACTIONS } from '../constants';

const ModalWrapper = styled.div`
  width: 80%;
  height: 80%;
  background: #1d1d1d;
  border: 1px solid gainsboro;
  text-align: center;
  color: white;
`;

const ModalHeader = styled.div`
  width: 100%;
  //padding: 20px 0;
  border-bottom: 1px solid gainsboro;
  position: relative;
`;

const ModalBody = styled.div`
  width: 100%;
`;

const ModalInput = styled.input`
  display: block;
  text-align: center;
  width: 260px;
  margin: 100px auto 50px auto;
  font-style: ${({ clicked }) => (clicked ? 'normal' : 'italic')};
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: -10px;
  background: gray;
  box-shadow: inset 0px 0px 3px 2px rgba(255, 255, 255, 0.48);
  color: black;
  margin: 0;
  padding: 0;
`;

const Modal = ({ type, dispatch }) => {
  const headerText = `Add ${type}`;
  const [input, setInput] = useState(`Type a new ${type} to add`);
  const [error, setError] = useState('');
  const [clicked, setClicked] = useState(false);

  return (
    <ModalWrapper>
      <ModalHeader>
        <CloseButton onClick={() => dispatch({ type: ACTIONS.HIDE_ADD_MODAL })}>
          X
        </CloseButton>
        <h1>{headerText}</h1>
      </ModalHeader>
      <ModalBody>
        <ModalInput
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onClick={() => {
            setInput('');
            setError('');
            setClicked(true);
          }}
          clicked={clicked}
        />
        <Button
          onClick={() => {
            if (clicked && input !== '') {
              dispatch({
                type: ACTIONS.ADD_SUMMIT,
                payload: { summit: input },
              });
            } else {
              setError(`I can't add a blank ${type} you dum dum`);
            }
          }}
        >
          {headerText}
        </Button>
        <div>{error}</div>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
