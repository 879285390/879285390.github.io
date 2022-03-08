import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import '../../../css/blog/articlePageing.css'

export default function ArticlePageing(props){
  // componentDidMount(){
  //   //为什么需要改变绑定的this
  //   this.onChange = this.onChange.bind(this)
  // }
  
  //这里设置子组件需要接收的参数
  const [current, setCurrent] = useState(1)

  //子传父
  //这里是将 onChange 即子组件本来要做的事情放在父组件函数 handlePageChange 里面
  //需要传的参数则是 page 这样子和父组件就都可以用 page 
  const onChange = page => {
    // console.log('onChange')
    // console.log(page);
    const {handlePageChange} = props;
    //这里在子传父的时候，将传递的值接收出来
    setCurrent(page);
    handlePageChange(page);
  };

  return (
    <div className="article-pageing">
      <Pagination current={current} onChange={onChange} total={props.total} />
    </div>
  )
}

ArticlePageing.defaultProps = {
  defaultPageSize: 5,
  total: 10,
};

ArticlePageing.propTypes = {
  defaultPageSize: PropTypes.number,
  total: PropTypes.number,
};
