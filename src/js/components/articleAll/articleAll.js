import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from 'antd'
import { useSelector, useDispatch} from 'react-redux';
import fetchIssuesIfNeeded from '../../actions/index';
// import CategoryArea from '../blog/categoryArea'
import YearArea from './yearArea';
import ArticleAllList from './articleAllList'
import '../../../css/blog/blogindex.css'

export default function ArticleAll() {
  const isFetching= useSelector(state => state.isFetching&&true)
  const items = useSelector(state => state.items)
  const dispatch = useDispatch();
  useEffect(()=>{
    //这里没有输出,即表示 useEffect没有运行
    dispatch(fetchIssuesIfNeeded());
  },[dispatch])

  if(isFetching) {
    return null;
  }
  return (
    <div className="blog">
      <Row>
        <Col xs={24} sm={24} md={18}> 
          <ArticleAllList issues={items}/>
        </Col>
        <Col xs={0} sm={0} md={6} className="right">
          <YearArea issues={items} title="统计"/>
        </Col>
      </Row>
    </div>
  )
}

ArticleAll.defaultProps ={
  dispatch: null,
  isFetching: true,
  items: [],
};

ArticleAll.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};