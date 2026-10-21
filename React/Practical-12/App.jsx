import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);

  function addOrUpdateTask() {
    if (text.trim() === '') return;
    if (editId === null) {
      setTasks([...tasks, { id: Date.now(), text: text, done: false }]);
    } else {
      setTasks(tasks.map(t => t.id === editId ? { ...t, text: text } : t));
      setEditId(null);
    }
    setText('');
  }

  function toggleDone(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function startEdit(task) {
    setText(task.text);
    setEditId(task.id);
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Enter a task" />
      <button onClick={addOrUpdateTask}>{editId === null ? 'Add' : 'Update'}</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => toggleDone(task.id)}>Complete</button>
            <button onClick={() => startEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
