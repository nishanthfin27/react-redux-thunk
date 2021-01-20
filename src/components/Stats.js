import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../actions/countActions'

const StatsContainer = (props) => {
    const count = useSelector(state => state.count) 
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Stats count - {count}</h2>
            <button onClick={() => {
                dispatch(decrement())
            }}> -1 </button>
        </div>
    )
}

export default StatsContainer
