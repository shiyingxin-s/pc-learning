import { request } from 'umi'
import { FetchUrl } from './type'

const POST: any = {
  method: 'POST',
  requestType: 'json'
}

export class API {

  // 练字教学列表
  static getCalligraphyList = (data: any) => request(FetchUrl.calligraphyList, {data, ...POST})

  // 根据年级获取 课程列表
  static getCourseList = (data: any) => request(FetchUrl.courseList,{data, ...POST})



}


export default API
