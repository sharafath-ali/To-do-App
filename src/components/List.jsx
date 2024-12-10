import React from 'react';
import { Button } from 'react-bootstrap';

function List({ element, Delete, Colorchange }) {
  return (
    <div className="task-item" style={{ backgroundColor: element.color }}>
      <h6 className="task-text">{element.task}</h6>
      <div>
        <Button
          variant="outline-danger"
          size="sm"
          style={{ marginRight: '5px' }}
          onClick={() => Delete(element.id)}
        >
          Remove
        </Button>
        <Button
          variant="outline-success"
          size="sm"
          style={{ marginRight: '5px' }}
          onClick={() => Colorchange(element.id)}
        >
          Complete
        </Button>
        <Button
          variant="outline-success"
          size="sm"
          style={{ marginRight: '5px' }}
        >
          strike 🔥
        </Button>
      </div>
    </div>
  );
}

export default List;