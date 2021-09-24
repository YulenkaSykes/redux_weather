const fetchReduser = (data = {}, action) => {
  switch (action.type) {
    case "data":
      return action.payload;
    //  in react {...data, ...action.payload (in useReduser)}
    default:
      return data;
  }
};

export default fetchReduser;
