/** @format */

import React from "react"
import banner from "../../../assets/news_banner.png"
import {Row,  List} from "antd"
import styles from "./index.scss"
import classnames from "classnames"

const NewsGPage = () => {
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
        <section className={styles.s_News}>
          <div className={styles.titleBox}>
            <span className={styles.titleTxt}>公司动态</span>
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

NewsGPage.title = "公司动态"

export default NewsGPage
