const updateData = (values) => {
  return {
    type: "UPDATE_DATA",
    payload: values
  };
};

const combined = {
  updateData
}

export default combined;
