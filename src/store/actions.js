import {requestHome} from '../api'
import {RECEIVE_HOME} from './mutation-types'
export default {
  async requestHome({commit}){
    //用同步的方式写异步代码 await后返回的是（处理之后的）data数据
    const result =await requestHome()
    if (result.code === 0){
      const home = result.data
      console.log(home);
      //通知mutations更新数据 并把数据传递过去
      commit(RECEIVE_HOME,{home})
    }
  }
}
