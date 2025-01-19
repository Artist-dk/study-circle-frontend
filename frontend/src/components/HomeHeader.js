import React, { useEffect, useState } from 'react';
import { Route,Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function HomeHeader() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   checkLoginStatus();
  // });

  // const checkLoginStatus = () => {
  //   if (!(Cookies.get('spy'))) {
  //     navigate('/account')
  //   }
  // };
  
    return (
      <>
        <header className="header">
          <div className="row1">
              <Link to="/about"><span>ABOUT</span></Link>
              <Link to="/contactus"><span>CONTACTUS</span></Link>
              <Link to="/settings"><span>SETTINGS</span></Link>
              <span className="grow"></span>
              <Link to="/account">
                <span>LOGIN</span>
              </Link>
          </div>
          <div className="row2">
            <div className="title">
              <h1>STUDYCIRCLE</h1>
            </div>
          </div>
          <div className="row3">
            <Link to="/"><span>HOME</span></Link>
            <Link to="/bridge"><span>BRIDGE</span></Link>
            <Link to="/tutorials"><span>TUTORIAL</span></Link>
            <Link to="/practice"><span>PRACTICE</span></Link>
            <Link to="/contests"><span>CONTESTS</span></Link>
            <Link to="/library"><span>LIBRARY</span></Link>
          </div>
        </header>
        <div className="box">
          <svg width="100%" height="40" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="path-1" d="M0,0  L100,0 0,100z"></path>
            <path className="path-2" d="M0,0  L100,30 100,0z"></path>
          </svg>
        </div>
        <div className="body home">
          <Outlet />
          {/* {renderPage()} */}
        </div>
      </>
    );
  }