import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Members() {
    const [Members,setMember]=useState([])

    useEffect(()=>{
       axios.get('http://localhost:3001/member')
       .then(result =>setMember(result.data))
       .catch(err => console.log(err))
    },[])

    // const handleDelete =(id) =>{
    //     console.log(id);
    //     axios.delete(`/deletemember/${id}`)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))      
    // }
    // const Deletes = (id) => {
    //     axios.delete(`http://localhost:3001/members/deletemembers/${id}`)
    //       .then(res => {
    //         console.log(res);
    //         setMember(Members.filter(member => member._id !== id)); // Update state after deletion
    //       })
    //       .catch(err => console.log(err));
    //   };

    const Deletes = (id) => {
        axios.delete(`http://localhost:3001/members/deletemembers/${id}`)
          .then(res => {
            console.log(res);
            setMembers(Members.filter(member => member._id !== id));
          })
          .catch(err => console.log(err));
      };
      
  return (
    <>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/membercreate'  className='btn btn-success'>Add+</Link>
            <table 
            className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Members.map((user)=>{
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                   <Link to={`/MemberEdit/${user._id}`} className='btn btn-success'>Edit</Link>
                                    <button className='btn btn-danger' onClick={(e)=> Deletes(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Members