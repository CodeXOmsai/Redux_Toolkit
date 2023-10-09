import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state using that type
export const initialState = {
  idCount: 1, // A counter for generating unique IDs
  todo: [{ id: "0", title: "Redux Toolkit", done: false }], // An initial todo item
};

// Create a Redux slice named "todo" with its initial state and reducers
export const todoSlice = createSlice({
  name: "todo", // The name of the slice, used in action type names

  initialState, // The initial state defined above

  reducers: {
    // Reducer for adding a new todo item
    addTodo: (state, action) => {
      // Generate a unique ID using nanoid
      const todoNew = {
        id: nanoid(),
        // Set the title of the new todo using the payload from the action
        title: action.payload,
        // When we add a todo, it's initially marked as not done
        done: false,
      };
      // Add the new todo to the state's todo array
      state.todo.push(todoNew);
    },

    // Reducer for removing a todo item
    removeTodo: (state, action) => {
      // Filter out the todo with the ID passed in the action payload
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },

    // Reducer for toggling the "done" status of a todo item
    toggleTodo: (state, action) => {
      // Find the index of the todo with the ID passed in the action payload
      const index = state.todo.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        // If the todo is found
        // Create a new copy of the todo object with the updated 'done' property
        state.todo[index] = {
          ...state.todo[index],
          done: action.payload.done,
        };
      }
    },
  },
});

// Define any thunks here (none in this example)

// Export the action creators (addTodo, removeTodo, toggleTodo) and the reducer
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
