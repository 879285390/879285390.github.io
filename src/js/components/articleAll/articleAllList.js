import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../../../css/articleAll/articleAllList.css'

export default function ArticleAllList(props) {
  const [yearArticle,setYearArticle] = useState([])
  //这里直接点刷新，页面上并不会显示最新的issues数据，而是没在github issues添加之前的?????
  useEffect(()=>{
    const data = props.issues;
    const articleAllHash1 = {};
      const articleAllList1 = {};
      for(let i = 0;i<data.length;i++){
        let title = data[i].title;
        let year = data[i].updated_at.split('-')[0]
        let date = data[i].updated_at.split('T')[0]
        let id = data[i].id;
        let number = data[i].number;
        if(articleAllHash1[year]===undefined) {
          articleAllHash1[year] = true;
          articleAllList1[year] = [{date ,title, id, number}]; 
        }
        else {
          for(let i in articleAllList1){
            // console.log(i)    //2022
            if(i === year){
              articleAllList1[i].push({date, title, id, number})
            }
          }
        }
      }
      setYearArticle(articleAllList1)
  },[props.issues])
  // console.log(yearArticle)
  // console.log(yearArticle[2022])
  const  articleAllLinkList = [];
  const  articleAllItem = [];
  for(let k in yearArticle){
    articleAllItem.push(yearArticle[k].map(items => <li key={items.id}>
      <Link to={`/blog/article/${items.number}`}>
        {items.date} {items.title}
      </Link>
    </li>)) 
    articleAllLinkList.push(
      <div className="article-year" key={k}>
        <h2>{k}</h2>
        <ul>
          {articleAllItem}
        </ul>
      </div>
    )
  }
  // const articleAllList = yearArticle.sort(a,b)=>b.num-a.
  return (
    <div className="article-all-list">
      {articleAllLinkList}
    </div>
  )
}

ArticleAllList.defaultProps = {
  issues: [],
}

ArticleAllList.propTypes = {
  issues: PropTypes.array,
}