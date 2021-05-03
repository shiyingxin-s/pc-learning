/** @format */

import React from "react"
import {Row,  List} from "antd"
import styles from "./index.scss"
import classnames from "classnames"
import API from "@/api"
import {useRequest} from "ahooks"
import moment from "moment"

const NewsGPage = () => {

  const {data, pagination, loading} = useRequest(
    ({current, pageSize}) =>
      API.getNewsList({
        page: current + '',
        limit: pageSize + '',
        type: '1'
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
        <section className={styles.s_News}>
          <div className={styles.titleBox}>
            <span className={styles.titleTxt}>公司动态</span>
          </div>
          <div className={styles.newsList}>
          <List
              loading={loading}
              itemLayout="vertical"
              size="large"
              pagination={{ pageSize: 3}}
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

NewsGPage.title = "公司动态"

export default NewsGPage
