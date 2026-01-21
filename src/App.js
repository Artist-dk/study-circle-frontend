// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import './styles/Main.css';

import ApiTester from './components/ApiTester';

import HomeHeader from './components/HomeHeader';
import Home from './components/main/Home';
import About from './components/about/About';
import Bridge from './components/bridge/BridgeMain';
import NoPage from './components/NoPage';
import Contactus from './components/contactus/Contactus';
import Settings from './components/settings/Settings';
import Tutorials from './components/tutorials/Tutorials';
import Practice from './components/practice/Practice';
import Contests from './components/contests/Contests';
import Library from './components/library/Library';
import Elibrary from './components/library/Elibrary';
import Plibrary from './components/library/Plibrary';

import AccountsMain from './components/account/AccountsMain';
import Login from './components/account/loginForms/Login';
import Logout from './components/account/Logout';
import Sections from './components/account/Sections';
import User from './components/account/registrationForms/User';
import StudentLogin from './components/account/loginForms/StudentLogin';
import TeacherLogin from './components/account/loginForms/TeacherLogin';
import HodLogin from './components/account/loginForms/HodLogin';
import LibrarianLogin from './components/account/loginForms/LibrarianLogin';
import CollegeLogin from './components/account/loginForms/CollegeLogin';

import StudentMain from './components/student/StudentMain';
import StudentProfile from './components/student/StudentProfile';
import StudentDiscussion from './components/student/GroupDiscussion';
import StudentAssignment from './components/student/Assignment';
import LibraryMain from './components/library/LibraryMain';
import StudentNotice from './components/student/NoticeBoard';
import StudentProgress from './components/student/FavouriteBooks';
import StudentResult from './components/student/TodoPlanner';
import StudentTodo from './components/student/KeepRecords';
import Discussion from './components/student/Discussion';

import StudentCalendar from './components/student/StudentCalendar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader />}>{/* element={<HomeHeader />} */}
        {/* <Route path="/" element={<StudentCalendar />}>element={<HomeHeader />} */}
          <Route index element={<Home />} />
          <Route path="api-test" element={<ApiTester />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="settings" element={<Settings />} />
          <Route path="bridge" element={<Bridge />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="practice" element={<Practice />} />
          <Route path="contests" element={<Contests />} />
          <Route path="library" element={<LibraryMain />}>
            <Route index element={<Library />} />
            <Route path="e" element={<Elibrary />} />
            <Route path="p" element={<Plibrary />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="logout" element={<Logout />} />

        <Route path="account" element={<AccountsMain />}>
          <Route index element={<Login />} />
          <Route path="newacc" element={<User />} />
          <Route path="sections" element={<Sections />}>
            <Route path="student" element={<StudentLogin />} />
            <Route path="teacher" element={<TeacherLogin />} />
            <Route path="hod" element={<HodLogin />} />
            <Route path="librarian" element={<LibrarianLogin />} />
            <Route path="college" element={<CollegeLogin />} />
          </Route>
        </Route>

        <Route path="student" element={<StudentMain />}>
          <Route index element={<StudentProfile />} />
          <Route path="discussion" element={<StudentDiscussion />} />
          <Route path="assignment" element={<StudentAssignment />} />
          <Route path="notice" element={<StudentNotice />} />
          <Route path="progress" element={<StudentProgress />} />
          <Route path="result" element={<StudentResult />} />
          <Route path="todo" element={<StudentTodo />} />
          <Route path="discussion" element={<Discussion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

