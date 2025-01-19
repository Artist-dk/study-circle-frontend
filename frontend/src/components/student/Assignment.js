import React from 'react'

export default function Assignment() {
  return (
    <>  
    <div className="box-3">
        <div className="mid">
            <div className="todo-nav">
                <span className="active">All Tasks</span>
                <span>Completed</span>
                <span>In Progress</span>
                <span>Pending</span>
            </div>
            <div className="card-1">
                <div className="top">
                    <span className="date">24 March 2023</span>
                    <span className="title">ASSIGNMENT 01</span>
                    <span></span>
                </div>
                <div className="middle">
                    <input type="text" placeholder="Title" />
                    <textarea name="description" id=""></textarea>
                </div>
                <div className="bottom">
                    <button>Send Query</button>
                    <button>Attach File</button>
                    <span className="grow"></span>
                    <input className="set" type="submit" value="SUBMIT" />
                </div>
            </div>
            <div className="card-1">
                <div className="top">
                    <span className="date">24 March 2023</span>
                    <span className="time">01:12 AM</span>
                    <span className="title">ASSIGNMENT 02</span>
                    <span className="expired">Deadline Passed</span>
                </div>
                <div className="middle">
                    <input type="text" placeholder="Title" value="This is title" readonly />
                </div>
                <div className="bottom">
                    <span className="grow"></span>
                </div>
            </div>
            <div className="card-1">
                <div className="top">
                    <span className="date">24 March 2023</span>
                    <span className="time">01:12 AM</span>
                    <span className="title">ASSIGNMENT 03</span>
                    <span className="inprogress">Active</span>
                </div>
                <div className="middle">
                    <input type="text" placeholder="Title" value="This is title" readonly />
                </div>
                <div className="bottom">
                    <span className="grow"></span>
                </div>
            </div>
            <div className="card-1">
                <div className="top">
                    <span className="date">24 March 2023</span>
                    <span className="time">01:12 AM</span>
                    <span className="title">ASSIGNMENT 04</span>
                    <span className="completed">Submitted</span>
                </div>
                <div className="middle">
                    <input type="text" placeholder="Title" value="This is title" readonly />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
