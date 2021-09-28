import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <h1>Hello</h1>
      </main>
      <Footer />
    </Router>
  )
}

export default App
