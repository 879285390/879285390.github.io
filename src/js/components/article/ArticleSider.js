import React from 'react';
import MarkNav from 'markdown-navbar'; 
import 'markdown-navbar/dist/navbar.css';
import '../../../css/article/articlesider.css'

export default function ArticleSider(props){
  const issue = props.issue
  //使用这个插件做锚点导航目前在15分钟带你了解前端工程师必知的javascript设计模式(附详细思维导图和源码) --转载这篇文章的实际使用中存在bug
  //因此谋求后期自己实现导航
  return (
    <div className="article-sider">
      <div className="article-sider-title">
        目录
      </div>
      <div className="article-sider-content">
      <MarkNav
            className="article-list"
            source={issue.body}
            ordered = {false}
          />
      </div>
    </div>
  )
}