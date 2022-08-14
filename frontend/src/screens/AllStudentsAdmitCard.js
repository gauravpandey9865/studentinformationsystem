import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listStudents } from '../actions/studentActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import './admitcard.css'

import { AdmitCard } from '../components/AdmitCard'
import { STUDENT_LIST_CLEAR } from '../constants/studentConstants'
const AllStudentsAdmitCard = () => {
  const [examno, setExamno] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const dispatch = useDispatch()
  const studentList = useSelector((state) => state.studentList)
  const { loading, students, error } = studentList
  const Print = () => {
    window.print()
  }
  useEffect(() => {
    dispatch({
      type: STUDENT_LIST_CLEAR,
    })
    dispatch(listStudents())
  }, [dispatch])
  return (
    

    <div className='container1'>
      <div className='exam'>
      
      </div>
      {loading ? (
        <Loader />
      ) : (
        students &&
        students.map((student) => (
          <div key={student._id} className='arrange'>
            {console.log(student)}
            <AdmitCard
              examination='Terminal Examination'
              name={student.student_name}
              classname={student.classname}
              rollno={student.roll_no}
              image={student.image}
            />
          </div>
        ))
      )}
      {students && (
        <div className='la'>
          <button onClick={Print} className='printcmd'>
            Print All
          </button>
        </div>
      )}
    </div>
  )
}

export default AllStudentsAdmitCard
