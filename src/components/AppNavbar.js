import {Container, Nav, Navbar, NavbarBrand, NavDropdown, NavItem} from "react-bootstrap";
// import {NavLink} from "react-router-dom";
import {ROUTE_HOME,ROUTE_ABOUT,ROUTE_CATALOG,ROUTE_ADMIN,ROUTE_USER,ROUTE_LOGIN} from "../AppRouter/routes";
import { useNavigate } from "react-router";
import {shallowEqual, useSelector} from "react-redux";
import {getUser} from "../AppStore/selectors";

export const AppNavbar=()=>{
    const navigate=useNavigate();
    const currentUser=useSelector(getUser,shallowEqual);

    return (
        <Navbar bg="dark" variant={"dark"} expand="sm">
            <Container>
                <Nav.Link className={"p-0"} onClick={()=>navigate(ROUTE_HOME)}>
                <Navbar.Brand>Brand</Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>navigate(ROUTE_CATALOG)}>Catalog</Nav.Link>
                        <Nav.Link onClick={()=>navigate(ROUTE_ABOUT)}>About</Nav.Link>
                        {
                            !!currentUser && !!currentUser.role ?
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate(ROUTE_USER)}>Personal Page</NavDropdown.Item>
                                {
                                    currentUser.role==="ADMIN"&&
                                    <>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item onClick={() => navigate(ROUTE_ADMIN)}>Admin Page</NavDropdown.Item>
                                    </>
                                }
                            </NavDropdown>
                                :
                                <Nav.Link onClick={()=>navigate(ROUTE_LOGIN)}>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}