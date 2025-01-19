import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import StudentLogin from './loginForms/StudentLogin';
import TeacherLogin from './loginForms/TeacherLogin';
import HodLogin from './loginForms/HodLogin';
import LibrarianLogin from './loginForms/LibrarianLogin';
import CollegeLogin from './loginForms/CollegeLogin';

export default function Sections() {
  const [page, setPage] = useState(<StudentLogin />);  
  function set(a) {
    setPage(a);
  }
  return (
    <div>
    <div className="nav">
      <Link to="/account/sections/student"><span>Student</span></Link>
      <Link to="/account/sections/teacher"><span>Teacher Login</span></Link>
      <Link to="/account/sections/hod"><span>Hod Login</span></Link>
      <Link to="/account/sections/librarian"><span>Librarian Login</span></Link>
      <Link to="/account/sections/college"><span>College Login</span></Link>
    </div>
    <Outlet />
    </div>
  )
}
