import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
  const [todoText, setTodoText] = useState('');
  const [priority, setPriority] = useState('low');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({ todo: todoText, priority });
      setTodoText('');
      setPriority('low');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-full px-5 py-3 text-white placeholder-gray-400 bg-gray-800 border-none rounded-lg shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-500"
          placeholder="Enter a new task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-xl hover:scale-105"
        >
          Add
        </button>
      </div>
      <div className="flex items-center gap-4">
        <label className="text-gray-400">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-5 py-2 text-white bg-gray-800 border-none rounded-lg focus:ring-4 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
