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
      if (!sortIndex) return;

      state.sortBy[sortIndex].order =
        state.sortBy[sortIndex].order === "asc" ? "desc" : "asc";

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
