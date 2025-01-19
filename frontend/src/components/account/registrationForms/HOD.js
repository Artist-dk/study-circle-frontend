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
                            <input name="firstName" type="text" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="First Name" />
                            <span className="input-label" >First Name</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="middleName" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Middle Name" />
                            <span className="input-label">Middle Name</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="lastName" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Last Name" />
                            <span className="input-label">Last Name</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="phone" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Phone No." />
                            <span className="input-label">Phone No.</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="email" autoComplete="off" required data-a="2" data-msg="Please enter a valid email ID" data-name="Email" />
                            <span className="input-label">Email</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="username" autoComplete="off" required data-a="3" data-msg="Please enter a valid username" data-name="Username" />
                            <span className="input-label">Username</span>
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
                            <input type="password" name="confirmPassword" required data-a="4" data-msg="Password does not match" data-name="Confirm Password" data-b="0" />
                            <span className="input-label">Confirm Password</span>
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
