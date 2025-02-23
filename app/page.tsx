"use client";
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle the addition of a new todo
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]); // Adds the new todo to the array
      setInput(""); // Clears the input field
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              className="px-4 py-2 border-2 border-indigo-400 rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value)} // Updates the input state
              placeholder="Enter a todo"
            />
            <button
              className="px-4 py-2 bg-blue-600 rounded-md text-white"
              onClick={handleAddTodo} // Calls the function to add a todo
            >
              Insert the todo
            </button>
          </div>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <div className="p-4 mb-2  border-b">
                    <div className="flex gap-4 items-center">
                      <span>{index}.</span>
                      <span>{todo}</span>
                    </div>
                  </div>
                </li>
              ); 
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
