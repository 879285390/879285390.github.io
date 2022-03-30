import React, { useEffect, useRef} from 'react';
import DemoList from '../components/demo/demoList';
import '../../css/demo/demo.css'

export default function Demo() {
  const node = useRef(); 
    useEffect(()=>{
      node.current.scrollIntoView();
    },[])
    return (
      <div className="demo-index" ref={node}>
        <DemoList/> 
      </div>
    )
  }