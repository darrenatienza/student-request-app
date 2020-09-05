export const initialState = {
  srCodeFilter: "",
};
export const setSrCodeFilter = (filter) => (val) => {
  filter.setState({ srCodeFilter: val });
};
