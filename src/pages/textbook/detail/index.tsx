/** @format */

import React, {useRef} from "react"
import {Modal, Button, Divider} from "antd"
import Draggable from "react-draggable"
import Slider from "react-slick"
import styles from "../index.scss"
import classnames from "classnames"
import {useBoolean} from "ahooks"
import BuyModalBox from "@/components/BuyModalBox"

const TextbookDetailPage = () => {
  const [buyVisible,{toggle: buyEvent}] = useBoolean(false)
  const buyShow = () => {
    buyEvent()
  }

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
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
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
            <div className={classnames("item")}>
              <img src={baseUrl + "/abstract01.jpg"} />
            </div>
            <div className={classnames("item")}>
              <img src={baseUrl + "/abstract02.jpg"} />
            </div>
            <div className={classnames("item")}>
              <img src={baseUrl + "/abstract03.jpg"} />
            </div>
            <div className={classnames("item")}>
              <img src={baseUrl + "/abstract04.jpg"} />
            </div>
          </Slider>
        </div>
        <div className={styles.top_Item,styles.content}>
            <span className={styles.title}>《通用版教材》</span>
            <p className={styles.price}>¥55</p>
            <p className={styles.author}>作者：小小</p>
            <span className={styles.desc}>
              这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简
              这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简
              这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简
              这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简
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
          <div className={styles.con_box} dangerouslySetInnerHTML = {{__html:htmls}}></div>
      </div>
      {buyVisible? <BuyModalBox buyVisible={buyVisible} onBuy={buyShow} />:''}
  </div>
  )
}

// TextbookDetailPage.title = "教材"

export default TextbookDetailPage
