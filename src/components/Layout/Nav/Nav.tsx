import React from "react";

interface NavProps{
    children: React.ReactNode,
    className?: string,
}

const Nav : React.FC<NavProps> = ({children, className = ''}) => {
    return(
        <ul className={`nav ${className}`}>
            {children}
        </ul>
    )
}

export default Nav;