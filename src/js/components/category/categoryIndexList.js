import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../../../css/category/categoryIndexList.css'

export default function CategoryIndexList(props) {
  const [categoryArr,setCategoryArr] = useState([])
  useEffect(()=>{
      const data = props.issues;
      const categoryHash1 = {};    
      const categoryList1 = {};
      // console.log(data);
      for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data[i].labels.length;j++){
          let label = data[i].labels[j];
          if(label.color === 'd93f0b') {
            let name = label.name;
            let title = data[i].title;
            let date = data[i].updated_at.split('T')[0]
            let id = data[i].id;
            let number = data[i].number;
            if(categoryHash1[name]===undefined){
              categoryHash1[name] = true;
              categoryList1[name] = [{date, title, id, number}];
            }
            else {
              for(let i in categoryList1){
                if(i === name){
                  categoryList1[i].push({date, title, id, number})
                }
              }
            }
          }
        }
      } 
      setCategoryArr(categoryList1)  
  },[props.issues])
  // console.log(categoryArr)   
  const categoryLinkList = [];
  const categoryItem = [];
  const categoryTitle = [];
  for (let k in categoryArr){
    categoryTitle.push(k);
    categoryItem.push(categoryArr[k].map(items => <li key={items.id}>
      <Link to={`/blog/article/${items.number}`}>
        {items.date} {items.title}
      </Link>
    </li>))
    }
    // console.log(categoryItem)
    for(let i=0; i<categoryItem.length;i++){
      categoryLinkList.push(
        <div className="article-category" key={i}>
          <h2>{categoryTitle[i]}</h2>
          <ul>
            {categoryItem[i]}
          </ul>
        </div>
      )
    }   
  
  return (
    <div className="category-index-list">
      {categoryLinkList}
    </div>
  )
}

CategoryIndexList.defaultProps = {
  issues: [],
}

CategoryIndexList.propTypes = {
  issues: PropTypes.array,
}