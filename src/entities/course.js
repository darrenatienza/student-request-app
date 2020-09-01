export const initialState = {
  value: 0,
  vals: [],
};
export const get = (counter) => (arr) => {
  counter.setState({ vals: [...counter.state.vals, arr] });
};
