import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AnswerGiven, AnswersGiven, QuizState } from '../../../definitions/definitions'

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
    }
})

export const {  } = userSlice.actions
export default userSlice.reducer