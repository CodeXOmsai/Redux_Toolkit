// import React from "react"; // Importing necessary modules from React library.
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux for accessing the Redux store.
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux for dispatching actions.
import { removeTodo } from "../../features/todo/todoSlice"; // Importing the removeTodo action from the todoSlice.
import { RootState } from "../../store/store";

function Todo() {
  // Selecting the 'todo' state from the Redux store using useSelector.
  const todos = useSelector((state: RootState) => state.todo);

  // Creating a dispatch function to dispatch Redux actions.
  const dispatch = useDispatch();

  return (
    <>
      <div>Todo</div> {/* Render a simple 'Todo' text */}

      {/* Mapping over the 'todo' array to display each individual todo item */}
      {todos.map(
        (todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-800 rounded p-2"
            key={todo.id}
          >
            <div className="text-white">{todo.title}</div>
            
            {/* Button for removing a todo item */}
            <button
              onClick={() => dispatch(removeTodo({ id: todo.id }))} // Dispatch the 'removeTodo' action with the 'id' of the todo when clicked.
              className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-lg"
              style={{ cursor: 'pointer' }}  // CSS styling for the button.
            >
              {/* Render a trash can icon */}
              <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/trash.png" alt="trash"/>
              {/* SVG path for the trash icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 91-.346 9m-4.788 0L9.26 9m9. 968-3.21c.342.052.682.107 1.022.166m-1. 022-.165L18.16 19.673a2.25 2.25 0 01-2. 244 2.077H8.084a2.25 2.25 0 01-2.244-2. 077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-. 397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2. 201a51.964 51.964 0 00-3.32 0c-1.18. 037-2.09 1.022-2.09 2.201v.916m7.5 0a48. 667 48.667 0 00-7.5 0"
              />
            </button>
          </li>
        )
      )}
    </>
  );
}

export default Todo; // Exporting the Todo component.