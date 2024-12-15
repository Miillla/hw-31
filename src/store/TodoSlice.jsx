import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      // console.log(action.payload.id);

      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      // todo.id = 1734285538282;
      // action.payload = { id: 1734285538282 };
      // action.payload.id = 1734285538282;

      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
      console.log(action.payload);

      // id
      // :
      // 1734286139887
      // text
      // :
      // "New Taskdssdsdsd"

      const { id, text } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1)
        state.todos[todoIndex] = {
          ...state.todos[todoIndex],
          ...{ text: text },
        };
    },
    clearTodos: (state) => {
      state.todos = [];
    },
    loadTodosStart: (state) => {
      state.loading = true;
    },
    loadTodosSuccess: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    loadTodosFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos,
  loadTodosStart,
  loadTodosSuccess,
  loadTodosFailure,
} = todoSlice.actions;
export default todoSlice.reducer;
