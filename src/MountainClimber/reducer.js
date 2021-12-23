import { ACTIONS } from './constants';
import { addSummit } from '../actions';

export const reducer = (state, { type, payload }) => {
  debugger;
  switch (type) {
    case ACTIONS.ADD_SUMMIT:
      return {
        ...state,
        goalData: {
          ...state.goalData,
          summits: addSummit(state, payload),
        },
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
    case ACTIONS.SET_PAGE_ACTION:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          action: payload.action,
        }
      }
    case ACTIONS.SET_PAGE_ID:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          action: payload.id,
        }
      }
    case ACTIONS.SET_PAGE_TYPE:
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          type: payload.type,
        }
      }
    default:
      return state;
  }
};

export const resetState = state => state;

export const initialState = {
  goalData: {
    summits: [],
    waypoints: [],
    hills: []
  },
  pageParams: {
    action: undefined,
    id: undefined,
    type: undefined,
  },
  showAddModal: '',
};
