import { Navbar,Container } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Navagation() {
    return (
        <>
      <header>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container className="mb-3 mt-3">
  <Navbar.Brand as={Link} to='/'>Country Search</Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    </>
    )
}

export default Navagation
