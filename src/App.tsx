import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <div className="bg-white backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            待办事项
          </h1>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;