import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Lesson = ({ lessonId }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(`
# Introduction to E-Commerce

Welcome to the **E-Com Mastii** course! 🚀

## What You'll Learn:
- 🛒 How e-commerce platforms work
- ⚡ Setting up an online store
- 🔍 SEO for better reach
- 💳 Payment gateway integration

### Code Example
\`\`\`js
const cart = [];
cart.push("New Product");
console.log(cart);
\`\`\`
> "E-commerce is not the cherry on the cake, it is the new cake!" – Jean Paul Ago  
    `);
  }, [lessonId]);

  return (
    <div className="lesson-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default Lesson;



// // npm install react-markdown remark-gfm



// import React, { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import axios from "axios";

// const Lesson = ({ lessonId }) => {
//     const [content, setContent] = useState("");
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchLesson = async () => {
//             try {
//                 const response = await axios.get(`https://github.com/Artist-dk/notes/blob/master/README.md`);
//                 console.log(response)
//                 if (response.data.content) {
//                     const decodedContent = atob(response.data.content);
//                     setContent(decodedContent);
//                 }
//             } catch (err) {
//                 setError("Lesson content not available.");
//             }
//         };

//         fetchLesson();
//     }, []);

//     return (
//         <div className="lesson-container">
//             {error ? (
//                 <p className="error-message">{error}</p>
//             ) : (
//                 <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
//             )}
//         </div>
//     );
// };

// export default Lesson;
