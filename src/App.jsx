import { useState, useEffect } from 'react';
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoFilters from './components/TodoFilters';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [{ id: Date.now(), completed: false, ...todo }, ...todos];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const updateTodo = (id, updatedTodo) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo));
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true; // 'all'
  });

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="flex flex-col items-center justify-between h-[50%] item bg-gradient-to-tr from-gray-900 via-purple-900 to-black">
        
        <div className="flex-grow w-full max-w-4xl px-4 py-10 mx-auto mt-0 text-white shadow-2xl md:px-10 bg-opacity-80 backdrop-blur-lg rounded-xl">
          <h1 className="mb-8 text-4xl font-extrabold text-center text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Todo Manager
          </h1>
          <TodoForm />
          <TodoFilters filter={filter} setFilter={setFilter} />
          <div className="mt-6 space-y-4">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <p className="text-center text-gray-400">
                No todos found. Start adding some tasks!
              </p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
