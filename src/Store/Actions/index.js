export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num
  };
};

export const isLogged = (state) => {
  return {
    type: "SIGN_IN",
    payload: state
  };
};

export const changeUsername = (state) => {
  return {
    type: "CHANGE_USERNAME",
    payload: state
  };
};
