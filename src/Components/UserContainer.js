import {React, useEffect, useState} from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetAllUsers } from '../actions/userActions'
import '../CSS/userContainer.css'

const UserContainer = (props) =>{

const dispatch = useDispatch()

const [loader, setLoader] = useState(true)

useEffect(()=>{
  dispatch(asyncGetAllUsers())
  setLoader(false)
}, [dispatch])

const user = useSelector(state=>state.user)

  return (
    <div>
    {loader && <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_3pb9gbyk.json" background="transparent"  speed="1"  style={{width: "300px", height: "300px"}} loop autoplay></lottie-player>}
    <div className='user_container'>
        <UserList/>
        {Object.keys(user).length>0 ? <UserDetails/> : 
        <h2 className='tap'>Tap Show Details for details</h2>}
    </div>
    </div>
  )
}

export default UserContainer