import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Api from '../../../services/api'

export default function User() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: '',
        description: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dt = Api.createNewAccount(formData);
    };
    
    return (
        <div className="mid">
            <div className="glass list box-3 fit-center form-cont">
                    <h1>CREATE ACCOUNT</h1>
                    <form data-validation="1" onSubmit={handleSubmit}>
                        <div className="msg">

                        </div>
                        <div className="i-cont">
                        </div>
                        <div className="inputBox">
                            <div>
                                <input 
                                    name="firstName" 
                                    type="text" 
                                    autoComplete="off" 
                                    required data-a="0" 
                                    data-msg="Please enter a valid name" 
                                    data-name="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    />
                                <label className="input-label" >First Name</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    autoComplete="off" 
                                    required 
                                    data-a="0" 
                                    data-msg="Please enter a valid name" 
                                    data-name="Last Name" 
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    />
                                <label className="input-label">Last Name</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input 
                                    type="text" 
                                    name="userName" 
                                    autoComplete="off" 
                                    required data-a="3" 
                                    data-msg="Please enter a valid username"
                                    data-name="Username" 
                                    value={formData.userName}
                                    onChange={handleChange}
                                    />
                                <label className="input-label">Username</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input 
                                    type="text" 
                                    name="email" 
                                    autoComplete="off" 
                                    required data-a="2" 
                                    data-msg="Please enter a valid email ID" 
                                    data-name="Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                <label className="input-label">Email</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    required 
                                    data-a="4" 
                                    data-msg="Please enter a valid password" 
                                    data-name="Password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    />
                                <label className="input-label">Password</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input
                                    type="password" 
                                    name="confirmPassword" 
                                    required 
                                    data-a="4" 
                                    data-msg="Password does not match" 
                                    data-name="Confirm Password" 
                                    data-b="0" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    />
                                <label className="input-label">Confirm Password</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="inputBox">
                            <div>
                                <input 
                                    type="text" 
                                    name="phoneNo" 
                                    autoComplete="off" 
                                    required 
                                    data-a="1" 
                                    data-msg="Please enter a valid phone number" 
                                    data-name="Phone No." 
                                    value={formData.phoneNo}
                                    onChange={handleChange}
                                    />
                                <label className="input-label">Phone No.</label>
                                <i className="input-bg"></i>
                                <p className="error-msg">Required</p>
                            </div>
                        </div>
                        <div className="textareaBox">
                            <div>
                                <textarea 
                                    name="description" 
                                    data-a="5" 
                                    data-msg="Please enter a valid descrip" 
                                    data-name="Message" 
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    ></textarea>
                                <label className="textarea-label">Description</label>
                                <i className="textarea-bg"></i>
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