const valueReduser = (data = "", action) => {
  switch (action.type) {
    case "value":
      return action.payload;
    //  in react {...data, ...action.payload}(in useReduser)
    default:
      return data;
  }
};

export default valueReduser;
