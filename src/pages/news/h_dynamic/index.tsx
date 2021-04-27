/** @format */

import React from "react"
import banner from "../../../assets/news_banner.png"
import {Row,  List} from "antd"
import styles from "./index.scss"
import classnames from "classnames"
import {useHistory, request} from "umi"

const NewsHPage = () => {
  const history = useHistory()

  const listData = [];
  for (let i = 0; i < 10; i++) {
    listData.push({
      title: `这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀这老师讲课绝了，音色绝了，听这声音，再加上铿锵有力的声音，爱了爱了，这课绝妙呀 ${i}`,
      coverImg: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      date:'2021-08-12'
    });
  }
    return (
      <div className={classnames("container", styles._content)}>
        <div className={styles.titleImg}>
          <img src={banner}/>
        </div>
        <section className={styles.s_News}>
          <div className={styles.titleBox}>
            <span className={styles.titleTxt}>热点新闻</span>
          </div>
          <div className={styles.hotList}>
            <Row>
              <div className={styles.h_item} onClick={() => history.push(`../news/detail?id=111`)}>
                <div className={styles.c_Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles.h_title}>我把话撂这儿。这是全平台（注意，我指互联网全平台），讲最好的React课程没有之一（注意，哪怕是违法广告法的情况下）</div>
              </div>
              <div className={styles.h_item}>
                <div className={styles.c_Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles.h_title}>我把话撂这儿。这是全平台（注意，我指互联网全平台），讲最好的React课程没有之一（注意，哪怕是违法广告法的情况下）</div>
              </div>
              <div className={styles.h_item}>
                <div className={styles.c_Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles.h_title}>我把话撂这儿。这是全平台（注意，我指互联网全平台），讲最好的React课程没有之一（注意，哪怕是违法广告法的情况下）</div>
              </div>
              <div className={styles.h_item}>
                <div className={styles.c_Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles.h_title}>我把话撂这儿。这是全平台（注意，我指互联网全平台），讲最好的React课程没有之一（注意，哪怕是违法广告法的情况下）</div>
              </div>
              <div className={styles.h_item}>
                <div className={styles.c_Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles.h_title}>我把话撂这儿。这是全平台（注意，我指互联网全平台），讲最好的React课程没有之一（注意，哪怕是违法广告法的情况下）</div>
              </div>
              <div className={styles.h_item}>
                <div className={styles.c_Img}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
                <div className={styles.h_title}>我把话撂这儿。这是全平台（注意，我指互联网全平台），讲最好的React课程没有之一（注意，哪怕是违法广告法的情况下）</div>
              </div>
            </Row>
          </div>
        </section>
        <section className={styles.s_News}>
          <div className={styles.titleBox}>
            <span className={styles.titleTxt}>全部新闻</span>
          </div>
          <div className={styles.newsList}>
          <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={listData}

              renderItem={item => (
                <List.Item  key={item.title}
                extra={
                 <span>{item.date}</span>}
                >
                  <List.Item.Meta
                      avatar={ <img
                      height={146}
                      alt="logo"
                      src={item.coverImg}
                    />}
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          </div>
        </section>
      </div>
    )
}

NewsHPage.title = "行业动态"

export default NewsHPage
