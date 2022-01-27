import React from 'react'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
function Addattendence() {
    let parms = useParams()
    const formik = useFormik({
        initialValues: {
            attendence: '',
            date: "",
            studentid: parms.id
        },
        onSubmit: async (values) => {
            await fetch("https://61974899af46280017e7e4ed.mockapi.io/attendence", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-type": "application/json"
                }
                
            })
            alert("add attendence")
        }
        
 });
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Addattendence</h1>

            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className=' col-lg-6'>
                            <select name="attendence" className='form-control' onChange={formik.handleChange}
                                value={formik.values.attendence}>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                            <div className=' col-lg-6'>
                                <input name='date' type="date" className='form-control' onChange={formik.handleChange}
                                    value={formik.values.date}></input>
                            </div>
                            <div className=' col-lg-3 mt-3'>
                                <input type="submit" className='btn btn-primary btn-sm'></input>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </>

    )
}

export default Addattendence
