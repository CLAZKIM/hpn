import React from "react";

interface NavLinkProps{
    children: React.ReactNode,
    className?: string,
    href: string,
}

const NavLink : React.FC<NavLinkProps> = ({children, className = '', href}) => {
    return(
        <li className={`nav__link ${className}`}>
            <a href={href}>{children}</a>
        </li>
    )
}

export default NavLink;