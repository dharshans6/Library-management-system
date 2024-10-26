// import React, { useState } from 'react';
// import './AddBooks.css';
// import Navbar from '../Home/Navbar';
// import axios from 'axios';
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function AddBooks() {
//   const [bookname, setBookname] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);



//   const SubmitBooks = (e) => {

//     e.preventDefault();
//     const formdata=new FormData()
//     formdata.append('file',image)
//     axios.post("http://localhost:3001/createbooks", { bookname, description, price, image })
//       .then(res => {
//         console.log(res);
//         toast.success('Book added successfully!')
//       })
//       .catch(err => {
//         console.log(err);
//         toast.error('Not successful!')
//       });
//   };
  
  

 

//   return (
//     <>
//       <Navbar showtitle={false} />
//       <div className="App">
//         <div className="add-title"><h2>#ADD Your Books</h2></div>
//         <div className='form-container mt-2 container'>
//           <form onSubmit={SubmitBooks}>
//             <div className='form-group mb-3'>
//               <label htmlFor="booktitle">Book Title:</label>
//               <input
//                 name="booktitle"
//                 type='text'
//                 className='form-control'
//                 onChange={(e) => setBookname(e.target.value)}
//                 placeholder="Enter the book title"
//                 required
//               />
//             </div>
//             <div className='form-group mb-3'>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 className='form-control'
//                 onChange={(e) => setDescription(e.target.value)}
//                 name="description"
//                 rows="5"
//                 cols="50"
//                 required
//                 placeholder="Enter the description"
//               ></textarea>
//             </div>
//             <div className='form-group mb-3'>
//               <label htmlFor="price">Price</label>
//               <input
//                 name="price"
//                 type='number'
//                 className='form-control'
//                 onChange={(e) => setPrice(e.target.value)}
//                 placeholder="Enter the price in *INR"
//                 required
//               />
//             </div>
//             <div className='form-group mb-3'>
//               <label htmlFor="upload_image">Upload image</label>
//               <input
//                 type="file"
//                 name="upload_image"
//                 onChange={(e)=> setImage(e.target.files[0])}
//                 className='form-control'
//                 accept='image/*'
//               />
              
//             </div>
//             <button className='btn btn-success'>Submit</button>
//             <ToastContainer />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddBooks;


import React, { useState } from 'react';
import './AddBooks.css';
import Navbar from '../Home/Navbar';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBooks() {
  const [bookname, setBookname] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setimage] = useState(null);

  const SubmitBooks = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bookname', bookname);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    axios.post("http://localhost:3001/createbooks", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res);
      toast.success('Book added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    })
    .catch(err => {
      console.log(err);
      toast.error('Not successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };

  // const imageInput = (e) => {
  //   setimage(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // };

  return (
    <>
      <Navbar showtitle={false} />
      <div className="App">
        <div className="add-title"><h2>#ADD Your Books</h2></div>
        <div className='form-container mt-2 container'>
          <form onSubmit={SubmitBooks}>
            <div className='form-group mb-3'>
              <label htmlFor="booktitle">Book Title:</label>
              <input
                name="booktitle"
                type='text'
                className='form-control'
                onChange={(e) => setBookname(e.target.value)}
                placeholder="Enter the book title"
                required
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor="description">Description</label>
              <textarea
                className='form-control'
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                rows="5"
                cols="50"
                required
                placeholder="Enter the description"
              ></textarea>
            </div>
            <div className='form-group mb-3'>
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type='number'
                className='form-control'
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter the price in *INR"
                required
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor="upload_image">Upload Image</label>
              <input
                id="upload_image"
                type="file"
                name="file"
                onChange={(e)=>setimage(e.target.files[0])}
                className='form-control'
                accept='image/*'
              />
            </div>
            <button className='btn btn-success'>Submit</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBooks;
