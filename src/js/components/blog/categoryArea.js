import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {BarsOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
import '../../../css/blog/categoryArea.css'


function CategoryList(props) {
  const [categoryArr,setCategotyArr] = useState([])
  useEffect(()=>{
      const data = props.issues;
      const categoryHash1 = {};
      const categoryList1 = [];
      // console.log(data);
      for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data[i].labels.length;j++){
          let label = data[i].labels[j];
          if(label.color === 'd93f0b') {
            let name = label.name;
            let id = label.id
            if(categoryHash1[name]===undefined) {
              categoryHash1[name] = true;
              categoryList1.push({id, name, sum:1})
            }
            else {
              for(let n = 0;n<categoryList1.length;n++) {
                if(categoryList1[n].name === name) {
                  categoryList1[n].sum++;
                }
              }
            }
          }
        }
      } 
      setCategotyArr(categoryList1)  
  },[props.issues])   

  const categoryLinkList = categoryArr.sort((a,b)=>b.num-a.num).map(
    // items => <div key={items.id}>{items.name}11111111{items.sum}</div>
    items => <li key={items.id}>
    <Link to={`category/${items.name}`}>
      <div className="category-item">
        <p className="category-item-name">{items.name}<span>{items.sum}</span></p>
      </div>
    </Link></li>
  )
  return (
    <div className="categoryList">
      <ul>
        {categoryLinkList}
      </ul>
    </div>
  )
}

export default function CategoryArea(props){
  const issues = props.issues;
  return (
    <div className="category-area">
      <div className="category-area-title"><BarsOutlined /> {props.title}</div>
      <div className="category-area-item"><CategoryList issues={issues}/></div>
    </div>
    
  )
}


CategoryArea.defaultProps = {
  url: '分类',
};

CategoryArea.propTypes = {
  title: PropTypes.string,
};
