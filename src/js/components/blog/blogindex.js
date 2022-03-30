import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { useSelector, useDispatch} from 'react-redux';
import fetchIssuesIfNeeded from '../../actions/index';
import ArticleArea from './articleArea';
import RightArea from './rightArea';
import '../../../css/blog/blogindex.css'

export default function BlogIndex(){
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
          <ArticleArea issues={items}/>
        </Col>
        <Col xs={0} sm={0} md={6} className="right">
          <RightArea issues={items}/>
        </Col>
      </Row>
      
      {/* 我是Blog页面 */}
    </div>
  );
}

BlogIndex.defaultProps ={
  dispatch: null,
  isFetching: true,
  items: [],
};

BlogIndex.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};

// function mapStateToProps(state){
//   // 或运算符，如果两个操作数都是对象，则返回第一个操作数
//   const { isFetching, items } = state || { isFetching: true, items: []};
//   return { isFetching, items };
// }


//!!!又出现了一个 useReducer 这个花时间看一下,是 react hook
