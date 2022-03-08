import DemoItem from './demoItem'
import '../../../css/demo/demoList.css'

let DemoArr = [];
for (let i = 0; i < 3; i++) {
  DemoArr.push(<DemoItem key={i}/>)
}


export default function DemoList(){
    return (
      <div className="demo-list">
        {DemoArr}
      </div>
    )
  }
