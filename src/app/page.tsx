//componets
import Container from "@/components/Layout/Container/Container"
import InnerContainer from "@/components/Layout/Container/InnerContainer"
import MenuCard from "@/components/Card/MenuCard"
import ForumCard from "@/components/Card/ForumCard"
//icons
import Image from "next/image"
import megaphoneEmoji from "../../public/megaphone.svg"
import documentEmoji from "../../public/document.svg"
import voteEmoji from "../../public/vote.svg"
import pencilEmoji from "../../public/pencil.svg"
import paperEmoji from "../../public/paper.svg"
import crownEmoji from "../../public/crown.svg"
import bannerEmoji from '../../public/thinking_face_icon.svg'
import fireEmoji from "../../public/fire.svg"

function test() {
    
    return(
        <div className="main-content main-page">
            <Container className="menu-card-container">
                <InnerContainer>
                    <MenuCard title="공지사항" subtitle="꼭 확인해주세요!" emoji={{src: megaphoneEmoji, alt:"magaphone"}} />
                    <MenuCard title="과거시험 챌린지" subtitle="과거시험에 도전하시겠습니까?" emoji={{src: documentEmoji, alt:"document"}}/>
                    <MenuCard title="투표게시판" subtitle="당신의 이름에 투표하세요!" emoji={{src: voteEmoji, alt:"vote"}}/>
                    <MenuCard title="작명소" subtitle="작명을 도와주세요~" emoji={{src: pencilEmoji, alt:"pencil"}} />
                    <MenuCard title="자유게시판" subtitle="자유롭게 글을 남겨요~" emoji={{src: paperEmoji, alt:"paper"}}/>
                    <MenuCard title="가문의 영광" subtitle="내 성씨가 최고야!" emoji={{src: crownEmoji, alt:"crown"}} />
                </InnerContainer>
            </Container>
            <Container className="forum-card-container">
                <InnerContainer>
                    <ForumCard title="공지사항" id="FORUM_LIST_1"/>
                    <ForumCard title=" 지금 핫한 인기글!" emoji={{src:fireEmoji, alt:"fire"}} id="FORUM_LIST_2" showForum/>
                    <ForumCard title="투표게시판" id="FORUM_LIST_3"/>
                    <ForumCard title="작명소" id="FORUM_LIST_4"/>
                    <ForumCard title="자유게시판" id="FORUM_LIST_5"/>
                </InnerContainer>
            </Container>
            <Container className="introduce-banner-container">
                <InnerContainer>
                    <a href="#" className="introduce-banner-link">
                    <div className="introduce-banner">
                        <div className="introduce-banner__group">
                            <div className="introduce-banner__title-group">
                                <h2 className="introduce-banner__subtitle">누가 제일 별난 이름을 가졌소?</h2>
                                <h1 className="introduce-banner__title">제1회 너의 이름이 보여</h1>
                            </div>
                            <span className="introduce-banner__emoji">
                                <Image src={bannerEmoji} alt="Logo" />
                            </span>
                        </div>
                    </div>
                    </a>
                </InnerContainer>
            </Container>
        </div>
    )
}

export default test