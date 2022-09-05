import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <div style={{paddingBottom:'150px'}}>
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ColorSchemesExample;