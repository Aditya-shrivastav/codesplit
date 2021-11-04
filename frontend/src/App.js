import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import io from 'socket.io-client'

import NavBar from './components/NavBar/'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen/'
import LoginScreen from './screens/LoginScreen/'
import RegisterScreen from './screens/RegisterScreen/'

// import AboutScreen from './screens/AboutScreen'
// import EditorScreen from './screens/EditorScreen'

// const socket = io.connect('http://localhost:5000')

const App = () => {
  const setTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <ThemeProvider theme={setTheme}>
      <Router>
        <NavBar />
        <main>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route exact path='/' component={HomeScreen} />
          {/* <Route path='/about' component={AboutScreen} />
          <Route path='/editor/:room' component={EditorScreen} /> */}
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
