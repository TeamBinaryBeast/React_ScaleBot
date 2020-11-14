const selfReducer = (
  state = {
    // username: "Raihan",
    // password: "Mecha!23",
    // key: "123098"
    username: "raihan",
    password: null,
    key: null
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      state = { username: action.payload, ...state };
      return;
    default:
      return state;
  }
};

export default selfReducer;
