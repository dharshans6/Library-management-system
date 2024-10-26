import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'


function MemberEdit() {
    const {id} =useParams()
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [age,setage]=useState('')
    const navigate =useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3001/members/getmember/${id}`)
        .then(result =>{console.log(result.data)
            setname(result.data.name)
            setemail(result.data.email)
            setage(result.data.age)
        })
        .catch(err => console.log(err))
     },[id])

    // useEffect(() => {
    //     console.log(`Fetching member with ID: ${id}`);
    //     axios.get(`http://localhost:3001/members/getmember/${id}`)
    //     .then(result => {
    //         console.log('Fetched member:', result.data);
    //         setname(result.data.name);
    //         setemail(result.data.email);
    //         setage(result.data.age);
    //     })
    //     .catch(err => console.log('Error fetching member:', err));
    // }, [id]);
    

     const edit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3001/MemberEdit/${id}`,{name,email,age})
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
            <form onSubmit={edit}>
                <h2>Edit User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='enter the name' className='form-control' required
                    value={name}  onChange={(e)=> setname(e.target.value)}  />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='enter the Email' className='form-control' required
                    value={email}  onChange={(e)=> setemail(e.target.value)}  />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">age</label>
                    <input type="number" placeholder='enter Age' className='form-control' required
                    value={age}  onChange={(e)=> setage(e.target.value)}  />
                </div>
                <button className='btn btn-success'>submit</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default MemberEdit


