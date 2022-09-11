import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdminState } from "../../../definitions/definitions";

// THUNKS
import { fetchAdminStats } from "./adminThunks";

const initialState: AdminState = {
  isLoading: false,
  error: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reorderStatsData: (state, action: PayloadAction<string>) => {
      if (!state.data) return;
      // ! INSERT LOGIC
      state.data = state.data.sort((a, b) => a.age - b.age);
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
