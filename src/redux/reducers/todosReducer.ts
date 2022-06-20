import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      text: 'Eat food',
      completed: true,
      visibilityFilter: 'SHOW_COMPLETED',
    },
  ],
  reducers: {
    createTodo(
      state,
      action: PayloadAction<{
        text: string;
        completed: boolean;
        visibilityFilter: string;
      }>,
    ) {
      state = state.concat(action.payload);
    },
    deleteTodo(state, action) {
      state = state.filter(todo => todo.text !== action.payload);
    },
  },
});

export const todosAct = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

todosSlice.actions.createTodo({
  text: 'Eat food',
  completed: true,
  visibilityFilter: 'SHOW_COMPLETED',
});
