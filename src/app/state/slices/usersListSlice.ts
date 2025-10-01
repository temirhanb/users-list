import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {DATA_USERS} from "@/shared";

export interface IUser {
  key?: string;
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

export interface IInitialState {
  users: IUser[];
}

const initialState = {
  users: DATA_USERS
} as IInitialState;

export const usersSlices = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },

    editUser: (state, action: PayloadAction<IUser>) => {
      const editedUser = action.payload;
      const updatedUser = state.users.findIndex(({id}) => id === editedUser.id);
      state.users[updatedUser] = editedUser;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const deletedUser = action.payload;
      const filteredUsers = state.users.filter(({id}) => deletedUser !== id);
      return {users: filteredUsers};
    }
  },
});
export const {addUser, deleteUser, editUser} = usersSlices.actions;

export default usersSlices.reducer;