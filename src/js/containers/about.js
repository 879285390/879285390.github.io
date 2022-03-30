import React, {useEffect, useRef} from 'react';
import '../../css/about/about.css'
export default function About() {
  const node = useRef()
  useEffect(()=>{
     node.current.scrollIntoView();
  },[])
    return (
      <div className="aboutme_index" ref={node}>
        <div className="main-contain">
          <div className="about-detail">
            <h1>关于我</h1>
            <p>西安电子科技大学23届毕业生</p>
            <p>研究方向是基于深度学习的目标检测算法的嵌入式实现</p>
            <p>机缘巧合之下了解了前端，因为喜欢前端所见即所得的开发形式，预感未来关于软件开发的分工会更细，选择了前端开发</p>
            <p>目前正在狂补前端基础和计算机基础的不足</p>
            <p>喜欢单机游戏，喜欢游戏中有趣的剧情和通关的乐趣</p>
          </div>
          <hr/>
          <div className="contect-me">
            <h1>联系方式</h1>
            <p>个人主页: http://lin2333.cn</p>
            <p>Github: https://github.com/879285390</p>
            <p>Email: lyqdewyyx@163.com</p>
            <p>微信: lyqdewxhao</p>
          </div>
          <hr/>
          <a href="https://github.com/879285390">友情链接</a>
        </div>
      </div>
    )
  }