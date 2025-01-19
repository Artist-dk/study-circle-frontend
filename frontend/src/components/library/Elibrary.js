import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from 'file:///D:/Pictuers/design-book-covers-online.png';

function ELibrary() {
    const [ebooks, setEbooks] = useState([]);

    useEffect(() => {
        fetchBooks()
    }, []);
    function print() {
        console.log("Print")
        console.log(ebooks.result)
    }
    useEffect(function(){
        print()
    },[ebooks])

    function fetchBooks() {    
        axios.get('http://localhost:8081/library/get-all-books',  {headers: {'Content-Type': 'multipart/form-data'}} )
            .then(response => {
                console.log('Form submitted successfully:', response.data);
                setEbooks(response.data)
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });  
    }
    return (
    <div className='libraryebook'>
        <div className="mid">
            <h1>Library Books</h1>
            <div className="ebook-grid">
                {ebooks.result && (
                    ebooks.result.map(el => (
                        <div key={el.id} className="ebook-container">
                            <div className="ghost">
                                <img className="ebook-image" src={img} alt={el.title} />
                                <div className="book-details">
                                    <div>
                                        <h2 className="book-title">{el.title}</h2>
                                        <p className='small'>Author: {el.author}</p>
                                        <p className="book-description">{el.description}</p>
                                        <span className='grow'></span>
                                        <span className='link'>Read Book</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    </div>
    
    );
}

export default ELibrary;
