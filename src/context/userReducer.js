export default (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        usersList: action.payload,
        loading: false,
      };

    case "GET_USER": {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "CLEAR_USER": {
      return {
        ...state,
        user: null,
        loading: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
