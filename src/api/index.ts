import { request } from 'umi'
import { FetchUrl } from './type'

const POST: any = {
  method: 'POST',
  requestType: 'json'
}

export class API {

  // 练字教学列表
  static getCalligraphyList = (data: any) => request(FetchUrl.calligraphyList, {data, ...POST})

}


export default API
