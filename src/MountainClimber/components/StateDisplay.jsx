import React, { useContext } from 'react';
import { MountainClimberContext } from '../state/MountainClimberProvider';
import styled from 'styled-components';

const StatePanel = styled.div`
  width: 80%;
  margin: 10px auto;
  border: 1px solid gainsboro;
  color: white;
`;

const StateUl = styled.ul`
  margin: unset;
  padding: 0 0 0 0.25em;
  list-style-position: inside;
`;

const ChildUl = styled(StateUl)`
  padding: 0 0 0 1em;
`;

const StateLi = styled.li`
  padding: 0 0 0 0.25em;
`;

const StateDisplay = () => {
  const { state } = useContext(MountainClimberContext);
  console.log(state);

  const stateToLi = state => {
    return Object.entries(state).map(([key, value]) => {
      if (value === undefined || value === null) {
        return (
          <StateLi>
            {key}: {value === undefined ? 'undefined' : 'null'}
          </StateLi>
        );
      }
      if (typeof value === 'string') {
        return (
          <StateLi>
            {key}: '{value}'
          </StateLi>
        );
      }
      if (typeof value === 'number') {
        return (
          <StateLi>
            {key}: {value}
          </StateLi>
        );
      }
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          if (value.length === 0) {
            return (
              <StateLi>
                {key}: <em>empty</em>
              </StateLi>
            );
          }

          return value.map(thing => (
            <StateLi>
              {key}: <ChildUl>{stateToLi(thing)}</ChildUl>
            </StateLi>
          ));
        }

        return (
          <StateLi>
            {key}:<ul>{stateToLi(value)}</ul>
          </StateLi>
        );
      }

      return null;
    });
  };

  return state.showState ? (
    <StatePanel>
      <StateUl>{stateToLi(state)}</StateUl>
    </StatePanel>
  ) : null;
};

export default StateDisplay;
