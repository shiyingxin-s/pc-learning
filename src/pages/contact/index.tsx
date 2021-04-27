/** @format */

import React from "react"
import banner from '../../assets/contact-banner.png'
import c_b_img from '../../assets/c_b_img.png'
import styles from "./index.scss"
import classnames from "classnames"
import {Divider} from "antd"

const ContactPage = () => {
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
        这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍
        这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍
        这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍这里是公司介绍
        </div>
        <div className={styles.con_bottom}>
            <div className={classnames(styles.item)}>
              <img src={c_b_img} />
            </div>
            <div className={classnames(styles.item,styles.content)}>
              <span className={styles.title}>习格标练字网</span>
              <Divider />
              <p><i className={classnames("iconfont",'iconphone-channel',styles.iStyle)} /> 电话：XXXXX</p>
              <p><i className={classnames("iconfont",'icondizhi',styles.iStyle)} /> 地址：陕西省西安市雁塔区鱼化寨地铁口</p>
              <p><i className={classnames("iconfont",'iconyouxiang',styles.iStyle)} /> 邮箱：XXXX</p>
              <p><i className={classnames("iconfont",'iconwifi',styles.iStyle)} /> www.sdfsf</p>
            </div>
        </div>
      </div>

    </div>
  )
}

ContactPage.title = "联系我们"

export default ContactPage
