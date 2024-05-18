import React from 'react'
import TutorialBuilder from './TutorialBuilder';
import MarkdownRenderer from './MarkdownRenderer';

export default function Tutorials() {
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
                  <MarkdownRenderer />
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
