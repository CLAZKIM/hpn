import React from "react";

interface ButtonProps{
    children: React.ReactNode,
    className?: string,
    color?: string,
}

const Button : React.FC<ButtonProps> = ({children, className = '', color = 'primary'}) => {
    return(
        <button className={`button ${className}`} data-color={color}>
            {children}
        </button>
    )
}

export default Button;