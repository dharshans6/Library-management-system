import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function MemberCreate() {
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [age,setage]=useState()
    const navigate =useNavigate()

    const submit =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/MemberCreate",{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/Members')
        })
        .catch(err => console.log(err))
        
    }

  return (
    <>
     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='enter the name' className='form-control'  required
                    onChange={(e)=> setname(e.target.value) }    
                />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='enter the Email' className='form-control'  required
                    onChange={(e)=> setemail(e.target.value)}        
                />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">age</label>
                    <input type="number" placeholder='enter Age' className='form-control'  required
                    onChange={(e)=> setage(e.target.value)}        
                />
                </div>
                <button className='btn btn-success'>submit</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default MemberCreate