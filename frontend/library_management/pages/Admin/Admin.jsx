// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import toast, { Toaster } from 'react-hot-toast';

// function Admin() {
//   const [BookData, setBookData] = useState({
//     Category: '',
//     Bookname: '',
//     Bookid: '',
//     Author: '',
//     BookPhoto: null,
//     BookPdf: null,
//   });
//   const [admin, setAdmin] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     mobileNo: '',
//     course: '',
//     enrollment: '',
//     password: '',
//     createdAt: '',
//     updatedAt: '',
//     userID: ''
//   });

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setBookData({ ...BookData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handlePdfChange = (e) => {
//     setSelectedPdf(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('Category', BookData.Category);
//     formData.append('Bookname', BookData.Bookname);
//     formData.append('Bookid', BookData.Bookid);
//     formData.append('Author', BookData.Author);
//     // setBookData(...BookData,{
//     //   BookPhoto: selectedFile,
//     //   BookPdf: selectedPdf
//     // })
//     const BookPhoto=selectedFile;
//     const BookPdf=selectedPdf;
//     formData.append('BookPhoto',BookPhoto);
//     formData.append('bookPdf', BookPdf);

//     console.log('Form data:');
//     formData.forEach((value, key) => {
//       console.log(`${key}: ${value}`);
//     });

//     try {
//       const response = await axios.post('http://localhost:3000/admin/addbook', formData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('JWT_Token')}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       if (response.data.ok) {
//         toast.success('add Successfully!');
//         console.log('Response from server:', response.data);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message);
//       console.error("something wrong");
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('jwt_token');
//     if (token) {
//       axios.get('http://localhost:3000/user/auth', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((response) => {
//           if (response.data.ok) {
//             const user = response.data.user;
//             if (user) {
//               setAdmin({
//                 firstname: user.firstname,
//                 lastname: user.lastname,
//                 email: user.email,
//                 mobileNo: user.mobileNo,
//                 course: user.course,
//                 enrollment: user.enrollment,
//                 createdAt: user.createdAt,
//                 updatedAt: user.updatedAt,
//                 userID: user._id
//               });
//               console.log("login successfully");
//             }
//           } else {
//             console.log("authentication failed");
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//           // localStorage.removeItem('JWT_Token');
//         });
//     }
//   }, []);

//   return (
//     <>
//       <h1>Admin</h1>
//       <form onSubmit={handleSubmit}>
//         <label>book category:</label>
//         <input
//           type="radio"
//           value="Science"
//           id="science"
//           name="Category"
//           checked={BookData.Category === 'Science'}
//           onChange={handleOnChange}
//         />
//         Science
//         <br></br>
//         <input
//           type="radio"
//           value="History"
//           id="History"
//           name="Category"
//           checked={BookData.Category === 'History'}
//           onChange={handleOnChange}
//         />
//         Histroy
//         <br></br>
//         <input
//           type="radio"
//           value="Math"
//           id="Math"
//           name="Category"
//           checked={BookData.Category === 'Math'}
//           onChange={handleOnChange}
//         />
//         Math<br />

//         <label>book name:</label>
//         <input type="text" name="Bookname" value={BookData.Bookname} onChange={handleOnChange} /><br />
//         <label>book Id:</label>
//         <input type="text" name="Bookid" value={BookData.Bookid} onChange={handleOnChange} /><br />
        
//         <label>Author:</label>
//         <input type="text" name="Author" value={BookData.Author} onChange={handleOnChange} /><br />
        
//         <label>book photo:</label>
//         <input type="file" name="bookphoto" onChange={handleFileChange} /><br />
//         <label>book Pdf:</label>
//         <input type="file" accept=".pdf" name="BookPdf" onChange={handlePdfChange} />

//         <button type="submit">add</button>
//       </form>
//     </>
//   );
// }

// export default Admin;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Admin() {
  const [BookData, setBookData] = useState({
    Category: '',
    Bookname: '',
    Bookid: '',
    Author: '',
    BookPhoto: null
    // BookPdf: null,
  });

  const [admin, setAdmin] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileNo: '',
        course: '',
        enrollment: '',
        password: '',
        createdAt: '',
        updatedAt: '',
        userID: ''
      });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...BookData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setBookData({ ...BookData, BookPhoto: e.target.files[0] });
  // };

  // const handlePdfChange = (e) => {
  //   setBookData({ ...BookData, BookPdf: e.target.files[0] });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   Object.keys(BookData).forEach((key) => {
  //     formData.append(key, BookData[key]);
  //   });
  //   console.log(BookData);
  //   const uID=admin.userID;

  //   try {
  //     const response = await axios.post(`http://localhost:3000/admin/addbook/${uID}`, formData, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('JWT_Token')}`,
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     if (response.data.ok) {
  //       toast.success('add Successfully!');
  //       console.log('Response from server:', response.data);
  //     }
  //   } catch (err) {
  //     toast.error(err.response?.data?.message);
  //     console.error("something wrong");
  //   }
  // };

  const handleFileChange = (e) => {
    setBookData({ ...BookData, BookPhoto: e.target.files[0] });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('bookPhoto', BookData.BookPhoto);
    Object.keys(BookData).forEach((key) => {
      if (key !== 'BookPhoto') {
        formData.append(key, BookData[key]);
      }
    });
  
    const uID = admin.userID;
  
    try {
      const response = await axios.post(`http://localhost:3000/admin/addbook/${uID}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT_Token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.ok) {
        toast.success('add Successfully!');
        console.log('Response from server:', response.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.error("something wrong");
    }
  };

  useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
          axios.get('http://localhost:3000/user/auth', {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((response) => {
              if (response.data.ok) {
                const user = response.data.user;
                if (user) {
                  setAdmin({
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    mobileNo: user.mobileNo,
                    course: user.course,
                    enrollment: user.enrollment,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    userID: user._id
                  });
                  console.log("login successfully");
                }
              } else {
                console.log("authentication failed");
              }
            })
            .catch((error) => {
              console.error(error);
              // localStorage.removeItem('JWT_Token');
            });
        }
      }, []);

  return (
    
<>
       <h1>Admin</h1>
       <form onSubmit={handleSubmit}>
         <label>book category:</label>
         <input
           type="radio"
          value="Science"
          id="science"
          name="Category"
          checked={BookData.Category === 'Science'}
          onChange={handleOnChange}
        />
        Science
        <br></br>
        <input
          type="radio"
          value="History"
          id="History"
          name="Category"
          checked={BookData.Category === 'History'}
          onChange={handleOnChange}
        />
        Histroy
        <br></br>
        <input
          type="radio"
          value="Math"
          id="Math"
          name="Category"
          checked={BookData.Category === 'Math'}
          onChange={handleOnChange}
        />
        Math<br />

        <label>book name:</label>
        <input type="text" name="Bookname" value={BookData.Bookname} onChange={handleOnChange} /><br />
        <label>book Id:</label>
        <input type="text" name="Bookid" value={BookData.Bookid} onChange={handleOnChange} /><br />
        
        <label>Author:</label>
        <input type="text" name="Author" value={BookData.Author} onChange={handleOnChange} /><br />
        
        <label>book photo:</label>
        <input type="file" name="BookPhoto" onChange={handleFileChange} /><br />
        {/* <label>book Pdf:</label>
        <input type="file" accept=".pdf" name="BookPdf" onChange={handlePdfChange} /> */}

        <button type="submit">add</button>
      </form>
    </>

  );
}

export default Admin;