import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [{ id: 1, name: "Do the dishes", category: "Home", done: false }],
  category: "Home",
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    deleteGoal(state, action) {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
    updateGoal(state, action) {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload.id);
      state.goals = [...state.goals, action.payload];
    },
    addGoal(state, action) {
      state.goals = [...state.goals, action.payload];
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { deleteGoal, updateGoal, addGoal, changeCategory } =
  goalsSlice.actions;
export default goalsSlice.reducer;
