---
date: "2021-02-03"

title: "Gatsby 블로그 만드는 방법 3) 검색최적화"

slug: "make_gatsby_3"

category: ["React", "Javascript", "Gatsby"]

description: "게츠비 블로그를 만들고 최적화 가지 하는 방법"

tumnail: "https://images.velog.io/images/app235/post/4589e9e4-658b-4db4-8348-884d7d9a7523/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.59.png"
---

![](https://images.velog.io/images/app235/post/4589e9e4-658b-4db4-8348-884d7d9a7523/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.59.png)

이번에는 내 블로그 게시글이 구글에서 검색이 되도록 설저을 해볼 차례이다.

# 검색의 작동 원리

구글에서 검색 작동원리는 **크롤링 - 색인 생성 - 검색결과 게재** 3단계로 나누어서 이야기 하고 있다.

1. 클롤링 : google 크롤러란 자동화 프로그램이 웹의 신규, 업데이터 된 사이트를 찾고, 발견된 페이지의 URL를 저장한다.

   (구글은 이미 알고 있는 페이지는 링크를 따라 간다 ??)

2. 색인 생성 : 크롤링 과정에서 찾은 페이지를 방문하 페이지를 분석하여 페이지의 콘텐츠, 이미지, 동영상을 분석하여서

   페이지를 파악한다. 그리고 이 정보는 google의 색인에 저장된다.

3. 검색결과 게재 : 유저가 google 검색을 하면 유저의 위치, 언어, 기기 등의 조건을 바탕으로 검색 결과가 표시된다.

[참조 사이트](https://developers.google.com/search/docs/basics/how-search-works?hl=ko)

여기서 우리는 1번 항목에서 내가 만든 블로그가 구글이 알수 있도록 해야한다. 먼저 설정해야 한거는 siteMap에 대해서 알아야 한다.

## 1. SiteMap

siteMap은 본인 사이트의 페이지에 대한 정보를 제공하고 하는 파일이고, Goole 엔진이 이 파일을 읽고 사이트를 지능적으로 크롤링을 하게 한다.

예로 페이지의 마지막 업데이트 시간, 페이지 변경 빈도, 페이지 언어 등을 알려준다.

```
http:// siteUri / siteMap.xml
```

로 해보니 없는 페이지로 뜬다.

![](https://images.velog.io/images/app235/post/3de4269c-1cdb-4a2e-8be5-404b9d9b1be8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.23.52.png)

현재 내가 만든 블로그는 siteMap을 만들기 전이라 이렇게 들어가도 파일이 없다고 한다

그러면 이제 부터 설치 부터 해서 적용을 하겠다

```shell
npm install gatsby-plugin-sitemap
```

```javascript
//gatsby-config.js
module.exports = {
  siteMetadata: {
    siteUrl: "https://appwon.netlify.app/",
  },
  plugins: ["gatsby-plugin-sitemap"],
}
```

위와 같이 추가를 하고 plugins 에는 option을 따로 주지 않았다. 제외 사이트 및 옵션을 주고 싶은 사이트를 경우 [참고사이트](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/) 를 참고 한다

![](https://images.velog.io/images/app235/post/2d3d506b-9b68-4a12-9bf4-a7158097b6a1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.56.16.png)

이렇게 Gatsby-siteMap을 설정하고 빌드하면 이렇게 내 사이트의 페이지가 목차와 같이 나열되어서 나타나다.

- loc : http 프로토콜로 시작하는 URL을 제공
- Changefreq: 페이지가 변경 되는 빈도
- Priority : 상대적 우선 순의 값으로 본인의 페이지내에서 우선순위를 나타낸다

이 밖에도 robots.txt 라는 방법으로 검색 최적화 하는 방법이 있다.

## 2. robots.txt

사이트에 대한 페이지를 나열하는 siteMap과 다르게 robots.txt 는 페이지를 안내하는 안내원 같은 역할을 하면서 접속해도 되는 경로 및 접속 하면 안되는 경로 이렇게 나타내 준다.

```
http:// siteUri / robots.txt
```

사람인 , 잡플래닛, 옥션 같은 사이트 뒤에 robots.txt를 해보니 siteMap과 다르게 많은 사이트가 robots.txt를 사용하는 것을 알 수 있었다.

```shell
npm install --save gatsby-plugin-robots-txt
or
yarn add gatsby-plugin-robots-txt
```

```javascript
module.exports = {
  siteMetadata: {
    siteUrl: "https://appwon.netlify.app/",
  },
  plugins: ["gatsby-plugin-robots-txt"],
}
```

이렇게 설치를 하고 특별한 plugins에 특별한 옵션을 주지 않았다. 옵션을 주고 싶은 경우에는 [참고사이트](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/) 를 확인하면 된다.

![](https://images.velog.io/images/app235/post/6958d6ed-bac0-4be8-8aaf-b81d0bf234ab/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.51.08.png)

Gatsby-robots를 설치하고 https://appwon.netlify.app/robots.txt 접속을 하니 위와 같이 접속화면이 나왔다.

위의 사진에는 접근 불가능 루트 경로가 없지만 robots의 역할은 크롤러의 접근을 막거나, 접근을 가능한 경로를 안내해주는 역할을 한다.

그리고 siteMap 위치를 포함하고 있기 때문에 크롤러에게 사이트 정보를 알려주는 역할도 한다.

## 3. SEO.js

SEO의 단어를 풀어서 말하면 검색엔진 최적화라는 뜻이고, 유저의 의도를 이해하고 페이지가 검색 결과에 잘 노출되도록 페이지를 태그와 구조를 개선하는 뜻이다.

[구글 검색엔진 최적화](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko) 에서 페이지 마다 고유한 제목을 만들어야 한다는 내용이 있었다.

기본적으로 gatsby 스타터에서는 SEO 컴포넌트 안에 보면 react-helmet 이라는 라이브러리를 사용이었다. 이것을 사용하면 페이지의 헤더의 title을 수정하여 페이지마다 고유한 title 을 줄 수있었다.

```react
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../layout"
import { graphql } from "gatsby"
import { Content } from "../components/content"

export default function PostPage({ data }) {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Content data={data.markdownRemark} />
    </Layout>
  )
}
```

```react
import React from "react"
import { Helmet } from "react-helmet"

function SEO({ title }) {
	...
  return (
    <Helmet
      title={title}
	...
    />
  )
}
export default SEO

```

이 밖에도 [구글 검색엔진 최적화](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko) 에서는 페이지의 head 에서는 **<meta>** 태그의 활용을 하여 스니펫?? 으로 사용할 수도 있다고 한다.(확실하게 한다는 말이 아닌 할 수 있다로 표현 함)

### 스니펫 이란?

검색을 했을 경우 페이지를 클릭하기 전! 제목 밑에 보면 게시글에 대한 미리 보기 같은 내용들이 있다 이걸 보고 스니펫이라고 한다. 또 다른 예로들면 네이버에서 음식점을 검색하면 밑에 평점 나오는것도 스니펫의 한 종류이다

즉 스니펫이란, 내가 검색한 키워드에 대한 미리 보여주는 글이라고 생각하면 된다. 그리고 같은 페이지라도 다른 용도로도 사용될 수가 있다고 한다.
