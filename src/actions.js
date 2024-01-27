// actions.js
import axios from "axios";

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: "FETCH_USERS_ERROR",
  payload: error,
});

// async action using redux-thunk
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_STARTED" }); // Set loading to true
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      const { GET: users } = response.data;
      console.log("Users: " + JSON.stringify(users));
      dispatch(fetchUsersSuccess(users)); // Corrected dispatch
    } catch (error) {
      dispatch(fetchUsersError(error.message));
    }
  };
};
