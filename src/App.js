import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import List from './List.js';
function App() {
  const [todolist, settodolist] = useState([])
  const [newtask, setnewtask] = useState('')
  const Addtask = () => {
    if (newtask !== '') {
      const task = {
        id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
        task: newtask,
        color: "#154c79"
      }
      settodolist([...todolist, task])
    }
  }
  const Colorchange = (id) => {
    const newlist = todolist.map((element1) => {
      if (element1.id === id) {
        return { ...element1, color: "red" }
      }
      return element1
    })
    settodolist(newlist)
  }
  const Delete = (id) => {
    const newlist = todolist.filter((element1) => {
      return id !== element1.id
    })
    settodolist(newlist)
  }


  return (
    <>
      <div className="Addtask">
        <input className='addinput' style={{ margin: '30px', width: '300px' }} placeholder='write tasks' onChange={(Event) => { setnewtask(Event.target.value) }} ></input>
        <Button style={{ marginRight: '30px' }} variant="dark" size="sm" onClick={Addtask}>add the task</Button>
      </div>

      <div className="list" >
        {todolist.map((element, key) => {
          return <List key={key} element={element} Delete={Delete} Colorchange={Colorchange} />
        })
        }
      </div>
    </>
  );
}

export default App;
