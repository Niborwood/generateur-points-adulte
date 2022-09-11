import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerGiven, QuizState } from "../../../definitions/definitions";

// IMPORT THUNKS
import {
  fetchQuestions,
  upsertQuestion,
  sendStats,
  reorderQuestions,
  fetchStats,
  fetchAdminStats,
} from "./quizThunks";

// UTILS
import { calculateScore } from "../../utils";
import extractSubjects from "../../utils/extract-subjects";

const initialState: QuizState = {
  questions: [],
  answers: [],
  currentQuestionIndex: 0,
  name: "",
  age: 0,
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
  hasClickedLaunch: false,
  startCardTimer: 0,
  ages: [
    {
      label: "- de 18 ans",
      min: 0,
      max: 18,
    },
    {
      label: "18 à 25 ans",
      min: 18,
      max: 25,
    },
    {
      label: "26 à 35 ans",
      min: 26,
      max: 35,
    },
    {
      label: "36 à 50 ans",
      min: 36,
      max: 50,
    },
    {
      label: "+ de 50 ans",
      min: 51,
      max: 100,
    },
  ],
  answersSubjects: {
    adultMax: "",
    adultMin: "",
    respMax: "",
    respMin: "",
  },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    launchQuiz: (state) => {
      state.hasClickedLaunch = true;
    },
    beginQuiz: (
      state,
      action: PayloadAction<{ name: string; age: number; createdAt: string }>
    ) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.hasSetName = true;
      state.createdAt = action.payload.createdAt;
    },
    endQuiz: (state) => {
      state.hasEndedQuiz = true;
    },
    randomizeQuiz: (state) => {
      // Empty answers given array and fill it with random answers
      state.answers = [];
      for (const question of state.questions) {
        // Choose randomly between one of the answers
        const randomIndex = Math.floor(Math.random() * question.answers.length);
        const answer = question.answers[randomIndex];
        if (answer)
          state.answers.push({
            questionId: question._id,
            questionSubject: question.subject,
            answer,
          });
      }

      state.currentQuestionIndex = state.questions.length;
      state.hasEndedQuiz = true;
      state.name = "Random Test";
      state.age = 29;
      state.createdAt = new Date().toISOString();
      state.hasSetName = true;
      state.hasClickedLaunch = true;
    },
    goToNextQuestion: (state, action: PayloadAction<AnswerGiven>) => {
      console.log(action.payload);

      // Tutoiement or vouvoiement
      if (
        state.currentQuestionIndex === 0 &&
        (action.payload.answer._id === 0 || action.payload.answer._id === 1)
      )
        state.kindOfQuestions = action.payload.answer._id;

      state.answers.push(action.payload);
      state.currentQuestionIndex++;
    },
    getScore: (state) => {
      // Get scores
      state.score = calculateScore({
        answers: state.answers,
        questions: state.questions,
      });

      // Get subjects
      state.answersSubjects = extractSubjects({
        questions: state.questions,
        answers: state.answers,
      });
    },
    clearQuiz: (state) => {
      return {
        ...initialState,
        questions: state.questions,
      };
    },
    setStardCardTimer: (state, action: PayloadAction<number>) => {
      state.startCardTimer = action.payload;
    },
    reorderStatsData: (state, action: PayloadAction<string>) => {
      if (!state.adminStats) return;
      state.adminStats = {
        ...state.adminStats,
        data: state.adminStats?.data.sort((a, b) => a.age - b.age),
      };
    },
  },
  extraReducers: (builder) => {
    // FETCH QUESTIONS
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      // If questions have already been fetched, do nothing
      // ! Removed this for drag/drop update
      // if (state.questions.length) return;

      state.questions = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchQuestions.pending, (state) => {
      state.isLoading = false;
    });

    // REORDER QUESTIONS
    builder.addCase(reorderQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(reorderQuestions.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(reorderQuestions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Une erreur est survenue";
    });

    // UPSERT QUESTION
    builder.addCase(upsertQuestion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(upsertQuestion.fulfilled, (state, action) => {
      state.isLoading = false;
      const { updatedQuestion } = action.payload;

      // Questions
      if (updatedQuestion) {
        const questionIndex = state.questions.findIndex(
          (q) => q._id === updatedQuestion._id
        );
        if (questionIndex !== -1)
          state.questions[questionIndex] = updatedQuestion;
        else state.questions.push(updatedQuestion);
      }
    });
    builder.addCase(upsertQuestion.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Une erreur est survenue";
    });

    // FETCH STATS
    builder.addCase(fetchStats.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchStats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stats = action.payload;
    });
    builder.addCase(fetchStats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Une erreur est survenue";
    });

    // SEND STATS
    builder.addCase(sendStats.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(sendStats.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(sendStats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Une erreur est survenue";
    });

    // FETCH ADMIN STATS
    builder.addCase(fetchAdminStats.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchAdminStats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adminStats = action.payload;
    });
    builder.addCase(fetchAdminStats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Une erreur est survenue";
    });
  },
});

export const {
  beginQuiz,
  endQuiz,
  randomizeQuiz,
  goToNextQuestion,
  getScore,
  clearQuiz,
  launchQuiz,
  setStardCardTimer,
  reorderStatsData,
} = quizSlice.actions;
export default quizSlice.reducer;
