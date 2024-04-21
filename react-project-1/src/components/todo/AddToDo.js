import React, { useRef } from 'react'

export default function AddToDo({ addToDo }) {
    console.log('Add Todo rendered...')
    const inputRef1 = useRef();

    return <>
        <h3 className='text-center'>Add To Do</h3>
        <div className='border p-2'>
            <input placeholder='to do text' ref={inputRef1} />

            <button className='btn btn-secondary mx-1'
                onClick={() => { addToDo(inputRef1.current.value) }}>Add To Do</button>

        </div>
    </>
}
