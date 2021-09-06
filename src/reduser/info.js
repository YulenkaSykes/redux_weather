const fetchReduser = (data = {}, action) => {
  switch (action.type) {
    case "data":
      return action.payload;
    default:
      return data;
  }
};

export default fetchReduser;
