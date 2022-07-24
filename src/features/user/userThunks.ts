import { createAsyncThunk } from '@reduxjs/toolkit'
import supabase from '../../../lib/supabase'
import { User } from '@supabase/supabase-js'

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

    if (error) throw new Error(error.message)
    return user as any
  }
)

export const logInUser = createAsyncThunk<User, signUpData>(
  'user/logIn',
  async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password
    })

    if (error) throw new Error(error.message)
    return user as User
  }
)