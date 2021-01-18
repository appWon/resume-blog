import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaGithub, FaBloggerB, FaSass } from "react-icons/fa"
import { SiJavascript, SiReact, SiVueDotJs } from "react-icons/si"
import { HiMail } from "react-icons/hi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyImg from "../images/myImg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="장재원" />
    <Containner>
      <AboutMe>
        <Img>
          <img src={MyImg}></img>
        </Img>
        <div>
          <h1>Front end, 장재원</h1>
          <span>
            눈으로 즐길 수 있는 시각 디자인과 논리적인 생각을 하며 <br /> 개발을
            추구하는 개발자 입니다.
          </span>
        </div>
      </AboutMe>
      <IconContainer>
        <a href="http://github.com/appWon">
          <FaGithub size="50" color="black" />
        </a>
        <a href="https://velog.io/@app235">
          <FaBloggerB size="50" color="black" />
        </a>
        <a href="mailto:korkrip11@gmail.com">
          <HiMail size="50" color="black" />
        </a>
      </IconContainer>
      <div class="sectionBreack"></div>
      <Description>
        <h1>기술</h1>
        <SiJavascript size="100" color="#f1da25" />
        <SiReact size="100" color="#7bd5f1" />
        <SiVueDotJs size="100" color="#40b37f" />
        <FaSass size="100" color="#c66495" />
      </Description>
      <div class="sectionBreack"></div>
      <Career>
        <h1>경력</h1>
        {CAREER_LIST.map(list => {
          return (
            <div class="careerContainer">
              <div>
                <h3>{list.title}</h3>
                <span>{list.date}</span>
              </div>
              <h5>{list.subtitle}</h5>
              <ul>
                {list.dataList.map(content => {
                  return <li>{content}</li>
                })}
              </ul>
            </div>
          )
        })}
      </Career>
    </Containner>

    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

const Containner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;

  .sectionBreack {
    width: 50%;
    height: 1px;
    margin: 50px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`
const Img = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 450px;
    height: 300px;
    max-width: initial;
    object-fit: cover;
    margin-top: 0%;
    margin-left: -12%;
  }
`

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin: 30px 0;
    text-align: center;
  }
`

const IconContainer = styled.div`
  display: flex;
  margin: 10px 0;

  svg {
    margin: 10px;
  }
`

const Description = styled.div`
  margin: 20px 0;

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  * {
    margin: 10px 20px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    h1 {
      text-align: center;
      margin-bottom: 50px;
    }
    * {
      margin: 50px;
    }

    svg {
      width: 150px;
      height: 150px;
    }
  }
`

const Career = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }

  .careerContainer {
    width: 450px;
    margin: 20px 0;
    h3 {
      display: inline-block;
    }

    span {
      margin-left: 20px;
      font-size: 15px;
    }
  }
`

const CAREER_LIST = [
  {
    title: "WeCode",
    subtitle:
      "-코딩 부트캠프로 3개월이라는 짧은 기간 동안 3번의 팀 프로젝트를 진행하였습니다.",
    date: "2020년",
    dataList: [
      "Trendi : 브랜디 사이트의 기능을 구현하는 프로젝트",
      "AirBit & Byte : Air Bnb 사이트의 기능을 구현",
      "브랜디 기업인턴 : 브랜디 기업에 인턴으로 한달 간 Vue js를 이용한  Admin  사이트의 상품등록 ,수정 , 데이터 필터 기능을 구현하였습니다.",
    ],
  },
  {
    title: "(주)이노텍",
    subtitle:
      "- 측정장비를 이용한 개발제품 성능 측정 후 데이터 관리를 하였습니다.",
    date: "2019년 ~ 2020년",
    dataList: [
      "3차원 측정장비의 프로그램 동작 시퀸스 알고리즘 작성을 하였고 이 알고리즘을 활용하여 개발 제품의 스펙  아웃 여부를 파악과 개선 작업을 하였습니다.",
    ],
  },
  {
    title: "(주)CIEC",
    subtitle: "- 공공기관 개발 프로그램 납품을 하였습니다.",
    date: "2016년 ~ 2017년",
    dataList: [
      "전자정부 프레임워크를 이용하여 공공기관 내부 전산 프로그램 개발에 참여 하였고, 문화재 데이터를 CRUD 기능을 하였습니다.",
    ],
  },
]
export default IndexPage
