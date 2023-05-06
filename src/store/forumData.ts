interface ForumData {
    [id: string]: ForumPost[];
  }

interface ForumPost {
    FORUM_ID: string;
    FORUM_NAME: string;
    POST_ID: string;
    POST_UPLOAD_DATE: string;
    POST_TITLE: string;
    POST_COMMENT_CNT: string;
  }

//   interface ForumNoticePost {
//     POST_ID: string;
//     POST_TITLE: string;
//     POST_UPLOAD_DATE: string;
//   }

const forumData: ForumData = {
    FORUM_LIST_1:[
        {
            FORUM_ID:"1",
            FORUM_NAME: "공지사항",
            POST_ID:"1",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "제1회 너의 이름이 보여 온라인 대회 개최!",
            POST_COMMENT_CNT:"3",
        },
        {
            FORUM_ID:"1",
            FORUM_NAME: "공지사항",
            POST_ID:"2",
            POST_UPLOAD_DATE:"2023-05-14",
            POST_TITLE: "서버 오류로 이용이 불편하셨던 이용자분께 사과의 말씀을 올립니다.",
            POST_COMMENT_CNT:"3",
        },
        {
            FORUM_ID:"1",
            FORUM_NAME: "공지사항",
            POST_ID:"3",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "네임듀스101, 당신의 이름에 투표하세요!",
            POST_COMMENT_CNT:"1",
        },
        {
            FORUM_ID:"1",
            FORUM_NAME: "공지사항",
            POST_ID:"4",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "이번주 가문의 영광 성씨는 무엇일까요? 두구두구!",
            POST_COMMENT_CNT:"237",
        },
        {
            FORUM_ID:"1",
            FORUM_NAME: "공지사항",
            POST_ID:"5",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "깨끗한 어사이 문화 만들어요.",
            POST_COMMENT_CNT:"27",
        }
    ],
    FORUM_LIST_2:[
        {
            FORUM_ID:"2",
            FORUM_NAME: "자유게시판",
            POST_ID:"6",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "내가 이름으로 점치는 법 알려줌. 참고로 본인 할머니 무당임",
            POST_COMMENT_CNT:"7492",
        },
        {
            FORUM_ID:"2",
            FORUM_NAME: "자유게시판",
            POST_ID:"7",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "내 이름 양동이였던 썰 푼다..ㅋㅋ",
            POST_COMMENT_CNT:"6360",
        },
        {
            FORUM_ID:"2",
            FORUM_NAME: "자유게시판",
            POST_ID:"8",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "ㄹㅇ 어떻게 사람 이름이 bob kim임?ㅋㅋㄹㅃㅃ~",
            POST_COMMENT_CNT:"6854",
        },
        {
            FORUM_ID:"2",
            FORUM_NAME: "자유게시판",
            POST_ID:"9",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "근데 스즈메 있잖아 우리나라로 따지면 박참새 이런거임? ㅈㄴ구려;",
            POST_COMMENT_CNT:"4938",
        },
        {
            FORUM_ID:"2",
            FORUM_NAME: "자유게시판",
            POST_ID:"10",
            POST_UPLOAD_DATE:"2023-05-01",
            POST_TITLE: "이름때매 사실 놀림당했었음 ㅠ",
            POST_COMMENT_CNT:"2766",
        },
    ],
    FORUM_LIST_3:[
        {
            FORUM_ID:"3",
            FORUM_NAME: "투표게시판",
            POST_ID:"11",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "우리 아들 예비이름후보! 골라주세요~~ㅋ",
            POST_COMMENT_CNT:"0",
        },
        {
            FORUM_ID:"3",
            FORUM_NAME: "투표게시판",
            POST_ID:"12",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "너네가 생각하기에 솔직히 ‘민지’라는 이름에 어떤 성이 어울림?",
            POST_COMMENT_CNT:"0",
        },
        {
            FORUM_ID:"3",
            FORUM_NAME: "투표게시판",
            POST_ID:"13",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "아내 : 김혜성 VS 나 : 김예현 골라주셈",
            POST_COMMENT_CNT:"1",
        },
        {
            FORUM_ID:"3",
            FORUM_NAME: "투표게시판",
            POST_ID:"14",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "내 이름 어떰? 구림? 안구림? 솔직하게 투표좀 ㅃㄹ 내기중",
            POST_COMMENT_CNT:"26",
        },
        {
            FORUM_ID:"3",
            FORUM_NAME: "투표게시판",
            POST_ID:"15",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "나 이번에 호주로 워홀가는데 영어이름 택좀",
            POST_COMMENT_CNT:"1",
        },
    ],
    FORUM_LIST_4:[
        {
            FORUM_ID:"4",
            FORUM_NAME: "작명소",
            POST_ID:"16",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "우리 딸래미 이름 지어줄사람? 성은 우씨에요 장난사절",
            POST_COMMENT_CNT:"8",
        },
        {
            FORUM_ID:"4",
            FORUM_NAME: "작명소",
            POST_ID:"17",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "나 일본이름 짓고싶은데 약간 새침하면서도 도도해보이는 여자애 이름 없을까?",
            POST_COMMENT_CNT:"3",
        },
        {
            FORUM_ID:"4",
            FORUM_NAME: "작명소",
            POST_ID:"18",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "아니 들어봐 할머니가 울 딸 ‘옥’들어가는 이름으로 지으라는데 막막하다",
            POST_COMMENT_CNT:"28",
        },
        {
            FORUM_ID:"4",
            FORUM_NAME: "작명소",
            POST_ID:"19",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "젤 잘짓는 사람 깊티쏨ㅋㅋ 무려 교촌허니",
            POST_COMMENT_CNT:"88",
        },
        {
            FORUM_ID:"4",
            FORUM_NAME: "작명소",
            POST_ID:"20",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "제 성씨가 독고인데 아들 이름 뭐로 지을까요 독고다이X 신고함ㅡㅡ",
            POST_COMMENT_CNT:"111",
        },
    ],
    FORUM_LIST_5:[
        {
            FORUM_ID:"5",
            FORUM_NAME: "자유게시판",
            POST_ID:"21",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "이거 우리학교 괴담임",
            POST_COMMENT_CNT:"2",
        },
        {
            FORUM_ID:"5",
            FORUM_NAME: "자유게시판",
            POST_ID:"21",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "누구 내 얘기좀 들어볼래?",
            POST_COMMENT_CNT:"3",
        },
        {
            FORUM_ID:"5",
            FORUM_NAME: "자유게시판",
            POST_ID:"21",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "ㅁㅊ 내친구 사주보고 오더니 개명해야한다고 리스트 뽑아왔는데 개에바;",
            POST_COMMENT_CNT:"12",
        },
        {
            FORUM_ID:"5",
            FORUM_NAME: "자유게시판",
            POST_ID:"21",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "여기 메이플 하는 사람 있냐",
            POST_COMMENT_CNT:"0",
        },
        {
            FORUM_ID:"5",
            FORUM_NAME: "자유게시판",
            POST_ID:"21",
            POST_UPLOAD_DATE:"2023-05-15",
            POST_TITLE: "형들 이게 맞냐?",
            POST_COMMENT_CNT:"1",
        },
    ]
}


export default forumData;