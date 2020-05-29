import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import UserReducer from "./userReducer";

const UserState = (props) => {
  const initialState = {
    usersList: [],
    user: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  // fetch users
  const getUsers = async (text) => {
    const res = await axios.get(`https://reqres.in/api/users?page=2`);
    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
    // setLoading(false);
  };
  const getUser = async (id) => {
    setLoading();
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: "GET_USER",
      payload: res.data.data,
    });
  };
  const clearUSer = () => {
    dispatch({
      type: "CLEAR_USER",
    });
  };
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        usersList: state.usersList,
        loading: state.loading,
        getUsers,
        getUser,
        setLoading,
        clearUSer,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
