const initialState = {}

const singleUserReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case 'GET_USER': {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}

export default singleUserReducer