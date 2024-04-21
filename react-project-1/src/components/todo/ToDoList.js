import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';

function ToDoList({ todoArr, deleteToDo, toggleToDo }) {
    console.log('To Do List rendered');

    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState({});

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const viewToDo = function (todo) {
        setSelectedRow({...todo});
        openModal();
    }

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
                            <button className='btn btn-secondary'
                                onClick={() => { viewToDo(todo) }}>VIEW</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>


        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={false}
        >
            <button onClick={closeModal}>close</button>
            <h1>This is the details of selected row</h1>
            <h2>{selectedRow.text} - {selectedRow.id} - {selectedRow?.completed?.toString()}</h2>
        </Modal>
    </>
}

export default React.memo(ToDoList);