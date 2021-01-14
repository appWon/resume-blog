import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaGithub, FaBloggerB, FaSass } from "react-icons/fa"
import { SiJavascript, SiReact, SiVueDotJs } from "react-icons/si"
import { HiMail } from "react-icons/hi"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="장재원" />
    <Containner>
      <AboutMe>
        <Img src="icons/my_img.png" alt="메인사진" />
        <div>
          <h1>Front end, 장재원</h1>
          <span>
            눈으로 즐길 수 있는 시각 디자인과 논리적인 생각을 하며 개발을
            추구하는 개발자 입니다.
          </span>
        </div>
      </AboutMe>
      <IconContainer>
        <FaGithub size="50" color="black" />
        <FaBloggerB size="50" color="black" />
        <HiMail size="50" color="black" />
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
              <h3>{list.title}</h3>
              <span>{list.date}</span>
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
const Img = styled.img`
  width: 200px;
  height: 400px;
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
    width: 400px;
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
    date: "2020년",
    dataList: [
      "React 및 라이브러리를 활용하여 site clone",
      "개발자 커뮤니티의 생성으로 활발한 정보 전달 가능",
      "Brandi 회사 인턴",
    ],
  },
  {
    title: "(주)이노텍",
    date: "2019년 ~ 2020년",
    dataList: ["측정장비를 이용한 개발제품 성능측정 후 데이터 관리"],
  },
  {
    title: "(주)CIEC",
    date: "2016년 ~ 2017년",
    dataList: [
      "공공기관 개발 프로그램 납품",
      "egov 활용하여 공공기관 내부 전산 시스템 개발",
    ],
  },
]
export default IndexPage
