import React from 'react';
// import PropTypes from 'prop-types';
// import {marked} from 'marked';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';
//设置高亮的语言
// import { jsx, javascript, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";
import '../../../css/article/articlecontent.css'

export default function ArticleContent (props){

  // console.log(props)
  const issue = props.issue;
  // console.log('ArticleContent')
  // console.log(props)
  // console.log(issue)
  return (
    <div className="article-content">
      <h2 className="article-content-title">
        {issue.title}
      </h2>
      <p className="article-content-time">
      {issue.updated_at.split('T')[0]}
      </p>
      <div className="article-content-detail">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={issue.body}
        className="md_html"
        components={{
          code({node, inline, className, children, ...props}) {
            // 这里可能和无className的标签没有语法高亮有关，回头看一下
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={xonokai}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
       {/* <ReactMarkdown children={issue.body} remarkPlugins={[remarkGfm]} className="md_html"/> */}
      </div>
      <div className="Welcome">
        欢迎点我评论
      </div>
    </div>
  )
}

