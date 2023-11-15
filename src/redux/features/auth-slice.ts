import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type InitialState = {
  value: AuthState
}

type AuthState = {
  isAuth: boolean
  username: string
  uid: string
  isModerator: boolean
}

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false
  } as AuthState
} as InitialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "kskamd2m2i13jo1m",
          isModerator: false
        }
      }
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator
    }
  }
})


export const { logOut, logIn, toggleModerator } = auth.actions
export default auth.reducer