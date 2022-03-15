import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useMemo } from 'react';

import { UserContext } from './components/UserContext'
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Header from './components/Header'
import Footer from './components/Footer';
import Login from './components/Login';
import './styles.css'

function App() {

  const [user, setUser] = useState(null)
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <Router>
      <Header />
      <UserContext.Provider value={providerValue}>
        <Routes>
          
            <Route path='/' element = {<EventList/>} />
            <Route path='/event/:id' element={<EventDetails/>} />
            <Route path='/login' element={<Login/>} />
          
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
   
  )
}

export default App;
