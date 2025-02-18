import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header>
                <Navbar
                    bg="dark"
                    variant="dark"
                    expand="lg"
                    collapseOnSelect
                ></Navbar>
                <Container>
                    <Navbar.Brand href="/">MERN Auth</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/login">
                                <FaSignInAlt />
                                Sign In
                            </Nav.Link>
                            <Nav.Link href="/register">
                                <FaSignOutAlt />
                                Sign up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </header>
        </>
    );
};

export default Header;
