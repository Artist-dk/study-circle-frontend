import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Discussion() {
  const [usersData, setUsersData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const userSidebarRef = useRef(null);

  /* ---------- Sidebar toggle ---------- */
  const toggleUsers = () => {
    if (!userSidebarRef.current) return;
    userSidebarRef.current.classList.toggle("scd-zero-contacts");
  };

  /* ---------- API calls ---------- */
  const fetchUsers = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8081/message/fetchUsers",
        {},
        { withCredentials: true }
      );
      setUsersData(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUser = async (userId) => {
    try {
      const res = await axios.post(
        "http://localhost:8081/message/fetchUser",
        { userId },
        { withCredentials: true }
      );
      setUserData(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMessages = async () => {
    if (!userData[0]) return;
    try {
      const res = await axios.get(
        "http://localhost:8081/message/fetchMessages",
        {
          params: { recipientId: userData[0].id },
          withCredentials: true,
        }
      );
      setChatMessages(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !userData[0]) return;

    try {
      await axios.post(
        "http://localhost:8081/message/saveMessage",
        {
          recipientId: userData[0].id,
          messageContent: message,
          messageType: "text",
          file: {},
        },
        { withCredentials: true }
      );
      setMessage("");
      fetchMessages();
    } catch (err) {
      console.error(err);
    }
  };

  /* ---------- Effects ---------- */
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [userData]);

  /* ---------- UI ---------- */
  return (
    <div className="scd-wrapper">
      <div className="scd-chatapp">
        {/* ===== Contacts Sidebar ===== */}
        <div className="scd-contacts" ref={userSidebarRef}>
          {usersData.map((user) => (
            <div
              key={user.id}
              className="scd-contact-item"
              onClick={() => fetchUser(user.id)}
            >
              <div className="scd-contact-avatar">
                <img src={user.profilePictureURL} alt="" />
              </div>
              <div className="scd-contact-details">
                <h2>{user.firstName} {user.lastName}</h2>
                <span>{user.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Chat Section ===== */}
        {userData.length > 0 ? (
          <div className="scd-chat-main">
            {/* Header */}
            <div className="scd-chat-header">
              <div className="scd-header-grid">
                <div
                  className="scd-toggle-contacts"
                  onClick={toggleUsers}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="scd-active-user">
                  <div className="scd-active-user-inner">
                    <div className="scd-active-avatar">
                      <img src={userData[0].profilePictureURL} alt="" />
                    </div>
                    <div className="scd-active-details">
                      <div className="scd-active-name">
                        {userData[0].firstName} {userData[0].lastName}
                      </div>
                      <div className="scd-active-status">
                        {userData[0].status}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="scd-header-spacer"></div>

                <div className="scd-header-actions">
                  <button>
                    <svg viewBox="0 0 24 24">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="scd-chat-body">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`scd-message ${
                    msg.recipientId === userData[0].id
                      ? "scd-message-received"
                      : "scd-message-sent"
                  }`}
                >
                  <div className="scd-message-content">
                    <div className="scd-message-bubble">
                      <div className="scd-message-text">
                        {msg.messageContent}
                      </div>
                    </div>
                    <div className="scd-message-time">
                      <span>{msg.sentAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="scd-chat-footer">
              <div className="scd-input-area">
                <form onSubmit={handleSendMessage}>
                  <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit">
                    <svg viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="scd-chat-placeholder">
            <div>
              <h1 className="scd-welcome-text">Welcome</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// export default function Discussion() {
//     const [chatMessages, setChatMessages] = useState([]);
//     const [usersData, setUsersData] = useState([]);
//     const [userData, setUserData] = useState([]);
//     const [message, setMessage] = useState([]);

//     const userSidebar = useRef();

//     const toggleUsers = () => {
//         if( userSidebar.current.classList.value.match("zero-contacts-container" )) {
//             userSidebar.current.classList.value = userSidebar.current.classList.value.trim().replaceAll(" zero-contacts-container", '')
//         } else {
//             userSidebar.current.classList.value = userSidebar.current.classList.value + " zero-contacts-container"
//         }
//     }

//     const fetchMessages = () => {
//         try {
//             axios.get('http://localhost:8081/message/fetchMessages',  {
//                 params: {
//                   recipientId: userData[0].id
//                 },
//                 headers: {
//                   Accept: '*/*',
//                   'Content-Type': 'application/json'
//                 },
//                 withCredentials: true
//             })
//             .then(function (response) {
//                 setChatMessages(response.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         } catch (error) {
//             console.log(error)
//         }   
//     }

//     useEffect(()=>{
//         fetchMessages()
//     },[userData])

//     const handleSendMessage = (e) => {
//         e.preventDefault();
//         try {
//             axios.post('http://localhost:8081/message/saveMessage', 
//             JSON.stringify({ 
//                 recipientId: userData[0].id,
//                 messageContent: message,
//                 messageType: 'text',
//                 file: {}
//             }), 
//             {
//                 headers: {
//                     Accept: "*/*",
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true
//             })
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         } catch (error) {
//             console.log(error)
//         }   
//     }
    
//     const fetchUsers = () => {
//         try {
//             axios.post('http://localhost:8081/message/fetchUsers', 
//             JSON.stringify({ }), 
//             {
//                 headers: {
//                     Accept: "*/*",
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true
//             })
//             .then(function (response) {
//                 setUsersData(response.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         } catch (error) {
//             console.log(error)
//         } 
//     }
//     const fetchUser = (e) => {
//         try {
//             axios.post('http://localhost:8081/message/fetchUser', 
//             JSON.stringify({ userId: e }), {
//                 headers: {
//                     Accept: "*/*",
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true
//             })
//             .then(function (response) {
//                 setUserData(response.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         } catch (error) {
//             console.log(error)
//         } 
//     }
//     const handleClick = (e) => {
//         const userId = parseInt(e.currentTarget.dataset.a);
//         const user = usersData.find((user) => user.id === userId);
//         fetchUser(userId)
//     }
//     useEffect((e)=> {
//         fetchUsers();
//     },[]);
    
//     useEffect(() => {
        
//     },[]);
    
    
//     const handleSendMessagses = (e) => {
//         e.preventDefault();
//         if (userData.length>0) {
//             axios
//             .get("http://localhost:8081/message/fetchUser", {
//                 params: { userId: 2},
//             })
//             .then((response) => {
//                 setChatMessages(response.data);
//                 console.log(response.data);
//                 console.log("data sent");
//             })
//             .catch((error) => {
//                 console.error("Error fetching users:", error);
//             });
//         } else {
//             console.error("User not found with id:", userData.id);
//         }
//     }
    
//     return (
//         <div className="chatapp">
//             <div className="contacts-container" ref={userSidebar}>
//                 {usersData.map((user) => (
//                     <div
//                         data-a={user.id}
//                         className="contact-li"
//                         key={user.id}
//                         onClick={(e) => handleClick(e)}
//                     >
                        
//                         <div className="img-container">
//                             <img src={user.profilePictureURL} alt="" />
//                         </div>
//                         <div className="details-container">
//                             <h2>{user.firstName +" "+ user.lastName}</h2>
//                             <span>{user.status}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {(userData.length>0) ? (
//                 <div className="chat-main">
//                     <div className="chat-head">
//                         <div className="grid-1">
//                             <div class="contacts-icon" onClick={toggleUsers}><span></span><span></span><span></span></div>
//                             <div className="contact-head">
//                                 <div className="contact-head-main">
//                                     <div className="img-cont">
//                                         <img src={userData[0].profilePictureURL} alt="" />
//                                     </div>
//                                     <div className="details-cont">
//                                         <div className="name">{userData[0].firstName + " " + userData[0].lastName}</div>
//                                         <div className="status">{userData[0].status}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="grow"></div>
//                             <div className="btn-cont">
//                                 <button>
//                                     <svg
//                                         stroke="currentColor"
//                                         fill="none"
//                                         strokeWidth="3"
//                                         viewBox="0 0 24 24"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         className="h-6 w-6"
//                                         height="1em"
//                                         width="1em"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <line x1="3" y1="12" x2="21" y2="12"></line>
//                                         <line x1="3" y1="6" x2="21" y2="6"></line>
//                                         <line x1="3" y1="18" x2="21" y2="18"></line>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="chat-body">
//                         {chatMessages.map((msg, index) => (
//                             <div className={`msg-cont-${(msg.recipientId === parseInt(userData[0].id) )?('received'):('sent')}`} key={index}>
//                                 <div className="msg-body">
//                                     <div className="msg-bg">
//                                         <div className="msg-text">{msg.messageContent}</div>
//                                     </div>
//                                     <div className="msg-time">
//                                         <span>{msg.sentAt}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="chat-footer">
//                         <div className="inputs">
//                             <form action="" onSubmit={handleSendMessage}>
//                                 <button>
//                                     <svg
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                         strokeWidth="3"
//                                         width="16px"
//                                         height="16px"
//                                     >
//                                         <path d="M10,0a10,10,0,1,0,9.85,8.26A10,10,0,0,0,10,0Zm0,19A9,9,0,1,1,18.87,8.44,9.11,9.11,0,0,1,19,10,9,9,0,0,1,10,19Zm4.23-6.88a4.5,4.5,0,0,1-8.72,0l1-.25a3.5,3.5,0,0,0,6.78,0ZM8,8A1,1,0,1,1,7,7,1,1,0,0,1,8,8Zm6,0a1,1,0,1,1-1-1A1,1,0,0,1,14,8Z"></path>
//                                     </svg>
//                                 </button>
//                                 <button>
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         shapeRendering="geometricPrecision"
//                                         textRendering="geometricPrecision"
//                                         imageRendering="optimizeQuality"
//                                         clipRule="evenodd"
//                                         viewBox="0 0 397 511.92"
//                                     >
//                                         <path d="M370.42 212.78c4.94-6.51 14.23-7.78 20.73-2.85 6.51 4.94 7.78 14.23 2.84 20.73L216.08 464.63c-20.06 26.3-49.03 42.03-79.53 46.18-30.03 4.09-61.64-3.04-87.78-22.38a15.67 15.67 0 0 1-2.56-1.94c-25.65-20.04-41.01-48.64-45.1-78.71-4.09-30.05 3.06-61.66 22.39-87.79.53-.88 1.16-1.71 1.86-2.47L239.33 36.15c16.39-19.23 34.57-31.3 54.79-34.97 20.41-3.71 41.94 1.25 64.75 16.18l.97.69.26.2.03.02c10.88 8.4 19.01 17.76 24.58 27.84 5.98 10.85 8.96 22.5 9.17 34.68.27 16.39-3.62 30.03-9.87 42.56-5.75 11.55-13.57 22.01-21.92 32.99l-198.2 260.67c-8.38 11.02-20.48 17.61-33.2 19.34-12.16 1.66-24.98-1.14-35.71-8.75-.96-.57-1.86-1.25-2.69-2.05-10.23-8.32-16.36-19.95-18.03-32.15-1.71-12.69 1.4-26.09 9.76-37.09L255.26 131.1c4.93-6.5 14.22-7.77 20.73-2.84 6.5 4.94 7.77 14.23 2.84 20.73L107.59 374.2c-3.4 4.48-4.66 10-3.95 15.26.71 5.22 3.4 10.17 7.86 13.56l.05.05c4.46 3.36 9.96 4.61 15.2 3.9 5.23-.71 10.18-3.39 13.57-7.85l198.2-260.67c7.26-9.55 14.07-18.66 18.9-28.34 4.33-8.68 7.02-17.98 6.85-28.86-.12-7.25-1.94-14.25-5.57-20.85-3.56-6.45-8.94-12.61-16.3-18.34-16.01-10.43-30.3-14.04-43.06-11.73-13.02 2.37-25.5 11.03-37.5 25.07L48.04 336.59c-15.1 19.85-20.69 44.13-17.55 67.24 3.08 22.65 14.58 44.16 33.77 59.22.75.46 1.47 1 2.14 1.62 19.67 14.5 43.51 19.85 66.21 16.76 22.67-3.08 44.19-14.61 59.24-33.82.48-.76 1.03-1.48 1.65-2.17l176.92-232.66z" />
//                                     </svg>
//                                 </button>
//                                 <input
//                                     type="text"
//                                     placeholder="Message"
//                                     name="messageTextBody"
//                                     id="_msg"
//                                     autoComplete="off"
//                                     onChange={(e)=> {setMessage(e.target.value)}}
//                                 />
//                                 <button id="_sendMsg">
//                                     <svg
//                                         stroke="currentColor"
//                                         fill="none"
//                                         strokeWidth="2"
//                                         viewBox="0 0 24 24"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         height="24px"
//                                         width="24px"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <line x1="22" y1="2" x2="11" y2="13"></line>
//                                         <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//                                     </svg>
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="chat-main-psudo">
//                   <div>
//                     <div>
//                       <h1 className='sayhi'>Welcome</h1>
//                     </div>
//                   </div>
//                 </div>
//             )}
//         </div>
//     );
// }