import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//navigation bar
function Navigation() {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container expand="lg">
          <Navbar.Brand href="/">MoneyTracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Start</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
