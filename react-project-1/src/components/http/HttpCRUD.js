import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HttpCRUD() {
    const [employees, setEmployees] = useState([]);

    const initialEmp = { eId: '', name: '', sal: 0 }
    const [emp, setEmp] = useState(initialEmp);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }
    const addEmployee = async (emp) => {
        const response = await axios.post('http://localhost:4000/employees', emp);
        alert('Added Succesfully')
        fetchEmployees();
    }
    const editEmployee = async (emp) => {
        setEmp({ ...emp })
    }

    const fetchEmployees = async function () {
        const response = await axios.get('http://localhost:4000/employees');
        setEmployees(response.data)
    }
    const deleteEmployee = async function (id) {
        const response = await axios.delete(`http://localhost:4000/employees/${id}`);
        alert('Deleted Successfully')
        fetchEmployees();
    }
    useEffect(() => {
        fetchEmployees();
    }, [])

    return <>
        <h3 className='text-center'>Employee CRUD Example</h3>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <table className='table table-bordered'>
                        <tbody>
                            {employees.map(emp => {
                                return <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.eId}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.sal}</td>
                                    <td>{emp.gender}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                            onClick={() => { deleteEmployee(emp.id) }}>DELETE</button>
                                        <button className='btn btn-secondary mx-1' onClick={() => { editEmployee(emp) }}>Edit</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-sm-4 '>
                    <h4>Add Employee Form</h4>
                    <p>eId : <input value={emp.eId} name='eId' onChange={(e) => changeHandler(e)} /></p>
                    <p>Name : <input value={emp.name} name='name' onChange={(e) => changeHandler(e)} /></p>
                    <p>Salary : <input value={emp.sal} name='sal' onChange={(e) => changeHandler(e)} /></p>
                    <div className='text-center'>
                        <button onClick={() => addEmployee(emp)} className='btn btn-primary'>Add Employee</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
