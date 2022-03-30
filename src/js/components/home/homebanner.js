import imgURL from '../../../img/Lin.jpg'
import '../../../css/home/homebanner.css'

export default function HomeBanner(){
  return (
    <div className="home-banner">
    <div className="home-banner-me">
      <div className="home-banner-pic">
          {/* 注意在react中不能直接用img */}
          <img src={imgURL} alt="头像"/>
      </div>
      <div className="home-banner-desc">
        <h1>林蕴晴</h1>
        <p>一个正在努力的程序员</p>
        <p>前端/嵌入式工程师</p>
        <p>研究方向:目标检测与跟踪算法的嵌入式实现</p>
        <div className="home-banner-Link">
          <div className="link">
            <a target="_blank" href="https://github.com/879285390" rel="noopener noreferrer">Github</a>
          </div>
          <div className='link'>
            {/* 可以用github的个人主页功能展示简历 */}
            {/* 这里暂时不跳转 */}
            {/* <a target="_blank" href="https://github.com/879285390" rel="noopener noreferrer">在线简历</a>/ */}
            {/* <a target="_blank" href="javascript:;" onClick={(e)=>{e.preventDefault();}}>在线简历</a>/ */}
          </div>
        </div>
      </div>
    </div>
    </div>  
  )
}