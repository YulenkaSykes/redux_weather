const valueReduser = (data = "", action) => {
  switch (action.type) {
    case "value":
      return action.payload;
    default:
      return data;
  }
};

export default valueReduser;
