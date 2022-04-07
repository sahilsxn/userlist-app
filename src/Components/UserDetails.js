import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS/userDetails.css'

const UserDetails = (props) =>{

  const userData = useSelector(state=>state.user)

  return (
    <div className='user_details'>
        <img className='user_avatar' src={userData.avatar} alt={"userpic"}/> <br/>
        <h2>{userData.first_name} {userData.last_name}</h2>
        <p>{userData.email}</p>
    </div>
  )
}

export default UserDetails