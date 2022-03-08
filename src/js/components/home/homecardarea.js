import React, { useEffect, useState} from 'react';
import axios from 'axios';
import HomeCard from './homecard';
import '../../../css/home/homecardarea.css'



export default function HomeCardArea(){
  const [Card, setCard] = useState({
    articleCard:null,
    demoCard:null,
    aboutmeCard:null
  })

  useEffect(() => {
    axios.get('https://api.github.com/repos/879285390/879285390.github.io/issues',{
      params: {
        creator:'879285390'
      }
    })
    .then((response) => {
      const data = response.data;
      const articleList = [];
      for(let i=0; i<3; i++) {
        const articleItem = {};
        //title:issue的标题
        //number:按照创建issue的顺序累加，被删除的也算在内
        // console.log(data[i]);
        articleItem.title=data[i].title;
        articleItem.id = data[i].number;
        articleItem.url=`/blog/article/${data[i].number}`;
        articleList.push(articleItem);
      }

      const demoList = [{
        id: 1,
        title: '这是Demo1',
        url: '/demo',
      }, {
        id: 2,
        title: '这是Demo2',
        url: '/demo',
      }, {
        id: 3,
        title: '这是Demo3',
        url: '/demo',
      }];

      const aboutList = [{
        id: 1,
        title: '2023届应届生',
        url: '/about',
      }, {
        id: 2,
        title: '求工作求工作求工作...',
        url: '/about',
      }];
      
      // 这里key的作用是为了diff算法吗？回头看一下diff算法
      const articleCard1 = <HomeCard key={1} cardId={1} cardUrl="/blog" cardName="Blog" cardContent={articleList}/>
      const demoCard1 = <HomeCard key={2} cardId={2} cardUrl="/demo" cardName="Demo" cardContent={demoList}/>
      const aboutmeCard1 = <HomeCard key={3} cardId={3} cardUrl="/about" cardName="About" cardContent={aboutList}/>

      setCard({articleCard:articleCard1,demoCard:demoCard1,aboutmeCard:aboutmeCard1})
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])

    return (
      <div className="home-card-area">
        {Card.articleCard}
        {Card.demoCard}
        {Card.aboutmeCard}
      </div>
    )
  }