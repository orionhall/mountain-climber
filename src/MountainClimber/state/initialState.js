import { STORAGE_KEY } from '../constants';

const attemptToRetrieveSavedGoals = () => {
  const savedGoals = localStorage.getItem(STORAGE_KEY);
  return savedGoals ? JSON.parse(savedGoals) : initialGoalData;
};

export const initialGoalData = {
  summits: [],
  waypoints: [],
  hills: [],
};

export const initialState = {
  goalData: attemptToRetrieveSavedGoals(),
  pageParams: {
    action: undefined,
    id: undefined,
    type: undefined,
  },
  showAddModal: '',
  showState: false,
};