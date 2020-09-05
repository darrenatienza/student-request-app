export const initialState = {
  showStudentModal: false,
};
export const setStudentModalVisible = (entity) => (val) => {
  entity.setState({ showStudentModal: val });
};
