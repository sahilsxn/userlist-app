import {React, useEffect} from 'react'
import UserItem from './UserItem'
import { useSelector } from 'react-redux'
import '../CSS/userList.css'

const UserList = (props) =>{

const userDataList = useSelector(state=>state.allUsers)

  return (
    <div className='user_list'>
      {userDataList.length && 
      <div>
        <h2 style={{marginLeft:'16px'}}>Total Users - {userDataList.length}</h2>
        {userDataList.map(user=>{
          return <UserItem key={user.id} user={user}/>
        })}
      </div>
      }
    </div>
  )
}

export default UserList