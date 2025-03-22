"use client";

import React, { useState } from "react";

const Page = () => {
  // State for managing the todos list
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Add new todo to the list
  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear the input after adding the todo
    }
  };

  // Delete a todo from the list
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>

        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Add a new task"
          />
          <button
            onClick={addTodo}
            className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border-b border-gray-200"
            >
              <span>{todo}</span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
