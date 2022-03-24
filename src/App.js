import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useMemo } from "react";

import { UserContext } from "./components/auth/UserContext";
import EventList from "./components/events/EventList";
import EventDetails from "./components/events/EventDetails";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Login from "./components/auth/Login";
import "./styling/styles.css";

function App() {
  const [user, setUser] = useState('default notandi');
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Header />
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
