import React from 'react';
import Button from './Button';
import { ACTIONS } from '../constants';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const GoalsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 50px auto;
`;

const GoalWrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  text-align: center;
  border: 1px solid #414141;
  background: lightgray;
  font-weight: bold;
  color: black;
  outline: none;

  &:focus {
    background: lightgray;
    outline: none;
  }

  &:hover {
    background: lightgray;
  }
`;

const GoalText = styled.div`
  font-weight: bold;
`;

const getCurrentGoal = (goals, type, id) => {
  const currentGoal = goals && goals.find(goal => goal.id === id);

  return currentGoal || `${type} #${id} not found.`;
};

const Page = ({ state, dispatch }) => {
  const {
    pageParams: { action, id, type },
    goalData,
  } = state;
  const goals = goalData[type];
  const currentGoal = getCurrentGoal(goals, type, id);

  return (
    <Wrapper>
      <GoalsSection>
        {!type ? (
          <div>Mountain Climber</div>
        ) : !action || action === 'index' ? (
          goals.length ? (
            goals.map(goal => {
              return (
                <GoalWrapper
                  key={goal.id}
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.SET_PAGE_PARAMS,
                      payload: { action: 'show', id: goal.id },
                    })
                  }
                >
                  <GoalText>{goal.name}</GoalText>
                </GoalWrapper>
              );
            })
          ) : (
            <div>
              <div>No {`${type}`} found.</div>
              <Button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.SHOW_ADD_MODAL,
                    payload: { type },
                  })
                }
              >
                Add {`${type}`}
              </Button>
            </div>
          )
        ) : action === 'show' ? (
          <div>{currentGoal.name}</div>
        ) : null}
      </GoalsSection>
      <Button
        // Need to revisit this button
        onClick={() =>
          dispatch({ type: ACTIONS.SET_PAGE_PARAMS, payload: { action: '' } })
        }
      >
        Back
      </Button>
    </Wrapper>
  );
};

export default Page;
