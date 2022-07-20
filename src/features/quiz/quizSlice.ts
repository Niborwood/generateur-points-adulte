import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AnswerGiven, QuizState } from '../../../definitions/definitions'

import rawData from '../../../content/data'

const initialState: QuizState = {
    questions: rawData,
    answers: [],
    currentQuestionIndex: 0,
    name: "",
    createdAt: null,
    hasSetName: false,
    hasEndedQuiz: false,
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        beginQuiz: (state, action: PayloadAction<string>) => {
          state.name = action.payload
          state.hasSetName = true,
          state.createdAt = new Date()
        },
        answerQuestion: (state, action: PayloadAction<AnswerGiven>) => {
          state.answers.push(action.payload)
        },
        endQuiz: (state) => {
          state.hasEndedQuiz = true
        },
        randomizeQuiz: (state) => {
          // Empty answers given array and fill it with random answers
          state.answers = []
          for (const question of rawData) {
            // Choose randomly between one of the answers
            const randomIndex = Math.floor(Math.random() * question.answers.length);
            const answer = question.answers[randomIndex];
            state.answers.push({ questionId: question._id, answerId: answer._id });
          }
          
          state.currentQuestionIndex = rawData.length
          state.hasEndedQuiz = true
          state.name = "Random Test"
          state.hasSetName = true
        },
        goToNextQuestion: (state, action: PayloadAction<AnswerGiven>) => {
          state.answers.push(action.payload)
          state.currentQuestionIndex++
        }
    }
})

export const { beginQuiz, answerQuestion, endQuiz, randomizeQuiz, goToNextQuestion } = quizSlice.actions
export default quizSlice.reducer