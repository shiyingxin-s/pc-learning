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

  // 根据课程Id 获取课程详情
  static getCourseDetail = (data: any) => request(FetchUrl.courseDetail,{data, ...POST})

  // 获取联系方式
  static getContactInfo = () => request(FetchUrl.contactInfo,{...POST})

  // 获取新闻列表
  static getNewsList = (data: any) => request(FetchUrl.newsList, {data, ...POST})

  // 获取新闻详情
  static getNewsDetail = (data: any) => request(FetchUrl.newsDetail+ '/' + data.id, {data, ...POST})

  // 获取新闻详情
  static getTextbookDetail = (data: any) => request(FetchUrl.textbookDetail + '/' + data.id, {data, ...POST})

}


export default API
