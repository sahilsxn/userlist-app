const initialState = []

const usersReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case 'GET_ALL_USERS': {
            return [...state, ...action.payload]
        }
        default: {
            return state
        }
    }
}

export default usersReducer