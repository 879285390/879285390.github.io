import React from 'react';
import MarkNav from 'markdown-navbar'; 
import 'markdown-navbar/dist/navbar.css';
import '../../../css/article/articlesider.css'

export default function ArticleSider(props){
  const issue = props.issue
  
  return (
    <div className="article-sider">
      <div className="article-sider-title">
        目录
      </div>
      <div className="article-sider-content">
      <MarkNav
            className="article-list"
            source={issue.body}
            headingTopOffset = {80}
          />
      </div>
    </div>
  )
}