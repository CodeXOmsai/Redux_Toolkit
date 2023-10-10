import  { useState } from "react"; // Importing the useState hook from React to manage state.
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux for dispatching actions.
import { addTodo } from "../../features/todo/todoSlice"; // Importing the addTodo action from the todoSlice.

function AddTodo() {
  // Initializing a state variable 'todo' to manage the input field's value.
  const [todo, setTodo] = useState("");

  // Creating a dispatch function to dispatch the 'addTodo' action.
  const dispatch = useDispatch();

  // Function to handle the form submission.
  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    // Dispatch the 'addTodo' action with the 'todo' value and reset the input field.
    dispatch(addTodo(todo));
    setTodo(""); // Clear the input field.
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* Input field for entering a new todo */}
      <input
        type="text"
        placeholder="Enter a Todo"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={todo} // Bind the input value to the 'todo' state.
        onChange={(e) => {
          setTodo(e.target.value); // Update the 'todo' state when the input changes.
        }}
      />

      {/* Button to submit the new todo */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;