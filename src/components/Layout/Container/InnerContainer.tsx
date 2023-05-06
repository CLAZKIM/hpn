import React from "react";

interface InnerContainerProps{
    children: React.ReactNode,
    className?: string,
}

const InnerContainer : React.FC<InnerContainerProps> = ({children, className = ''}) => {
    return(
        <div className={`container__inner ${className}`}>
            {children}
        </div>
    )
}

export default InnerContainer;