import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="프로젝트" />
    {PROJECT_LIST.map(list => {
      return (
        <ProjectContainer>
          <div class="title">
            <h3>{list.title}</h3>
            <span class="date">{list.date}</span>
          </div>
          <div class="content">
            <span>{list.subTitle}</span>
            <h4>작업 내용</h4>
            <ul>
              {list.myWork.map(list => {
                return <li>{list}</li>
              })}
            </ul>
            <span>{list.content}</span>
            <div>
              {list.tech.map(el => {
                return <Icon state={el}>{el}</Icon>
              })}
            </div>
          </div>
          <div class="sectionBreack"></div>
        </ProjectContainer>
      )
    })}
  </Layout>
)

const ProjectContainer = styled.div`
  display: flex;
  margin: 50px 0 80px 0;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;

    h3 {
      margin: 0;
    }

    .date {
      margin: 10px 0;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    div {
      margin: 10px 0;
    }

    span {
      margin-bottom: 20px;
    }

    h4 {
      margin: 20px 0 10px 0;
    }

    ul {
      li {
        margin: 5px 0;
      }
    }
  }
  .sectionBreack {
    display: none;
    width: 50%;
    height: 1px;
    margin: 50px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      text-align: center;
    }

    .title {
      margin-bottom: 50px;
    }

    .content {
      justify-content: center;
      align-items: center;

      h4 {
        margin-top: 50px;
      }
    }

    .sectionBreack {
      display: block;
    }
  }
`

const Icon = styled.span`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 15px;
  background-color: ${({ state }) => {
    if (state === "React") {
      return "#f89a23"
    } else if (state === "JavaScript") {
      return "#5ed8a5"
    } else if (state === "Sass") {
      return "#6566f1"
    } else if (state === "es6") {
      return "#f5fa56"
    } else if (state === "Vue") {
      return "#32fcf9"
    } else {
      return "#f8ad53"
    }
  }};
`

const PROJECT_LIST = [
  {
    title: "Brandi Admin site",
    date: "2020-12-14 ~ 2021-01-07",
    tech: ["Vue", "JavaScript", "es6", "Sass", "Vuetify"],
    subTitle:
      "이커머스 사이트의 admin 페이지로 상품 등록 및  관리, 그리고 회원들을  관리하는" +
      "사이트 이며,  vue의 기능과 실제 현업에서 서비스 중인 admin 페이지를 직접" +
      "구현을 하였습니다.",
    myWork: [
      "회원가입 및 로그인",
      "상품등록 페이지 구현",
      "상품 리스트 (검색 및 필터 기능)",
    ],
    content:
      "디자인 라이브러리인  Vuetify를 이용하였고, 재사용이 가능한 공통 컴포넌트 및 함수를 만들어" +
      "프로젝트를 진행하였습니다.",
  },
  {
    title: "AirBnb Clone site",
    date: "2020-11-30 ~ 12-11",
    tech: ["React", "JavaScript", "es6", "Sass"],
    subTitle:
      " 세계 최대의 숙박 공유 서비스인 Air bnb 사이트의 기능을 참고하여 만든 사이트로" +
      "많은 사람들에게 익숙하고 편리한 기능을 만들어 보는것을 목적으로 하였습니다.",
    myWork: [
      "Main Page 구현 및 서치 바 구현",
      "상품 리스트 및 필터 기능 구현",
      "kakao Map으로 상품 출력",
    ],
    content:
      "팀원들과 빠른 의사소통과 확신한 정보 전달 및 작업 파악을 위하여 Trello 및 Slack을 활용." +
      "프로젝트코드의 일관성을 주기 위하여 스타일 가이드 및 git 컨벤션을 만들어 활용하였다.",
  },

  {
    title: "Brandi Clone site",
    date: "2020-11-16 ~ 11~27",
    tech: ["React", "JavaScript", "es6"],
    subTitle: "여성 의류 상품들을 대상으로 한 온라인 이커머스 입니다",
    myWork: ["로그인 및 회원가입", "상품 리뷰 페이지"],
    content:
      "Git을 이용하여 팀원간의 협업 , Restful api을 이용한 font와 back간의 Data 통신을 하고" +
      "라이브러리를 최대한 활용하지 않은 바닐라 자바스크립 만드로 구현을 하였습니다.",
  },
]
export default ProjectPage
