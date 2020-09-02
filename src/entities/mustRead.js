export const initialState = {
  isMustReadOpen: false,
};
export const toggleMustRead = (mustRead) => (isCollapse) => {
  mustRead.setState({ isMustReadOpen: isCollapse });
};
