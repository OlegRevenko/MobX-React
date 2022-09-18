import React from 'react'
import {observer} from 'mobx-react-lite'
import todo from './store/todo'

const Todo = observer( () => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch</button>
      {todo.todos.map(el => 
        <div key={el.id} className='todo'>
          <input type='checkbox' checked={el.completed} onChange={() => todo.completeTodo(el.id)}/>
          {el.title}
          <button onClick={() => todo.removeTodo(el.id)}>удалить</button>
        </div>)}
    </div>
  );
});

export default Todo