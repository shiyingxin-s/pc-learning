/** @format */

import React from "react"
import { useHistory } from "umi"
import classnames from "classnames"
import style from "./index.scss"
import menuList from "@/config/footerMenu"
import API from "@/api"
import {useRequest} from "ahooks"


interface IData {
  title: string,
  path: string,
  img: string,
  avtive: string,
  icon: string,
  children: any[]
}

const Footer = () => {
  const history = useHistory()

  const {data} = useRequest(
    () => API.getContactInfo()
  )
  return (
    <footer className={style._footer}>
      <div className={classnames("container",style.footerColumns)}>
        {
          menuList.map((item: IData) =>{
            return (
              <div className={style.footerColumn} key={item.title}>
                <h2 className={style.textFont}>{item.title}</h2>
              {
                item.title === '联系我们'?
                <>
                  <div className={style.footerItem}  >
                    {'电话：'+ data?.info?.phoneNo}
                  </div>
                  <div className={style.footerItem}  >
                    {'公司：' + data?.info?.introduce}
                  </div>
                  <div className={style.footerItem}  >
                    {'公司地址:' + data?.info?.address}
                  </div>
                </>
                :
                item.children.map(cItem=>{
                  return(
                    <div className={style.footerItem} key={cItem.name}  onClick={() => history.push(`${cItem.path}`)}>
                      {cItem.title}
                    </div>
                  )
                })
              }
            </div>)
          })
        }
      </div>
    </footer>
  )
}

export default Footer
