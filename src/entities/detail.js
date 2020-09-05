export const initialState = {
  srCode: "",
  fullName: "",
  requests: [],
};
export const setSrCode = (entity) => (val) => {
  entity.setState({ srCode: val });
};
export const setFullName = (entity) => (val) => {
  entity.setState({ fullName: val });
};
export const setRequests = (entity) => (val) => {
  entity.setState({ requests: [...entity.state.requests, val] });
};
export const clearRequest = (entity) => () => {
  entity.setState({ requests: [] });
};
