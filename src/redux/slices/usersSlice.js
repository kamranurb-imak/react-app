import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  
  initialState: {
    list: []
  },

  reducers: {

    setUsers: (state, action) => {
      state.list = action.payload;
    },

    addUser: (state, action) => {
      state.list.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, name } = action.payload;
      const existingUser = state.list.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
      }
    },

    removeUser: (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    }
  }
});

export const { setUsers, addUser, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
