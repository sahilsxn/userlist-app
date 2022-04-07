import axios from 'axios'

export const asyncGetAllUsers = () => {
    return (dispatch) => {
        axios.get('https://reqres.in/api/users?page=1')
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(getAllUsers(result.data))
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const getAllUsers = (users) => {
    return {
        type: 'GET_ALL_USERS',
        payload: users
    }
}


export const asyncGetUser = (id) => {
    return (dispatch) => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(getUser(result.data))
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const getUser = (user) => {
    return {
        type: 'GET_USER',
        payload: user
    }
}