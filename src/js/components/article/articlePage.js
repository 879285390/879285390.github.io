import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import fetchIssuesIfNeeded from '../../actions/index'
import ArticleContent from "./ArticleContent"
// import ArticleSider from "./ArticleSider";
import '../../../css/article/articlepage.css'
// import { Row, Col} from 'antd';

export default function ArticlePage() {
  const isFetching = useSelector(state=>state.isFetching)
  const items = useSelector(state=>state.items)
  const {number} = useParams(); 
  // console.log(number)
  let issue = {};
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchIssuesIfNeeded());
  },[dispatch])

  if(isFetching) {
    return null
  }
  // console.log(items);
  for(let item of items){
    // console.log(item)
    if(item.number == number) {
      issue = item
    }
  }
  // console.log(issue)
    return (
      <div className="article-page">
        {/* <Row>
          原计划有文章导航页，但是目前还没看懂，因此之后再加上
          <Col xs={24} sm={24} md={18}><ArticleContent issue={issue}/></Col>
            <Col xs={0} sm={0} md={6}><ArticleSider issue={issue}/></Col>
        </Row> */}
        <ArticleContent issue={issue}/>
      </div>
    )
  }
