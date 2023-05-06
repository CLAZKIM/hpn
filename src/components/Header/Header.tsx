import React from "react";
import Container from "../Layout/Container/Container";
import InnerContainer from "../Layout/Container/InnerContainer";
import HeaderSearchBar from "../Header/HeaderSearchBar"
import Nav from "../Layout/Nav/Nav";
import NavLink from "../Layout/Nav/NavLink";

interface HeaderProps{
}

const Header : React.FC<HeaderProps> = ({}) => {
    return(
        <header className="doc-header">
            <Container>
                <div className="header">
                    <InnerContainer className="header__inner-container">
                        <div className="header__logo-container">
                            <a className="header__logo-icon">
                                {"aa"}
                            </a>
                        </div>
                        <div className="header__util-group">
                            <HeaderSearchBar />
                            <Nav>
                                <NavLink href="#">회원가입</NavLink>
                                <NavLink href="#" className="nav__link--active">로그인</NavLink>
                            </Nav>
                        </div>
                    </InnerContainer>
                </div>
            </Container>
        </header>
    )
}

export default Header;