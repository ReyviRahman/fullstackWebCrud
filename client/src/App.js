// import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import NavigationBar from "./components/NavigationBar";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
