import React, { useEffect, useRef, useState } from 'react';
import { withRouter, Link,  } from 'react-router-dom';

import axios from 'axios';
import FormValidation from '../../services/FormValidation';
import Api from '../../services/api';

const Library = () => {
    const [contactUsData, setContactUsData] = useState({
        firstname: '',
        lastname: '',
        phoneno: '',
        emailid: '',
        message: ''
    });
    const formRef = useRef({});
    const fileInputRef = useRef(null);
  
    const setForm = function(){
        console.log("----------setForm")
        if(formRef.current.dataset.validation) {
            for(var j=0;j<formRef.current.elements.length;j++) {
            new FormValidation(formRef.current.elements[j])
            }
        }
  
        formRef.current.elements["title"].value = 'The Great Gatsby';
        formRef.current.elements["author"].value = 'F. Scott Fitzgerald';
        formRef.current.elements["pages"].value = '180';
        formRef.current.elements["language"].value = 'English';
        formRef.current.elements["publicationDate"].value = '1925-04-10';
        formRef.current.elements["publisher"].value = 'Charles Scribner\'s Sons';
        formRef.current.elements["genre"].value = 'Fiction';
        formRef.current.elements["edition"].value = 'First';
        formRef.current.elements["price"].value = '10.99';
        formRef.current.elements["description"].value = 'A novel by F. Scott Fitzgerald.';
        formRef.current.elements["coverImageURL"].value = 'https://example.com/great-gatsby-cover.jpg';
    };
    
  
    const sendFormData = async (e) => {
        e.preventDefault();
        var dt = new FormData(e.target)
        dt.append('file', fileInputRef.current.files[0]);
        dt = Array.from(dt.keys()).reduce((r, k) => {
            r[k] = dt.get(k);
            return r;
        }, {});
        
        dt = JSON.stringify(dt)


    const formData = new FormData(formRef.current);
    console.log(dt)

    // Handle file upload specifically (if needed)
    const selectedFile = fileInputRef.current.files[0];
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    const headers = {
      // Add your custom headers here
      'Content-Type': 'multipart/form-data', // Usually needed for file uploads
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example for authorization header
    };

    try {
      const response = await fetch('http://localhost:8081/library/add-new-book', {
        method: 'POST',
        body: dt,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    














        // Api.addNewBook(dt)
        // .then(response => {
        //     console.log('Form submitted successfully:', response);
        // })
        // .catch(error => {
        //     console.error('Error submitting form:', error);
        // });

        // axios.post('http://localhost:8081/library/add-new-book', dt, {
        //     headers: {'Content-Type': 'multipart/form-data'}
        // })
        // .then(response => {
        //     console.log('Form submitted successfully:', response.data);
        // })
        // .catch(error => {
        //     console.error('Error submitting form:', error);
        // });
    };

    function fetchLibraryMainData() {
        
    }
    useEffect(() => {
      console.log("Calling to setForm() ")
      setForm();
      fetchLibraryMainData();
    },[]);
  return (
    <div className="body home">
            <div className="h-box-1 welcome">
                <div className="mid">
                    {/* <p>Education is the most powerful weapon which you can use to change the world.</p> */}
                    <h1><span className="grad"><span>R</span>ESOURCE </span> REPOSITORY<br /></h1>
                    {/* <p className="glass fit-center box-3">1000 Books</p> */}
                </div>
            </div>
            <div className="box">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2 " d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>Registered Books: </h1>
                    <div className="lib-card-grid">
                        <div className='mid'>
                            <div className="lib-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>3k</h1>
                                    <div className="content">
                                        <h2>Digital Library</h2>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Registered Books</td>
                                                <td>20000</td>
                                            </tr>
                                            <tr>
                                                <td>Access Rate</td>
                                                <td>20000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <Link to='/library/e'>
                                        <button>Go to Library</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='mid'>
                            <div className="lib-card1">
                                <div className="bg"></div>
                                <div className="container">
                                    <h1>3k</h1>
                                    <div className="content">
                                        <h2>Physical Library</h2>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Registered Books</td>
                                                <td>20000</td>
                                            </tr>
                                            <tr>
                                                <td>Access Rate</td>
                                                <td>20000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <Link to='/library/p'>
                                        <button>Go to Library</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Categories</h1>
                    <p>Here's a list of common book categories:</p>
                    <ul className="categories-list">
                        <li>Fiction</li>
                        <li>Non-fiction</li>
                        <li>Mystery</li>
                        <li>Thriller</li>
                        <li>Science Fiction</li>
                        <li>Fantasy</li>
                        <li>Biography</li>
                        <li>Autobiography</li>
                        <li>Self-help</li>
                        <li>Historical Fiction</li>
                        <li>Horror</li>
                        <li>Children's Books</li>
                        <li>Young Adult</li>
                        <li>Travel</li>
                        <li>Cooking</li>
                        <li>Art & Photography</li>
                        <li>Business & Finance</li>
                    </ul>
                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>Top Physical Libraries</h1>
                    <p>Below list shows top engaged physical libraries registered on StudyCircle.</p>
                    
                    <table className='books-table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Opportunities</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Project Phoenix</td>
                            <td>John Doe</td>
                            <td>Technology</td>
                            <td>High</td>
                            <td>In Progress</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Marketing Campaign X</td>
                            <td>Jane Smith</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Approved</td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Alice Jones</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>Planning</td>
                            <td><a href="#">Assign Team</a></td>
                        </tr>
                        <tr>
                            <td>Content Strategy</td>
                            <td>David Lee</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Drafting</td>
                            <td><a href="#">Review</a></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">
                    <h1>Most accessed digital books</h1>
                    
                    <table className='books-table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Opportunities</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Project Phoenix</td>
                            <td>John Doe</td>
                            <td>Technology</td>
                            <td>High</td>
                            <td>In Progress</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Marketing Campaign X</td>
                            <td>Jane Smith</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Approved</td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Alice Jones</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>Planning</td>
                            <td><a href="#">Assign Team</a></td>
                        </tr>
                        <tr>
                            <td>Content Strategy</td>
                            <td>David Lee</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Drafting</td>
                            <td><a href="#">Review</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-2">
                <div className="mid">
                    <h1>Most accessed physical books</h1>

                    <table className='books-table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Opportunities</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                            <td>Project Phoenix</td>
                            <td>John Doe</td>
                            <td>Technology</td>
                            <td>High</td>
                            <td>In Progress</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Marketing Campaign X</td>
                            <td>Jane Smith</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Approved</td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>Alice Jones</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>Planning</td>
                            <td><a href="#">Assign Team</a></td>
                        </tr>
                        <tr>
                            <td>Content Strategy</td>
                            <td>David Lee</td>
                            <td>Marketing</td>
                            <td>Medium</td>
                            <td>Drafting</td>
                            <td><a href="#">Review</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
            <div className="box-1">
                <div className="mid">    
                    {/* <h2>Add New Book</h2> */}
                    <div className="lib-form-container">
                        <form ref={formRef} onSubmit={sendFormData} data-validation="1" data-formtype="2">
                            <h1><span>Add</span> New Book</h1>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="title" className="input-label">Title</label>
                                    <input type="text" id="title" name="title" data-a="0" data-msg="Please enter a valid Title" data-name="Title" required />
                                    <p className="error-msg">Required</p>
                                    <i className="input-bg"></i>
                                </div>
                                <div className="input">
                                    <label htmlFor="author" className="input-label">Author</label>
                                    <input type="text" id="author" name="author" data-a="0" data-msg="Please enter a valid Author's Name" data-name="Author" required />
                                    <p className="error-msg">Required</p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label className="input-label" htmlFor="pages">Pages</label>
                                    <input type="number" id="Pages" name="pages"  data-a="1" data-msg="Please enter a valid Number" data-name="Pages" required />
                                    <p className="error-msg">Required</p>
                                </div>
                                <div className="input">
                                    <label className="input-label" htmlFor="language">Language</label>
                                    <input type="text" id="language" name="language" data-a="0" data-msg="Please enter a valid Language" data-name="Language" required />
                                    <p className="error-msg">Required</p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label className="input-label" htmlFor="bookType">Book Type</label>
                                    <select id="book_type" name="bookType"  data-a="1" data-msg="Please enter a valid Book Type" data-name="Book Type" >
                                        <option value="physical" >Physical</option>
                                        <option value="ebook" selected>Ebook</option>
                                    </select>
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>

                                <div className="input">
                                    <label htmlFor="publicationDate" className="input-label">Publication Date</label>
                                    <input type="date" id="publicationDate" name="publicationDate" data-a="0" data-msg="Please enter a valid Publication Date" data-name="Publication Date"  />
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="publisher" className="input-label">Publisher</label>
                                    <input type="text" id="publisher" name="publisher"  data-a="0" data-msg="Please enter a valid Publisher" data-name="Publisher" />
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                                <div className="input">
                                    <label htmlFor="genre" className="input-label">Genre</label>
                                    <input type="text" id="genre" name="genre" data-a="0" data-msg="Please enter a valid Genre" data-name="Genre" />
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label className="input-label" htmlFor="edition">Edition</label>
                                    <input type="text" id="edition" name="edition"  data-a="0" data-msg="Please enter a valid Edition" data-name="Edition" />
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                                <div className="input">
                                    <label className="input-label" htmlFor="price">Price</label>
                                    <input type="number" id="price" name="price" step="0.01" data-a="1" data-msg="Please enter a valid Price" data-name="Price" />
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label htmlFor="description" className="input-label">Description</label>
                                    <textarea id="description" name="description" data-a="4" data-msg="Please enter a valid Description" data-name="Description" ></textarea>
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label className="input-label" htmlFor="coverImageURL">Cover Image URL</label>
                                    <input type="text" id="coverImageURL" name="coverImageURL" data-a="6" data-msg="Please enter a valid URL" data-name="Cover Image URL" data-url="1"/>
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input">
                                    <label className="input-label" htmlFor="file">Book File</label>
                                    <input type="file" id="fileURL" name="file" accept=".pdf,.doc,.docx,.txt" data-a="1" data-msg="Please select a valid Book File" data-name="Book File" 
                                    ref={fileInputRef} />
                                    <p className="error-msg"></p>
                                    <i className="input-bg"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input input-submit">
                                    <input type="submit" value="Add Book" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="box-1">
                <Link to="/student">Student</Link>
            </div>
            <div className="box bgSvg1">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-3" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
    </div>
  )
}

export default Library;