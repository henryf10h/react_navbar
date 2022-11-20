import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky='top' expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="logo" width="40px" height="40px"/>{' '}
          logo
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Products">
            <NavDropdown.Item href="products/weed">weed</NavDropdown.Item>
            <NavDropdown.Item href="products/guitar">guitar</NavDropdown.Item>
            <NavDropdown.Item href="products/chess">chess</NavDropdown.Item>
          </NavDropdown>
          <NavLink href='#blog'>blog</NavLink>
          <NavLink href='#about-us'>about</NavLink>
          <NavLink href='contact-us'>contact</NavLink>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content'>
        this is a content
      </div>
    </div>
  );
}

export default App;
