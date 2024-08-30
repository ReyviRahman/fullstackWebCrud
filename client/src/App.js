// import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

function App() {
  const [authState, setAuthState] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth', { 
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      } 
    }).then((response) => {
      if (response.data.error){
        setAuthState(false);
      } else {
        setAuthState(true);
      } 
    })
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Navbar sticky='top' bg="primary" expand="lg">
            <Container>
              <Navbar.Brand className='text-white' as={Link} to="/">Crud App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className='fw-bold item-navbar' as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='fw-bold item-navbar' as={Link} to="/createPost">Create A Post</Nav.Link>
                  {!authState && (
                    <>
                      <Nav.Link className='fw-bold item-navbar' as={Link} to="/login">Login</Nav.Link>
                      <Nav.Link className='fw-bold item-navbar' as={Link} to="/register">Register</Nav.Link>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
