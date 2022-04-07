import {React} from 'react'
import UserContainer from './Components/UserContainer'

const App = (props) =>{

  return (
    <div style={{margin:'0', padding:'0', boxSizing:'border-box'}}>
      <h1 style={{marginLeft:'16px'}}>Users List Assignment</h1>
      <UserContainer/>
    </div>
  )
}

export default App