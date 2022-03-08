import React, {useEffect, useState} from 'react'
import {TagsOutlined} from '@ant-design/icons'
// import LabelList from './labelList'
import { Link } from "react-router-dom";
import '../../../css/blog/labelArea.css'

// let labelArr = [];
// for (let i = 0; i < 6; i++) {
//   // categoryArr.push(<li key={i}><Link to="category"><CategoryItem/></Link></li>)
//   labelArr.push(<li key={i}>
//     <Link to="category">
//       <div className="category-item">
//         <p className="category-item-name">前端<span>5</span></p>
//       </div>
//     </Link></li>)
// }

function LabelList(props) {
  const [labelArr,setLabelArr] = useState([])
  useEffect(()=>{
      const data = props.issues;
      const labelHash1 = {};
      const labelList1 = [];
      for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data[i].labels.length;j++){
          let label = data[i].labels[j];
          if(label.color === 'FAFC16') {
            let name = label.name;
            let id = label.id
            if(labelHash1[name]===undefined) {
              labelHash1[name] = true;
              labelList1.push({id, name, sum:1})
            }
            else {
              for(let n = 0;n<labelList1.length;n++) {
                if(labelList1[n].name === name) {
                  labelList1[n].sum++;
                }
              }
            }
          }
        }
      } 
      setLabelArr(labelList1)  
  },[props.issues])   

  const labelLinkList = labelArr.sort((a,b)=>b.num-a.num).map(
    // items => <div key={items.id}>{items.name}11111111{items.sum}</div>
    items =>
      <Link to={`tag/${items.name}`} key={items.id}> <div className="label-item-name">{items.name} ({items.sum})</div></Link>
  )
  return (
    <div className="label-list">
      <ul>
        {labelLinkList}
      </ul>
    </div>
  )
}


export default function LabelArea(props){
  // console.log('LabelArea')
  const issues = props.issues;
  // console.log(issues)
  return (
    <div className="label-area">
      <div className="label-area-title"><TagsOutlined /> 标签</div>
      <div className="label-area-list"><LabelList issues={issues}/></div>
    </div>
  )
}
