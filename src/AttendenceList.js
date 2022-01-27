import React, { useState } from 'react'
import { useEffect,} from 'react'
import { Link, useParams } from 'react-router-dom'
function AttendenceList() {
    const [attendence, setAttendence] = useState([])
    let parms = useParams()
    useEffect(async () => {
             try {
                let attendenceData = await fetch(`https://61974899af46280017e7e4ed.mockapi.io/attendence`)
                let attendence = await attendenceData.json()
                setAttendence(attendence)
             } catch (error) {
                 console.log(error)
             }
        
       
    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800"> Add attendence</h1>
                <Link to={`/Add-attendence/${parms.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Add attendence</Link>
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
                                   


                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    

                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    attendence.map((student) => {
                                        return <tr>
                                            <td>{student.attendence}</td>
                                            <td>
                                                {student.date}
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

export default AttendenceList
