import React from "react";
import Image from "next/image"
import searchIcon from "../../../public/search-icon.svg"

interface HeaderSearchBarProps{
    className?: string,
}

const HeaderSearchBar : React.FC<HeaderSearchBarProps> = ({className = ''}) => {
    return(
        <div className={`header__search-bar ${className}`}>
            <input type="text" placeholder="검색어를 입력하세요" />
            {/* 나중에 직접 제작한 아이콘으로 대체 스타일 달라질 수도 있음 */}
            <Image src={searchIcon} alt="search-icon" className="search-icon" />
        </div>
    )
}

export default HeaderSearchBar;