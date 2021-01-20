import React from 'react'
import { Link , Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'
import UserShow from './components/UserShow'


const App = (props) => {

  return (
    <div>
      <h1>React + Redux + Thunk</h1>
      <Link to='/'>Home</Link> ||
      <Link to='/users'>Users</Link>

      <Route path='/' component={Home} exact={true} />
      <Route path='/users' component={UsersList} exact={true}/>
      <Route path='/users/:id' component={UserShow} />
    </div>
  )
}

export default App
