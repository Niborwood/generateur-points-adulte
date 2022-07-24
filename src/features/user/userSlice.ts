import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// THUNKS
import { signUpUser, logInUser } from './userThunks'

type UserState = {
  email: string,
  name: string,
  isAuthenticated: boolean,
}

const initialState: UserState = {
  email: "",
  name: "",
  isAuthenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(signUpUser.pending, (state, action) => {
        state.isAuthenticated = false
      }),
      builder.addCase(signUpUser.fulfilled, (state, action) => {
        state.isAuthenticated = true
      }),
      builder.addCase(signUpUser.rejected, (state, action) => {
        state.isAuthenticated = false
      })
    }
})

export const {  } = userSlice.actions
export default userSlice.reducer