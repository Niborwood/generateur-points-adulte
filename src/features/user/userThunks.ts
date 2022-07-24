import { createAsyncThunk } from '@reduxjs/toolkit'
import supabase from '../../../lib/supabase'
import { Question } from '../../../definitions/definitions'

interface signUpData {
  email: string,
  password: string,
}

export const signUpUser = createAsyncThunk(
  'user/signUp', 
  async ({ email, password }: {email: string, password: string}) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password
    })
    return user as any
  }
)

export const logInUser = createAsyncThunk(
  'user/logIn',
  async ({ email, password }: {email: string, password: string}) => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password
    })
    return user as any
  }
)