const updateData = (values) => {
  return {
    type: "UPDATE_DATA",
    payload: values
  };
};

export default {
  updateData,
};
