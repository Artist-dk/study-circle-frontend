
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import FormValidation from '../../services/FormValidation';

export default function Contactus() {
  const [contactUsData, setContactUsData] = useState({
    firstname: '',
    lastname: '',
    phoneno: '',
    emailid: '',
    message: ''
  });
  const formRef = useRef({});

  const setForm = function(){
    console.log("----------setForm")
    if(formRef.current.dataset.validation) {
      for(var j=0;j<formRef.current.elements.length;j++) {
        new FormValidation(formRef.current.elements[j])
      }
    }
    // formRef.current.elements["firstname"].value = 'varsha';
    // formRef.current.elements["lastname"].value = 'zagade';
    // formRef.current.elements["phoneno"].value = '8459811806';
    // formRef.current.elements["emailid"].value = 'zagadev01@gmail.com';
    // formRef.current.elements["message"].value = 'Pass@1234';
  };

  const sendFormData = (e) => {
    console.log("----------saveFormData")
    console.log(e.target)
    e.preventDefault();
    var dt = new FormData(e.target)
    dt = Array.from(dt.keys()).reduce((r, k) => {
      r[k] = dt.get(k);
      return r;
    }, {});
    // dt = JSON.stringify(dt);
    axios.post('http://localhost:8081/contactus/send', dt)
      .then(response => {
        // console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  useEffect(() => {
    console.log("Calling to setForm() ")
    setForm();
  },[]);
  return (
    <>
    <div className="box">
      <div className="mid">
          <div className="glass list box-3 form-cont fit-center">
              <div className="form-cont">
                  <h1>CONTACT US</h1>
                  <form ref={formRef}  onSubmit={(e)=>sendFormData(e)} data-validation="1">
                      <div className="msg">
                          Log in your account
                      </div>
                      <div className="i-cont">
                      </div>
                      <div className="inputBox">
                          <div>
                              <input name="firstname" type="text" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="First Name" />
                              <label className="input-label" >First Name</label>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="lastname" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Last Name" />
                              <label className="input-label">Last Name</label>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="phoneno" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Phone No." />
                              <label className="input-label">Phone No.</label>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="emailid" autoComplete="off" required data-a="2" data-msg="Please enter a valid Email ID" data-name="Email Id" />
                              <label className="input-label">Phone No.</label>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="textareaBox">
                          <div>
                              <textarea name="message" data-a="5" data-msg="Please enter a valid Message" data-name="Message" required></textarea>
                              <label className="textarea-label">Message</label>
                              <i className="textarea-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="submit"/>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
