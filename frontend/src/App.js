import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/login' component={LoginScreen} />
        <Route exact path='/' component={HomeScreen} />
        <Route path='/about' component={AboutScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
