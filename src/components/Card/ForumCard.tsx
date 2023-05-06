import React from "react";
import ForumCardPostItem from "./ForumCardPostItem";
import forumData from "@/store/forumData";
import Image, {ImageProps} from "next/image";

interface ForumCardProps{
    // children: React.ReactNode,
    className?: string,
    title:string,
    id:string,
    showForum?: boolean,
    emoji?: ImageProps,
}

const ForumCard : React.FC<ForumCardProps> = ({className = '', title, id='', showForum=false, emoji}) => {
    return(
        <div className={`forum-card ${className}`}>
            <div className="forum-card__item">
                <div className="forum-card__title-group">
                    <div className="forum-card__title">
                        {emoji?<span><Image {...emoji} /></span>:null}
                        <h2>{title}</h2>
                    </div>
                    <div className="forum-card__more-text">
                        <a href="#">더보기</a>
                    </div>
                </div>
                <div className="forum-card__posts-group">
                    {forumData[id].map((data, key) => (
                        <ForumCardPostItem key={key} data={data} showForum={showForum} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ForumCard;