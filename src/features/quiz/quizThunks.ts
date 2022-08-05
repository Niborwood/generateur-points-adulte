import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../lib/supabase";
import {
  Question,
  QuestionToUpsert,
  AnswerToUpsert,
  QuizState,
} from "../../../definitions/definitions";
import { RootState } from "../../app/store";

interface upsertProps {
  question: QuestionToUpsert;
  answers: AnswerToUpsert[];
}

export const fetchQuestions = createAsyncThunk<Question[]>(
  "quiz/fetchAllQuestions",
  async () => {
    const { data, error } = await supabase
      .from("questions")
      .select(`*, answers (*)`)
      .order("_id")
      .order("created_at", { foreignTable: "answers" });

    if (error) throw new Error(error.message);
    return data as Question[];
  }
);

export const upsertQuestion = createAsyncThunk(
  "quiz/upsertQuestion",
  async ({ question, answers }: upsertProps) => {
    const { answersToUpsert, answersToInsert } = answers.reduce(
      (
        acc: {
          answersToUpsert: AnswerToUpsert[];
          answersToInsert: AnswerToUpsert[];
        },
        answer
      ) => {
        if (answer._id) {
          acc.answersToUpsert.push(answer);
        } else {
          acc.answersToInsert.push(answer);
        }
        return acc;
      },
      { answersToUpsert: [], answersToInsert: [] }
    );

    const { data: existingAnswers, error } = await supabase
      .from("answers")
      .select("*")
      .eq("question_id", question._id);

    console.log("🚀 ~ file: quizThunks.ts ~ line 52 ~ error", error);

    // If some answersToUpsers ids are not in existingAnswers, delete them
    const answersToUpsertIds = answersToUpsert.map((answer) => answer._id);
    if (existingAnswers) {
      const answersToDelete = existingAnswers.filter(
        (answer) => !answersToUpsertIds.includes(answer._id)
      );

      if (answersToDelete.length) {
        await supabase.from("answers").delete().in("id", answersToDelete);
      }
    }

    const res = await Promise.all([
      supabase
        .from<Question>("questions")
        .upsert(question, { onConflict: "_id" }),
      supabase.from<AnswerToUpsert[]>("answers").insert(answersToInsert),
      supabase
        .from<AnswerToUpsert[]>("answers")
        .upsert(answersToUpsert, { onConflict: "_id" }),
    ]);

    // If any of the promises fails, throw an error
    if (!res.every((r) => !r.error))
      throw new Error("Error while inserting/upserting");

    return {
      updatedQuestion: res[0].data,
      insertedAnswers: res[1].data,
      updatedAnswers: res[2].data,
    };
  }
);

export const sendStats = createAsyncThunk(
  "quiz/sendStats",
  async (_, thunkApi) => {
    const { quiz } = thunkApi.getState() as RootState;
    const { error } = await supabase.from("stats").insert(
      {
        createdAt: quiz.createdAt,
        age: quiz.age,
        score: quiz.score,
        completedAt: new Date(),
        name: quiz.name,
        answers: quiz.answers,
      },
      { returning: "minimal" }
    );
    if (error) throw new Error(error.message);
    return true;
  }
);
