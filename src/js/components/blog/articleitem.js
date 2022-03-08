import {Link} from 'react-router-dom'
import {CalendarOutlined, TagOutlined} from '@ant-design/icons'
import '../../../css/blog/articleitem.css'

export default function ArticleItem(props) {
  // console.log('ArticleItem')
  // console.log(props)
  const {title, updated_at, body, labels} = props.issue;
  let date = updated_at
  let tag = null;
  let category = null;
  for(let item of labels){
    // console.log(item);
    switch(item.color){
      case "d93f0b":
        category =  item.name
        break;
      case "FAFC16":
        tag = item.name;
        break;
      default:
        tag = item.name;
    }
  }

  return (
    <div className="article-item">
      <Link to = {`/blog/article/${props.number}`}>
      <div className="article-item-title">{title}</div>
      <div className="article-item-date"> <CalendarOutlined/> {date.split('T')[0]}</div>
      <div className="article-item-label"> <TagOutlined/> {category}</div>
      <div className="article-item-label"> <TagOutlined/> {tag}</div>
      <div className="article-item-desc">
        {body}
      </div>
      </Link>
    </div>
  )
}
