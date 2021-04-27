/** @format */

import React from "react"
import {Row, Modal} from "antd"
import styles from "./index.scss"
import classnames from "classnames"
import Draggable from "react-draggable"
import {useBoolean} from "ahooks"
import {useHistory, request} from "umi"
import BuyModalBox from "@/components/BuyModalBox"

const TextbookPage = () => {
  const [buyVisible,{toggle: buyEvent}] = useBoolean(false)
  const buyShow = () => {
    buyEvent()
  }
  const history = useHistory()

  return (
    <div className={classnames("container",styles._content)}>
      <div className={styles._list}>
        <Row>
          <div className={styles._item} onClick={() => history.push(`/textbook/detail?id=1`)}>
            <div className={styles._Img}>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </div>
            <div className={styles._bottom}>
              <span >通用版教材</span>
              <span className={styles._buyBtn} onClick={(e) =>buyEvent(e.stopPropagation(),true)}>
                <i className={classnames("iconfont",'icongouwuche')} />
                <span className={styles._buyText}>购买</span>
              </span>
            </div>
          </div>
          <div className={styles._item} onClick={() => history.push(`/textbook/detail?id=1`)}>
            <div className={styles._Img}>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </div>
            <div className={styles._bottom}>
              <span >通用版教材</span>
              <span className={styles._buyBtn} onClick={(e) =>buyEvent(e.stopPropagation(),true)}>
                <i className={classnames("iconfont",'icongouwuche')} />
                <span className={styles._buyText}>购买</span>
              </span>
            </div>
          </div>
          <div className={styles._item}>
            <div className={styles._Img}>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </div>
            <div className={styles._bottom}>
              <span >通用版教材</span>
              <span className={styles._buyBtn} onClick={(e) =>buyEvent(e.stopPropagation(),true)}>
                <i className={classnames("iconfont",'icongouwuche')} />
                <span className={styles._buyText}>购买</span>
              </span>
            </div>
          </div>
        </Row>
        {buyVisible? <BuyModalBox buyVisible={buyVisible} onBuy={buyShow} />:''}
      </div>
  </div>
  )
}

TextbookPage.title = "教材"

export default TextbookPage
