import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleAddTodo} className="relative mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="添加新的待办事项..."
          className="w-full px-6 py-4 text-gray-700 bg-gray-50 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className={`absolute right-2 top-2 px-5 py-2 rounded-lg font-medium transition-all duration-200
            ${input.trim() 
              ? "bg-blue-500 text-white hover:bg-blue-600" 
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          添加
        </button>
      </form>
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">还没有待办事项，开始添加吧！</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;