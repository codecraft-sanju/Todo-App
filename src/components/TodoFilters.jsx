function TodoFilters({ filter, setFilter }) {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div className="flex justify-center gap-6 mt-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 shadow-lg transform hover:scale-105 ${
            filter === f
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/50'
              : 'bg-gray-700 hover:bg-gray-600 shadow-gray-800/50'
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;
