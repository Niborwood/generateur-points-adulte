import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminState } from "../../../definitions/definitions";
import supabase from "../../../lib/supabase";

export const fetchAdminStats = createAsyncThunk(
  "quiz/fetchAdminStats",
  async () => {
    const [{ data, error }, { data: totals, error: errorTotals }] =
      await Promise.all([
        supabase
          .from("stats")
          .select("name, age, completedAt, createdAt, score, id")
          .neq("name", "Random Test")
          .order("createdAt", { ascending: false }),
        supabase.rpc("get_admin_stats").select("*").single(),
      ]);

    if (error || errorTotals)
      throw new Error(error?.message || errorTotals?.message);
    return { data, totals } as Pick<AdminState, "data" | "totals">;
  }
);
