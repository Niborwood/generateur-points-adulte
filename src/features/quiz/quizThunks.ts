import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'
import supabase from '../../../lib/supabase'
import { Question, Answer } from '../../../definitions/definitions'

interface upsertProps {
  question: Question,
  answers: Answer[]
}

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

export const upsertQuestion = createAsyncThunk<upsertProps, upsertProps>(
  'quiz/upsertQuestion',
  async ({question, answers}) => {
    const { data: updatedQuestion, error: errorQuestion } = await supabase
            .from<Question>('questions')
            .upsert(question, { onConflict: '_id' })

    const { data: updatedAnswers, error: errorAnswers } = await supabase
            .from<Question>('answers')
            .upsert(answers, { onConflict: '_id' })

    if (errorQuestion || errorAnswers) throw new Error(errorQuestion?.message || errorAnswers?.message)
    return {updatedQuestion, updatedAnswers} as {updatedQuestion: Question, updatedAnswers: Answer[]}
  }
)