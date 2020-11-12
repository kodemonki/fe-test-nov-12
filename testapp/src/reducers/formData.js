const initialState = {
  beenBefore: false,
  grade: "",
  dateStart: "",
  dateEnd: "",
  timeStart: "",
  timeEnd: "",
};

const formData = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      let newState = { ...state, ...action.payload };
      return newState;
    default:
      return state;
  }
};

export default formData;
