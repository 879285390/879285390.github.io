import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../../../css/label/labelIndexList.css'

export default function LabelIndexList(props) {
  const [labelArr,setlabelArr] = useState([])
  useEffect(()=>{
      const data = props.issues;
      const labelHash1 = {};
      const labelList1 = {};
      // console.log(data);
      for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data[i].labels.length;j++){
          let label = data[i].labels[j];
          if(label.color === 'FAFC16') {
            let name = label.name;
            let title = data[i].title;
            let date = data[i].updated_at.split('T')[0]
            let id = data[i].id;
            let number = data[i].number;
            if(labelHash1[name]===undefined){
              labelHash1[name] = true;
              labelList1[name] = [{date, title, id, number}];
            }
            else {
              for(let i in labelList1){
                if(i === name){
                  labelList1[i].push({date, title, id, number})
                }
              }
            }
          }
        }
      } 
      setlabelArr(labelList1)  
  },[props.issues])   
  const  labelLinkList = [];
  const  labelItem = [];
  const labelTitle = [];
  for (let k in labelArr){
    labelTitle.push(k);
    labelItem.push(labelArr[k].map(items => <li key={items.id}>
      <Link to={`/blog/article/${items.number}`}>
        {items.date} {items.title}
      </Link>
    </li>))
    }
    // console.log(labelItem)
    for(let i=0; i<labelItem.length;i++){
      labelLinkList.push(
        <div className="article-label" key={i}>
          <h2>{labelTitle[i]}</h2>
          <ul>
            {labelItem[i]}
          </ul>
        </div>
      )
    } 
  return (
    <div className="label-index-list">
      {labelLinkList}
    </div>
  )
}

LabelIndexList.defaultProps = {
  issues: [],
}

LabelIndexList.propTypes = {
  issues: PropTypes.array,
}