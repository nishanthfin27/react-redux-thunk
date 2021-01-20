//importing React
import React, { useEffect } from 'react'
//importing packages
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//importing components
//importing files
import { startGetUsers } from '../actions/usersAction'

const UsersList = (props) => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetUsers())
    }, [])

    return (
        <div>
            <h1>Listing Users - {users.length} </h1>
            <ul>
                { users.map((user) => {
                    return <li key={user.id}> 
                                <Link to={`/users/${user.id}`}> {user.name}  </Link>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default UsersList
