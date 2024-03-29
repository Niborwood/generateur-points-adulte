import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../lib/supabase";
import {
  Question,
  QuestionToUpsert,
  Answer,
  FetchedStats,
  AdminStats,
} from "../../../definitions/definitions";
import { RootState } from "../../app/store";

interface upsertProps {
  question: QuestionToUpsert;
  answers: Answer[];
}

interface reorderProps {
  moveDirection: "up" | "down";
  source: number;
  destination: number;
  sourceId: number;
}

export const fetchQuestions = createAsyncThunk<Question[]>(
  "quiz/fetchAllQuestions",
  async () => {
    const { data, error } = await supabase
      .from("questions")
      .select(`*, answers (*)`)
      .order("position", { ascending: true })
      .order("created_at", { foreignTable: "answers" });

    if (error) throw new Error(error.message);
    return data as Question[];
  }
);

export const reorderQuestions = createAsyncThunk(
  "quiz/reorderQuestions",
  async ({ source, destination, moveDirection, sourceId }: reorderProps) => {
    const { data, error } = await supabase.rpc("reorder_questions", {
      possource: source,
      posdestination: destination,
      direction: moveDirection,
      sourceid: sourceId,
    });

    if (error) throw new Error(error.message);

    // sort data by position
    return data as Question[];
  }
);

export const upsertQuestion = createAsyncThunk(
  "quiz/upsertQuestion",
  async ({ question, answers }: upsertProps) => {
    const { answersToUpsert, answersToInsert } = answers.reduce(
      (
        acc: {
          answersToUpsert: Answer[];
          answersToInsert: Answer[];
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

    // If some answersToUpsers ids are not in existingAnswers, delete them
    const answersToUpsertIds = answersToUpsert.map((answer) => answer._id);
    if (existingAnswers) {
      const answersToDelete = existingAnswers
        .filter((answer) => !answersToUpsertIds.includes(answer._id))
        .map((answer) => answer._id);

      if (answersToDelete.length) {
        await supabase.from("answers").delete().in("_id", answersToDelete);
      }
    }

    const res = await Promise.all([
      supabase
        .from<Question>("questions")
        .upsert(question, { onConflict: "_id" }),
      supabase.from<Answer[]>("answers").insert(answersToInsert),
      supabase
        .from<Answer[]>("answers")
        .upsert(answersToUpsert, { onConflict: "_id" }),
    ]);

    // If any of the promises fails, throw an error
    if (!res.every((r) => !r.error))
      throw new Error("Error while inserting/upserting");

    // Insert the answers inside the question object
    const updatedQuestion: Question = {
      ...question,
      answers: [...answersToInsert, ...answersToUpsert],
    };

    return {
      updatedQuestion,
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

export const fetchStats = createAsyncThunk("quiz/fetchStats", async () => {
  const { data, error } = await supabase
    .rpc("average_score")
    .select("adult_score, resp_score");
  if (error) throw new Error(error.message);
  return data as FetchedStats;
});
