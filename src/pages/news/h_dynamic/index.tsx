/** @format */

import React from "react"
import banner from "../../../assets/news_banner.png"
import {Row,  List} from "antd"
import styles from "./index.scss"
import classnames from "classnames"
import {useHistory} from "umi"
import moment from "moment"
import API from "@/api"
import {useRequest} from "ahooks"

const NewsHPage = () => {
  const history = useHistory()

  const {data, pagination, loading} = useRequest(
    ({current, pageSize}) =>
      API.getNewsList({
        page: current + '',
        limit: pageSize + '',
        type: '0'
      }),
    {
      paginated: true,
      formatResult: (response) => {
        return {
          list: response.code === 0 ? response?.page?.list : [],
          total: response.code === 0 ? response?.page?.totalCount : 0
        }
      }
    }
  )
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
              loading={loading}
              itemLayout="vertical"
              size="large"
              pagination={{...(pagination as any),  pageSize: 3}}
              dataSource={data?.list}
              renderItem={item => (
                <List.Item  key={item.title}
                extra={
                 <span>{moment(item.lmtime).format("YYYY-MM-DD")}</span>}
                >
                  <List.Item.Meta
                      avatar={ <img
                      height={146}
                      alt="logo"
                      src={item.images}
                    />}
                    title=
                    {
                      <div className={styles.content}>
                        <div>{item.title}</div>
                        <span>{item.contenttext}</span>
                      </div>
                    }
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
