import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavbarItem({matchesFilterType, resetData, combinedPoints}){
    return(
      //inspired from https://react-bootstrap.github.io/components/navbar/
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>2022 F1 Drivers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey={0} onClick={() => {matchesFilterType(0)}}>Home</Nav.Link>
            <NavDropdown title="Sort" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {matchesFilterType(4)}}>Points (Greatest to Least)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Teams" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Red Bull")}}>Red Bull</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Ferrari")}}>Ferrari</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Mercedes")}}>Mercedes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "McLaren")}}>McLaren</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Alpine F1 Team")}}>Alpine F1 Team</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Alfa Romeo")}}>Alfa Romeo</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Aston Martin")}}>Aston Martin</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Haas F1 Team")}}>Haas F1 Team</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "AlphaTauri")}}>AlphaTauri</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(1, "Williams")}}>Williams</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Region" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => {matchesFilterType(2, "Europe")}}>Europe</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(2, "Asia")}}>Asia</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(2, "North America")}}>North America</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(2, "Australia")}}>Australia</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {matchesFilterType(2, "Africa")}}>Africa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => {matchesFilterType(3)}}>Favorites</Nav.Link>
            <Nav.Link onClick={()=>{resetData()}}>Reset Data</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Brand>Favorite Drivers Combined Points: {combinedPoints}</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}