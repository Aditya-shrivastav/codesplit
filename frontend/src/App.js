import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'

import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import EditorScreen from './screens/EditorScreen'

const socket = io.connect('http://localhost:5000')

const App = () => {
  return (
    <Router>
      <main>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/editor/:room" component={EditorScreen} />
      </main>
    </Router>
  )
}

export default App
