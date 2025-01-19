import axios from 'axios';
import React from 'react';


export default function CollegeLogin() {
    const handleAuthentication = async function() {
        console.log("user authetication")

        try {
            axios.get('http://localhost:8081/authenticate',
                {
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <div className="mid">
          <div className="glass list box-3 fit-center form-cont">
                  <h1>COLLEGE LOGIN</h1>
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
                  <button onClick={handleAuthentication}>handleAuthentication</button>
          </div>
      </div>
    )
}
