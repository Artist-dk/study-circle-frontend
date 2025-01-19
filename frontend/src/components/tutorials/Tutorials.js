import React, { useEffect, useState } from 'react'
import TutorialBuilder from './TutorialBuilder';
import MarkdownRenderer from './MarkdownRenderer';

import Api from '../../services/api';

export default function Tutorials() {
  const [content, setContent] = useState('');

  useEffect(()=> {
    // let dt = Api.fetchTutorial('64bb76e5372fc9124ba6021baf604a7e');
    // console.log(dt)
    // setContent(dt)
  fetch('http://localhost:8081/tutorial/64bb76e5372fc9124ba6021baf604a7e')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response)
    return response.text(); 
  })
  .then(data => {
    setContent(data)
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  },[])
  return (
    <div className="body">
            <div className="h-box-1 welcome">
                <div className="mid">
                    <h1><span className="grad"><span>E</span>NLIIGHTEN </span>CENTER<br /></h1>
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
                  <TutorialBuilder />
                </div>
            </div>
            <div className="box-1">
                <div className="mid">
                  <MarkdownRenderer content={content} />
                </div>
            </div>
            <div className="box bgSvg2">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="path-1" d="M0,100  L0,0 100,100z"></path>
                    <path className="path-2" d="M100,0  L15,0  90,100z"></path>
                </svg>
            </div>
    </div>
  )
}
