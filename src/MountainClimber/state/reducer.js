import { ACTIONS } from '../constants';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_GOAL:
      const lastGoalIndex = state.goalData[payload.type].length
        ? Math.max(...state.goalData[payload.type].map(goal => goal.id))
        : 0;
      const goalToAdd = {
        id: lastGoalIndex + 1,
        name: payload.name,
        timeAdded: new Date(),
      };
      const newGoalData = {
        ...state.goalData,
      };
      newGoalData[payload.type] = [...state.goalData[payload.type], goalToAdd];

      return {
        ...state,
        goalData: newGoalData,
      };
    case ACTIONS.SHOW_ADD_MODAL:
      return {
        ...state,
        showAddModal: payload.type,
      };
    case ACTIONS.HIDE_ADD_MODAL:
      return {
        ...state,
        showAddModal: '',
      };
    case ACTIONS.SET_PAGE_PARAMS:
      return {
        ...state,
        pageParams: {
          action: payload.action || state.pageParams.action,
          id: payload.id || state.pageParams.id,
          type: payload.type || state.pageParams.type,
        },
      };
    case ACTIONS.TOGGLE_STATE:
      return {
        ...state,
        showState: !state.showState,
      }
    default:
      return state;
  }
};

export const resetState = state => state;
