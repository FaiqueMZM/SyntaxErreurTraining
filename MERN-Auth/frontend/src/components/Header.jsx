import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Nav.Link as={Link} to="/">
                        <Navbar.Brand>MERN App</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (
                                <>
                                    <NavDropdown
                                        title={userInfo.name}
                                        id="usernames"
                                    >
                                        <NavDropdown.Item
                                            as={Link}
                                            to={"/profile"}
                                        >
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to={"/login"}>
                                        <FaSignInAlt /> Sign In
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={"/register"}>
                                        <FaSignOutAlt /> Sign Up
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
