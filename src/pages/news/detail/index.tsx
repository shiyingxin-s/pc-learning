/** @format */

import React from "react"
import banner from "../../../assets/news_banner.png"
import {Row,  List} from "antd"
import { Player, BigPlayButton } from "video-react"
import {history} from "umi"
import styles from "./index.scss"
import classnames from "classnames"
import API from "@/api"
import {useRequest} from "ahooks"
import moment from "moment"



const NewsDetailPage = () => {

  const {query} = history.location

  const {data} = useRequest(
    () =>
      API.getNewsDetail({
        id: query.id
      })
  )
    return (
      <div className={classnames("container", styles._content)}>
        <div className={styles.con_box}>
          <div className={styles.title}>{data?.news.title}</div>
          <div className={styles.date}>{moment(data?.news.createtime).format("YYYY-MM-DD")} </div>
          <div className={styles.conHtml}>
          {data?.news.video?
            <Player
            poster={data?.news.images}
            src={data?.news.video}>
            <BigPlayButton position="center" />
            </Player>: ''}
            <div style={{textAlign:"center"}}>
              <img src={data?.news.images}  />
            </div>
            <div>
              {data?.news.contenttext}
            </div>
          </div>
        </div>
     </div>
    )
}

NewsDetailPage.title = "新闻动态"

export default NewsDetailPage
