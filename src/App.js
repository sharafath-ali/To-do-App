import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import List from './List';
import { useEffect } from 'react';
import History from './History';

function App() {
  const [todolist, settodolist] = useState([]);
  const [newtask, setnewtask] = useState('');

  useEffect(() => {
    const storedTodolist = localStorage.getItem('todolist');
    if (storedTodolist) {
      settodolist(JSON.parse(storedTodolist));
    }
  }, [])

  const addTask = () => {
    const trimmedTask = newtask.trim();
    if (trimmedTask !== '') {
      const newTask = {
        id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
        task: trimmedTask,
        color: '#f9f9f9',
        strike: 0,
        addedDate: new Date().toLocaleString(),
      };
      settodolist([...todolist, newTask]);
      setnewtask('');
      localStorage.setItem('todolist', JSON.stringify([...todolist, newTask]));
    }
  };

  const changeTaskColor = (id) => {
    const updatedList = todolist.map((task) =>
      task.id === id ? { ...task, color: '#d4edda' } : task
    );
    settodolist(updatedList);
    localStorage.setItem('todolist', JSON.stringify(updatedList));
  };

  const removeTask = (id) => {
    const updatedList = todolist.filter(task => task.id !== id);
    const deletedTask = todolist.find((task) => task.id === id);
    const deletedTasks = JSON.parse(localStorage.getItem('deletedTasks') || '[]');
    localStorage.setItem('deletedTasks', JSON.stringify([...deletedTasks, deletedTask]));
    settodolist(updatedList);
    localStorage.setItem('todolist', JSON.stringify(updatedList));
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
        <Button variant="info" size="sm" onClick={addTask}>
          Add Task
        </Button>
      </div>

      <div className="list">
        {todolist?.length === 0 ? (
          <div className="empty-list">
            <h6>No tasks available. Start by adding a task!</h6>
          </div>
        ) : (
          todolist?.map((element, key) => {
            return (
              <List
                key={key}
                element={element}
                Delete={removeTask}
                Colorchange={changeTaskColor}
              />
            );
          })
        )}
      </div>
      <History todolist={todolist} />
    </>
  );
}

export default App;
