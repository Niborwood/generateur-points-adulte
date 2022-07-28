import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@supabase/supabase-js'

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
      checkIfLoggedIn: (state, action: PayloadAction<User | null>) => {
        state.isAuthenticated = !!action.payload
        state.email = action.payload?.email || ""
      }
    },
    extraReducers: (builder) => {
      builder.addCase(signUpUser.pending, (state) => {
        state.isAuthenticated = false
      }),
      builder.addCase(signUpUser.fulfilled, (state) => {
        state.isAuthenticated = true
      }),
      builder.addCase(signUpUser.rejected, (state) => {
        state.isAuthenticated = false
      })
      builder.addCase(logInUser.pending, (state) => {
        state.isAuthenticated = false
      })
      builder.addCase(logInUser.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.email = action.payload.email || ''
      })
      builder.addCase(logInUser.rejected, (state) => {
        state.isAuthenticated = false
      })
    }
})

export const { checkIfLoggedIn } = userSlice.actions
export default userSlice.reducer