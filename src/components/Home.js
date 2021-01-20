import React from 'react'
import { useSelector, useDispatch } from 'react-redux'//read state values into components
import { increment } from '../actions/countActions'
import StatsContainer from './Stats'


const Home = (props) => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>count - {count}</h1>
            <button onClick={() => {
                dispatch(increment())
            }}> +1 </button>
            
            <hr />
            <StatsContainer />
        </div>
    )
}

export default Home
