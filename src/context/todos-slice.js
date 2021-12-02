import { createSlice } from "@reduxjs/toolkit";

// const DUMMY_TODOS = [
//   {
//     label: "Create ToDo list",
//     id: "1",
//   },
//   {
//     label: "Add multiple users",
//     id: "2",
//   },
//   {
//     label: "Add database (firebase)",
//     id: "3",
//   },
//   {
//     label: "Add authentification",
//     id: "4",
//   },
//   {
//     label: "Add my own database on server using nodeJS",
//     id: "5",
//   },
// ];

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [] },
  reducers: {
    addNewtodo(state, action) {
      state.todos = state.todos.concat({
        label: action.payload.label,
        id: action.payload.id,
      });
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    replaceTodos(state, action) {
      state.todos = action.payload.todos;
    }
  },
});

export const todosActions = todoSlice.actions;

export default todoSlice;
