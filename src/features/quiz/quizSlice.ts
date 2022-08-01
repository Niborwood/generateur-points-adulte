import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AnswerGiven, QuizState } from '../../../definitions/definitions'

// IMPORT THUNKS
import { fetchQuestions, upsertQuestion, sendStats } from './quizThunks'

const initialState: QuizState = {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    name: "",
    createdAt: null,
    hasSetName: false,
    hasEndedQuiz: false,
    kindOfQuestions: 0,
    isLoading: false,
    score: {
      adultScore: null,
      respScore: null,
    },
    error: "",
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
        endQuiz: (state) => {
          state.hasEndedQuiz = true
        },
        randomizeQuiz: (state) => {
          // Empty answers given array and fill it with random answers
          state.answers = []
          for (const question of state.questions) {
            // Choose randomly between one of the answers
            const randomIndex = Math.floor(Math.random() * question.answers.length);
            const answer = question.answers[randomIndex];
            if (answer) state.answers.push({ questionId: question._id, answerId: answer._id! });
          }
          
          state.currentQuestionIndex = state.questions.length
          state.hasEndedQuiz = true
          state.name = "Random Test"
          state.hasSetName = true
        },
        goToNextQuestion: (state, action: PayloadAction<AnswerGiven>) => {
          // Tutoiement or vouvoiement
          if (state.currentQuestionIndex === 0 && (action.payload.answerId === 0 || action.payload.answerId === 1)) state.kindOfQuestions = action.payload.answerId

          state.answers.push(action.payload)
          state.currentQuestionIndex++
        },
        calculateScore: (state) => {
          const {answers} = state
          state.score.adultScore = 0.36
          state.score.respScore = 0.36
        },
        clearQuiz: (state) => {
          state = initialState
        }
    },
    extraReducers: (builder) => {
      // FETCH QUESTIONS
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      // If questions have already been fetched, do nothing
      if (state.questions.length) return
      
      state.questions = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchQuestions.pending, (state) => {
      state.isLoading = false
    })

    // UPSERT QUESTION
    builder.addCase(upsertQuestion.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(upsertQuestion.fulfilled, (state, action) => {
      state.isLoading = false
      for (const question of action.payload.updatedQuestions) {
        const questionIndex = state.questions.findIndex(q => q._id === question._id)
        if (questionIndex !== -1) state.questions[questionIndex] = question
        else state.questions.push(question)
      }
    })
    builder.addCase(upsertQuestion.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Une erreur est survenue'
    })

    // SEND STATS
    builder.addCase(sendStats.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(sendStats.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(sendStats.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Une erreur est survenue'
    })
  }
})

export const { beginQuiz, endQuiz, randomizeQuiz, goToNextQuestion, calculateScore } = quizSlice.actions
export default quizSlice.reducer