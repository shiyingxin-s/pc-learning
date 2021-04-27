export { default as Header } from './Header'
export { default as Loading } from './Loading'

interface IUser {
  locationInfo: any
  liveInfo: any
  anonym: number
  avatarUrl: string
  authStatus: number
  experts: any
  vipRights: any
  userId: number
  userType: number
  nickname: string
  vipType: number
  remarkName: any
  expertTags: any
}

interface IBeReplied {
  //追加评论
  user: IUser
  beRepliedCommentId: number
  content: string
  status: number
  expressionUrl: any
}
export interface IComments {
  user: {
    locationInfo: any
    liveInfo: any
    anonym: number
    avatarUrl: string
    authStatus: number
    experts: any
    vipRights: any
    userId: number
    userType: number
    nickname: string
    vipType: number
    remarkName: any
    expertTags: any
  }
  beReplied: IBeReplied[]
  pendantData: {
    id: number
    imageUrl: string
  }
  showFloorComment: null
  status: number
  commentId: number
  content: string
  time: number
  likedCount: number
  expressionUrl: any
  commentLocationType: number
  parentCommentId: number
  decoration: any
  repliedMark: any
  liked: boolean
}

export type CommentType = 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态

export interface ICommentsProps {
  type: CommentType
  id: string | number
}


