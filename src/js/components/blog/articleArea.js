import React, { useState } from 'react';
import PropTypes from 'prop-types'
import ArticleList from './articlelist'
import ArticlePageing from './articlepageing';
import '../../../css/blog/articleArea.css'

const ArticleBanner = () => {
  return (
  <div className="blog-article-banner">
    <h2>欢迎来到我的博客。</h2>
    <p>目标前端工程师，ARM嵌入式开发也会一点，just a little</p>
  </div>
  )
}

//关于 子传父与翻页组件结合 的地方还不清楚，尤其是 setCurrentPage(pageNumber) 之后为啥 currentPage 的值没反应（在括号里），但是在大括号外有反应;
export default function ArticleArea(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [DefaultPageSize] = useState(8);
  const handlePageChange = (pageNumber) => {
    // console.log('handlePageChange')
    // console.log(pageNumber)
    setCurrentPage(pageNumber);
    // console.log(currentPage);
  }
  // console.log('articleArea');
  // console.log(props)
  // console.log(props.issues)
  // console.log(currentPage);
    return (
      <div className="article-area">
        <ArticleBanner/>
        <ArticleList issues={props.issues} defaultPageSize={DefaultPageSize} pageNumber={currentPage}/>
        <ArticlePageing handlePageChange={handlePageChange} total={props.issues.length} defaultPageSize={DefaultPageSize}/>
      </div>
    )
  }

  ArticleArea.defaultProps ={
    issues: [],
  };
  
  ArticleArea.propTypes = {
    issues: PropTypes.array,
  };