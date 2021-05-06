/** @format */

import React, {useRef} from "react"
import {Modal, Button, Divider} from "antd"
import Draggable from "react-draggable"
import Slider from "react-slick"
import styles from "../index.scss"
import classnames from "classnames"
import {useBoolean, useRequest} from "ahooks"
import BuyModalBox from "@/components/BuyModalBox"
import API from "@/api"
import {history} from "umi"


const TextbookDetailPage = () => {
  const {query} = history.location
  const [buyVisible,{toggle: buyEvent}] = useBoolean(false)
  const buyShow = () => {
    buyEvent()
  }

  const {data} = useRequest(
    () =>
      API.getTextbookDetail({
        id: query.id
      })
  )

  const htmls = '<div>3213213<span>54654</span></div>'
  // const slider = useRef<any>(null)
  // const data = [
  //   {
  //     targetId: 1,
  //     typeTitle: `这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀 ${i}`,
  //     imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  //     date:'2021-08-12'
  //   },
  //   {
  //     targetId: 2,
  //     typeTitle: `这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀 ${i}`,
  //     imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  //     date:'2021-08-12'
  //   },
  //   {
  //     targetId: 3,
  //     typeTitle: `这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀 ${i}`,
  //     imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  //     date:'2021-08-12'
  //   },
  // ]
  const baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick'
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={data?.grade?.pictures[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={classnames("container","textbookDtail",styles._detail)}>
      <div className={styles.top_box}>
        <div className={styles.top_Item}>
          <Slider {...settings}>
            {data?.grade?.pictures.map((item)=>{
              return(
                <div key={item} className={classnames("item")}>
                <img src={item} />
                </div>
              )
            })
           }
          </Slider>
        </div>
        <div className={styles.top_Item,styles.content}>
            <span className={styles.title}>{data?.grade?.gradename}</span>
            <p className={styles.price}>¥{data?.grade?.price}</p>
            <p className={styles.author}>作者：{data?.grade?.author}</p>
            <span className={styles.desc}>
              {data?.grade?.introduction}
            </span>
          <Button type="primary" className={classnames('textbook_buy_btn')} onClick={() =>buyEvent(true)}>
            购买
          </Button>
        </div>
      </div>
      <div className={styles.conInfo}>
          <div className={styles.division}>
            <Divider plain>详细信息</Divider>
          </div>
          <div className={classnames("html_con",styles.con_box) } dangerouslySetInnerHTML = {{__html:data?.grade?.detail}}></div>
      </div>
      {buyVisible? <BuyModalBox buyVisible={buyVisible} onBuy={buyShow} />:''}
  </div>
  )
}

// TextbookDetailPage.title = "教材"

export default TextbookDetailPage
