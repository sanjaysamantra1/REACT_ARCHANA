import React, { useState } from 'react'
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

export default function ToDoCRUD() {
    const [counter, setCounter] = useState(0);
    let initialtodos = [
        { id: 1, text: 'To Do 1', completed: true },
        { id: 2, text: 'To Do 2', completed: false },
        { id: 3, text: 'To Do 3', completed: true }
    ]
    let [todoArr, setToDoArr] = useState(initialtodos);

    let deleteToDo = (id) => {
        let filteredToDos = todoArr.filter(todo => todo.id !== id);
        setToDoArr([...filteredToDos]);
    }
    let toggleToDo = (id) => {
        let updatedToDos = todoArr.map(ele => {
            return ele.id === id ? { ...ele, completed: !ele.completed } : ele;
        })
        setToDoArr([...updatedToDos]);
    }
    let addToDo = (text) => {
        let newToDo = { id: todoArr.length + 1, text: text, completed: false };
        todoArr.push(newToDo);
        setToDoArr([...todoArr])
    }
    return <>
        <h2 className='text-center'>This is ToDo CRUD Example</h2>
        <h3>count value is {counter}</h3>
        <button onClick={() => { setCounter(counter + 1) }}>increment</button>
        <hr />
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <ToDoList todoArr={todoArr}
                        deleteToDo={deleteToDo}
                        toggleToDo={toggleToDo} />
                </div>
                <div className='col-4'>
                    <AddToDo addToDo={addToDo} />
                </div>
            </div>
        </div>
    </>
}
