import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from 'file:///D:/Pictuers/design-book-covers-online.png';

function ELibrary() {
    const [ebooks, setEbooks] = useState({});
    const BOOKS_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchBooks();
    }, []);

    function print() {
        console.log("Print");
        console.log(ebooks);
    }

    useEffect(() => {
        print();
    }, [ebooks]);

    // Pagination logic
    const totalPages = ebooks.result
        ? Math.ceil(ebooks.result.length / BOOKS_PER_PAGE)
        : 0;

    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const endIndex = startIndex + BOOKS_PER_PAGE;

    const currentBooks = ebooks.result
        ? ebooks.result.slice(startIndex, endIndex)
        : [];

    const handleDownload = async (fileURL, title) => {
        try {
            const filename = fileURL.split("/").pop();
            const downloadUrl = `http://localhost:8081/library/download-book/${filename}`;

            const response = await fetch(downloadUrl);
            if (!response.ok) throw new Error("Download failed");

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = title;
            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download error:", err);
            alert("Unable to download file");
        }
    };

    function fetchBooks() {
        axios
            .get('http://localhost:8081/library/get-all-books', {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(response => {
                console.log('Form submitted successfully:', response.data);
                setEbooks(response.data); // DO NOT CHANGE STRUCTURE
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
                    {currentBooks.map(el => (
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
                                        <div>
                                            <button className="btn" onClick={() =>
                                                handleDownload("http://localhost:8081/" + el.filename,el.filename)}
                                                style={{ padding: '5px 10px', cursor: 'pointer' }}>
                                                    Download PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION CONTROLS */}
                <div className="pagination">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i} onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                        </button>
                    ))}

                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ELibrary;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import img from 'file:///D:/Pictuers/design-book-covers-online.png';

// function ELibrary() {
//     const [ebooks, setEbooks] = useState([]);
//     const [myPage, setMyPage] = useState(0); // 1 page = 8 books
//     useEffect(() => {
//         fetchBooks()
//     }, []);
//     function print() {
//         console.log("Print")
//         console.log(ebooks)
//     }
//     useEffect(function(){
//         print()
//     },[ebooks])

//     const BOOKS_PER_PAGE = 8;
    
//     const [currentPage, setCurrentPage] = useState(1);

//     const totalPages = Math.ceil(ebooks.length / BOOKS_PER_PAGE);

//     const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
//     const endIndex = startIndex + BOOKS_PER_PAGE;

//     // const currentBooks = ebooks.result.slice(startIndex, endIndex);

//     console.log("Hacked: ----------------", totalPages)



//     // const handleDownload = async (url, fileName) => {
//     //     // If it's a local path like 'uploads\file.pdf', prepend your backend URL
//     //     const finalUrl = url.startsWith('http') ? url : `http://localhost:8081/${url.replace(/\\/g, '/')}`;
//     //     console.log("handleDownload: ",url)
//     //     try {
//     //         const response = await fetch(finalUrl);
//     //         const blob = await response.blob();
//     //         const blobUrl = window.URL.createObjectURL(blob);
            
//     //         const link = document.createElement('a');
//     //         link.href = blobUrl;
//     //         link.download = fileName || 'download.pdf';
//     //         document.body.appendChild(link);
//     //         link.click();
//     //         link.remove();
//     //         window.URL.revokeObjectURL(blobUrl);
//     //     } catch (error) {
//     //         console.error("Download failed:", error);
//     //         // Fallback: just open in new tab if blob fails
//     //         window.open(finalUrl, '_blank');
//     //     }
//     // };

//     const handleDownload = async (fileURL, title) => {
//         try {
//             const filename = fileURL.split("/").pop(); // SAFE
//             const downloadUrl = `http://localhost:8081/library/download-book/${filename}`;

//             const response = await fetch(downloadUrl);
//             if (!response.ok) throw new Error("Download failed");

//             const blob = await response.blob();
//             // console.log("-------------------",blob)
//             const blobUrl = window.URL.createObjectURL(blob);
//             console.log("-------------------",blobUrl)

//             const link = document.createElement("a");
//             link.href = blobUrl;
//             // console.log(blobUrl)
//             link.download = `${title}`;
//             console.log(response)
//             document.body.appendChild(link);
//             link.click();

//             link.remove();
//             window.URL.revokeObjectURL(blobUrl);
//         } catch (err) {
//             console.error("Download error:", err);
//             alert("Unable to download file");
//         }
//     };
//     function fetchBooks() {    
//         axios.get('http://localhost:8081/library/get-all-books',  {headers: {'Content-Type': 'multipart/form-data'}} )
//             .then(response => {
//                 console.log('Form submitted successfully:', response.data);
//                 setEbooks(response.data)
//             })
//             .catch(error => {
//                 console.error('Error submitting form:', error);
//             });
//     }
//     return (
//     <div className='libraryebook'>
//         <div className="mid">
//             <h1>Library Books</h1>
//             <div className="ebook-grid">
//                 {/* {ebooks.result} */}
//                 {ebooks.result && (
//                     ebooks.result.map(el => (
//                         <div key={el.id} className="ebook-container">
//                             <div className="ghost">
//                                 <img className="ebook-image" src={img} alt={el.title} />
//                                 <div className="book-details">
//                                     <div>
//                                         <h2 className="book-title">{el.title}</h2>
//                                         <p className='small'>Author: {el.author}</p>
//                                         <p className="book-description">{el.description}</p>
//                                         <span className='grow'></span>
//                                         <span className='link'>Read Book</span>
//                                         <button 
//                                             className="btn"
//                                             onClick={() => handleDownload("http://localhost:8081/" + el.filename, el.filename)}
//                                             style={{ padding: '5px 10px', cursor: 'pointer' }}
//                                             >
//                                             Download PDF
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
            
//             {/* PAGINATION */}
//             <div className="pagination">
//                 <button
//                     disabled={currentPage === 1}
//                     onClick={() => setCurrentPage(p => p - 1)}
//                 >Prev</button>

//                 {Array.from({ length: totalPages }, (_, i) => (
//                     <button
//                     key={i}
//                     className={currentPage === i + 1 ? "active" : ""}
//                     onClick={() => setCurrentPage(i + 1)}
//                     >
//                     {i + 1}
//                     </button>
//                 ))}

//                 <button
//                     disabled={currentPage === totalPages}
//                     onClick={() => setCurrentPage(p => p + 1)}
//                 >Next</button>
//             </div>
//         </div>
//     </div>
    
//     );
// }

// export default ELibrary;
