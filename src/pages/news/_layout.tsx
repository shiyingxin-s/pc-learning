/** @format */

import React, {useState, useEffect} from "react"
import {Tabs} from "antd"
import {history, useLocation} from "umi"
import HDynamic from "./h_dynamic"
import GDynamic from "./g_dynamic"
import styles from "./index.scss"
import classnames from "classnames"
import Detail from './detail'

const {TabPane} = Tabs

const News = () => {
  const location = useLocation()
  const pathname =  location.pathname.split("/").pop()
  const detailParam = location.search?location.search:''
  const path = pathname === 'news'?  'HDynamic': pathname === 'detail'? pathname + detailParam : pathname

  const [tabKey, setTabKey] = useState(path || "HDynamic")

  const onTab = (activeKey: any) => {
    setTabKey(activeKey)
    history.push(`/news/${activeKey}`)
  }

  useEffect(() => {
    onTab(path)
  }, [location.pathname])

  return (
    <div className={classnames("container","news", styles.tabs_box )}>
      {pathname !== 'detail'? (   <Tabs
        onChange={onTab}
        activeKey={tabKey}
        tabBarStyle={{textAlign: "center", color: "#4D453D"}}
        centered
        animated>
        <TabPane tab="行业动态" key="HDynamic">
          <HDynamic />
        </TabPane>
        <TabPane tab="公司动态" key="GDynamic">
          <GDynamic />
        </TabPane>
      </Tabs>): <Detail/>}
    </div>
  )
}

export default News
