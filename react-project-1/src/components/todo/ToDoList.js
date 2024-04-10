import React from 'react'

export default function ToDoList({ todoArr, deleteToDo, toggleToDo }) {
    return <>
        <h3 className='text-center'>To Do List</h3>
        <table className='table table-bordered'>
            <tbody>
                {todoArr.map(todo => {
                    return <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.text}</td>
                        <td>{todo.completed.toString()}</td>
                        <td>
                            <button className='btn btn-danger mx-1'
                                onClick={() => { deleteToDo(todo.id) }}>DELETE</button>
                            <button className='btn btn-primary' 
                                onClick={() => { toggleToDo(todo.id) }}>TOGGLE</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
