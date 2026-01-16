import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// import axios from 'axios';

import Api from '../../../services/api'

export default function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const handleLogin = (e) => {
        e.preventDefault();

        Api.login({
            username: username,
            password: password
        })
        .then((res) => {
            console.log(res);
            console.log(Cookies.get('spy'))
            navigate('/')
        })
        .catch((err) => {
            console.error('Error:', err);
        });
    }
    return (
        <div className="mid">
            <div className="glass list box-3 fit-center form-cont">
                    <h1>USER LOGIN</h1>
                    <form data-validation="1" onSubmit={handleLogin}>
                        <div className="msg">
                            Log in your account
                        </div>
                        <div className="i-cont">
                        </div>
                        <div className="inputBox">
                            <div>
                                <input type="text" name="username" autoComplete="off" required data-a="3" data-msg="Please enter a valid username" data-name="Username" onChange={(e)=>{setUsername(e.target.value)}} />
                                <span className="input-label">User ID</span>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input type="password" name="password" required data-a="4" data-msg="Please enter a valid password" data-name="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                                <span className="input-label">Password</span>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input type="submit" />
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}
