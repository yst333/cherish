import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../css/common.css";

// react-bootstrap/Navbar
// https://react-bootstrap.netlify.app/docs/components/navbar/

function ReactBootstrapNavbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='logo'><img src='/images/logo.jpg' alt='로고이미지' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/About">ABOUT</Nav.Link>
            <Nav.Link href="/Goods">GOODS</Nav.Link>
            <Nav.Link href="/QnA">QnA</Nav.Link>
            <Nav.Link href="/QnA">COMMUNITY</Nav.Link>
            <Nav.Link href="/QnA">LOGIN</Nav.Link>
            <Nav.Link href="/QnA">JOIN</Nav.Link>
            <NavDropdown title="MY PAGES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/communityboard">BUY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/communityboard">POINT</NavDropdown.Item>                
              <NavDropdown.Item href="/notice">EDIT</NavDropdown.Item>
              <NavDropdown.Item href="/freeboard">LEAVE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}
          {/* d-flex는 flex 적용 의미함 */}
          <Form className='d-flex'>
           {/* .me-2는 margin-end 0.5rem Size 적용 의미함 */}
           {/* aria-label은 값에 간결한 설명을 제공해서, 문자열을 통해 현재 엘리먼트의 기능/목적을 설명함 */}
          <Form.Control type="search" className='me-2' placeholder="커뮤니티 검색" aria-label='Search' />
          {/* https://react-bootstrap.netlify.app/docs/components/buttons */}
          <Button variant="outline-success" className='searchBtn'>검색</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactBootstrapNavbars;