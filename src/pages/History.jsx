import React from 'react'
import { useEffect, useState } from 'react'
import '../App.css';

function History({ todolist }) {
  const [deletedTask, setdeletedTask] = useState([]);

  useEffect(() => {
    const deletedtask = localStorage.getItem('deletedTasks');

    if (deletedtask) {
      const parsedTask = JSON.parse(deletedtask);
      console.log(parsedTask);
      setdeletedTask(parsedTask);
    }
  }, [todolist])

  return (
    <div>
      <h1>History</h1>
      <div>
        {deletedTask.map((task) => (
          <div key={task.id}>
            <h3>{task.task}</h3>
            <p>{task.addedDate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History