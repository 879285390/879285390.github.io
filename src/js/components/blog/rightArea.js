import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CategoryArea from './categoryArea'
import LabelArea from './labelArea'
import '../../../css/blog/rightArea.css'

export default function RightArea( props ){
  const { issues } = props;
  return (
    <div className="right-area">
      {/* 这是一个链接 */}
      <div className="all-article"><Link to="articleall">所有文章页</Link></div>
      <div className="article-area-category"><CategoryArea issues={issues} title="分类"/></div>
      <div className="article-area-label"><LabelArea issues={issues}/></div>
    </div>
  )
}

RightArea.defaultProps = {
  issues: [],
};

RightArea.propTypes = {
  issues: PropTypes.array,
};

