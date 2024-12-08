import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import List from './List';

function App() {
  const [todolist, settodolist] = useState([]);
  const [newtask, setnewtask] = useState('');

  const Addtask = () => {
    if (newtask.trim() !== '') {
      const task = {
        id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
        task: newtask.trim(),
        color: '#f9f9f9',
      };
      settodolist([...todolist, task]);
      setnewtask('');
    }
  };

  const Colorchange = (id) => {
    const newlist = todolist.map((element) =>
      element.id === id ? { ...element, color: '#d4edda' } : element
    );
    settodolist(newlist);
  };

  const Delete = (id) => {
    settodolist(todolist.filter((element) => element.id !== id));
  };

  return (
    <>
      <div className="Addtask">
        <input
          className="addinput"
          value={newtask}
          placeholder="Write a task..."
          onChange={(e) => setnewtask(e.target.value)}
        />
        <Button variant="info" size="sm" onClick={Addtask}>
          Add Task
        </Button>
      </div>

      <div className="list">
        {todolist.length === 0 ? (
          <div className="empty-list">
            <h6>No tasks available. Start by adding a task!</h6>
          </div>
        ) : (
          todolist.map((element, key) => {
            return (
              <List
                key={key}
                element={element}
                Delete={Delete}
                Colorchange={Colorchange}
              />
            );
          })
        )}
      </div>

    </>
  );
}

export default App;
