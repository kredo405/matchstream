import { createStore } from 'redux';
const initialState = {
    channel: {
        name: '',
        url: ''
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MATCH':
            return {
                ...state,
                channel: action.payload
            };  
        default:
            return state;
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());