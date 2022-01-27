import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Studentlist() {
    const [students, setStudent] = useState([])
    useEffect(async () => {

        try {
            let studentData = await fetch('https://61974899af46280017e7e4ed.mockapi.io/student')
            let studentList = await studentData.json()
            setStudent(studentList)
        } catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">studentList</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>


                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>

                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    students.map((student) => {
                                        return <tr>
                                            <td>{student.name}</td>
                                            <td>
                                                <img src={student.avatar} />
                                            </td>
                                            <td><Link to = {`/student/${student.id}`}><button className='btn btn-primary btn-sm'>View</button></Link>
                                            </td>

                                        </tr>

                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studentlist
