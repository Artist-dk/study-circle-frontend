import React, { useState } from 'react'

import User from './registrationForms/User'
// import Student from './registration/Student'
// import Teacher from './registration/Teacher'
// import Hod from './registration/HOD'
// import Librarian from './registration/Librarian'
// import College from './registration/College'

export default function NewAccount() {
  const [page, setPage] = useState(<User />);
  function set(a) {
    setPage(a);
  }
  return (
    <>
        {/* <div className="nav">
          <span onClick={()=>{set(<User />)}}>User Login</span>
          <span onClick={()=>{set(<Student />)}}>Student Login</span>
          <span onClick={()=>{set(<Teacher />)}}>Teacher Login</span>
          <span onClick={()=>{set(<Hod />)}}>Hod Login</span>
          <span onClick={()=>{set(<Librarian />)}}>Librarian Login</span>
          <span onClick={ () => {set(<College />)}}>College Login</span>
        </div> */}

        <h1>new account</h1>
        {page}
    </>
  )
}
