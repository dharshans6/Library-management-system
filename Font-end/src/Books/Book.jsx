import {React,useState,useEffect} from 'react'
import Navbar from '../Home/Navbar'
import silder_1 from'../assets/slider1.png'
import silder_2 from'../assets/slider2.png'
import silder_3 from'../assets/slider3.png'
import Routing from '../Routings/Routing'
import book1 from '../assets/book1(phy of money).jpg'
import { Link } from 'react-router-dom'
import './book.css'
import axios from 'axios'


function Book() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getbooks')
          .then(response => setBooks(response.data))
          .catch(error => console.error('Error fetching books:', error));
      }, []);
 
  return (
    <>
      <Navbar showtitle={false}/>
       <section className="slider mt-5" >
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel" >
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={silder_1} className=" " alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={silder_2} className=" " alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={silder_3} className=" " alt="..."/>
            </div>
            </div>
        </div>
       </section> 
       <section className="cards mt-5">
        <h1>#Books</h1>
        <div className="grid-container">
          {books.map((book) => (
            <div className="card" style={{ width: "18rem" }} key={book._id}>
              <img src={book1} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.bookname}</h5>
                <p className="card-text">{book.description}</p>
                <h4 className="card-text">₹{book.price}</h4>
                <Link to='' className="btn btn-primary container-fluid">Buy</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Book