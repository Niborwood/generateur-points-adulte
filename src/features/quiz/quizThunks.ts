import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'
import supabase from '../../../lib/supabase'
import { Question, Answer, QuestionToUpsert, AnswerToUpsert } from '../../../definitions/definitions'

interface upsertProps {
  question: QuestionToUpsert,
  answers: AnswerToUpsert[]
}

export const fetchQuestions = createAsyncThunk<Question[]>(
  'quiz/fetchAllQuestions', 
  async () => {
    const { data, error } = await supabase
            .from<Question>('questions')
            .select(`*, answers (*)`)
            .order('_id')
            .order('created_at', { foreignTable: 'answers' })

    if (error) throw new Error(error.message)
    return data as Question[]
  }
)

export const upsertQuestion = createAsyncThunk(
  'quiz/upsertQuestion',
  async ({question, answers}: upsertProps) => {
    
    const {answersToUpsert, answersToInsert} = answers.reduce((acc: {answersToUpsert: AnswerToUpsert[], answersToInsert: AnswerToUpsert[]}, answer) => {
      if (answer._id) {
        acc.answersToUpsert.push(answer)
      } else {
        acc.answersToInsert.push(answer)
      }
      return acc
    }, {answersToUpsert: [], answersToInsert: []})

    const res = await Promise.all([
      supabase
        .from<Question>('questions')
        .upsert(question, { onConflict: '_id' }),
      supabase
        .from<AnswerToUpsert[]>('answers')
        .insert(answersToInsert),
      supabase
        .from<AnswerToUpsert[]>('answers')
        .upsert(answersToUpsert, { onConflict: '_id' })
    ])

    // If any of the promises fails, throw an error
    if(!res.every((r) => !r.error)) throw new Error('Error while inserting/upserting')

    return {
      updatedQuestion: res[0].data,
      insertedAnswers: res[1].data,
      updatedAnswers: res[2].data
    }
  }
)