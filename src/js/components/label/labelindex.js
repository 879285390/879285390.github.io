import React, { useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from 'antd'
import { useSelector, useDispatch} from 'react-redux';
import fetchIssuesIfNeeded from '../../actions/index';
import LabelArea from '../blog/labelArea'
import LabelIndexList from './labelIndexList'
import '../../../css/blog/blogindex.css'

export default function LabelIndex() {
  const isFetching= useSelector(state => state.isFetching&&true)
  const items = useSelector(state => state.items)
  const dispatch = useDispatch();
  const node = useRef()
  useEffect(()=>{
    //这里没有输出,即表示 useEffect没有运行
    dispatch(fetchIssuesIfNeeded());
    node.current?.scrollIntoView();
  },[dispatch])

  if(isFetching) {
    return null;
  }
  return (
    <div className="blog" ref={node}>
      <Row>
        <Col xs={24} sm={24} md={18}> 
          <LabelIndexList issues={items}/>
        </Col>
        <Col xs={0} sm={0} md={6} className="right">
          <LabelArea issues={items}/>
        </Col>
      </Row>
    </div>
  )
}

LabelIndex.defaultProps ={
  dispatch: null,
  isFetching: true,
  items: [],
};

LabelIndex.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};