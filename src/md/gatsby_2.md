---
date: "2021-01-30"

title: "Gatsby 블로그 만들기(2)"

slug: "Gatsby2"

description: ["React", "Javascript", "Gatsby"]

tumnail: "https://images.velog.io/images/app235/post/4589e9e4-658b-4db4-8348-884d7d9a7523/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.59.png"
---

![](https://images.velog.io/images/app235/post/4589e9e4-658b-4db4-8348-884d7d9a7523/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.25.59.png)

# Gatsby 설치

```
gatsby new my-gatsby-project https://github.com/gatsbyjs/gatsby-starter-default
or
git clone my-gatsby-project https://github.com/gatsbyjs/gatsby-starter-default
and
npm install
```

## Package.json

```
{
  "name": "jaewon-resum-blog",
  "private": true,
  "description": "gatsby project",
  "version": "0.1.0",
  "author": "Kyle Mathews <mathews.kyle@gmail.com>",
  "dependencies": {
	  "gatsby": "^2.26.1",
		....
  },
  "devDependencies": {
		...
  },
  "keywords": [
    "gatsby"
  ],
  "license": "0BSD",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/gatsbyjs/gatsby-starter-default"
  },
  "bugs": {
    "url": "https://github.com/gatsbyjs/gatsby/issues"
  }
}

```

**-name** 과 **version** 는 필수로 입력을 해야 한다.

**-description** 는 프로젝트에 대한 기술을 서술하는 곳이다.

**-author** 는 1명의 사람만 지정하고, 이름, e-mail, url를 적는다

**-dependencies** 는 프로젝트를 진행하면서 외부 라이브러리에 의존하게 되다. 여기서 외부 라이브러리에 대한 정보를 **name** 과 **version** 으로 관리를 한다.

**-devDependencies** 는 개발 모드일 때만 의존하는 라이브러리를 관리한다.

**scripts**는 ㅇ

**repository**는 프로젝트를 저장한 곳에 대한 주소를 표시를 하여 소스를 참고하는 사람에게 도움이 됩니다.

**bugs**는 프로젝트 버그가 발생하였을 경우 제보하는 uri를 표시합니다.

이렇게 package.json에 대한 정보를 알았으니 이번에는 프로젝트를 실행해보겠습니다.

```
npm start
```

Package.json의 script부분을 보면 start key를 실행 해보았습니다.

![](https://images.velog.io/images/app235/post/2412bb38-d918-4d26-ae23-726f164044d8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-31%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.57.06.png)

프로젝트가 실행되면서 GraphQl Tool 접속을 할 수 있다.

<img src="https://images.velog.io/images/app235/post/c0d46c03-7fe7-4085-8294-98d84638e08e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-31%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.59.41.png" style="zoom:30%;" />

## Proejct Code

```javascript
import React from "react"
import { graphql } from "gatsby"
import { Category } from "../components/category"
import { PostList } from "../components/postList"
import { useCategory } from "../hooks/useCategory"
import { Layout } from "../layout"
import styled from "styled-components"

export default function BlogPage({ data: { categories, postList } }) {
  const [category, selectCategory] = useCategory()

  return (
    <Layout>
      <Category
        selectCategory={selectCategory}
        category={category}
        categories={categories}
      />
      <PostList postList={postList} category={category} />
    </Layout>
  )
}

export const data = graphql`
  query LoadPostQuery {
    categories: allMarkdownRemark {
      group(field: frontmatter___description) {
        fieldValue
      }
    }
    postList: allMarkdownRemark(filter: { frontmatter: { description: {} } }) {
      edges {
        node {
          frontmatter {
            description
            title
            date
            slug
            tumnail
          }
          excerpt(pruneLength: 100, truncate: false)
        }
      }
    }
  }
`
const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    width: 320px;
    margin: 10px;
  }
`
```

GraphQl Tool을 사용하여 짠 쿼리를 하단에 추가 하여, 쿼리의 결과 값을 화면을 뿌려 주도록 하였다.

```javascript
import { useEffect, useState } from "react"
import qs from "query-string"

export function useCategory() {
  const [category, setCategory] = useState("All")

  const selectCategory = ({ target }) => {
    setCategory(target.value)
    window.history.pushState("", "", `?category=${target.value}`)
  }

  useEffect(() => {
    const query = qs.parse(window.location.search)
    if (query["category"]) setCategory(query.category)
  }, [])

  return [category, selectCategory]
}
```

커스텀 훅을 만들어 setState가 되었을 경우 쿼리스트링이 되도록 하여 새로고침이 있어도 필터가 유지되도록 하였다.

```javascript
import React, { useMemo } from "react"
import { Radio } from "antd"

export const Category = ({ categories, category, selectCategory }) => {
  const categoryList = useMemo(() => (
    <>
      <Radio.Group
        onChange={selectCategory}
        value={category}
        defaultValue="All"
      >
        <Radio.Button value="All">All</Radio.Button>
        {categories.group.map(({ fieldValue }) => (
          <Radio.Button value={fieldValue}>{fieldValue}</Radio.Button>
        ))}
      </Radio.Group>
    </>
  ))
  return { categoryList }
}
```

간단한 카테고리 리스트를 만들었지만 마음에 들지않아 추후 수정 예정

```javascript
import React, { useMemo } from "react"
import { Link } from "gatsby"
import { Card } from "./card"
import styled from "styled-components"

export const PostList = ({ postList, category }) => {
  const postFilter = useMemo(() =>
    category !== "All"
      ? postList.edges.filter(({ node }) =>
          node.frontmatter.description.some(item => item === category)
        )
      : postList.edges
  )

  return (
    <Posts>
      {postFilter.map(({ node }, index) => (
        <Link to={node.frontmatter.slug} key={index}>
          <Card data={node} />
        </Link>
      ))}
    </Posts>
  )
}

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1920px;
  padding: 10px;
`
```

## CreatePage Api

이번 Gatsby blog를 만들면서 가장 중요한 부분이다.

```javascript
//gatsby-node.js
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/pages/post.js")

  const res = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              description
              date
              title
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `blog${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
```

[createPages 문서](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

**createPages** 가 실행되면서 **actions, grapnel, reporter** 함수를 가지고 있는 인자 하나를 가지고 있는데, 여기서 **actions, grapnel** 만 사용하여 페이지를 만듭니다.

**graphql** 이용하여 뽑은 데이터를 활용하여 **actions.createPage** 를 활용하여 페이지를 생성을 할 수 있다.

이렇게 생성된 페이지는 localhost/설정한 path로 접속을 할 수 있다.

그리고 **context** 를 활용하여 해당 페이지에 데이터를 넘겨주어 상세페이지를 만들 수 있다.

```javascript
import React from "react"
import SEO from "../components/seo"
import { Layout } from "../layout"
import { graphql } from "gatsby"
import { Content } from "../components/content"

export default function PostPage({ data }) {
  return (
    <Layout>
      <Content data={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`
```

Gatsby-node에서 페이지 생성 후 context로 보낸준 데이터를 **query($slug: String)** 이렇게 받을 수 있다.

이렇게 받은 데이터를 활용하여 graphql에 필터 데이터로 사용 후 결과 값으로 상세페이지를 만들 수 있다.
