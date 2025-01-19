import React from 'react';


export default function HodLogin() {
  return (
    <div className="mid">
        <div className="glass list box-3 fit-center form-cont">
                <h1>HOD LOGIN</h1>
                <form data-validation="1">
                    <div className="msg">
                        Log in your account
                    </div>
                    <div className="i-cont">
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="username" autoComplete="off" required data-a="3" data-msg="Please enter a valid username" data-name="Username" />
                            <span className="input-label">User ID</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="password" name="password" required data-a="4" data-msg="Please enter a valid password" data-name="Password" />
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
