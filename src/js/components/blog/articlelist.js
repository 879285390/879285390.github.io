import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './articleitem'


export default function ArticleList(props){
  const articlelist = [];
  const {issues, defaultPageSize, pageNumber} = props;
  // console.log(issues);
  // console.log('articleList')
  // console.log(issues[0].id)
  // console.log(defaultPageSize)
  // console.log(pageNumber)
  for(let n=(pageNumber-1)*defaultPageSize; n<(pageNumber*defaultPageSize<=issues.length?pageNumber*defaultPageSize:issues.length); n++) {
    //这里出现相同组件时必须加上 key ，以便 diff 算法加载 DOM 数
    articlelist.push(<ArticleItem issue={issues[n]} key={issues[n].id} number={issues[n].number}/>)
  }
  return (
    <div>
      {articlelist}
    </div>
  )
}

ArticleList.defaultProps ={
  issues: [],
  defaultPageSize: 0,
  pageNumber: 1,
};

ArticleList.propTypes = {
  issues: PropTypes.array,
  defaultPageSize: PropTypes.number,
  pageNumber: PropTypes.number,
};
