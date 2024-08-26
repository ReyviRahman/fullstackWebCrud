import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar sticky='top' bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Crud App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='fw-bold' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to="/createPost">Create A Post</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;