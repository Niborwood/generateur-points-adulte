import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'
import supabase from '../../../lib/supabase'
import { Question, Answer } from '../../../definitions/definitions'

interface upsertProps {
  question: {
    _id?: number,
    title_0: string,
    title_1: string,
    created_at?: Date,
    updated_at: Date,
  }}

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

export const upsertQuestion = createAsyncThunk(
  'quiz/upsertQuestion',
  async ({question}: upsertProps) => {
    const { data: updatedQuestions, error: errorQuestion } = await supabase
            .from<Question>('questions')
            .upsert(question, { onConflict: '_id' })

    // const { data: updatedAnswers, error: errorAnswers } = await supabase
    //         .from<Question>('answers')
    //         .upsert(answers, { onConflict: '_id' })

    // if (errorQuestion || errorAnswers) throw new Error(errorQuestion?.message || errorAnswers?.message)
    if (errorQuestion) throw new Error(errorQuestion?.message)
    // return {updatedQuestion, updatedAnswers} as {updatedQuestion: Question, updatedAnswers: Answer[]}
    return {updatedQuestions} as {updatedQuestions: Question[]}
  }
)

export const sendStats = createAsyncThunk(
  'quiz/sendStats',
  async ({answers, name, age, createdAt, score}: {answers: Answer[], name: string, createdAt: Date, age: number, score: {adultScore: number, respScore: number}}) => {
    const { error } = await supabase
            .from('stats')
            .insert({
              createdAt,
              age,
              score,
              completedAt: new Date(),
              name,
              answers,
            })
    if (error) throw new Error(error.message)
    return true
  }
)