---
date: "2021-01-29"

title: "Gatsby 블로그 만드는 방법 1)"

slug: "make_gatsby_1"

description: "게츠비란? 무엇이고 어떻게 만드는지 우선알아야 한다."

category: ["React", "Javascript", "Gatsby"]

tumnail: "https://images.velog.io/images/app235/post/4589e9e4-658b-4db4-8348-884d7d9a7523/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.59.png"
---

![](https://images.velog.io/images/app235/post/4589e9e4-658b-4db4-8348-884d7d9a7523/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.59.png)

velog를 이용하면서 내가 원하는 스타일을 사용하기가 쉽지 않아서 gitBlog를 만들기로 했다.

깃 블로그에도 여러 종류가 있었지만 내가 지금 집중적으로 배우고 있는 React로 만들 수 있는

Gatsby로 만들어 보았다.

참고사이트 : https://www.gatsbyjs.com/starters/JaeYeopHan/gatsby-starter-bee/

# Gatsby ?

React + GraphQl의 조합으로 웹 사이트를 간단으로 구축 가능

## 개발 세팅

개발 스타터 이용

```
npm intall -g gatsby-cli

gatsby new my-gatsby-project https://github.com/gatsbyjs/gatsby-starter-default
```

참고 사이트 : https://www.gatsbyjs.com/starters

개발 스터터에도 종류가 아주 많은데 가장 기본인 스타터를 활용하였다.

가장 기본적인 스타터를 활용하면서 Gatsby의 구조를 파악하기 위해서 기본 스타터를 활용하였다.

```
├── node_modules
├── src
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js		//gatsby project의 metaData
├── gatsby-node.js
├── gatsby-ssr.js
├── package.json				//node project 개발환경 관리
```

## GraphQl

- http://localhost:8000/\_\_\_graphql

  서버를 실행하면 GraphQl 쿼리 툴을 이용할 수 있어서 어렵게 쿼리를 짜지 않고 클릭 몇번으로 자동으로 쿼리를 작성할 수있고. 그 쿼리를 사용하여 데이터를 뽑아 낼수 있다.

```
  query LoadPostQuery {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
```

이렇게 생긴 쿼리를 손으로 짜지 않고 클릭 몇번으로 GraphQl 툴을 이용하면 작성이 가능하다.

<!-- ![](https://images.velog.io/images/app235/post/7f811aff-1d2a-4fd8-9f08-195fba2602cc/graphQl.gif) -->

![](https://images.velog.io/images/app235/post/e4ad2c64-92c2-4820-9045-79ba37a9a13f/Jan-30-2021%2021-23-42.gif)

## netlify

[사이트연결](https://www.netlify.com/)

netlify를 이용한다면 쉽게 배포도 가능하다

netlify에서 github를 연동 후 레파지토리를 등록을 하면 깃에 push를 하여도 자동으로 빌드가

되어 쉽게 블로그 관리가 가능하다

![](https://images.velog.io/images/app235/post/1673d372-ab02-4792-b731-874e34a35b0a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.43.08.png)

깃을 연동하면 해당 레파지토리의 브랜치와 빌드 명령어만 접어 주면 쉽게 사이트를 빌드 가능하다
