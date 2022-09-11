import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdminState } from "../../../definitions/definitions";

// THUNKS
import { fetchAdminStats } from "./adminThunks";

const initialState: AdminState = {
  isLoading: false,
  error: "",
  sortBy: [
    {
      id: "name",
      order: "desc",
    },
    {
      id: "age",
      order: "desc",
    },
    {
      id: "date",
      order: "desc",
    },
    {
      id: "adult",
      order: "desc",
    },
    {
      id: "resp",
      order: "desc",
    },
  ],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reorderStatsData: (
      state,
      action: PayloadAction<"name" | "age" | "date" | "adult" | "resp">
    ) => {
      if (!state.data) return;

      const sortIndex = state.sortBy.findIndex((s) => s.id === action.payload);
      if (sortIndex === -1) return;

      state.sortBy = state.sortBy.map((s) =>
        s.id === action.payload
          ? { ...s, order: s.order === "asc" ? "desc" : "asc" }
          : { ...s, order: "desc" }
      );

      state.data = state.data.sort((a, b) => {
        if (action.payload === "name")
          if (state.sortBy[sortIndex].order === "asc") {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }

        if (action.payload === "age")
          if (state.sortBy[sortIndex].order === "asc") return a.age - b.age;
          else return b.age - a.age;

        if (action.payload === "date")
          if (state.sortBy[sortIndex].order === "asc")
            return (
              new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
            );
          else
            return (
              new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
            );

        if (action.payload === "adult")
          if (state.sortBy[sortIndex].order === "asc")
            return a.score.adultScore - b.score.adultScore;
          else return b.score.adultScore - a.score.adultScore;

        if (action.payload === "resp")
          if (state.sortBy[sortIndex].order === "asc")
            return a.score.respScore - b.score.respScore;
          else return b.score.respScore - a.score.respScore;
        else return 1;
      });
    },
  },
  extraReducers: (builder) => {
    // FETCH ADMIN STATS
    builder.addCase(fetchAdminStats.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchAdminStats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totals = action.payload.totals;
      state.data = action.payload.data;
    });
    builder.addCase(fetchAdminStats.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Une erreur est survenue";
    });
  },
});

export const { reorderStatsData } = adminSlice.actions;
export default adminSlice.reducer;
