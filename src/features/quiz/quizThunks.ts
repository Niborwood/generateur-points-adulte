import { createAsyncThunk } from '@reduxjs/toolkit'
import supabase from '../../../lib/supabase'
import { Question } from '../../../definitions/definitions'

export const fetchQuestions = createAsyncThunk<Question[]>(
  'quiz/fetchAllQuestions', 
  async () => {
    const { data, error } = await supabase
            .from<Question>('questions')
            .select(`*, answers (*)`)
            .order('_id')
    return data as Question[]
  }
)