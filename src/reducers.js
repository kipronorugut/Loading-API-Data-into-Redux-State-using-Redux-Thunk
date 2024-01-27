// reducers.js
const initialState = {
  users: [],
  loading: true,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  console.log("Reducer State:", state); // Log state before update
  switch (action.type) {
    case "FETCH_USERS_STARTED":
      return {
        ...state,
        loading: true, // Set loading to true
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_USERS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
