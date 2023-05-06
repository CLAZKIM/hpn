import React from "react";
import seperateNewPost from "@/utils/seperateNewPost";

interface ForumCardPostItemProps{
    // children: React.ReactNode,
    className?: string,
    data: {
        FORUM_ID:string,
        FORUM_NAME: string,
        POST_ID:string,
        POST_UPLOAD_DATE:string,
        POST_TITLE:string,
        POST_COMMENT_CNT:string
    },
    showForum?: boolean,
}

const ForumCardPostItem : React.FC<ForumCardPostItemProps> = ({className = '', data, showForum=false}) => {

    return(
        <div className={`forum-card__post-item ${className}`}>
            {showForum?<p className="forum-card__forum-name">{data.FORUM_NAME}</p>:null}
            <a className="forum-card__post-title">{data.POST_TITLE}</a>
            <p className={`forum-card__comment-count ${seperateNewPost(data.POST_UPLOAD_DATE)?"forum-card__comment-count--new":''}`}>{`(${Number(data.POST_COMMENT_CNT).toLocaleString()})`}</p>
        </div>
    )
}

export default ForumCardPostItem;