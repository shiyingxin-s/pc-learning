
export enum FetchUrl {

  /**
   * 练字教学
   */
  calligraphyList = '/grade/list',

  /**
   *  获取课程列表
   */
 courseList ='/course/list',

 /**
  *  获取课程详情
  */
  courseDetail = '/course/info'

}

enum Banner {
  pc,
  android,
  iphone,
  ipad
}

export interface IShareResource {
  id: string | number
  type: 'song' | 'playlist' | 'mv' | 'djradio' | 'djprogram'
  msg: string
}
export interface ILoginByPhone {
  phone: string
  password: string
  countrycode?: number
  loading?: boolean
}


export interface IBanner {
  type: Banner.pc | Banner.android | Banner.ipad | Banner.iphone
  loading?:boolean
}

export interface IUser {
  uid:string
}
