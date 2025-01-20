import React, { useState } from 'react'

export default function Settings() {
  const [theme, setTheme] = useState();
  function handleThemeForm(e) {
    e.preventDefault(e)
    setTheme(e)

    const formData = new FormData(e.target);
    const formDataObject = {};
    
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    const jsonData = JSON.stringify(formDataObject);
    console.log(jsonData);

    fetch('http://localhost:8081/settings/theme', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
    
  }
  return (
    <div >
      <div className="mid">
        <div className="settings">
          <div className="list">
            <div className="heading">
              <h1>Settings</h1>
            </div>
          </div>
          <div className="body">
            <h2>Theme</h2>
            <p>Change theme</p>
            <form onSubmit={(e)=>{handleThemeForm(e)}}>
              <select name="theme" id="">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
              <input type="submit" value="SET THEME" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
