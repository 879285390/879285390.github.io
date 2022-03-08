import React from 'react';
import PropTypes from 'prop-types';
import {Routes,Route} from 'react-router-dom'
import ArticlePage from '../components/article/articlePage'
import BlogIndex from '../components/blog/blogindex';
import CategoryIndex from '../components/category/categoryindex';
import LabelIndex from '../components/label/labelindex';
import ArticleAll from '../components/articleAll/articleAll';


export default function Blog() {
    return (
      <div>
        <Routes>
          <Route path="*" element={<BlogIndex/>}/>
          <Route path={`article/:number`} element={<ArticlePage/>}/>
          <Route path={`category/:category`} element={<CategoryIndex/>}/>
          <Route path={`tag/:tag`} element={<LabelIndex/>}/>
          <Route path={`articleall/*`} element={<ArticleAll/>}/>
        </Routes>
      </div>
    )
  }


Blog.defaultProps = {
  match: null,
  url: 'url',
};

Blog.propTypes = {
  match: PropTypes.object,
  url: PropTypes.string,
};