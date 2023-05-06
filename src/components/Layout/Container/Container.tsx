import React from "react";

interface ContainerProps{
    children: React.ReactNode,
    fluid?: boolean,
    className?: string,
}

const Container : React.FC<ContainerProps> = ({children, fluid, className = ''}) => {
    return(
        <div className={`container ${fluid?'':"container--default"} ${className}`}>
            {children}
        </div>
    )
}

export default Container;