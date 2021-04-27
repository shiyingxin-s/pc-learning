/** @format */

import React from "react"
import ic_t1 from '../../assets/home/ic_t1.png'
import ic_c1 from '../../assets/home/ic_c1.png'
import ic_t2 from '../../assets/home/ic_t2.png'
import ic_c2_1 from '../../assets/home/ic_c2_1.png'
import ic_c2_2 from '../../assets/home/ic_c2_2.png'
import ic_c2_3 from '../../assets/home/ic_c2_3.png'
import ic_c2_4 from '../../assets/home/ic_c2_4.png'
import ic_t3 from '../../assets/home/ic_t3.png'
import ic_c3 from '../../assets/home/ic_c3.png'
import styles from "./index.scss"
import classnames from "classnames"

const HomePage = () => {
  return (
    <div className={styles._home}>
      <div className={classnames(styles.banner, styles.bgImg)}/>
      <div className={classnames("container",styles.titleImg)}>
        <img src={ic_t1}/>
      </div>
      <div className={classnames(styles.contentImg, styles.bgImg)}>
        <div className={classnames("container",styles.cImg)}>
          <img src={ic_c1}/>
        </div>
      </div>
      <div className={classnames("container",styles.titleImg)}>
        <img src={ic_t2}/>
      </div>
      <div className={classnames(styles.contentImg, styles.bgImg)}>
        <div className={classnames("container",styles.c2Img)}>
          <div className={styles.cImgItem}> <img src={ic_c2_1}/></div>
          <div className={styles.cImgItem}> <img src={ic_c2_2}/></div>
          <div className={styles.cImgItem}> <img src={ic_c2_3}/></div>
          <div className={styles.cImgItem}> <img src={ic_c2_4}/></div>
        </div>
      </div>
      <div className={classnames("container",styles.titleImg)}>
        <img src={ic_t3}/>
      </div>
      <div className={classnames(styles.contentImg, styles.bgImg)}>
        <div className={classnames("container",styles.cImg)}>
          <img src={ic_c3}/>
        </div>
      </div>
    </div>
  )
}

HomePage.title = "习标格"

export default HomePage
