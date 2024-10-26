import React from 'react'
import './DashBoard.css'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import { RiBook2Line } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { LiaIdCard } from "react-icons/lia";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { FaPersonArrowDownToLine } from "react-icons/fa6";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { FaPersonChalkboard } from "react-icons/fa6";
function DashBoard() {
  return (
    <>
      <Navbar showtitle={false}/>
      <div class="dash-cards">
        <h1>#Dash Board</h1>
           <div class="wrapper">
                <div class="row">
                    <Link to='/add-books' class="col">
                        <div class="item card1">
                            <div class="add-books subs">
                                <h2>2</h2>
                                <h3>Add books</h3>
                            </div>
                            <div class="icons">
                                <i><RiBook2Line/></i>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' class="col">
                        <div class="item card2 ">
                            <div class="add-books subs">
                                <h2>2</h2>
                                <h3>update/Delete</h3>
                            </div>
                            <div class="icons">
                                <i><RiEditBoxLine/></i>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' class="col">
                        <div class="item card3 ">
                            <div class="add-books subs">
                                <h2>2</h2>
                                <h3>Available Books</h3>
                            </div>
                            <div class="icons">
                                <i><IoLayersOutline/></i>
                            </div>
                        </div>
                    </Link>
                    <Link to='/members' class="col">
                        <div class="item card4 ">
                            <div class="add-books subs">
                                <h2>2</h2>
                                <h3>Members</h3>
                            </div>
                            <div class="icons">
                                <i><LiaIdCard/></i>
                            </div>
                        </div>
                    </Link>
                    
                </div>
                <div class="row row2">
                    <Link to='/' class="col">
                        <div class="item card5 ">
                            <div class="icons">
                                <i><FaPersonArrowUpFromLine/></i>
                            </div>
                            <div class="add-books subs">
                                <h3>Issued</h3>
                                <h2>2</h2>
                            </div>      
                        </div>
                    </Link>
                    <Link to='/' class="col">
                        <div class="item card6 ">
                            <div class="icons">
                                <i><FaPersonArrowDownToLine/></i>
                            </div>
                            <div class="add-books subs">
                                <h3>Retured</h3>
                                <h2>2</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' class="col">
                        <div class="item card7 ">
                            <div class="icons">
                                <i><RiContactsBookUploadFill/></i>
                            </div>
                            <div class="add-books subs">
                                <h3>Upcomming</h3>
                                <h2>2</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to='/' class="col">
                        <div class="item card8 ">
                            <div class="icons">
                                <i><FaPersonChalkboard/></i>
                            </div>
                            <div class="add-books subs">
                                <h3>Borrowed</h3>
                                <h2>2</h2>
                            </div>
                        </div>
                    </Link>
                </div>
           </div>
        </div>
    </>
  )
}

export default DashBoard