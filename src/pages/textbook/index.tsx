/** @format */

import React, {useEffect}from "react"
import {Row} from "antd"
import styles from "./index.scss"
import classnames from "classnames"
import {useBoolean} from "ahooks"
import {useHistory} from "umi"
import BuyModalBox from "@/components/BuyModalBox"
import API from "@/api"
import {useRequest} from "ahooks"

const TextbookPage = () => {
  const [buyVisible,{toggle: buyEvent}] = useBoolean(false)
  const buyShow = () => {
    buyEvent()
  }
  const history = useHistory()

  const {data,run: runFun} = useRequest(
    () => API.getCalligraphyList(
      {
        page: 1 + '',
        versionType: '2',
        limit:'1000'
      }),
    {
      manual: true,
    }
  )
  useEffect(() => {
    runFun()
  }, [])
  return (
    <div className={classnames("container",styles._content)}>
      <div className={styles._list}>
        <Row>
          {data?.page?.list.map((item)=>{
            return (
              <div className={styles._item} onClick={() => history.push(`/textbook/detail?id=`+ item.gradeno)}>
                <div className={styles._Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles._bottom}>
                  <span style={{lineHeight:'30px',fontSize:'18px',width: '186px',
                    display: 'inline-block'}}>{item.gradename}</span>
                  <span className={styles._buyBtn} onClick={(e) =>buyEvent(e.stopPropagation(),true)}>
                    <i className={classnames("iconfont",'icongouwuche')} />
                    <span className={styles._buyText}>购买</span>
                  </span>
                </div>
              </div>
            )
          })}
        </Row>
        {buyVisible? <BuyModalBox buyVisible={buyVisible} onBuy={buyShow} />:''}
      </div>
  </div>
  )
}

TextbookPage.title = "教材"

export default TextbookPage
