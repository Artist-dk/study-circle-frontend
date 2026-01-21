import React, { useState, useEffect, useRef } from "react";
import "./groupDiscussion.css";

const GroupDiscussion = () => {
  const [gdMessages, setGdMessages] = useState([]);
  const [gdInput, setGdInput] = useState("");
  const gdEndRef = useRef(null);

  // Dummy logged-in user
  const currentStudent = "Digambar";

  // Initial demo messages
  useEffect(() => {
    setGdMessages([
      {
        user: "Amit",
        text: "Hello everyone! 👋",
        time: "10:30 AM",
      },
      {
        user: "Sneha",
        text: "When is the Full Stack assignment due?",
        time: "10:32 AM",
      },
      {
        user: "Digambar",
        text: "It is due this Friday.",
        time: "10:33 AM",
      },
    ]);
  }, []);

  // Auto-scroll
  useEffect(() => {
    gdEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [gdMessages]);

  const handleSendMessage = () => {
    if (!gdInput.trim()) return;

    const newMsg = {
      user: currentStudent,
      text: gdInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setGdMessages((prev) => [...prev, newMsg]);
    setGdInput("");
  };

  return (
    <div className="gd-wrapper">
      <h2 className="gd-title">💬 Student Group Discussion</h2>

      <div className="gd-chat-box">
        {gdMessages.map((msg, index) => (
          <div
            key={index}
            className={`gd-message ${
              msg.user === currentStudent ? "gd-own-message" : ""
            }`}
          >
            <div className="gd-message-user">{msg.user}</div>
            <div className="gd-message-text">{msg.text}</div>
            <div className="gd-message-time">{msg.time}</div>
          </div>
        ))}
        <div ref={gdEndRef} />
      </div>

      <div className="gd-input-area">
        <input
          type="text"
          className="gd-input"
          placeholder="Type your message..."
          value={gdInput}
          onChange={(e) => setGdInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="gd-send-btn" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupDiscussion;



// import React, { useState, useEffect, useRef } from "react";
// import "./groupDiscussion.css";

// const GroupDiscussion = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const chatEndRef = useRef(null);

//   // Dummy logged-in student
//   const currentUser = "Digambar";

//   // Initial demo messages
//   useEffect(() => {
//     setMessages([
//       {
//         user: "Amit",
//         message: "Hello everyone! 👋",
//         time: "10:30 AM",
//       },
//       {
//         user: "Sneha",
//         message: "When is the Full Stack assignment due?",
//         time: "10:32 AM",
//       },
//       {
//         user: "Digambar",
//         message: "It is due this Friday.",
//         time: "10:33 AM",
//       },
//     ]);
//   }, []);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const newMessage = {
//       user: currentUser,
//       message: input,
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setMessages((prev) => [...prev, newMessage]);
//     setInput("");
//   };

//   return (
//     <div className="group-discussion">
//       <h2>💬 Student Group Discussion</h2>

//       <div className="discussion-box">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`discussion-message ${
//               msg.user === currentUser ? "own" : ""
//             }`}
//           >
//             <strong>{msg.user}</strong>
//             <p>{msg.message}</p>
//             <span>{msg.time}</span>
//           </div>
//         ))}
//         <div ref={chatEndRef}></div>
//       </div>

//       <div className="discussion-input">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default GroupDiscussion;










// // import React, { useEffect, useState } from "react";
// // import "./groupDiscussion.css";

// // const GroupDiscussion = () => {
// //   const GROUP_ID = 1;     // example group
// //   const STUDENT_ID = 1;   // logged-in student

// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState("");

// //   // Fetch messages
// //   useEffect(() => {
// //     fetch(`http://localhost:8081/api/group-discussion/${GROUP_ID}/messages`)
// //       .then(res => res.json())
// //       .then(data => setMessages(data))
// //       .catch(err => console.error(err));
// //   }, []);

// //   // Send message
// //   const sendMessage = () => {
// //     if (!newMessage.trim()) return;

// //     fetch("http://localhost:8081/api/group-discussion/message", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         group_id: GROUP_ID,
// //         student_id: STUDENT_ID,
// //         message: newMessage
// //       })
// //     })
// //       .then(res => res.json())
// //       .then(() => {
// //         setMessages([
// //           ...messages,
// //           {
// //             studentName: "You",
// //             message: newMessage,
// //             created_at: new Date()
// //           }
// //         ]);
// //         setNewMessage("");
// //       });
// //   };

// //   return (
// //     <div className="group-discussion">
// //       <h2>💬 Group Discussion</h2>

// //       <div className="discussion-box">
// //         {messages.map((msg, index) => (
// //           <div key={index} className="discussion-message">
// //             <strong>{msg.studentName}</strong>
// //             <p>{msg.message}</p>
// //             <span>
// //               {new Date(msg.created_at).toLocaleTimeString()}
// //             </span>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="discussion-input">
// //         <input
// //           type="text"
// //           placeholder="Type your message..."
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //         />
// //         <button onClick={sendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GroupDiscussion;
