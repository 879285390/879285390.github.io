import axios from 'axios';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../constants/actiontype';

const requestIssues = () => ({type: REQUEST_ISSUES});
const receiveIssues = json => ({ type: RECEIVE_ISSUES, post: json });

function fetchIssues() {
  // console.log('fetch issue')
  return (dispatch,getState) => {
    // console.log('fetch some issue')
    // 想要调用定义好的同步 action 要通过 dispatch
    // console.log('requestIssues')
    dispatch(requestIssues());
    // console.log(getState());
    return axios.get('https://api.github.com/repos/879285390/879285390.github.io/issues',{
      params: {
        creactor: '879285390'
      }
    })
    .then((response) => {
      // console.log('receiveIssues')
      dispatch(receiveIssues(response.data))
      // console.log(getState())
    }).catch(e => console.log(e));
  };
}


//  shouldFetchIssues 功能 state 对象为空，或者 state.items没有东西时返回 ture
function shouldFetchIssues (state) {
  // console.log(`shouldFetchIssue:  ${state}`)
  // console.log(state)
  if(!state) {
    return true;
  }
  return !state.items.length;
  // return false;
}

//state数据也可以在调用fetchIssuesIfNeeded()函数的时候执行
//如果是这样，fetchIssuesIfNeeded()函数可以这么写
//当然调用 fetchIssuesIfNeeded 时需要传入参数
// shouldFetchIssues 里的参数也需要做出对应改变
// export default function fetchIssuesIfNeeded(items){
//   return (dispatch) => {
//     if(shouldFetchIssues(items)){
//       // console.log('state is []')
//       return dispatch(fetchIssues())
//     }
//     return Promise.resolve()
//   }
// }


export default function fetchIssuesIfNeeded(){
  // React redux 获取数据store.getState()
  // console.log('fetchIssuesIfNeeded:')
  // console.log(items);
  return (dispatch,getState) => {
    if(shouldFetchIssues(getState())){
      // console.log('state is []')
      return dispatch(fetchIssues())
    }
    // console.log('issues is not []')
    //promise状态resolve是异步执行成功的状态。
    //！！！这里需要去补一下异步的那些函数了Promise axios anysc等
    return Promise.resolve()
  }
}