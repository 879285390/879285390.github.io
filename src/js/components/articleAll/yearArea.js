import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../../../css/articleAll/yearArea.css'

function YearList(props) {
  const [yearArr,setYearArr] = useState([])
  useEffect(()=>{
      const data = props.issues;
      const yearHash1 = {};
      const yearList1 = [];
      // console.log(data);
      for(let i = 0;i<data.length;i++){
        let year = data[i].updated_at.split('-')[0];
        let id = data[i].id;
        // console.log(id)
         if(yearHash1[year]===undefined) {
            yearHash1[year] = true;
            yearList1.push({id, year, sum:1})
          }
          else {
            for(let n = 0;n<yearList1.length;n++){
              if(yearList1[n].year === year) {
                yearList1[n].sum++
              }
            }
          }
        // for(let j = 0;j<data[i].labels.length;j++){
        //   let label = data[i].labels[j];
        //   if(label.color === 'd93f0b') {
        //     let name = label.name;
        //     let id = label.id
        //     if(yearHash1[name]===undefined) {
        //       yearHash1[name] = true;
        //       yearList1.push({id, name, sum:1})
        //     }
        //     else {
        //       for(let n = 0;n<yearList1.length;n++) {
        //         if(yearList1[n].name === name) {
        //           yearList1[n].sum++;
        //         }
        //       }
        //     }
        //   }
        // }
      }
      // console.log(yearList1) 
      setYearArr(yearList1)  
  },[props.issues])   

  const yearLinkList = yearArr.sort((a,b)=>b.sum-a.sum).map(
    // items => <div key={items.id}>{items.name}11111111{items.sum}</div>
    items => <li key={items.id}>
    <Link to={`articleall/${items.year}`}>
      <div className="year-item">
        <p className="year-item-name">{items.year}<span>{items.sum}</span></p>
      </div>
    </Link></li>
  )
  return (
    <div className="yearList">
      <ul>
        {yearLinkList}
      </ul>
    </div>
  )
}

export default function YearArea(props){
  const issues = props.issues;
  return (
    <div className="year-area">
      <div className="year-area-title">## {props.title}</div>
      <div className="year-area-item"><YearList issues={issues}/></div>
    </div>
    
  )
}


YearArea.defaultProps = {
  url: '统计',
};

YearArea.propTypes = {
  title: PropTypes.string,
};