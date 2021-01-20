import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import usersReducer from '../reducers/usersReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count : countReducer,
        users : usersReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore