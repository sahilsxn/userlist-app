import {createStore, combineReducers, applyMiddleware} from 'redux'
import usersReducer from '../reducer/usersReducer'
import singleUserReducer from '../reducer/singleUserReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        allUsers: usersReducer,
        user: singleUserReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore

