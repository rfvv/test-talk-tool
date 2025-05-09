import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="py-8 min-h-screen">
      <div className="p-6 mx-auto max-w-md bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center">
          待办事项清单-可修改
        </h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
