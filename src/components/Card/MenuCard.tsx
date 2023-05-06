import React from "react";
import Image, { ImageProps } from "next/image";

interface MenuCardProps{
    // children: React.ReactNode,
    className?: string,
    title: string,
    subtitle: string,
    emoji: ImageProps,
}

const MenuCard : React.FC<MenuCardProps> = ({className = '', title, subtitle, emoji}) => {
    return(
        <div className={`menu-card ${className}`}>
            <a href="#">
            <div className="menu-card__item">
                <div className="menu-card__title-group">
                    <h2 className="menu-card__title">{title}</h2>
                    <p className="menu-card__subtitle">{subtitle}</p>
                </div>
                <div className="menu-card__emoji">
                    <Image {...emoji} />
                </div>
            </div>
            </a>
        </div>
    )
}

export default MenuCard;