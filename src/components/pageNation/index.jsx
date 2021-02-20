import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const PostPagination = ({ currentPage, numPages, subpath }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/${(currentPage - 1).toString()}`
  const nextPage = `/${(currentPage + 1).toString()}`
  const pages = pagination(currentPage, numPages)

  return (
    <Pagenation>
      {!isFirst && (
        <Link to={`${subpath}${prevPage}`} rel="prev">
          <i className="fas fa-arrow-left" />
          이전 페이지
        </Link>
      )}
      <div className="pagination-number">
        {pages.map(page =>
          page ? (
            <Link
              key={`pagination-number${page}`}
              to={`${subpath}${page === 1 ? "/" : `/${page}`}`}
              activeClassName="active"
            >
              {page}
            </Link>
          ) : (
            <span key="ellipsis">{page}</span>
          )
        )}
      </div>
      {!isLast && (
        <Link to={`${subpath}${nextPage}`} rel="next">
          다음 페이지
          <i className="fas fa-arrow-right" />
        </Link>
      )}
    </Pagenation>
  )
}

PostPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  subpath: PropTypes.string,
}

PostPagination.defaultProps = {
  subpath: "",
}

const Pagenation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;
    font-size: 20px;
  }

  .pagination-number {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;

    .active {
      color: black;
    }
  }
`

export default PostPagination

// 출처 https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
function pagination(currentPage, pageCount, delta = 2) {
  const separate = (a, b) => [
    a,
    ...({
      0: [],
      1: [b],
      2: [a + 1, b],
    }[b - a] || ["...", b]),
  ]

  return Array(delta * 2 + 1)
    .fill()
    .map((_, index) => currentPage - delta + index)
    .filter(page => page > 0 && page <= pageCount)
    .flatMap((page, index, { length }) => {
      if (!index) return separate(1, page)
      if (index === length - 1) return separate(page, pageCount)

      return [page]
    })
}
