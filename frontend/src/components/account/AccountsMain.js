import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function AccountsMain() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('spy')) {
      setLogin(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('spy');
    setLogin(false);
    navigate('/');  // Redirect to home or any other route after logout
  };

  return (
    <>
      <div className="account-nav">
        <Link to="/"><span>Home</span></Link>
        <Link to="/account"><span>Login</span></Link>
        <Link to="/account/newacc"><span>New Account</span></Link>
        <Link to="/account/sections"><span>Sections</span></Link>
        {login && <span onClick={handleLogout}>Logout</span>}
      </div>
      <Outlet />
    </>
  );
}
