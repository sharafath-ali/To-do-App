import React from 'react'
import { Button } from 'react-bootstrap'

function List({ element, key, Delete, Colorchange }) {
  console.log(element)
  return (
    <div style={{ textAlign: 'center', backgroundColor: element.color }}>
      <Button style={{ margin: '30px' }} variant="dark" size="sm" onClick={() => { return Delete(element.id) }} >Remove</Button>
      <h6 style={{ display: 'inline', margin: '30px' }} >{key} : {element.task}</h6>
      <Button style={{ margin: '30px' }} variant="dark" size="sm" onClick={() => Colorchange(element.id
      )}>Complete</Button>
      <hr /><hr />
    </div>
  )
}

export default List