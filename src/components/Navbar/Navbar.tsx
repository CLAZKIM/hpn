import React from "react";
import Container from "../Layout/Container/Container";
import InnerContainer from "../Layout/Container/InnerContainer";
import Nav from "../Layout/Nav/Nav";
import NavLink from "../Layout/Nav/NavLink";
import Button from "../Button/Button";

interface NavbarProps{
}

const Navbar : React.FC<NavbarProps> = ({}) => {
    return(
        <nav className="navbar">
            <Container>
                <InnerContainer className="navbar__inner-container">
                    <Nav className="navbar__menu">
                        <NavLink href="#">홈</NavLink>
                        <NavLink href="#">공지사항</NavLink>
                        <NavLink href="#" className="nav__link--active">과거시험 챌린지</NavLink>
                        <NavLink href="#">투표게시판</NavLink>
                        <NavLink href="#">작명소</NavLink>
                        <NavLink href="#">자유게시판</NavLink>
                        <NavLink href="#">가문의 영광</NavLink>
                    </Nav>
                    <div className="navbar__util-group">
                        <Button>글쓰기</Button>
                    </div>
                </InnerContainer>
            </Container>
        </nav>
    )
}

export default Navbar;

// "use client";

// import React from "react";
// import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
// import { SSRProvider } from "react-bootstrap";

// interface BasicNavbarProps{
//     title : string;
// }

// const BasicNavbar : React.FC<BasicNavbarProps> = ({title}) => {
//     return(
//             <Navbar bg="light" expand="lg">
//                 <Container fluid>
//                     <Navbar.Brand href="#home">{title}</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">
//                             Separated link
//                         </NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//     )
// }

// export default BasicNavbar;