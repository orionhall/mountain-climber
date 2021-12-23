export const addSummit = (state, payload) => [
  ...state.goalData.summits,
  payload.summit,
];
