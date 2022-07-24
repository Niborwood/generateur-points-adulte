import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// THUNKS
import { signUpUser, logInUser } from './userThunks'

type UserState = {
  email: string,
  isAuthenticated: boolean,
}

const initialState: UserState = {
  email: "",
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
      builder.addCase(logInUser.pending, (state, action) => {
        state.isAuthenticated = false
      })
      builder.addCase(logInUser.fulfilled, (state, action) => {
        state.isAuthenticated = true
      })
      builder.addCase(logInUser.rejected, (state, action) => {
        state.isAuthenticated = false
        state.email = action.payload.email
      })
    }
})

export const {  } = userSlice.actions
export default userSlice.reducer