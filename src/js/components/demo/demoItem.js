import demoimgUrl from '../../../img/ori2.png'
import '../../../css/demo/demoItem.css'

export default function DemoItem() {
    return (
      <div className="demo-item">
        <div className="demo-item-title">Demo题目</div>
        <div className="demo-item-img">
          <img src={demoimgUrl} alt="demo图"/>
        </div>
        <div className="demo-item-bottom">
          {/* 这里应该是两个链接，此处暂时用div代替 */}
          <div className="a">演示地址</div>
          <div className="a">源代码</div>
        </div>
      </div>
    )
  }
