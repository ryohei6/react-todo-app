import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">📝 My TODO App</h2>
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="タスクを入力してください..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button className="btn btn-primary" onClick={addTodo}>追加</button>
              </div>
              <ul className="list-group">
                {todos.map(todo => (
                  <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => toggleTodo(todo.id)} 
                      />
                      <span className={todo.completed ? 'text-decoration-line-through text-muted' : ''}>
                        {todo.text}
                      </span>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>削除</button>
                  </li>
                ))}
                {todos.length === 0 && <li className="list-group-item text-center text-muted">タスクはありません。</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
