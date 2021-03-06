import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  _id: string;
  name: string;
  userImg: string;
}

const initialState: UserState = {
  _id: "",
  name: "",
  userImg: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return (state = action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
