/** @format */

import React from "react"
import banner from '../../assets/contact-banner.png'
import c_b_img from '../../assets/c_b_img.png'
import styles from "./index.scss"
import classnames from "classnames"
import {Divider} from "antd"
import API from "@/api"
import {useRequest} from "ahooks"

const ContactPage = () => {

  const {data} = useRequest(
    () => API.getContactInfo()
  )

  return (
    <div className={styles._content}>
      <div className={styles.banner}>
          <img src={banner} />
      </div>
      <div className={classnames("container", styles.con_box)}>
        <div className={styles.title}>
          <span className={styles.titleTxt}>联系我们</span>
          <span className={styles.desc}>Contact us</span>
        </div>
        <div className={styles.introduce}>
          {data?.info?.introduce}
        </div>
        <div className={styles.con_bottom}>
            <div className={classnames(styles.item)}>
              <img src={c_b_img} />
            </div>
            <div className={classnames(styles.item,styles.content)}>
              <span className={styles.title}>习格标练字网</span>
              <Divider />
              <p><i className={classnames("iconfont",'iconphone-channel',styles.iStyle)} /> 电话： {data?.info?.phoneNo}</p>
              <p><i className={classnames("iconfont",'icondizhi',styles.iStyle)} /> 地址：{data?.info?.address}</p>
              <p><i className={classnames("iconfont",'iconyouxiang',styles.iStyle)} /> 邮箱：{data?.info?.email}</p>
              <p><i className={classnames("iconfont",'iconwifi',styles.iStyle)} /> {data?.info?.website}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

ContactPage.title = "联系我们"

export default ContactPage
