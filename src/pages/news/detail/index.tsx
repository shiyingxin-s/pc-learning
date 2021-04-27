/** @format */

import React from "react"
import banner from "../../../assets/news_banner.png"
import {Row,  List} from "antd"
import styles from "./index.scss"
import classnames from "classnames"

const NewsDetailPage = () => {

    return (
      <div className={classnames("container", styles._content)}>
        <div className={styles.con_box}>
          <div className={styles.title}>这是标题</div>
          <div className={styles.date}>2021-04-06 </div>
          <div className={styles.conHtml}>
            <div>
            这是内容这是内容这是内容这是内容这是内容这是内容，这是内容这是内容这是内容这是内。容这是内容这是内容这是内容这是内容
这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。
        这是内容这是内容这是内容这是内容这是内容这是内容，这是内容这是内容这是内容这是内。容这是内容这是内容这是内容这是内容
这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。这是内容这是内容这是内
容这是内容这是内容这是内容，这是内容这是内容这是内容这是内。容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这
是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。
            </div>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            <div>
            这是内容这是内容这是内容这是内容这是内容这是内容，这是内容这是内容这是内容这是内。容这是内容这是内容这是内容这是内容
这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。
        这是内容这是内容这是内容这是内容这是内容这是内容，这是内容这是内容这是内容这是内。容这是内容这是内容这是内容这是内容
这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。这是内容这是内容这是内
容这是内容这是内容这是内容，这是内容这是内容这是内容这是内。容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这
是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容。
            </div>
          </div>
        </div>
     </div>
    )
}

NewsDetailPage.title = "新闻动态"

export default NewsDetailPage
