import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div 
          className="relative"
          onClick={() => onToggle(todo.id)}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {}}
            className="w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer checked:border-blue-500 checked:bg-blue-500 transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/50"
          />
          {todo.completed && (
            <svg
              className="absolute top-1 left-1 w-3 h-3 text-white pointer-events-none"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </div>
        <span
          className={`text-base ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-700"
          } transition-colors duration-200`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 px-3 py-1.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
      >
        删除
      </button>
    </div>
  );
};

export default TodoItem;