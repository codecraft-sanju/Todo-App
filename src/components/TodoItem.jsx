import { useTodo } from '../contexts';
import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete } = useTodo();

  const priorityColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`flex justify-between items-center px-6 py-4 rounded-lg shadow-md bg-opacity-60 ${
        todo.completed ? 'bg-green-700' : 'bg-gray-900'
      } text-white backdrop-blur-md`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 cursor-pointer accent-purple-500"
        />
        <span
          className={`text-lg font-medium ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.todo}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
            priorityColors[todo.priority]
          }`}
        >
          {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-400 transition-all duration-200 hover:text-red-300"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default TodoItem;
