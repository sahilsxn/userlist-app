import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncGetUser } from '../actions/userActions'
import '../CSS/userItem.css'

const UserItem = (props) =>{

  const dispatch = useDispatch()

  const {user} = props

  const handleClick = () => {
    dispatch(asyncGetUser(user.id))
  }

  return (
    <div className='user_item'>
        <div className='user_item_name'><b>{user.first_name} {user.last_name}</b></div> <br/>
        <button className='details_button' onClick={handleClick}>Show Details</button>
    </div>
  )
}

export default UserItem