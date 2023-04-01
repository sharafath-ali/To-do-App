import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function App() {
  const [todolist, settodolist] = useState([])
  const [newtask, setnewtask] = useState('')
  const [color,setcolor]=useState('#154c79')
  const Addtask=()=>{
    if(newtask!==''){
    const task={
      id:todolist.length===0?1:todolist[todolist.length-1].id+1,
      task:newtask
    }
    settodolist([...todolist,task])
    }
  }
   const Colorchange=()=>{
     setcolor('red')
   }
  const Delete=(id)=>{
    const newlist=todolist.filter((element1)=>{
      if(id===element1.id){
        return false
      }
      else{
        return true
      }
    })
    settodolist(newlist)
  }


  return (
    <>
    <div className="Addtask">
    <input className='addinput' style={{margin:'30px' ,width:'300px' }} placeholder='write tasks' onChange={(Event)=>{setnewtask(Event.target.value)}} ></input>
    <Button style={{marginRight:'30px'}} variant="dark" size="sm" onClick={Addtask}>add the task</Button>
    </div>

    <div className="list" >
      { todolist.map((element,key)=>{
      return <div style={{textAlign:'center',backgroundColor:color}}>
            <Button style={{margin:'30px'}} variant="dark" size="sm" onClick={()=>{Delete(element.id)}} >Remove</Button>
            <h6 style={{display:'inline',margin:'30px'}} >{key} : {element.task}</h6>
            <Button style={{margin:'30px'}} variant="dark" size="sm" onClick={Colorchange}>Complete</Button>
            <hr/><hr/>
            </div>
            
      })
      }
    </div>
    </>
  );
}

export default App;
