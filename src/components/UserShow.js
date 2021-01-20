import React from 'react'
import { useSelector } from 'react-redux'

const UserShow = (props) => {
    const user = useSelector(state => state.users.find(user => user.id == props.match.params.id))

    return (
        <div>
            <h1>User Show - { user?.id} </h1>
            <p>name - {user?.name} </p>
            <p>email - {user?.email} </p>
        </div>
    )
}

export default UserShow
