import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Learn Python</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>

            <NavDropdown title="Python" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Variables ...</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                if / else ...
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">Loops ...</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Functions ...</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                OOP
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;